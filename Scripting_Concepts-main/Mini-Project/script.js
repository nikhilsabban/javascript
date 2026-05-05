/**
 * Expense Tracker Logic
 * Demonstrates: Variables, Functions, Arrays, Objects, Loops, 
 * Conditions, Event Handling, Exception Handling, DOM Manipulation,
 * and LocalStorage.
 */

// 1. Initial Setup & State
console.log("Expense Tracker Initialized...");

// State: Array of transaction objects
// Load from localStorage or start empty
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// DOM Elements
const balanceEl = document.getElementById('balance-amount');
const incomeEl = document.getElementById('total-income');
const expenseEl = document.getElementById('total-expense');
const listEl = document.getElementById('transaction-list');
const form = document.getElementById('transaction-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const typeInput = document.getElementById('type');
const categoryInput = document.getElementById('category');
const dateInput = document.getElementById('date');
const editIdInput = document.getElementById('edit-id');
const addBtn = document.getElementById('add-btn');
const resetBtn = document.getElementById('reset-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const notificationEl = document.getElementById('notification');

// Progress Elements
const progressEl = document.getElementById('expense-progress');
const vizTextEl = document.getElementById('viz-text');

// Set default date to today
dateInput.valueAsDate = new Date();

// Current filter state
let currentFilter = 'all';

// 2. Core Functions

/**
 * Validates and adds/updates a transaction
 */
function addTransaction(e) {
    e.preventDefault();

    // Reset styles
    descriptionInput.classList.remove('error');
    amountInput.classList.remove('error');

    try {
        const description = descriptionInput.value.trim();
        const amountValue = amountInput.value.trim();
        const amount = parseFloat(amountValue);
        const type = typeInput.value;
        const category = categoryInput.value;
        const date = dateInput.value;
        const editId = editIdInput.value;

        // 1. Validation
        if (!description || !amountValue || !date) {
            if (!description) descriptionInput.classList.add('error');
            if (!amountValue) amountInput.classList.add('error');
            if (!date) dateInput.classList.add('error');
            throw new Error("Please fill in all fields.");
        }

        if (isNaN(amount) || amount <= 0) {
            amountInput.classList.add('error');
            throw new Error("Please enter a valid positive amount.");
        }

        // --- NEW: Balance Sufficiency Check ---
        // Calculate current balance (excluding the one being edited)
        let currentBalance = transactions.reduce((acc, t) => {
            if (editId && t.id === parseInt(editId)) return acc; // Ignore the current item if editing
            return t.type === 'income' ? acc + t.amount : acc - t.amount;
        }, 0);

        // Check if the new transaction would make balance negative
        const potentialBalance = type === 'income' ? currentBalance + amount : currentBalance - amount;

        if (potentialBalance < 0) {
            amountInput.classList.add('error');
            throw new Error("balance is insufficient");
        }
        // ---------------------------------------

        if (editId) {
            // Update existing
            const index = transactions.findIndex(t => t.id === parseInt(editId));
            if (index !== -1) {
                transactions[index] = { 
                    ...transactions[index], 
                    description, amount, type, category, date 
                };
            }
            editIdInput.value = '';
            addBtn.innerText = 'Add Transaction';
            addBtn.classList.remove('update-mode');
        } else {
            // Add new
            const transaction = {
                id: generateID(),
                description,
                amount,
                type,
                category,
                date
            };
            transactions.push(transaction);
        }

        // PERSIST & REFRESH
        updateApp();
        
        // CLEAR FORM COMPLETELY
        descriptionInput.value = '';
        amountInput.value = '';
        dateInput.valueAsDate = new Date();

    } catch (error) {
        showNotification(error.message);
    }
}

/**
 * Shows a custom UI notification
 */
function showNotification(message) {
    notificationEl.innerText = message;
    notificationEl.classList.add('show');
    
    // Hide after 3 seconds
    setTimeout(() => {
        notificationEl.classList.remove('show');
    }, 3000);
}

/**
 * Prepares the form for editing
 */
window.editTransaction = function(id) {
    const transaction = transactions.find(t => t.id === id);
    if (!transaction) return;

    descriptionInput.value = transaction.description;
    amountInput.value = transaction.amount;
    typeInput.value = transaction.type;
    categoryInput.value = transaction.category;
    dateInput.value = transaction.date;
    editIdInput.value = transaction.id;

    addBtn.innerText = 'Update Transaction';
    addBtn.classList.add('update-mode');
    form.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Deletes a transaction by ID
 */
window.deleteTransaction = function(id) {
    if (confirm("Are you sure you want to delete this?")) {
        transactions = transactions.filter(t => t.id !== id);
        updateApp();
    }
}

/**
 * Resets all transactions and balance
 */
window.resetAll = function() {
    if (confirm("RESET EVERYTHING? This will clear your entire history and balance.")) {
        transactions = [];
        updateApp();
        showNotification("All data has been reset.");
    }
}

/**
 * Updates the summary and visualization
 */
function updateSummary() {
    const income = transactions
        .filter(item => item.type === 'income')
        .reduce((acc, item) => (acc += item.amount), 0);

    const expense = transactions
        .filter(item => item.type === 'expense')
        .reduce((acc, item) => (acc += item.amount), 0);

    const total = (income - expense).toFixed(2);

    balanceEl.innerText = `₹${total}`;
    incomeEl.innerText = `+₹${income.toFixed(2)}`;
    expenseEl.innerText = `-₹${expense.toFixed(2)}`;

    if (income > 0) {
        const percentage = Math.min((expense / income) * 100, 100);
        progressEl.style.width = `${percentage}%`;
        vizTextEl.innerText = `Expense is ${percentage.toFixed(0)}% of Income`;
        if (percentage > 80) progressEl.style.background = '#ef4444';
        else progressEl.style.background = '#6366f1';
    } else {
        progressEl.style.width = '0%';
        vizTextEl.innerText = 'Add income to see budget stats';
    }
}

/**
 * Renders the transaction history list
 */
function renderList() {
    listEl.innerHTML = '';

    const filtered = transactions.filter(t => {
        if (currentFilter === 'all') return true;
        return t.type === currentFilter;
    });

    if (filtered.length === 0) {
        listEl.innerHTML = `<li class="empty-state">${currentFilter === 'all' ? 'No transactions yet.' : 'No ' + currentFilter + 's found.'}</li>`;
        return;
    }

    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    filtered.forEach(transaction => {
        const sign = transaction.type === 'income' ? '+' : '-';
        const item = document.createElement('li');
        const category = transaction.category || '✨ Other';

        item.classList.add('transaction-item', transaction.type);

        item.innerHTML = `
            <div class="item-left-group">
                <span class="item-icon">${category.split(' ')[0]}</span>
                <div class="item-info">
                    <span class="item-desc">${transaction.description}</span>
                    <span class="item-date">${transaction.date || 'No Date'}</span>
                </div>
            </div>
            <div class="item-right">
                <span class="item-amount">${sign}₹${transaction.amount.toFixed(2)}</span>
                <div class="action-btns">
                    <button class="edit-btn" onclick="editTransaction(${transaction.id})">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    </button>
                    <button class="delete-btn" onclick="deleteTransaction(${transaction.id})">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                    </button>
                </div>
            </div>
        `;

        listEl.appendChild(item);
    });
}

/**
 * Helper to generate unique ID
 */
function generateID() {
    return Date.now() + Math.floor(Math.random() * 100);
}

/**
 * Persists data and refreshes UI
 */
function updateApp() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
    updateSummary();
    renderList();
}

// 3. Event Listeners
form.addEventListener('submit', addTransaction);
resetBtn.addEventListener('click', () => window.resetAll());

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderList();
    });
});

updateApp();

updateApp();

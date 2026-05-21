"use strict";
let contacts = [];
let choice;
do {
    choice = prompt("Contact Management System \n" +
        "1.Add Contact \n" +
        "2.Display Contact \n" +
        "3.Search Contact \n" +
        "4.Delete Contact \n" +
        "5.End Program.\n" +
        "Enter Your Choice:");
    switch (choice) {
        case "1":
            let name = prompt("Enter your name:");
            let phone = prompt("Enter your phone");
            contacts.push({
                name: name,
                phone: phone
            });
            alert("Contact added");
            break;
        case "2":
            let result = "Contact List \n";
            for (let contact of contacts) {
                result += contact.name + " -" + contact.phone + "\n";
            }
            alert(result);
            break;
        case "3":
            let searchName = prompt("Enter name to search contact");
            let found = false;
            for (let contact of contacts) {
                if (contact.name === searchName) {
                    alert("Found: " + contact.name + "-" + contact.phone);
                    found = true;
                    break;
                }
            }
            if (!found) {
                alert("contact is not found");
            }
        case "4":
            let deletename = prompt("Enter name to delete: ");
            contacts = contacts.filter(contact => contact.name != deletename);
            alert("Contact deleted.");
            break;
        case "5":
            alert("Program Ended.");
            break;
        default:
            alert("Invalid choice.");
    }
} while (choice != "5");

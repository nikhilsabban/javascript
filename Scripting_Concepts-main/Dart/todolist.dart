import 'dart:io';

void main() {
  List<String> tasks = [];
  bool running = true;

  while (running) {
    print("\n--- TO DO LIST ---");
    print("1. Add Task");
    print("2. View Tasks");
    print("3. Remove Task");
    print("4. Exit");
    stdout.write("Enter your choice: ");

    String? choice = stdin.readLineSync();

    switch (choice) {
      case '1':
        stdout.write("Enter task: ");
        String? task = stdin.readLineSync();
        if (task != null && task.isNotEmpty) {
          tasks.add(task);
          print("Task added!");
        }
        break;

      case '2':
        print("\nYour Tasks:");
        if (tasks.isEmpty) {
          print("No tasks available.");
        } else {
          for (int i = 0; i < tasks.length; i++) {
            print("${i + 1}. ${tasks[i]}");
          }
        }
        break;

      case '3':
        stdout.write("Enter task number to remove: ");
        String? indexInput = stdin.readLineSync();
        int? index = int.tryParse(indexInput ?? "");

        if (index != null && index > 0 && index <= tasks.length) {
          tasks.removeAt(index - 1);
          print("Task removed!");
        } else {
          print("Invalid task number.");
        }
        break;

      case '4':
        running = false;
        print("Goodbye!");
        break;

      default:
        print("Invalid choice.");
    }
  }
}
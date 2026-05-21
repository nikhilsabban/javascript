// 3.  Create an Employee class with employee name and salary. Use a 
// control statement to display "High Salary" if salary > 50000, otherwise 
// "Normal Salary".

import 'dart:io';

class employee{

  double salary;
  String name;

  employee(this.name,this.salary);

  void checkSalary()
  {
    if (salary > 50000)
    {
      print("Salary is high");
    }
    else{
      print("Normal salary");
    }
  }
}

void main()
{
  print("Enter Your Name:");
  String name=stdin.readLineSync()!;

  print("Enter salary:");
  double salary = double.parse(stdin.readLineSync()!);

  employee emp=employee(name, salary);

  emp.checkSalary();


}
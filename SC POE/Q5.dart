// 5.  Create a Student class in Dart that stores student name and marks of 
// three subjects. Use if-else control statements to calculate the total, 
// average, and grade of the student. 

import 'dart:io';
class student{

    String name;
    double m1,m2,m3;

    student(this.name,this.m1,this.m2,this.m3);

    void result(){

      double total = m1+m2+m3;
      double average = total/3;

      if(average >= 75)
      {
        print("Grade A");
      }
      else if(average >=60)
      {
        print("Grade B");
      }
      else{
        print("Grade c");
      }
    }
}

void main()
{

  String name;
  double m1,m2,m3;

  print("Enter your name:");
  name = stdin.readLineSync()!;

  print("Enter your mark1:");
  m1=double.parse(stdin.readLineSync()!);

  print("Enter your mark2:");
  m2=double.parse(stdin.readLineSync()!);

  print("Enter your mark3:");
  m3=double.parse(stdin.readLineSync()!);

  student s1=student(name, m1, m2, m3);

  s1.result();

}
// 1.  Create a Dart class that stores student attendance percentage and uses 
// if-else control statements to display: 
// Eligible for Exam if attendance ≥ 75% 
// Not Eligible if attendance < 75% 

import 'dart:io';

class Student{

    double attendence;

    Student(this.attendence);

    void CheckEligibility()
    {
      if (attendence >= 75)
      {
        print("You are eligible for exam ");
      }
      else{
        print("You are not eligible");
      }
    }
}

void main()
{

  print("Enter your attendence percentage....");
  double attendence =  double.parse(stdin.readLineSync()!);

  Student s1 = Student(attendence);
  s1.CheckEligibility();
  
}
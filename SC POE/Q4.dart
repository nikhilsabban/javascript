// 4.  Write a Dart program using a class that takes a number as input and 
// prints its multiplication table using a for loop. 

import 'dart:io';

class Table{

  int n;
  Table(this.n);

  void printTable()
  {
    for(int i=0;i<=10;i++)
    {
      print("$n x $i = ${n*i}");
    }
  }
}

void main()
{
  print("Enter number to print table");
  int n = int.parse(stdin.readLineSync()!);

  Table t = Table(n);

  t.printTable();
}
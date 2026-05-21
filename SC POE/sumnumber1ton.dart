// 2.  Create a Dart class that calculates the sum of numbers from 1 to N 
// using a loop and displays the result using an object. 

import 'dart:io';

class SumNatural{

  int n;

  SumNatural(this.n);

  void CalculateSum()
  {
    int sum=0;
    for(int i=1;i<=n;i++)
    {
        sum = sum+i;
    }

    print("Sum:${sum}");
  }

}

void main()
{
  print("Enter a number");
  int n= int.parse(stdin.readLineSync()!);

  SumNatural sum=SumNatural(n);

  sum.CalculateSum();
}
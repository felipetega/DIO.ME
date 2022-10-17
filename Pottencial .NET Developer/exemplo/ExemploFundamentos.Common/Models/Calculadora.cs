using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExemploFundamentos.Common.Models
{
  public class Calculadora
  {
    public void Somar(int a, int b)
    {
      Console.WriteLine($"A soma de {a} e {b} é igual a {a + b}");
    }

    public void Subtrair(int a, int b)
    {
      Console.WriteLine($"A subtração de {a} e {b} é igual a {a - b}");
    }

    public void Multiplicar(int a, int b)
    {
      Console.WriteLine($"A multiplicação de {a} e {b} é igual a {a * b}");
    }

    public void Dividir(int a, int b)
    {
      Console.WriteLine($"A divisão de {a} e {b} é igual a {a / b}");
    }

    public void Potencia(int a, int b)
    {
      double pot = Math.Pow(a, b);
      Console.WriteLine($"A potência de {a} e {b} é igual a {pot}");
    }

    public void Seno(double angulo)
    {
      double radiano = angulo * Math.PI / 180;
      double seno = Math.Sin(radiano);
      Console.WriteLine($"Seno de {angulo}° = {Math.Round(seno)}");
    }

    public void Cosseno(double angulo)
    {
      double radiano = angulo * Math.PI / 180;
      double cosseno = Math.Cos(radiano);
      Console.WriteLine($"Cosseno de {angulo}° = {Math.Round(cosseno)}");
    }

    public void Tangente(double angulo)
    {
      double radiano = angulo * Math.PI / 180;
      double tangente = Math.Tan(radiano);
      Console.WriteLine($"Tangente de {angulo}° = {Math.Round(tangente)}");
    }
  }
}
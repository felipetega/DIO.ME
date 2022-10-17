using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExemploFundamentos.Common.Models
{
  public class Data
  {
    DateTime dataAtual = DateTime.Now;

    DateTime daquiUmaSemana = DateTime.Now.AddDays(7);

    public void ApresentarData()
    {
      Console.WriteLine($"{dataAtual.ToString("dd/MM/yyyy HH:mm")} - {daquiUmaSemana.ToString("dd/MM/yyyy HH:mm")}");
    }
  }
}
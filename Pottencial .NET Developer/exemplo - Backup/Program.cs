using exemplo.Models;

Pessoa pessoa1 = new Pessoa();

pessoa1.Nome = "Felipe";
pessoa1.Idade = 21;
pessoa1.Apresentar();

Data data = new Data();

data.ApresentarData();

Calculadora calc = new Calculadora();

calc.Somar(20, 10);
calc.Subtrair(20, 10);
calc.Multiplicar(20, 10);
calc.Dividir(20, 10);
calc.Potencia(2, 10);
calc.Seno(45);
calc.Cosseno(45);
calc.Tangente(45);
function calculaIdade(pessoa,anos) {
  let{nome,idade}=pessoa
	return `Daqui a ${anos} anos, ${nome} terá ${idade + anos} anos de idade.`;
}

const pessoa1 = {
	nome: 'Amelia',
	idade: 23,
};

const pessoa2 = {
	nome: 'Márcia',
	idade: 20,
};

const pessoa3 = {
	nome: 'Jonas',
	idade: 13,
};

console.log(calculaIdade(pessoa3, 40));
console.log(calculaIdade(pessoa2, 24));
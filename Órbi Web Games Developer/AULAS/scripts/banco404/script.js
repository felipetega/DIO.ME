class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo=valor;
    }
    sacar(valor){
        if(valor > this._saldo){
            return "Operação negada"
        }
        this._saldo=this._saldo-valor;

        return this._saldo;
    }
    depositar(valor){
        this._saldo=this._saldo+valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, saldo, cartaoCredito){
    super(agencia, numero, saldo, cartaoCredito);
    this.tipo = "corrente";
    this.cartaoCredito= cartaoCredito;
}

get cartaoCredito(){
    return this._cartaoCredito;
}

set cartaoCredito(valor){
    this.cartaoCredito = valor;
}
}

class ContaPoupança extends ContaBancaria{
    constructor(agencia, numero, saldo){
    super(agencia, numero, saldo);
    this.tipo = "corrente";
}

}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, saldo){
    super(agencia, numero, saldo);
    this.tipo = "corrente";
}
    sacar(valor){
        if (valor>500){
            return "Operação Negada"
        }

        this._saldo = this._saldo-valor;
    }
}
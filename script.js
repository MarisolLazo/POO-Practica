class CuentaBancaria {
    constructor(titular, saldo, numerocuenta) {
        this.titular = titular
        this.saldo = saldo
        this.numerocuenta = numerocuenta
    }
    set Titular(titular) {
        return this.titular = titular;
    }
    set Saldo(saldo) {
        return this.saldo = saldo;
    }
    get Titular() {
        return this.titular;
    }
    get Saldo() {
        return this.saldo;
    }

    retiro(cantidad) {
        if(cantidad> this.saldo){
            return "Saldo insuficiente $" + this.saldo
        }else{
            return "Retiro con exito $" + (this.saldo= this.saldo- cantidad)
        }
        
    }

    deposito(cantidad) {
       return "Su saldo actual es $" + (this.saldo = this.saldo+cantidad)
}
}
const cliente=new CuentaBancaria("Patricia",0,"0000-2")
const btnRetiro = document.getElementById("btnRetiro")
const cuenta = new CuentaBancaria("Sol Lazo", 1000, "123456789");
const btnAbono = document.getElementById("btnAbono")
btnRetiro.addEventListener("click", () => {
    const cantidad = document.getElementById("cantidad").value
    const montoActual= document.getElementById("montoActual")
    montoActual.innerText=cliente.retiro(cantidad)
})

btnAbono.addEventListener("click",() =>{
    const cantidad=parseFloat(document.getElementById("cantidad").value)

    const montoActual=document.getElementById("montoActual")
    montoActual.innerText=cliente.deposito(cantidad)
})

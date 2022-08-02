let cuenta ={
    titular: "Alex",
    saldo: 0,
    ingresar(montoIngresar){ // toda la logica para ingresar dinero
this.saldo += montoIngresar 

    },
    extraer(montoExtraer){ //toda logica para extraer dinero
if(this.saldo >= montoExtraer){
    this.saldo -= montoExtraer;
}else{
    alert("Fondos Insufucientes");
}
    },
    informar(){
document.write(`<p>La cuenta del usuario ${this.titular} contiene un saldo de $${this.saldo} </p>`)
    }
}

//invocar metodo informar

cuenta.informar();

let deposito = parseFloat(prompt("Ingrese un monto a depositar"));
cuenta.ingresar(deposito);

cuenta.informar();

let extraccion = parseFloat(prompt("Ingrese un monto a extraer"));
cuenta.extraer(extraccion);

cuenta.informar();


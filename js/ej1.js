let auto = {
    marca: 'Ford',
    color: 'Blanco',
    modelo: 'Fiesta',
    estado: {
        encendido: true,
        apagado: true,
    },
    
    encender: ()=>{ document.write(`<p>Para enceder el auto verifique que el tanque tenga combustible y gire la llave.. </p>`)},
    apagar: ()=>{document.write(`<p> Para apagar el auto quite la llave </p>`) },
}


document.write(`<p>Marca: ${auto.marca}</p>`)
document.write(`<p>Color: ${auto.color}</p>`)
document.write(`<p>Modelo: ${auto.modelo}</p>`)
document.write(`<p>Estado: ${auto.estado.encendido}</p>`)


auto.encender();
auto.apagar();
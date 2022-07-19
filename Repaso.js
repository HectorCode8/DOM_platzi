function askName() {
    let suma;
    while(suma != '4') {
        let respuesta = prompt('¿Cuánto es 2+2');
        suma = parseInt(respuesta);
    }
    if(suma = '4') {
        alert('¡Bien hecho!');
    }
}

// Arrays

const arr1 = [1, '2', true]
console.log(arr1[2])
console.log(arr1[0])

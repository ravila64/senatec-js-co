const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
};

for (let propiedad in persona) {
    if (persona.hasOwnProperty(propiedad)) {
        console.log(`${propiedad}: ${persona[propiedad]}`);
    }
}
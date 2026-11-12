/*crear objeto etg que no permite acceder directamente a sus propiedades
tipo de centro
nombre completo

haz setter y getter*/

function etg(tipo,nombre){
    let _tipo = tipo;
    let _nombre = nombre;

    return{
        getTipo: () => _tipo,
        getNombre: () => _nombre,
        setTipo: (nuevoTipo) => _tipo = nuevoTipo,
        setNombre: (nuevoNombre) => _nombre = nuevoNombre,
    }
}

const prueba = etg("IES", "Enrique Tierno Galvan");
console.log(prueba.getNombre());
console.log(prueba.getTipo());
prueba.setNombre("Pio Baroja");
console.log(prueba.getNombre());
console.log(prueba._tipo); //undefined



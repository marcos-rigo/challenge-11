
let base = Number( prompt("Ingrese la medida de la base del triángulo"));

let altura = Number (prompt("Ingrese la altura del triángulo"));

let areaTriangulo = (base*altura)/2;

console.log("El área del triángulo es ", areaTriangulo);

document.write(`El área del triángulo es: ${areaTriangulo}` + "<br>");

document.getElementById('areaTriangulo').textContent = areaTriangulo;




let radioCirculo = Number(prompt("Ingrese la medida del radio del círculo"));

let areaCirculo = Math.PI * (Math.pow(radioCirculo,2));

console.log("El área del círculo es ", areaCirculo);

document.write(`El área del círculo es: ${areaCirculo}`);

document.getElementById('areaCirculo').textContent = areaCirculo;
function saludar ( nombre ) {
	let mensaje = `Hola ${ nombre }`;
	return mensaje;
}

let saludo = saludar('Luis Carlos');

console.log(saludo);
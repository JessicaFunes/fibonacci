var usuario=prompt("Escribe el número para obtener la secuencia fibonacci");
var y=0, z=1, x;
	for ( i = 0; i <= usuario; i++){
		x=y + z;
		y=z;
		z=x;
	console.log(x);
	}
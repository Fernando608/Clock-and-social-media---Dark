
window.onload = function () {
	setInterval(updateTime, 1000)
};

function updateTime() {
	const format = number => `${ +!(number < 10) && '' }${number}`;
	
	let date = new Date();
	
	document.querySelector("#hour")  .innerHTML = format( date.getHours()   );
	document.querySelector("#minute").innerHTML = format( date.getMinutes() );
	document.querySelector("#second").innerHTML = format( date.getSeconds() );
	const week = [
		"Domingo", "Lunes", "Martes", "Miércoles",
        "Jueves", "viernes", "Sábado"
	];
	
	document.querySelector("#day").innerHTML = week[ date.getDay() ];

	//Fecha
	document.querySelector("#date").innerHTML = (
		[
			date.getDate(), 
			date.getMonth()+1, 
			date.getFullYear()
		]
			.map(format)
			.join('/')
	);
	

}

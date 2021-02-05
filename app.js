const temperature = (city) => {
	const apiKey = 'a8cf95efb7451a13f4010a4d4befb5d4';
	fetch(
		`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
	)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			if (data.cod === 200) {
				document.querySelector('#cityName').innerText = data.name;
				document.querySelector('#temperature').innerText = (
					data.main.temp - 273.15
				).toFixed(2);
				document.querySelector('#tempType').innerText = data.weather[0].main;
				spinner.classList.add = 'bg-info';
				console.log(spinner.classList);
				spinner.classList.remove = 'd-block';
			} else {
				spinner.classList.remove = 'd-none';
			}
		});
};

const spinner = document.querySelector('#spinner');
document.querySelector('#search__btn').addEventListener('click', () => {
	const city = document.querySelector('#location__input').value;
	temperature(city);
	// console.log(city);
});
// temperature('dhaka');

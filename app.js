const temperature = (city) => {
	const apiKey = 'a8cf95efb7451a13f4010a4d4befb5d4';
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
	)
		.then((res) => res.json())
		.then((data) => {
			if (data.cod === 200) {
				document.querySelector('#cityName').innerText = data.name;
				document.querySelector('#temperature').innerText = (
					data.main.temp - 273.15
				).toFixed(2);
				document.querySelector('#tempType').innerText = data.weather[0].main;
				spin('none');
			} else {
				spin('block');
				// After 2 seconds spinner will die
				setTimeout(() => {
					spin('none');
					alert(`Please Try Again, ${city} is not available`);
				}, 2000);
			}
		});
};

// Spinner
const spin = (type) => {
	const spinner = document.querySelector('#spinner');
	switch (type) {
		case 'block':
			spinner.classList.add('d-block');
			spinner.classList.remove('d-none');
			break;
		case 'none':
			spinner.classList.remove('d-block');
			spinner.classList.add('d-none');
			break;
	}
};
// Call api by click search
const city = document.querySelector('#location__input');
document.querySelector('#search__btn').addEventListener('click', () => {
	spin('block');
	temperature(city.value);
});

// Initial temperature
temperature('dhaka');

// FETCHING SPACE WEATHER DATA
fetch('https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json').then(response => {
    return response.json();
}).then(data => {
    // Work with JSON data here
	var spaceWeather = data[1];
	var kIndex = spaceWeather[1];
    console.log(kIndex);
}).catch(err => {
    // Do something for an error here
    throw err
});

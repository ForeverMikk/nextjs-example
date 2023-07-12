export async function fecthCars() {
    const headers = {
		'X-RapidAPI-Key': '16c10218e3mshae2e6b039d75475p1d6029jsn7c758943cc7d',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();

    return result;   
}
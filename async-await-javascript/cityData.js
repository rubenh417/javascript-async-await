async function getCityData(city) {
  try {
    const url = `https://geocode.xyz/${city}?json=1`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Latitude: ${data.latt}, Longitude: ${data.longt}`);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

async function run() {
  await getCityData("Seattle");
  await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
  await getCityData("New York");
  await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
  await getCityData("London");
}

run();

const citySelect = document.getElementById('city');
const breweries = document.getElementById('brew_list');
const brewSearch = document.getElementById('brew_search');
const searchButton = document.getElementById('search');
const URL = "https://api.openbrewerydb.org/v1/breweries/"

function getCity() {
    const city = citySelect.value.toLowerCase();
    const cityARR = city.split(" ")
    const cityURL = cityARR.join("_")
    return cityURL;
}

async function getBreweries(city) {
    const breweries = await fetch()
}

brewSearch.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target == searchButton) {
    }
})

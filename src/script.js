const countrySelect = document.getElementById('country')
const citySelect = document.getElementById('city')
const breweries = document.getElementById('brew_list')
const brewSearch = document.getElementById('brew_search')

function getCountry() {
    const country = countrySelect.value;
    return country;
}

function getCity() {
    const city = citySelect.value;
    return city;
}
import { getNewBrewery } from "./makeBrewery.js";
// import { makeBreweries } from "./postFunction.js";

const brewSearch = document.getElementById('brew_search');
const citySelect = document.getElementById('city');
const breweries = document.getElementById('brew_list');
const searchButton = document.getElementById('search');
const newBrewData = document.getElementById("add_brew")
const submit = document.getElementById('submit')
export const URL = "https://api.openbrewerydb.org/v1/breweries"

function getCity() {
    const city = citySelect.value.toLowerCase();
    const cityARR = city.split(" ")
    const cityURL = cityARR.join("_")
    return cityURL;
}

async function getBreweries(city, page) {
    const response = await fetch(`${URL}?by_city=${city}&per_page=${page}`)
    try {
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error.message);
    }
}

function displayBreweries(arr) {
    console.log(arr)
    for (let i = 0; i <arr.length; i++) {
        const newSection = document.createElement("section")
        newSection.classList.add("breweries");
        const title = document.createElement('h3')
        title.classList.add('title')
        title.textContent = arr[i].name
        const hr = document.createElement('hr')
        const address = document.createElement('p')

        if (arr[i].address_1 == null){
            address.textContent = `${arr[i].city} ${arr[i].postal_code}`
        } else {
            address.textContent = `${arr[i].address_1}, ${arr[i].city} ${arr[i].postal_code}`
        }

        const phone = document.createElement('p')
        phone.textContent = arr[i].phone
        const link = document.createElement('a')
        link.href = arr[i].website_url
        link.textContent = "Website"
        breweries.appendChild(newSection);
        newSection.appendChild(title)
        newSection.appendChild(hr)
        newSection.appendChild(address)
        newSection.appendChild(link)
        newSection.appendChild(phone)
    }
}

brewSearch.addEventListener('click', async (e) => {
    e.preventDefault();
    if (e.target == searchButton) {
        let city = getCity();
        let breweriesArr = await getBreweries(city, 10);
        breweries.innerHTML = ""
        if (breweriesArr.length == 0) {
            const h1 = document.createElement('h1')
            h1.textContent = "No breweries found for that city."
            h1.style.color = "#BFBDC1"
            breweries.appendChild(h1)
        } else {
            displayBreweries(breweriesArr);
         }
    }
})

newBrewData.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target == submit) {
        const data = getNewBrewery()
        console.log(data);
    }
})

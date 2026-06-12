export function displayBreweries(arr) {
    console.log(arr)
    for (let i = 0; i <arr.length; i++) {
        const newSection = document.createElement("section")
        newSection.classList.add("breweries");
        const title = document.createElement('h3')
        title.classList.add('title')
        title.textContent = arr[i].name
        const hr = document.createElement('hr')
        const address = document.createElement('p')
        address.textContent = `${arr[i].address_1}, ${arr[i].city} ${arr[i].postal_code}`
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
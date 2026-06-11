export function getNewBrewery() {
    
    const title = document.getElementById("add_name")
    const address = document.getElementById("add_address")
    const city = document.getElementById("add_city")
    const postal = document.getElementById("add_postal")
    const website = document.getElementById("add_website")
    const phone = document.getElementById("add_phone")

    const data = {
        name: title.value,
        city: city.value,
        address_1: address.value,
        postal_code: postal.value,
        website_url: website.value,
        phone: phone.value
    }

    return data;
}

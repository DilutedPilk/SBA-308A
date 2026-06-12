import { URL } from "./script"

//This function doesnt work as the API does not allow the POST method. I tried to add it in anyways since I was already too far into the project to change the API.
export async function makeBreweries(data) {
    const response = await fetch(`${URL}?local`,
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
        .then(data => console.log(data))
}
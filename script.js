// Unsplash API 
const count = 10
const apiKey = "API_KEY";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}YOUR_ACCESS_KEY&count=${count}`

// GET PHOTOS from api

async function getphotos() {
    try {
        const response = await fetch(apiUrl)
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // catch error
    }
}

getphotos();
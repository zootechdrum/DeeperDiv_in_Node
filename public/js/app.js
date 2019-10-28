console.log("Client Side Javascript")
let callWeather = (city)=> {
    fetch(`http://localhost:3000/weather?address=${city}`).then((response, reject) => {
        response.json().then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })
    })
}

const weatherForm = document.querySelector('form');

const search = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const city = search.value;

    callWeather(city)
})
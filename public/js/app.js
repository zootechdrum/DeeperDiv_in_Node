console.log("Client Side Javascript")

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
let messageOne = document.querySelector('#message-1')
let messageTwo = document.querySelector('#message-2')

messageOne.textContent = 'From Javascript'


let callWeather = (city)=> {
    console.log(city)
    fetch(`http://localhost:3008/weather?address=${city}`).then((response, reject) => {
        console.log(response)
        response.json().then((data) => {
            console.log(data)
            messageOne.textContent = data.address;
            messageTwo.textContent = data.forcast;
        })
        .catch((err) => {
            console.log(err)
            messageOne.textContent = err
        })
    })
}



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    messageOne.textContent = "Loading..."
    messageTwo.textContent = "";
    
    const city = search.value;


    callWeather(city)
})
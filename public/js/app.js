console.log("Client Side Javascript")

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
let messageOne = document.querySelector('#message-1')
let messageTwo = document.querySelector('#message-2')

messageOne.textContent = 'From Javascript'


let callWeather = (city)=> {
    console.log(city)
    fetch(`http://localhost:3010/weather?address=${city}`).then((response, reject) => {
        response.json().then((data) => {
            console.log(data)
            if( data.error ){
                messageOne.textContent = data.error;    
            }else{
                messageOne.textContent = data.location.place_name;
                messageTwo.textContent = data.forcast;
            }
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
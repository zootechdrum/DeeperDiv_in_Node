console.log("Client Side Javascript")

fetch('http://localhost:3000/weather?address=!').then((response, reject) => {
    response.json().then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })
})

document.querySelector('form')
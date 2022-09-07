// Checking for data provided by the api
fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        console.log(data.results)
        console.log(data.results[0]),
        console.log(data.results[0].name.first),
        console.log(data.results[0].name.last),
        console.log(data.results[0].email),
        console.log(data.results[0].location.city),
        console.log(data.results[0].location.state)
    })
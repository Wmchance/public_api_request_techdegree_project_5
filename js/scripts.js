// Checking for data provided by the api for single user
// fetch('https://randomuser.me/api/')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         console.log(data.results)
//         console.log(data.results[0]),
//         console.log(data.results[0].name.first),
//         console.log(data.results[0].name.last),
//         console.log(data.results[0].email),
//         console.log(data.results[0].location.city),
//         console.log(data.results[0].location.state)
//     })

// To pull needed info for 12 random users from api
// fetch('https://randomuser.me/api/?results=12')
//     .then(res => res.json())
//     .then(data => {
//         // console.log(data)
//         // console.log(data.results)

//         data.results.forEach(element => {
//             // console.log(element),
//             console.log(element.name.first),
//             console.log(element.name.last),
//             console.log(element.email),
//             console.log(element.location.city),
//             console.log(element.location.state),
//             console.log(element.picture.medium)
//         });
//     })
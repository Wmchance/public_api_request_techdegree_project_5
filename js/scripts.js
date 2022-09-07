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

// Base info-card function
function createInfoCard() {
    const galleryDiv = document.getElementById('gallery');
    const cardDiv = document.createElement('div'); //card Div
    cardDiv.classList.add('card');
    galleryDiv.appendChild(cardDiv);
    const imgDiv = document.createElement('div'); //Employee img div
    imgDiv.classList.add('card-img-container');
    const imgLink = document.createElement('img');
    imgLink.classList.add('card-img');
    imgLink.src = 'london-edited.jpg';
    imgLink.alt = 'profile picture';
    imgDiv.appendChild(imgLink);
    cardDiv.appendChild(imgDiv);
    const infoDiv = document.createElement('div'); // Employee info div
    infoDiv.classList.add('card-info-container');
    const idHeader = document.createElement('h3');
    idHeader.id = 'name';
    idHeader.classList.add('card-name', 'cap');
    idHeader.innerText = 'first name last name';
    const emailP = document.createElement('p');
    emailP.classList.add('card-text');
    emailP.innerText = 'email';
    const locationP = document.createElement('p');
    locationP.classList.add('card-text', 'cap');
    locationP.innerText = 'city, state';
    infoDiv.appendChild(idHeader);
    infoDiv.appendChild(emailP);
    infoDiv.appendChild(locationP);
    cardDiv.appendChild(infoDiv);
}
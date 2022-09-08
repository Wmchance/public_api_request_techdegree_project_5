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
// function createInfoCard(element) {
//     const galleryDiv = document.getElementById('gallery');
//     const cardDiv = document.createElement('div'); //card Div
//     cardDiv.classList.add('card');
//     galleryDiv.appendChild(cardDiv);
//     const imgDiv = document.createElement('div'); //Employee img div
//     imgDiv.classList.add('card-img-container');
//     const imgLink = document.createElement('img');
//     imgLink.classList.add('card-img');
//     imgLink.src = 'london-edited.jpg';
//     imgLink.alt = 'profile picture';
//     imgDiv.appendChild(imgLink);
//     cardDiv.appendChild(imgDiv);
//     const infoDiv = document.createElement('div'); // Employee info div
//     infoDiv.classList.add('card-info-container');
//     const idHeader = document.createElement('h3');
//     idHeader.id = 'name';
//     idHeader.classList.add('card-name', 'cap');
//     idHeader.innerText = 'first name last name';
//     const emailP = document.createElement('p');
//     emailP.classList.add('card-text');
//     emailP.innerText = 'email';
//     const locationP = document.createElement('p');
//     locationP.classList.add('card-text', 'cap');
//     locationP.innerText = 'city, state';
//     infoDiv.appendChild(idHeader);
//     infoDiv.appendChild(emailP);
//     infoDiv.appendChild(locationP);
//     cardDiv.appendChild(infoDiv);
// }

const url = 'https://randomuser.me/api/?results=12';

/*
* Takes property values from obj, builds information card, and appends card to gallery div
* @param {obj} obj - contains user information from https://randomuser.me/api/
*/
function createInfoCard(obj) {
    const galleryDiv = document.getElementById('gallery');
    const cardDiv = document.createElement('div'); //Card Div
    cardDiv.classList.add('card');
    galleryDiv.appendChild(cardDiv);
    const imgDiv = document.createElement('div'); //Employee img div
    imgDiv.classList.add('card-img-container');
    const imgLink = document.createElement('img'); //img info
    imgLink.classList.add('card-img');
    imgLink.src = `${obj.picture.large}`;
    imgLink.alt = 'profile picture';
    imgDiv.appendChild(imgLink);
    cardDiv.appendChild(imgDiv);
    const infoDiv = document.createElement('div'); //**Employee info div
    infoDiv.classList.add('card-info-container');
    const idHeader = document.createElement('h3'); //Name info
    idHeader.id = 'name';
    idHeader.classList.add('card-name', 'cap');
    idHeader.innerText = `${obj.name.first} ${obj.name.last}`;
    const emailP = document.createElement('p'); //Email info
    emailP.classList.add('card-text');
    emailP.innerText = `${obj.email}`;
    const locationP = document.createElement('p'); //location info
    locationP.classList.add('card-text', 'cap');
    locationP.innerText = `${obj.location.city}, ${obj.location.state}`;
    infoDiv.appendChild(idHeader);
    infoDiv.appendChild(emailP);
    infoDiv.appendChild(locationP);
    cardDiv.appendChild(infoDiv);
    //Event listener added to each card element
    cardDiv.addEventListener('click', (e) => {
        const modalCards = document.getElementsByClassName('modal-container');
        const modalInfoCon = document.getElementsByClassName('modal-info-container');
        const infoCard = document.getElementsByClassName('card');
        // modalCards[0].style.display = '';
        // console.log(e.target);
        // console.log(e.target.parentElement);
        // console.log(e.target.parentElement.parentElement);
        // for (let i=0; i<modalInfoCon.length; i++) {
        //     console.log(modalInfoCon[i].children[1].textContent);
        // }

        // if(e.target.className === 'card') {
        //     console.log(e.target.children[1].children[0].textContent);
        // }
        // if(e.target.className === 'card-img-container') {
        //     console.log(e.target.nextElementSibling.children[0].textContent);
        // }
        // if(e.target.className === 'card-img') {
        //     console.log(e.target.parentElement.nextElementSibling.children[0].textContent);
        // }
        // if(e.target.className === 'card-info-container') {
        //     console.log(e.target.children[0].textContent);
        // }
        // if(e.target.className === 'card-name cap') {
        //     console.log(e.target.textContent);
        // }
        // if(e.target.className === 'card-text') {
        //     console.log(e.target.previousSibling.textContent);
        // }
        // if(e.target.className === 'card-text cap') {
        //     console.log(e.target.previousSibling.previousSibling.textContent);
        // }

        for(let i=0; i<modalInfoCon.length; i++) {
            if(e.target.className === 'card') {
                if(e.target.children[1].children[0].textContent === modalInfoCon[i].children[1].textContent) {
                    modalCards[i].style.display = '';
                };
            }
            if(e.target.className === 'card-img-container') {
                if(e.target.nextElementSibling.children[0].textContent === modalInfoCon[i].children[1].textContent) {
                    modalCards[i].style.display = '';
                };
            }
            if(e.target.className === 'card-img') {
                if(e.target.parentElement.nextElementSibling.children[0].textContent === modalInfoCon[i].children[1].textContent) {
                    modalCards[i].style.display = '';
                };
            }
            if(e.target.className === 'card-info-container') {
                if(e.target.children[0].textContent === modalInfoCon[i].children[1].textContent) {
                    modalCards[i].style.display = '';
                };
            }
            if(e.target.className === 'card-name cap') {
                if(e.target.textContent === modalInfoCon[i].children[1].textContent) {
                    modalCards[i].style.display = '';
                };
            }
            if(e.target.className === 'card-text') {
                if(e.target.previousSibling.textContent === modalInfoCon[i].children[1].textContent) {
                    modalCards[i].style.display = '';
                };
            }
            if(e.target.className === 'card-text cap') {
                if(e.target.previousSibling.previousSibling.textContent === modalInfoCon[i].children[1].textContent) {
                    modalCards[i].style.display = '';
                };
            }
        }

    })
}

function createModal(obj) {
    const docBody = document.getElementsByTagName("BODY")[0]; //Modal Container div
    const modalContainerDiv = document.createElement('div');
    modalContainerDiv.style.display = 'none'; //Hide modal by default
    modalContainerDiv.classList.add('modal-container');
    docBody.appendChild(modalContainerDiv); 
    const modalDiv = document.createElement('div'); //Modal div
    modalDiv.classList.add('modal');
    modalContainerDiv.appendChild(modalDiv);
    const closeModalBtn = document.createElement('button'); //Close modal button
    closeModalBtn.type = 'button';
    closeModalBtn.id = 'modal-close-btn';
    closeModalBtn.classList.add('modal-close-btn');
    closeModalBtn.innerHTML = `<strong>X</strong>`; 
    modalDiv.appendChild(closeModalBtn);
    //Close btn eventlistener
    closeModalBtn.addEventListener('click', (e) => {
        const modalCards = document.getElementsByClassName('modal-container');
        modalCards[0].style.display = 'none';
    })
    const modalInfoContainer = document.createElement('div'); //**Modal Info Container**
    modalInfoContainer.classList.add('modal-info-container')
    const modalImg = document.createElement('img'); //img element
    modalImg.classList.add('modal-img');
    modalImg.src = `${obj.picture.large}`;
    modalImg.alt = 'profile picture';
    modalInfoContainer.appendChild(modalImg);
    const modalNameHeader = document.createElement('h3'); //Modal Name Header
    modalNameHeader.id = 'name';
    modalNameHeader.classList.add('modal-name', 'cap');
    modalNameHeader.innerText = `${obj.name.first} ${obj.name.last}`;
    modalInfoContainer.appendChild(modalNameHeader);
    const modalEmail = document.createElement('p'); //Modal email p
    modalEmail.classList.add('modal-text');
    modalEmail.innerText = `${obj.email}`;
    modalInfoContainer.appendChild(modalEmail);
    const modalLocation = document.createElement('p') //Modal location p
    modalLocation.classList.add('modal-text', 'cap');
    modalLocation.innerText = `${obj.location.city}`;
    modalInfoContainer.appendChild(modalLocation);
    const breakElement = document.createElement('hr'); //Break element 
    modalInfoContainer.appendChild(breakElement);
    const modalPhoneNumber = document.createElement('p'); //Phone number p
    modalPhoneNumber.classList.add('modal-text');
    modalPhoneNumber.innerText = `${obj.phone}`;
    modalInfoContainer.appendChild(modalPhoneNumber);
    const modalAddress = document.createElement('p'); //Address p
    modalAddress.classList.add('modal-text');
    modalAddress.innerText = `${obj.location.street.number} ${obj.location.street.name}, ${obj.location.city}, ${obj.location.state}, ${obj.location.postcode}`;
    modalInfoContainer.appendChild(modalAddress);
    const modalBirthday = document.createElement('p'); //Birthday p
    modalBirthday.classList.add('modal-text');
    modalBirthday.innerText = `Birthday: ${obj.dob.date}`;
    modalInfoContainer.appendChild(modalBirthday);
    modalDiv.appendChild(modalInfoContainer);
}

/*
* Fetches information obj for 12 random users and calls createInfoCard(obj) on each to display 
* the created user info cards in the gallery div
*/
// fetch('https://randomuser.me/api/?results=12')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.results),
//         data.results.forEach(element => {
//             createInfoCard(element);
//         });
//     })

function fetchUsers(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.results),
            data.results.forEach(element => {
                createInfoCard(element);
            }),
            data.results.forEach(element => {
                createModal(element);
            });
        })
}

fetchUsers(url);

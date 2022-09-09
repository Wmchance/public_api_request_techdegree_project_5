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

const url = 'https://randomuser.me/api/?results=12&nat=us';

// Search function
function createSearchBar() {
    const searchContainer = document.getElementsByClassName('search-container')[0];
    const formElement = document.createElement('form'); //Form Element
    formElement.action = '#';
    formElement.method = 'get';
    const input1 = document.createElement('input'); //Input 1
    input1.type = 'search';
    input1.id = 'search-input';
    input1.class = 'search-input';
    input1.placeholder = 'Search...';
    input1.style.boxShadow = "5px 5px 5px CornflowerBlue";
    const input2 = document.createElement('button'); //Input 2
    input2.type = 'submit';
    input2.style.backgroundColor = 'Lavender';
    input2.style.boxShadow = "5px 5px 5px CornflowerBlue";
    input2.innerHTML = '&#x1F50D;';
    input2.id = 'search-submit';
    input2.class = 'search-submit';
    formElement.appendChild(input1);
    formElement.appendChild(input2);
    searchContainer.appendChild(formElement);
    formElement.addEventListener('submit', (e) => {
        // console.log(input1.value);
        const cardNameCap = document.getElementsByClassName('card-name cap');
        const modalCards = document.getElementsByClassName('modal-container');
        for(let i=0; i<cardNameCap.length; i++) {
            cardNameCap[i].parentElement.parentElement.style.display = 'none';
            if(cardNameCap[i].textContent.toLowerCase().includes(input1.value.toLowerCase())) {
                e.preventDefault();
                cardNameCap[i].parentElement.parentElement.style.display = '';
            } else {
                modalCards[i].classList.remove('selected');
            }
            if(input1.value === '') {
                cardNameCap[i].parentElement.parentElement.style.display = '';
                modalCards[i].classList.add('selected');
            }
        }
    })
}

/*
* Takes property values from obj, builds information card, and appends card to gallery div
* @param {obj} obj - contains user information from https://randomuser.me/api/
*/
function createInfoCard(obj) {
    const galleryDiv = document.getElementById('gallery');
    const cardDiv = document.createElement('div'); //Card Div
    cardDiv.classList.add('card');
    cardDiv.style.boxShadow = "10px 10px 10px CornflowerBlue";
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
    //Event listener added to each card element to bring up modal
    cardDiv.addEventListener('click', (e) => {
        const modalCards = document.getElementsByClassName('modal-container');
        const modalInfoCon = document.getElementsByClassName('modal-info-container');
        //const infoCard = document.getElementsByClassName('card');

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
    modalContainerDiv.classList.add('modal-container', 'selected');
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
        for(let i=0; i<modalCards.length; i++) {
            modalCards[i].style.display = 'none';
        }
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
    const modalPhoneNumber = document.createElement('p'); //Cell phone number p
    modalPhoneNumber.classList.add('modal-text');
    modalPhoneNumber.innerText = `${obj.cell}`;
    modalInfoContainer.appendChild(modalPhoneNumber);
    const modalAddress = document.createElement('p'); //Address p
    modalAddress.classList.add('modal-text');
    modalAddress.innerText = `${obj.location.street.number} ${obj.location.street.name}, ${obj.location.city}, ${obj.location.state}, ${obj.location.postcode}`;
    modalInfoContainer.appendChild(modalAddress);
    const modalBirthday = document.createElement('p'); //Birthday p
    modalBirthday.classList.add('modal-text');
    // modalBirthday.innerText = `Birthday: ${obj.dob.date}`;
    const dob = obj.dob.date;
    const dobNew = `${dob.charAt(5)}${dob.charAt(6)}/${dob.charAt(8)}${dob.charAt(9)}/${dob.charAt(0)}${dob.charAt(1)}${dob.charAt(2)}${dob.charAt(3)}`
    modalBirthday.innerText = `Birthday: ${dobNew}`;
    modalInfoContainer.appendChild(modalBirthday);
    modalDiv.appendChild(modalInfoContainer);
    const modalBtnContainer = document.createElement('div'); //Container for modal search buttons
    modalBtnContainer.classList.add('modal-btn-container');
    const modalPrevBtn = document.createElement('button'); //Modal Prev btn
    modalPrevBtn.type = 'button';
    modalPrevBtn.id = 'modal-prev'; 
    modalPrevBtn.classList.add('modal-prev', 'btn');
    modalPrevBtn.innerText = 'Prev';
    modalPrevBtn.style.backgroundColor = 'Lavender';
    modalPrevBtn.style.boxShadow = "5px 5px 5px CornflowerBlue";
    modalPrevBtn.style.color = 'black';
    const modalNextBtn = document.createElement('button'); //Modal Next btn
    modalNextBtn.type = 'button';
    modalNextBtn.id = 'modal-next'; 
    modalNextBtn.classList.add('modal-next', 'btn');
    modalNextBtn.innerText = 'Next';
    modalNextBtn.style.backgroundColor = 'Lavender';
    modalNextBtn.style.boxShadow = "5px 5px 5px CornflowerBlue";
    modalNextBtn.style.color = 'black';
    modalBtnContainer.appendChild(modalPrevBtn);
    modalBtnContainer.appendChild(modalNextBtn);
    modalContainerDiv.appendChild(modalBtnContainer);
    //Event Listener for 'prev' modal btn
    modalPrevBtn.addEventListener('click', (e) => {
        const modalCards = document.getElementsByClassName('modal-container selected');
        for(let i=0; i<modalCards.length; i++) {
            if(modalCards[i].style.display === '' && i>0) {
                modalCards[i].style.display = 'none';
                modalCards[i-1].style.display = '';
            }
        }
    })
    //Event Listener for 'next' modal btn
    modalNextBtn.addEventListener('click', (e) => {
        const modalCards = document.getElementsByClassName('modal-container selected');
        for(let i=0; i<modalCards.length; i++) {
            if(modalCards[i].style.display === '' && i<modalCards.length-1) {
                modalCards[i].style.display = 'none';
                modalCards[i+1].style.display = '';
                break;
            }
        }
    })
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
            createSearchBar(),
            data.results.forEach(element => {
                createInfoCard(element);
            }),
            data.results.forEach(element => {
                createModal(element);
            });
        })
}

fetchUsers(url);

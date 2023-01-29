let rating;
let numberRating = document.getElementById('span');




function storeNumber(n) {
    rating = n;
}

function changeClass() {
    let firstCard = document.getElementById('first-card');
    let secondCard = document.getElementById('second-card');
    
    if (rating == undefined) {
        alert("Debe elegir una opción de 1 a 5");
    } else {
        numberRating.innerText = rating;
        firstCard.classList.add('disappear');
        secondCard.classList.remove('disappear');
    }
    
}

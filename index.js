function changeMe() {
    let catImage = document.getElementById ('catImage');
    catImage.src = "Fotoram.io (3).jpg";
}

function clickMe() {
    let catNameInput = document.getElementById('catName');
    console.log(catNameInput.value);
}

class Cat {
    constructor(catName, breed, gender, ster, date, feed, comment) {
        this.catName = catName;
        this.breed = breed;
        this.gender = gender;
        this.ster = ster;
        this.date = date;
        this.feed = feed;
        this.comment = comment;
    }

    sendResult() {
        console.log(`Это ${this.name}, он ${this.breed}`);
    }
}

let cat = new Cat();

console.log(sendResult);
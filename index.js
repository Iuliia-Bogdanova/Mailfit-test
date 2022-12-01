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

}

let cat = new Cat();

function getValues() {
  
    let catName = document.getElementById("name").value;
    // и т.д 
  
    const cat1 = new Cat(catName);
    console.log(cat1)
}


const button = document.querySelector(".btn");
button.addEventListener("click", getValues);

console.log(getValues);



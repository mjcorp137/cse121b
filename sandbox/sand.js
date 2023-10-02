/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Victor Jared Onato",

    photo: "images/jared.jpg",

    favoriteFoods : [
        "Ice Cream", 
        "Baked Sushi", 
        "Grilled Chicken", 
        "Korean Barbeque", 
        "Fried Rice"
    ],

    hobbies : [
        "Reading Books",
        "Playing Mobile Games",
        "Writing Short Stories"

    ],

    placesLived : [],


};





/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: "Negros Occidental",
    length: "2 years"
    });

myProfile.placesLived.push({
    place: "Baguio City, Benguet",
    length: "9 years"
});

myProfile.placesLived.push({
    place: "Tagudin, Ilocos Sur",
    length: "16 years"
});



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;


/* Photo with attributes */
document.querySelector('#photo').setAttribute("src",`${myProfile.photo}`);
document.querySelector('#photo').setAttribute("alt", ${myProfile.name});

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});


/* Places Lived DataList */
myProfile.placesLived.forEach(places => {
    let dt = document.createElement('dt');
    dt.textContent = places.place;

    let dd = document.createElement('dd');
    dd.textContent = places.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});
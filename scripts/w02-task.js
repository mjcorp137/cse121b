/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Mahonri Jonathan L. Savedia';
let currentYear = '2023'
let profilePicture = 'images/myPicture.JPG'

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
let imagesElement = document.querySelector("img");

//imagesElement.setAttribute(`src, ${profilePicture}`);


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.innerHTML = `<strong>${currentYear}</strong>`;
imagesElement.setAttribute("src", `${profilePicture}`);
imagesElement.setAttribute("alt", "My Profile Picture");


/* Step 5 - Array */
let favoriteFood = ["Ice Cream", "Fried Chicken", "Adobo", "Korean Barbeque", "Fried Rice"];
foodElement.textContent = favoriteFood;
let anotherFood = "Pizza";
favoriteFood.push(anotherFood);
foodElement.innerHTML += `<br> ${favoriteFood}`;
favoriteFood.shift();
foodElement.innerHTML += `<br> ${favoriteFood}`;
favoriteFood.pop();
foodElement.innerHTML += `<br> ${favoriteFood}`;







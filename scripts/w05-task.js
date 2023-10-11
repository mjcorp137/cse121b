/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = getElementId("div");

var templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) =>{
    temples.forEach(temple => {
        let article = document.createElement("article");

        let templeName = document.createElement("h3");
        templeName.textContent = temple.templeName;

        let img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.location);

        article.appendChild(img);
        article.appendChild(templeName);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    
    templeList = await response.json();
    output(templeList);
  };
  getTemples();

/* reset Function */


/* sortBy Function */



getTemples();

/* Event Listener */

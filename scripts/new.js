/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("div");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => 
{
    temples.forEach(temple => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.innerText = temple.templeName;
        const image = document.createElement("img");
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", temple.location);
        article.appendChild(image);
        article.appendChild(h3);
        templesElement.appendChild(article);
     
        
    });
}



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = response.json();

    displayTemples(templeList);

}


/* reset Function */
function reset() {
    templesElement.article.remove();
}

/* sortBy Function */
function sortby (temples) {
    reset();
    const filter = document.getElementById("sortBy").value;
    switch (filter){
        case "utah":
            displayTemples(temples.filter(temple => temple.location.match("Utah") == "Utah"));
            break;
        case "nonutah":
            displayTemples(temples.filter(temple => temple.location != temple.location.match("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => temple.dedicated))
            break;
        case "all":
            getTemples(); 

    }


}



sortby (temples)
/* Event Listener */
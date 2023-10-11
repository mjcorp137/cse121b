/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');

var templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) =>{
    temples.forEach(temple => {
        let article = document.createElement("article");

        let h3 = document.createElement("h3");
        h3.textContent = temple.templeName;

        let img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.location);

        article.appendChild(img);
        article.appendChild(h3);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch(
        "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
        );

        templeList = await response.json();
        displayTemples(templeList);
  };

/* reset Function */
const reset = () => {
    document.querySelector("#temples").innerHTML = "";
    
  };

/* sortBy Function */
function sortBy (temples) {
    
    reset();

    let filter = document.querySelector("#sortBy").value;
    switch(filter){
        case "utah":
            const utahTemples = temples.filter((temple) =>
                temple.location.toLowerCase().includes('utah')
            );
            
            displayTemples(utahTemples);
            //displayTemples(temples.filter(temple => temple.location.match("Utah") == "Utah"));
            break;
        case "notutah":
            const noUtahTemples = temples.filter((temple) =>
                temple.location.toLowerCase().includes ('nigeria')
            );
            
            displayTemples(noUtahTemples);
        case "older":
            displayTemples(temples.filter(temple => temple.dedicated))
            break;
        case "all":
            getTemples(); 
            break;
    }   
}

document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });
getTemples();

/* Event Listener */

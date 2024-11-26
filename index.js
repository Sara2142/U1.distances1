const mainDiv = document.querySelector("#table")
const cityNameContainer = document.querySelector("#cities")
function createAllCityBoxes(cityName, idName){
    let div = document.createElement("div")
    cityNameContainer.append(div)
    div.className = "cityBox"
    div.id = idName
    div.textContent = cityName
}
for (let cityName of cities){
    createAllCityBoxes(`${cityName.name}`,`${cityName.id}`)
}
function getClosestCity(targetCityObject) {
    let nearCity = null;
    let nearDistance = null; 
    for (let objects of distances) {
        let secondCityId;

        if (objects.city1 == targetCityObject.id) {
            secondCityId = objects.city2;
        } else if (objects.city2 == targetCityObject.id) {
            secondCityId = objects.city1;
        } 
        let secondCityName = null;
        for (let city of cities) {
            if (city.id == secondCityId) {
                secondCityName = city;
                break; 
            }
        }
        if (secondCityName) {
            if (nearDistance == null) {
                nearCity = secondCityName;
                nearDistance = objects.distance;  
            } else if (objects.distance < nearDistance){
                    nearCity = secondCityName;
                    nearDistance = objects.distance;
                
            }
        }
        
    }
    return { city: nearCity, distance: nearDistance };
const closestCity = getClosestCity(cities[16]);
console.log("Closest City:", closestCity.city.name, closestCity.distance);
 function getFurthestCity(targetCityObject) {
    let furthestCity = null;
    let furthestDistance = 0;  

 
    for (let objects of distances) {
        let secondCityId;

        if (objects.city1 == targetCityObject.id) {
            secondCityId = objects.city2;
        } else if (objects.city2 == targetCityObject.id) {
            secondCityId = objects.city1;
        } 


        let secondCityName = null;
        for (let city of cities) {
            if (city.id == secondCityId) {
                secondCityName = city;
                break; 
            }
        }

       
        if (secondCityName) {
            if (objects.distance > furthestDistance) {
                furthestCity = secondCityName;
                furthestDistance = objects.distance;
            }
        }
    }

    return { city: furthestCity, distance: furthestDistance };
    
}

const furthestCity = getFurthestCity(cities[16]);
console.log("Furthest City:", furthestCity.city.name, furthestCity.distance);

function updateBoxDistance(cityObject, kindOfCity) {
    const cityBox = document.getElementById(cityObject.city.id); 
    const cityInMiles = (cityObject.distance / 10)
    const closestSpan = document.getElementById("closest")
    const FurthestSpan = document.getElementById("furthest")
    if (kindOfCity == "target"){
        cityBox.classList.add(kindOfCity); 
    } else {
        cityBox.classList.add(kindOfCity);
        cityBox.id = kindOfCity;  
        cityBox.textContent = `${cityObject.city.name} ligger ${cityInMiles} mil bort`; // Uppdatera texten
    }
    if (kindOfCity == "closest"){
        closestSpan.textContent = closestSpan.textContent = `${cityObject.city.name}`
    } else if (kindOfCity == "furthest"){
        FurthestSpan.textContent = `${cityObject.city.name}`
    }
} 
let cityNamePrompt = prompt ("Stad?")
const h2 = document.querySelector("h2")
const h3 = document.querySelector("h3")
const titlePage = document.querySelector("title")
function getCityByName(cityNamePrompt) {
    for (let city of cities) {
        if (city.name == cityNamePrompt) {
            h2.textContent = `${cityNamePrompt} (${city.country})`;
            titlePage.textContent = `${cityNamePrompt}`
            return city;
        }                  
    } 
    titlePage.textContent = "Not Found"
    h2.textContent = `${cityNamePrompt} finns inte i data basen`;
    h3.textContent = " " 

const targetCity = getCityByName(cityNamePrompt);
if (targetCity) {
    updateBoxDistance({ city: targetCity, distance: 0 }, "target");

    const closestCity = getClosestCity(targetCity);
    const furthestCity = getFurthestCity(targetCity);

    updateBoxDistance(closestCity, "closest");
    updateBoxDistance(furthestCity, "furthest");

   
} 
}

//markCityBox(cities[0], "target");
//markCityBox(cities[1], "closest");
//markCityBox(cities[2], "furthest");

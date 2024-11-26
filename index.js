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
    }
}

//markCityBox(cities[0], "target");
//markCityBox(cities[1], "closest");
//markCityBox(cities[2], "furthest");

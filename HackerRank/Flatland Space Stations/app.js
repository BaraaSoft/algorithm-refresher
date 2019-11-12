
function flatlandSpaceStations(numOfCities, stations) {
    const cites = [...Array(numOfCities).keys()]
    const furtherestCity = cites.map(x => distance(x, stations)).sort((a, b) => a - b).reverse()[0]
    return furtherestCity;
}


const distance = (cty, stations) => {
    let smallestDist = Math.pow(2, 53) - 1;
    for (let x of stations) {
        let dist = Math.abs(x - cty);
        if (dist < smallestDist) {
            smallestDist = dist
        }
    }

    return smallestDist;
}
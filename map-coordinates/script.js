const areas = document.querySelectorAll('map area');
const coordinates = [];
const areaObjects = [];

areas.forEach(area =>  coordinates.push(area.getAttribute('coords').replaceAll(' ', '').replaceAll('\n', '')));
coordinates.forEach((coordinate, index) => {
    let coordinatePairs = [];
    const areaObject = {};

    for(let i = 0; i < coordinate.length; i += 2){ 
        coordinatePairs.push([coordinate[i], coordinate[i + 1]]);
    }
    
    areaObject['id'] = index;
    areaObject['area' + index] = coordinatePairs;
    areaObjects.push(areaObject);
})

console.log(areaObjects);



const coordinates = [];

const getCoordinates = (n = 10) => {
    while (coordinates.length < n + 1) {
        const coord = Math.floor(Math.random() * 45);
        if (coordinates.includes(coord)) continue;
        coordinates.push(coord);
    }
}

console.log(getCoordinates(46));
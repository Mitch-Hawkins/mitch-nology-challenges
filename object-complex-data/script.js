// Object iteration

class Movie {
    constructor(name, director, release, imdbRating, runtime) {
        this.name = name;
        this.director = director;
        this.release = release;
        this.imdbRating = imdbRating;
        this.runtime = runtime;
    }
}

const movie = new Movie("Kill Bill", "Tarantino", 2003, 8.2, "1h51m");

console.log(Object.keys(movie));
console.log(Object.values(movie));
console.log(Object.entries(movie)); //Key+Value

//Validation of Data

const validationObject = {
    // name: (str) => str.constructor.name === 'String' && str.length,
    name: 'String',
    director: 'String',
    release: 'Number',
    imdbRating: 'Number',
    runtime: 'String'
}


console.log(
    Object.entries(movie).reduce((acc, [key, value]) => {
        const typeName = value.constructor.name;
        const expectedType = validationObject[key];

        if (typeName !== expectedType) {
            acc.push(             
                `${key} is expected to be a ${expectedType}, but revcieved a ${typeName} value`);

        }
        return acc;
    }, [])
) // the error log

const translationObject = {
    "a": "4",
    "b": "8",
    "c": "ff",
    "d": "jj"
};

const reversed = Object.entries(translationObject).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {})

// Complex Data -> Array of Objects

const movies = [
    new Movie("Kill Bill", "Tarantino", 2003, 8.2, "1h51m"),
    new Movie("The Incredibles", "Brad Bird", 2004, 8, "1h30m"),
    new Movie("The Princess Bride", "Rob Reiner", 1987, 8, "1h38m")
];

console.log(movies.filter(movie => movie.release >= 2000))

//Get all movies director begins with T

console.log(movies.filter(movie => movie.director.charCodeAt(0) == 84))

//Get the first movie in the list where the name contains "the"

console.log(movies.find(movie => movie.name.includes("The")))

console.log(movies.reduce((acc, movie) => acc + runtimeChange(movie.runtime), 0))

function runtimeChange(str) {
    tmp = str.split(/[hm]/)
    h2s = tmp[0] * 60 * 60
    m2s = tmp[1] * 60
    return h2s + m2s;
}

console.log(movies.reduce((acc, movie) => acc += movie.imdbRating, 0)/movies.length);

console.log(movies.sort(function(a, b){return b.release-a.release})[0]);

console.log(movies.filter((movie) => runtimeChange(movie.runtime) > (90*60)));
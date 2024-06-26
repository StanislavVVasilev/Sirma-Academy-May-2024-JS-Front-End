function moviesStorage(movieArrInfo) {

    let movies = [];

    movieArrInfo.forEach(line => {
        
        if (line.includes("addMovie")) {
            let name = line.split("addMovie ")[1];
            movies.push({ name });

        } else if (line.includes("directedBy")) {
            let [name, director] = line.split(" directedBy ");
            let movie = movies.find(el => el.name === name);

            if (movie) {
                movie.director = director;
            }

        } else if (line.includes("onDate")) {
            let [name, date] = line.split(" onDate ");
            let movie = movies.find(el => el.name === name);

            if (movie) {
                movie.date = date;
            }

        }
    });

    movies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });

};

moviesStorage([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    ' Spinderman 2 onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']
);

moviesStorage([
    'addMovie The Avengers',
    'addMovie Spiderman',
    'The Avengers directedBy Pesho Peshov',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo',
    'The Avengers directedBy Anthony Russo',
]
);
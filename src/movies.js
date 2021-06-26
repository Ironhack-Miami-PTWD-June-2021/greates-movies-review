// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let finalResult = [];

  const directors = moviesArray.map(movie => {
    return movie.director;
  });

  directors.forEach(director => {
    if(!finalResult.includes(director)) {
      finalResult.push(director);
    }
  });

  return finalResult;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const filteredMovies = moviesArray.filter(oneMovie => {
    if(oneMovie.director === 'Steven Spielberg' && oneMovie.genre.includes('Drama')){
      return true;
    } else {
      return false;
    }
  });

  return filteredMovies.length;

  // return moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  // return moviesArray.length > 0 ? Number((moviesArray.reduce((acc, current) => acc += current.score ? current.score : acc, 0) / moviesArray.length).toFixed(2)) : 0;

  if(moviesArray.length === 0) {
    return 0;
  }

  const moviesScoreSummed = moviesArray.reduce((acc, current) => {
    if(current.score) {
      return acc += Number(current.score);
    } else {
      return acc;
    }
  }, 0);

  const moviesScoresAvg = moviesScoreSummed / moviesArray.length;

  const fixedAvg = moviesScoresAvg.toFixed(2);

  return Number(fixedAvg);

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const totalDramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));

  if(moviesArray.length === 0 || totalDramaMovies.length === 0) {
    return 0;
  }

  const moviesScoreSummed = totalDramaMovies.reduce((acc, current) => {
    if(current.score) {
      return acc += Number(current.score);
    } else {
      return acc;
    }
  }, 0);

  const moviesScoresAvg = moviesScoreSummed / totalDramaMovies.length;

  const fixedAvg = moviesScoresAvg.toFixed(2);

  return Number(fixedAvg);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray.map(movie => movie).sort((a, b) => {
    if(a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray.map(movie => movie.title).sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }).filter((title, i) => i < 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}

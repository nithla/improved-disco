const funMovies = document.getElementById('funMovies');
const funPrev = document.getElementById('funPrev');
const funNext = document.getElementById('funNext');
const SCROLL_AMOUNT = 320;
const SCROLL_END_TOLERANCE = 2;

function updateArrows() {
    const { scrollLeft, scrollWidth, clientWidth } = funMovies;

    funPrev.classList.toggle('fun__carousel-arrow--hidden', scrollLeft <= SCROLL_END_TOLERANCE);
    funNext.classList.toggle('fun__carousel-arrow--hidden', scrollLeft + clientWidth >= scrollWidth - SCROLL_END_TOLERANCE);
}

function renderStatus(list, message) {
    list.innerHTML = `<li class="fun__status">${message}</li>`;
    updateArrows();
}

const EMPTY_POSTER = 'https://s.ltrbxd.com/static/img/empty-poster-70-BSf-Pjrh.png';

function renderMovies(movies) {
    const list = document.getElementById('funMovies');

    if (!movies.length) {
        renderStatus(list, 'No favorites found.');
        return;
    }

    list.innerHTML = movies.map((movie) => `
        <li>
            <a href="${movie.url}" target="_blank" rel="noopener noreferrer">
                <img src="${movie.poster || EMPTY_POSTER}" alt="${movie.title}">
                <span>${movie.title}</span>
                ${movie.rating ? `<span class="fun__movies-rating">${'★'.repeat(Math.floor(movie.rating))}${movie.rating % 1 !== 0 ? '½' : ''}</span>` : ''}
            </a>
        </li>
    `).join('');
    updateArrows();
}

const TOP_MOVIES_ENDPOINT = 'https://j6c6jbp3r8.execute-api.ap-southeast-2.amazonaws.com/prod/letterboxdList';

fetch(TOP_MOVIES_ENDPOINT)
    .then((res) => res.json())
    .then((data) => renderMovies(data.movies || []))
    .catch((error) => {
        console.error('[fun] top-movies error', error);
        renderStatus(document.getElementById('funMovies'), 'Couldn\'t load favorites right now.');
    });

funPrev.addEventListener('click', () => {
    funMovies.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
});

funNext.addEventListener('click', () => {
    funMovies.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
});

funMovies.addEventListener('scroll', updateArrows);
window.addEventListener('resize', updateArrows);
updateArrows();

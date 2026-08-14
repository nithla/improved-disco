function renderStatus(list, message) {
    list.innerHTML = `<li class="fun__status">${message}</li>`;
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
}

// Static top-10, derived from a one-off Letterboxd ratings export (not
// checked into this repo). Swap back to the live RSS-based fetch below
// once the diary has enough logged entries to be representative.
const STATIC_TOP_MOVIES = [
    { title: 'The Handmaiden (2016)', url: 'https://letterboxd.com/film/the-handmaiden/', poster: 'https://a.ltrbxd.com/resized/sm/upload/pc/n6/pz/mi/wvzfK5QR6dGLwND8MCzWjsQWG4Q-0-600-0-900-crop.jpg?v=bcfcc8f8f6', rating: 4.5 },
    { title: 'Good Will Hunting (1997)', url: 'https://letterboxd.com/film/good-will-hunting/', poster: 'https://a.ltrbxd.com/resized/film-poster/5/1/6/2/1/51621-good-will-hunting-0-600-0-900-crop.jpg?v=acb4766abd', rating: 4.5 },
    { title: 'Kung Fu Panda (2008)', url: 'https://letterboxd.com/film/kung-fu-panda/', poster: 'https://a.ltrbxd.com/resized/sm/upload/wn/0t/9w/2v/mk3UyyaLyXhgIhmLji25OUPXvGR-0-600-0-900-crop.jpg?v=ad94029f2c', rating: 4.5 },
    { title: 'Spirited Away (2001)', url: 'https://letterboxd.com/film/spirited-away/', poster: 'https://a.ltrbxd.com/resized/film-poster/5/1/9/2/1/51921-spirited-away-0-600-0-900-crop.jpg?v=a3ad463c55', rating: 4.5 },
    { title: 'Portrait of a Lady on Fire (2019)', url: 'https://letterboxd.com/film/portrait-of-a-lady-on-fire/', poster: 'https://a.ltrbxd.com/resized/film-poster/4/6/0/8/3/0/460830-portrait-of-a-lady-on-fire-0-600-0-900-crop.jpg?k=159cbac973', rating: 4.5 },
    { title: 'L.A. Confidential (1997)', url: 'https://letterboxd.com/film/la-confidential/', poster: 'https://a.ltrbxd.com/resized/sm/upload/3n/0w/ax/pt/rIXzJCAvyd3Ci8ipylDQ5wUKqwh-0-600-0-900-crop.jpg?v=40685f4e4e', rating: 4 },
    { title: 'Superman (2025)', url: 'https://letterboxd.com/film/superman-2025/', poster: 'https://a.ltrbxd.com/resized/film-poster/9/5/7/0/5/0/957050-superman-2025-0-600-0-900-crop.jpg?v=54e41a55ff', rating: 4 },
    { title: 'Sinners (2025)', url: 'https://letterboxd.com/film/sinners-2025/', poster: 'https://a.ltrbxd.com/resized/film-poster/1/1/1/6/6/0/0/1116600-sinners-2025-0-600-0-900-crop.jpg?v=529d6b23b0', rating: 4 },
    { title: '2001: A Space Odyssey (1968)', url: 'https://letterboxd.com/film/2001-a-space-odyssey/', poster: 'https://a.ltrbxd.com/resized/sm/upload/fe/jp/49/l9/eDiexVN4nO3ZdDZCDMiJOX5fQ5r-0-600-0-900-crop.jpg?v=ef7fa718a0', rating: 4 },
    { title: 'Before Midnight (2013)', url: 'https://letterboxd.com/film/before-midnight/', poster: 'https://a.ltrbxd.com/resized/film-poster/1/0/2/4/4/4/102444-before-midnight-0-600-0-900-crop.jpg?v=ce6aba20f1', rating: 4 },
];

renderMovies(STATIC_TOP_MOVIES);

// Live RSS-based fetch (via the deployed Lambda + API Gateway route) --
// commented out for now since the RSS feed only reflects diary/reviewed
// entries, not bare star ratings, so it's currently missing most of the
// real top-rated list above. Re-enable once the diary is backfilled.
//
// const TOP_MOVIES_ENDPOINT = 'https://j6c6jbp3r8.execute-api.ap-southeast-2.amazonaws.com/prod/letterboxdList';
//
// fetch(TOP_MOVIES_ENDPOINT)
//     .then((res) => res.json())
//     .then((data) => renderMovies(data.movies || []))
//     .catch((error) => {
//         console.error('[fun] top-movies error', error);
//         renderStatus(document.getElementById('funMovies'), 'Couldn\'t load favorites right now.');
//     });

// TODO: replace with the real API Gateway routes once the Lambdas in
// spotify-top-tracks-lambda.js and letterboxd-favorites-lambda.js are deployed.
const TOP_TRACKS_ENDPOINT = 'https://YOUR-API-GATEWAY-ID.execute-api.ap-southeast-2.amazonaws.com/prod/top-tracks';
const TOP_MOVIES_ENDPOINT = 'https://YOUR-API-GATEWAY-ID.execute-api.ap-southeast-2.amazonaws.com/prod/top-movies';

function renderStatus(list, message) {
    list.innerHTML = `<li class="fun__status">${message}</li>`;
}

function renderMovies(movies) {
    const list = document.getElementById('funMovies');

    if (!movies.length) {
        renderStatus(list, 'No favorites found.');
        return;
    }

    list.innerHTML = movies.map((movie) => `
        <li>
            <a href="${movie.url}" target="_blank" rel="noopener noreferrer">
                <img src="${movie.poster}" alt="${movie.title}">
                <span>${movie.title}</span>
            </a>
        </li>
    `).join('');
}

function renderTracks(tracks) {
    const list = document.getElementById('funTracks');

    if (!tracks.length) {
        renderStatus(list, 'No top tracks found.');
        return;
    }

    list.innerHTML = tracks.map((track) => `
        <li>
            <a href="${track.url}" target="_blank" rel="noopener noreferrer">
                <img src="${track.albumArt}" alt="${track.name}">
                <span>
                    <span class="fun__track-name">${track.name}</span>
                    <span class="fun__track-artist">${track.artist}</span>
                </span>
            </a>
        </li>
    `).join('');
}

fetch(TOP_MOVIES_ENDPOINT)
    .then((res) => res.json())
    .then((data) => renderMovies(data.movies || []))
    .catch(() => renderStatus(document.getElementById('funMovies'), 'Couldn\'t load favorites right now.'));

fetch(TOP_TRACKS_ENDPOINT)
    .then((res) => res.json())
    .then((data) => renderTracks(data.tracks || []))
    .catch(() => renderStatus(document.getElementById('funTracks'), 'Couldn\'t load top tracks right now.'));

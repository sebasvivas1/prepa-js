const searchTerm = document.getElementById("query");
const searchButton = document.getElementById("searchButton");
const resultsElement = document.getElementById("results");

const BASE_URL = `https://deezerdevs-deezer.p.rapidapi.com`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fe64c4766cmsh4d07e75e85606e6p1e4124jsn9757aff5ffb0",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

searchButton.addEventListener("click", async () => {
  const { value } = searchTerm;
  const response = await fetch(`${BASE_URL}/search?q=${value}`, options);
  const data = await response.json();
  // limit results to 6
  const results = data.data.slice(0, 6);
  console.log(results);

  resultsElement.innerHTML = results
    ?.map((result) => {
      const { title } = result;
      const { name, picture_big } = result.artist;
      return `<div class="card">
                <img src="${picture_big}" class="songImage" alt="Song Image" />
                <div class="songInfo">
                    <a class="songTitle" href="${result.link}" target="blank">${title}</a>
                    <h1 class="songArtist">${name}</h1>
                </div>
            </div>
   `;
    })
    .join("");
});

const list = document.getElementById("music-list");
const search = document.getElementById("search");

function afficher(liste) {
  list.innerHTML = "";
  liste.forEach(song => {
    list.innerHTML += `
      <div class="song">
        <h3>${song.title}</h3>
        <p>${song.artist} • ${song.category}</p>
        <iframe src="${song.video}" allowfullscreen></iframe>
      </div>
    `;
  });
}

function filtrer(categorie) {
  if (categorie === "Tous") afficher(songs);
  else afficher(songs.filter(s => s.category === categorie));
}

search.addEventListener("input", e => {
  const v = e.target.value.toLowerCase();
  afficher(
    songs.filter(s =>
      s.title.toLowerCase().includes(v) ||
      s.artist.toLowerCase().includes(v)
    )
  );
});

afficher(songs);

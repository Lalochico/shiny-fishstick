let mapa;
let marcador;

function inicializarMapa() {
    if (!mapa) {
        mapa = L.map('mapa').setView([19.4326, -99.1332], 12); // Ubicación inicial (CDMX)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(mapa);
    }
}

function mostrarMapa(lat, lng) {
    if (!mapa) {
        inicializarMapa();
    }

    mapa.setView([lat, lng], 15);

    // Si ya hay un marcador, lo eliminamos
    if (marcador) {
        mapa.removeLayer(marcador);
    }

    // Agregamos el nuevo marcador
    marcador = L.marker([lat, lng]).addTo(mapa)
        .bindPopup("Ubicación de la propiedad")
        .openPopup();

    document.getElementById("mapa").style.display = "block";
}

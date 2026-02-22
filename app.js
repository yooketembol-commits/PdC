function saluta() {
    alert("Ciao Andrea! La tua PWA funziona.");
}

// Registra il service worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}

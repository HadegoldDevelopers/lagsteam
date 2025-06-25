document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("map").setView([6.5244, 3.3792], 10); // Center Lagos :contentReference[oaicite:3]{index=3}

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  fetch("path/to/lagos-lgas.geojson")
    .then((res) => res.json())
    .then((geojson) => {
      L.geoJSON(geojson, {
        style: {
          color: "#0772ba",
          weight: 1.5,
          fillOpacity: 0.2
        },
        onEachFeature(feature, layer) {
          const name = feature.properties.LGA_NAME || feature.properties.lga;
          layer.bindPopup(`<strong>${name}</strong>`);
          layer.on("click", () => {
            const slug = name.toLowerCase().replace(/\s+/g, "-");
            window.location.href = `lga/${slug}.html`;
          });
        }
      }).addTo(map);

      map.fitBounds(L.geoJSON(geojson).getBounds());
    });
  const moreLga = document.querySelector(".lga-list");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  if (moreLga && dropdownMenu) {
    let isClickedOpen = false;

    moreLga.addEventListener("click", (e) => {
      e.preventDefault();
      isClickedOpen = !dropdownMenu.classList.contains("toggle");
      dropdownMenu.classList.toggle("toggle");
    });

    document.addEventListener("click", (e) => {
      if (
        !e.target.closest(".dropdown") &&
        dropdownMenu.classList.contains("toggle")
      ) {
        dropdownMenu.classList.remove("toggle");
      }
    });
  }
});

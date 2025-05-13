var map = L.map("map").setView([14.6928, -17.4467], 14);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution:
    'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
}).addTo(map);

var lieux = [
  {
    nom: "Île de Gorée",
    coord: [14.6674, -17.3983],
    desc: "Patrimoine mondial de l’UNESCO.",
  },
  {
    nom: "Monument de la Renaissance Africaine",
    coord: [14.719, -17.4843],
    desc: "Statue monumentale de 52 mètres.",
  },
  {
    nom: "Mosquée de la Divinité",
    coord: [14.7175, -17.4796],
    desc: "Mosquée en bord de mer.",
  },
  {
    nom: "Marché Sandaga",
    coord: [14.6698, -17.4314],
    desc: "Marché local incontournable.",
  },
  {
    nom: "Village des Arts",
    coord: [14.7138, -17.4806],
    desc: "Centre artistique avec galeries.",
  },
  {
    nom: "Monument du Millenium",
    coord: [14.6921, -17.4536],
    desc: "Monument célébrant le millénaire.",
  },
  {
    nom: "Statue Lat Dior",
    coord: [14.6928, -17.4472],
    desc: "Statue du héros national Lat Dior.",
  },
  {
    nom: "Marché Kermel",
    coord: [14.6653, -17.431],
    desc: "Marché couvert historique.",
  },
  {
    nom: "Place du Souvenir Africain",
    coord: [14.7014, -17.472],
    desc: "Lieu de mémoire africaine.",
  },
];

lieux.forEach(function (lieu) {
  L.marker(lieu.coord)
    .addTo(map)
    .bindPopup("<strong>" + lieu.nom + "</strong><br>" + lieu.desc);
});

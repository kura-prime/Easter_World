// Importer express
const express = require('express');
const app = express();

// Configurer le port du serveur
const port = 3000;

// Middleware pour servir les fichiers statiques (CSS, JS, images)
app.use(express.static('public'));

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.send('<h1>Bienvenue sur mon application web dynamique !</h1>');
});

// Route pour afficher une page avec des informations dynamiques
app.get('/info', (req, res) => {
  const date = new Date();
  res.send(`<h1>Info dynamique</h1><p>La date et l'heure actuelle est : ${date}</p>`);
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`L'application web fonctionne sur https://sites.google.com/view/httpstest-com:${port}`);
});
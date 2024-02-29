#A lire

N'ayant aucune idée pour le module dynamique, j'ai pris les décision de faire un module dynamique qui configure la base de données utilisée (Production ou })

Si vous souhaitez changer les propriété il suffit de changer dans le fichier app.module.ts "./prod" en "./prepod".

Requete pour avoir l'information de l'environnement sur lequel nous sommes : 
(GET) http://localhost:3000/config


Pour avoir plus d'information:
(GET) http://localhost:3000/config/info


Reque pour obtenir toutes les motos :
(GET) http://localhost:3000/motos


Requete pour avoir les information d'une moto:
(GET) http://localhost:3000/motos/{id}


Requete pour ajouter une moto :
(POST) curl -X POST http://localhost:3000/motos -H "Content-Type: application/json" -d '{"marque": "Yamaha", "modele": "YZF-R1", "annee": 2023}'


Requere pour mettre à jour une moto :
(PUT) curl -X PUT http://localhost:3000/motos/1 -H "Content-Type: application/json" -d '{"modele": "Updated Model", "annee": 2024}'


Requete pour supprimer une moto :
(DELETE) http://localhost:3000/motos/{id}

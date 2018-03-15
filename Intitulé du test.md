------------------ Castle V1 ------------------

Il s'agit d'un "château" API :
- Le château est constitué de pièces (rooms).
- Chaque pièce possède :
--- Des liens vers des coffres
--- Des liens vers d'autres pièces
- Les coffres sont vides ou remplis, la plupart sont vides

Le but de l'exercice est de trouver tous les coffres qui sont pleins et de récupérer leur lien. Comme il y a plusieurs milliers de pièces et de coffres dans le château, il faut en faire un script.

Etant donné que la mission se fera en NodeJS, on te propose de le résoudre via un script js (si possible avec Typescript).

Voici le lien vers l'entrée du château :
(GET) http://castles.poulpi.fr/castles/1/rooms/entry
Voici un exemple de coffre (vide comme le montre le statut) :
(GET) http://castles.poulpi.fr/castles/1/chests/523b7414-8321-4ec2-b033-b6f1ec280056

Pour le rendu, on aura besoin de ton code via (par ex. via Github si tu as un compte) et du résultat d'exécution en cas de succès (liste des coffres / temps d'exécution).

Si tu n'arrives pas à le finaliser, pas de souci : explique nous dans ce cas ton raisonnement, les difficultés rencontrées et les pistes que tu aurais suivi pour creuser.

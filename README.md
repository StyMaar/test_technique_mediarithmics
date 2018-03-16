# Test technique «Castles V1»

## Structure du code :

Tout se trouve dans `src/main.ts`.
Il n'y a pas de tests unitaires car je n'ai pas trouvé rapidement comment faire du “rewiring de modules” en TypeScript.

## Lancer le programme :

`npm start`

## Résultats :

Liste des coffres pleins trouvés :
- http://castles.poulpi.fr/castles/1/chests/c0db02ed-b761-4634-aa25-233a6d8ce914
- http://castles.poulpi.fr/castles/1/chests/7c9268d6-9fb7-435f-96cc-140febca0fc7
- http://castles.poulpi.fr/castles/1/chests/7f21f4bf-e5bc-4c0f-96d9-a74ae345bacc
- http://castles.poulpi.fr/castles/1/chests/a542afae-0f4f-4bad-bd0e-2e88985438a9

Temps de traitement (donné par la commande `time npm start`) :

```
real	1m40.264s
user	0m4.996s
sys	0m0.976s
```

## À propos de mon implémentation :
J'ai implémenté un système de retry en cas d'erreurs isolées, nombre de retry limité à 5 **par requête**.
Par manque de temps, j'ai finalement décidé de ne pas me préoccuper des problèmes de rate-limiting côté serveur.
Je n'ai pas mis en place de solution pour éviter une saturation du nombre de sockets disponibles, faute d'arriver à importe le package `http` dans mon programme (c.f. problèmes rencontrés)

## Remarque sur le test :

J'ai passé plus de temps à me dépatouiller dans l'écosystème Typescript qu'à vraiment réaliser le test.

Exemple de problèmes rencontrés (et solution associée) :
- Typescript ne connaissait pas Set => ajout de @types/core-js
- Pleins de types manquants => passage en target es2017
- Typescript ne trouve pas mes dépendances => ajout de `"moduleResolution": "Node"`
- Node ne connait pas `import` => utilisation de ts-node pour lancer le truc …

Plus un dernier problème, dont la solution trouvée sur internet ne semble pas résoudre mon problème …
- Typescript ne connaissait pas la lib standard NodeJS (particulièrement le package `http`) => ajout de @types/node qui n'a pas résolu le problème

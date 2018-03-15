### Algorithmiquement
Il faut juste s'assurer qu'on ne boucle pas en visitant plusieurs fois les mêmes pièces.
On suppose qu'un coffre ne se trouve que dans une pièce à la fois.

Question : y a-t-il un rate-limiter sur le site cible ? Réfléchir au scheduling des requêtes pour ne pas être embêté à ce niveau là.

### La réalisation du test

Pas de linter, ni de test unitaire => méconnaissance de l'environnement Typescript
Pas de “newtype pattern” en Typescript (Sad)

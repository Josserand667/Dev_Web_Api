// Créez un tableau contenant les nombres pairs de 2 à 10. Écrivez un programme qui calcule la somme des nombres du tableau et l'affiche à la console. 

var tabpaire = [2, 4, 6, 8, 10]
let sum = 0;

for (let i = 0; i < tabpaire.length; i++) {
    sum += tabpaire[i];
}
console.log(sum);
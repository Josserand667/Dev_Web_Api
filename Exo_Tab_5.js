// Créez un tableau contenant les notes de cinq étudiants. Écrivez un programme qui calcule la moyenne des notes et l'affiche à la console. 

var tabnote = [16, 8, 10, 14, 6]

let sum = 0;

for (let i = 0; i < tabnote.length; i++) {
    sum += tabnote[i];
}

var moyenne = sum / tabnote.length

console.log(moyenne)
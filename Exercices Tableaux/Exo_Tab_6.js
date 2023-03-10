// Créez un tableau contenant des noms d'oiseaux. Écrivez un programme qui recherche si un nom spécifique d'oiseau est présent dans le tableau. 

var taboiseaux = ['Perroquet', 'Buse', 'Perderie', 'Corbeau','Pie']

let pos = taboiseaux.indexOf('Pie');

if (pos > 0){
    console.log(`L'oiseau est bien dans le tableau`)
} else {
    console.log(`L'oiseau n'éxiste pas`)
}
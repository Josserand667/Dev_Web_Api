/* Écrivez une fonction qui prend une chaîne de caractères et
 renvoie une nouvelle chaîne avec toutes les voyelles en majuscules.*/

 const majvoy = (string) => {

    return string.replace(/[aàeéèiouy]/gi,) // regex, permet de selectionner des élements selon un patern
}
let monstring = 'Voici une chaine de caractère'
console.log(majvoy(monstring))
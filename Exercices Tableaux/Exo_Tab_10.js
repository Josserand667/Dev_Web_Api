// Créez un tableau contenant des phrases. Écrivez un programme qui cherche la phrase la plus longue du tableau et l'affiche à la console.

const tabphrase = [`Je suis la première phrase`, `la deuxième phrase`, `encore une autre phrase ?`]

let indice = 0
let result = 0

for (let i = 0; i < tabphrase.length; i++) {
    if (tabphrase[i].length > indice){
        indice = tabphrase[i].length
        result = i
    }
}

console.log(tabphrase[result])
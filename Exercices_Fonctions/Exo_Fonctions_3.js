// Fonction qui supprime les voyelles d'une chaine de caractère

const suppvoy = (string) => {

    return string.replace(/[aàeéèiouy]/gi, ''); // à quoi sert /[...]/gi ?
}

let monstring = 'Voici une chaine de caractère'
console.log(suppvoy(monstring))
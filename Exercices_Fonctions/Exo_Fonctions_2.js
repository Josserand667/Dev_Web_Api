// Fonction qui renvoie le plus grand nombre d'un tableau

const pgrand = (tab) => {
    let pgrand = 0
    for (let i = 0; i < tab.length; i++){
        if (tab[i] > pgrand)
            pgrand = tab[i]
    }
    return pgrand
}

var montab=[9,10,4,9,4,6]

console.log(pgrand(montab))
//fonction que trie un tableau de nombre dans l'ordre décroissant

const decroissant = (tableau) => {
    return tableau.sort((x,y) => y - x)
}

tab=[17,41,847,39,887,97,184,73,8,76,1,873,64]
console.log(decroissant(tab))
/** Écrivez une fonction qui prend un tableau d'objets et un nom de propriété et
    renvoie un tableau des valeurs de cette propriété dans chaque objet. */

    function getPropertyValues(tableau, propriete) {
        return tableau.map(function(objet) {
            return objet[propriete]
        })
    }

    const objArray =
    [  {name: 'test', espece: 'singe', age: 3},
       {name: 'test', espece: 'lion', age: 3},
       {name: 'test', espece: 'souris', age: 3},
       {name: 'test', espece: 'chat', age: 3},
]

console.log(getPropertyValues());
import React from 'react';

/*
*
* Cette fonction permet de récupérer la liste de plantes au complet sans paramètre via l'API
* reponse.json() étant la donnée
*
* */
export function getPlantsFromApi() {
    const url = 'https://pi2-ephec.herokuapp.com/plants/all';
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}

/*
*
* Cette fonction permet de récupérer une plante précise au complet via le paramètre ID
* reponse.json() étant la donnée
*
* */
export function getPlantsByIDFromApi(id) {
    const url = 'https://pi2-ephec.herokuapp.com/plants/one?id=' + id;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}

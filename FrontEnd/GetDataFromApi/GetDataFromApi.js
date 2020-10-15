import React from 'react';

export function getPlantsFromApi() {
    const url = 'https://pi2-ephec.herokuapp.com/plants/all';
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}


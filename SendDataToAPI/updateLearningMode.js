import React from "react";

export function updateLearningMode(id, mode) {
    const url = "https://pi2-ephec.herokuapp.com/users/updateLearningMode?learningMode="+ mode + "&id=" + id;
    fetch(url, {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            learningMode: mode,
            id: id
        })
    }).then((response) => response.json())
        .then((json) => {
            console.log(json);
        })
        .catch((error) => {
            console.error(error);
        });
};
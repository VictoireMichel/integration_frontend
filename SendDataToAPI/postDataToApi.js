import React from "react";

export function postPotDatatoApi (name, needWater, dayCount,plantId, userId) {
    const url = "https://pi2-ephec.herokuapp.com/pots/one";
    fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            needWater: needWater,
            dayCount: dayCount,
            plantId: plantId,
            userId: userId,
        })
    }).then((response) => response.json())
        .then((json) => {
            console.log(json);
            return json;
        })
        .catch((error) => {
            console.error(error);
        });
};
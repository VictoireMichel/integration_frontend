import React from "react";

/*
*Cette fonction permet de remplacer une string en entre par la meme string mais sans accent et sans majuscules
* return la string traitee sans accents ni majuscules
 */
export function inputWithoutAccents(str) {
    let TabSpec = {"à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","è":"e","é":"e","ê":"e","ë":"e","ç":"c","ì":"i","í":"i","î":"i","ï":"i","ù":"u","ú":"u","û":"u","ü":"u","ÿ":"y","ñ":"n","-":" ","_":" "};
    let reg=/[àáäâèéêëçìíîïòóôõöøùúûüÿñ_-]/gi;

    return str.replace(reg,function(){ return TabSpec[arguments[0].toLowerCase()];}).toLowerCase();
}

/*
*
* Cette fonction permet de récupérer les infos de n'importe quelle plante, desciption, mois sur base de l'input en paramètre
* reponse.json() étant la donnée
*
* */
export function getInformationPlantsFromApi(input) {
    inputWithoutAccents(input);
    console.log(input);
    const url = 'https://pi2-ephec.herokuapp.com/filter/search?input=' + input;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error));
}


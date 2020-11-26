import React from "react";

/*
 *
 * Cette fonction permet de récupérer la liste de plantes au complet sans paramètre via l'API
 * reponse.json() étant la donnée
 *
 * */
export function getPlantsFromApi() {
  const url = "https://pi2-ephec.herokuapp.com/plants/all";
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

/*
 *
 * Cette fonction permet de récupérer une plante précise au complet via le paramètre ID
 * reponse.json() étant la donnée
 *
 * */
export function getPlantsByIDFromApi(id) {
  const url = "https://pi2-ephec.herokuapp.com/plants/one?id=" + id;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

/*
 *
 * Cette fonction permet de récupérer le temps de vie d'une plante via le paramètre ID
 * reponse.json() étant la donnée
 *
 * */
export function getPotsByIDFromApi(id) {
  const url = "https://pi2-ephec.herokuapp.com/pots/one?id=" + id;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

/*
 *
 * Cette fonction permet de supprimer le pot via le paramètre ID
 * reponse.json() étant la donnée
 *
 * */
export function delPotsByIDFromApi(id) {
  console.log(id);
  const url = "https://pi2-ephec.herokuapp.com/pots/del?id=" + id;
  let requestOptions = {
    method: "DELETE",
  };
  return fetch(url, requestOptions)
    .then((response) => console.log(response + " res"))
    .catch((error) => console.log(error));
}

/*
 *
 * Cette fonction permet de récupérer les infos de notre plante via le paramètre ID
 * reponse.json() étant la donnée
 *
 * */
export function getDataByIDFromApi(id) {
  const url = "https://pi2-ephec.herokuapp.com/data/last?potId=" + id;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

/*
 *
 * Cette fonction permet de récupérer les infos de notre pot via le paramètre ID de l'utilisateur
 * reponse.json() étant la donnée
 *
 * */
export function getPotsByUserIDFromApi(id) {
  console.log(id);
  const url = 'https://pi2-ephec.herokuapp.com/pots/user?userId=' + id;
  return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error));
}

/*
 *
 * Cette fonction permet de se déconnecter
 * reponse.json() étant la donnée
 *
 * */
export function logOut(){
  const url = 'https://pi2-ephec.herokuapp.com/users/logout'
  fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        console.error(error);
      });
}
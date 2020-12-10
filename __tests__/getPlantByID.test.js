import { getPlantsByIDFromApi } from "../GetDataFromApi/GetDataFromApi"
import 'isomorphic-fetch';

it("Returns plant infos", async () => {
    const details = await getPlantsByIDFromApi(2);
    expect(details).toEqual([{"id":2,"name":"Romarin","description":"Le romarin, consonance et goût de Méditerranée par excellence. Les feuilles sont employées en cuisine comme assaisonnement des poissons, grillades et sauces provencales. Il est stimulant et digestif. De petites fleurs bleues apparaissent le long des rameaux persistants d'avril à juin. Cette magnifique plante exige une situation très ensoleillée et un sol sec et calcaire.","growTime":45,"monthStart":1,"monthEnd":12,"maintenance":"Garder le pot dans une pièce lumineuse, une véranda ou sur le rebord d’une fenêtre.Si le romarin en pot ne craint pas le manque d’eau et la sécheresse, il est très sensible à l’excès d’eau et à l’humidité. Les arrosages doivent donc être très modérés","soil":"très bien drainé","luminosity":2,"picturePath":"Romarin.png","humidity":0,"temperatureMin":0,"temperatureMax":0,"createdAt":null,"updatedAt":null}]);
});
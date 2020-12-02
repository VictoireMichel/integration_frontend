import { getPlantsFromApi } from "../GetDataFromApi/GetDataFromApi"
import 'isomorphic-fetch';

it("Returns plant List", async () => {
    const details = await getPlantsFromApi();
    expect(details[0]).toEqual({ "id": 1, "name": "Basilic", "description": "Le basilic est une plante aromatique facile à entretenir, qui trouve sa place dans la maison au bord des fenêtres.", "growTime": 35, "monthStart": 4, "monthEnd": 10, "maintenance": "Biner au démarrage de la culture, paillez fin juin. Tailler régulièrement l’extrémité des tiges pour éviter la floraison, synonyme d’arrêt de la production de feuilles. Maintenir le sol frais. Le basilic est sensible aux maladies cryptogamiques, éviter de mouiller le feuillage particulièrement quand le temps est frais.", "soil": "riche et frais", "luminosity": 2, "picturePath": "Basilic.png", "humidity": 0, "temperatureMin": 0, "temperatureMax": 0, "createdAt": null, "updatedAt": null });
});
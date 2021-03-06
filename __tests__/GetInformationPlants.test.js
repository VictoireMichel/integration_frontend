import {getInformationPlantsFromApi} from "../GetDataFromApi/GetDataFromApi";
import 'isomorphic-fetch';

//Test de recherche sur toutes les plantes
it('Returns with a space in the Search ', async () => {
    const ALLPLANTS = await getInformationPlantsFromApi(" ")
    expect(ALLPLANTS).toEqual([{
        "id": 1,
        "name": "Basilic",
        "description": "Le basilic est une plante aromatique facile à entretenir, qui trouve sa place dans la maison au bord des fenêtres.",
        "growTime": 35,
        "monthStart": 4,
        "monthEnd": 10,
        "maintenance": "Biner au démarrage de la culture, paillez fin juin. Tailler régulièrement l’extrémité des tiges pour éviter la floraison, synonyme d’arrêt de la production de feuilles. Maintenir le sol frais. Le basilic est sensible aux maladies cryptogamiques, éviter de mouiller le feuillage particulièrement quand le temps est frais.",
        "soil": "riche et frais",
        "luminosity": 2,
        "picturePath": "Basilic.png",
        "humidity": 0,
        "temperatureMin": 0,
        "temperatureMax": 0,
        "createdAt": null,
        "updatedAt": null
    }, {
        "id": 2,
        "name": "Romarin",
        "description": "Le romarin, consonance et goût de Méditerranée par excellence. Les feuilles sont employées en cuisine comme assaisonnement des poissons, grillades et sauces provencales. Il est stimulant et digestif. De petites fleurs bleues apparaissent le long des rameaux persistants d'avril à juin. Cette magnifique plante exige une situation très ensoleillée et un sol sec et calcaire.",
        "growTime": 45,
        "monthStart": 1,
        "monthEnd": 12,
        "maintenance": "Garder le pot dans une pièce lumineuse, une véranda ou sur le rebord d’une fenêtre.Si le romarin en pot ne craint pas le manque d’eau et la sécheresse, il est très sensible à l’excès d’eau et à l’humidité. Les arrosages doivent donc être très modérés",
        "soil": "très bien drainé",
        "luminosity": 2,
        "picturePath": "Romarin.png",
        "humidity": 0,
        "temperatureMin": 0,
        "temperatureMax": 0,
        "createdAt": null,
        "updatedAt": null
    }, {
        "id": 3,
        "name": "Persil",
        "description": "Le persil est une plante aromatique appartenant à la famille des Apiacées comme le céleri, le fenouil, le cerfeuil ou encore la coriandre. Originaire de Méditerranée, il produit des feuilles vertes et parfumées toute l’année que l’on utilise en cuisine. De juin à août, il peut monter en graines et produire des fleurs jaunes/vertes.",
        "growTime": 25,
        "monthStart": 1,
        "monthEnd": 12,
        "maintenance": "Récolter toute les 3 à 4 semaines",
        "soil": "riche",
        "luminosity": 1,
        "picturePath": "Persil.png",
        "humidity": 0,
        "temperatureMin": 0,
        "temperatureMax": 0,
        "createdAt": null,
        "updatedAt": null
    }, {
        "id": 4,
        "name": "Thym",
        "description": "Le thym, Thymus, est un sous-arbrisseau aromatique : toute la plante exhale une forte odeur très agréable. Il est spontané dans les zones arides du Midi, où il est souvent appelé farigoule ou farigoulette. A port couvre-sol, portant de petites feuilles linéaires, vert grisâtre, très odorantes. De mai à octobre, ses fleurs blanches ou roses attirent les abeilles.",
        "growTime": 28,
        "monthStart": 3,
        "monthEnd": 9,
        "maintenance": " Garder votre plante dans une pièce lumineuse ou sur le rebord d’une fenêtre de façon à ce qu’elle profite du soleil toute la journée. La terre du pot doit être poreuse, pas trop argileuse et bien drainée.L’arrosage du thym en pot doit être régulier, notamment la première année de culture ou en cas de sécheresse prolongée. Attention toutefois à ne pas trop arroser : le thym craint les excès d’humidité.",
        "soil": "très bien drainé",
        "luminosity": 2,
        "picturePath": "Thym.png",
        "humidity": 0,
        "temperatureMin": 0,
        "temperatureMax": 0,
        "createdAt": null,
        "updatedAt": null
    }, {
        "id": 5,
        "name": "Menthe Verte",
        "description": "Plante aromatique qui s'utilise dans les salades, plats de légumes, le thé, ...  Vivace, elle reviendra chaque année. L'huile essentielle de menthe est également un antidouleur et un antifatigue. Semez les graines à la volée, dans une terre bien préparée, puis tassez la terre par dessus. Arrosez copieusement et en pluie fine. \r\n",
        "growTime": 30,
        "monthStart": 4,
        "monthEnd": 10,
        "maintenance": "La menthe ne nécessite que peu de soin et peut envahir votre jardin sans votre aide ! Arrosez-la régulièrement au début de sa croissance pour une bonne reprise, Ensuite arrosez quand la terre est sèche pour garantir une bonne production de feuilles.",
        "soil": "Humide, sol acide, sol ordinaire de bonne qualité",
        "luminosity": 1,
        "picturePath": "Menthe.png",
        "humidity": 70,
        "temperatureMin": -10,
        "temperatureMax": 35,
        "createdAt": null,
        "updatedAt": null
    }, {
        "id": 6,
        "name": "Ciboulette",
        "description": "Également surnommée civette ou appétit, la ciboulette est l'archétype de la fine-herbe ou plante condimentaire, la ciboulette est tout à la fois goûteuse et facile à cultiver : indispensable donc au jardin potager et si jolie au jardin d'agrément.",
        "growTime": 15,
        "monthStart": 4,
        "monthEnd": 10,
        "maintenance": "À part désherber et biner de temps en temps, rien de très compliqué. Arrosez seulement si le temps est sec, certaines espèces sont sensibles aux excès d'eau.\r\n\r\nSi des tiges florales apparaissent, coupez-les. Elles vont affaiblir les plants.",
        "soil": "bien drainé, riche, plutôt frais, même argileux",
        "luminosity": 2,
        "picturePath": "Ciboulette.png",
        "humidity": 0,
        "temperatureMin": 0,
        "temperatureMax": 0,
        "createdAt": null,
        "updatedAt": null
    }, {
        "id": 7,
        "name": "Coriandre",
        "description": "Plante aromatique, appelée couramment « persil arabe », ou « persil chinois » et dont on utilise surtout les graines séchées. Ces graines sont un des composants du cari. La coriandre était largement utilisée par les Hébreux et les Romains. La coriandre est cultivée partout dans le monde, y compris en France.",
        "growTime": 21,
        "monthStart": 4,
        "monthEnd": 10,
        "maintenance": "Désherbez et maintenez le sol frais. Pour forcer la plante à se ramifier, pincer la des quelle atteint une hauteur de 4 cm. La coriandre possède un cycle très rapide et sa montée à graines se produit en quelques semaines. Plutôt que de couper les fleurs, laissez-la se montrer généreuse et se ressemer sur place et, bien sûr, récoltez quelques graines",
        "soil": "sol léger, meuble, bien drainé, riche",
        "luminosity": 1,
        "picturePath": "Coriandre.png",
        "humidity": 0,
        "temperatureMin": 0,
        "temperatureMax": 0,
        "createdAt": null,
        "updatedAt": null
    }, {
        "id": 8,
        "name": "Estragon",
        "description": "Plante aromatique, originaire de l'Asie centrale, maintenant cultivée dans tous les pays. L'estragon était jadis réputé pour ses vertus curatives contre les morsures d'animaux venimeux. Les feuilles de l'estragon sont longues et effilées, vert vif. Leur parfum est très volatil. On trouve deux variétés : l'estragon français, à l'arôme délicatement anisé, et l'estragon russe, légèrement amer. Le français contient une huile essentielle, l'estragol, douée de propriétés apéritives et digestives.",
        "growTime": 45,
        "monthStart": 4,
        "monthEnd": 9,
        "maintenance": "Coupez l’extrémité des tiges pour le récolter et ainsi favoriser le buissonnement et la production de feuilles.\r\n\r\nAvant les grands froids que l'estragon craint, rabattre les tiges et pailler le pied. En fin d’hiver, vous couperez les éventuelles tiges sèches, vous binerez et désherberez en joutant du compost au pied.\r\n\r\nAu bout de 3 ou 4 ans, la plante s’épuise et doit être remplacée.",
        "soil": "sol léger, riche en humus, frais mais bien drainé, humifère",
        "luminosity": 2,
        "picturePath": "Estragon.png",
        "humidity": 0,
        "temperatureMin": 0,
        "temperatureMax": 0,
        "createdAt": null,
        "updatedAt": null
    }, {
        "id": 9,
        "name": "Sarriette",
        "description": "Plante aromatique originaire du sud de l'Europe, dont l'arôme rappelle à la fois la menthe et le thym. La sarriette commune, ou annuelle, a des feuilles mates, vert cendré. La sarriette vivace, ou de montagne, à feuilles plus étroites et raides, connue sous son nom provençal de « poivre d'âne », est plus rare.",
        "growTime": 21,
        "monthStart": 1,
        "monthEnd": 12,
        "maintenance": "Désherbez régulièrement, Pour une production plus abondante, rabattez les tiges à 10 cm de la souche chaque printemps. ",
        "soil": "sol drainé, sec",
        "luminosity": 2,
        "picturePath": "Sarriette.png",
        "humidity": 0,
        "temperatureMin": 0,
        "temperatureMax": 0,
        "createdAt": null,
        "updatedAt": null
    }, {
        "id": 10,
        "name": "Aneth",
        "description": "Plante aromatique originaire d'Orient et introduite dès l'Antiquité en Europe où elle est communément appelée « faux anis », « fenouil bâtard» ou «fenouil puant». L'aneth (qui vient du mot grec , « fenouil ») était à Rome le symbole de la vitalité.",
        "growTime": 21,
        "monthStart": 1,
        "monthEnd": 12,
        "maintenance": "Coupez les feuilles régulièrement, avant la floraison, car ce sont elles qui parfument les plats cuisinés. Arrosez surtout en été quand il fait très chaud",
        "soil": "Humus, Terreau",
        "luminosity": 2,
        "picturePath": "Aneth.png",
        "humidity": 1,
        "temperatureMin": 0,
        "temperatureMax": 0,
        "createdAt": null,
        "updatedAt": null
    }])
});

//Test de recherche sur une plante
it('Returns all informations of Basilic ', async () => {
    const BASILIC =  await getInformationPlantsFromApi("Basilic")
    expect(BASILIC).toStrictEqual([{"id":1,"name":"Basilic","description":"Le basilic est une plante aromatique facile à entretenir, qui trouve sa place dans la maison au bord des fenêtres.","growTime":35,"monthStart":4,"monthEnd":10,"maintenance":"Biner au démarrage de la culture, paillez fin juin. Tailler régulièrement l’extrémité des tiges pour éviter la floraison, synonyme d’arrêt de la production de feuilles. Maintenir le sol frais. Le basilic est sensible aux maladies cryptogamiques, éviter de mouiller le feuillage particulièrement quand le temps est frais.","soil":"riche et frais","luminosity":2,"picturePath":"Basilic.png","humidity":0,"temperatureMin":0,"temperatureMax":0,"createdAt":null,"updatedAt":null
    }])
});

//Test de recherche sur un mois
it('Returns plant-related months', async () => {
    const MONTHS = await getInformationPlantsFromApi("janvier")
    expect(MONTHS).toStrictEqual([{"id":2,"name":"Romarin","description":"Le romarin, consonance et goût de Méditerranée par excellence. Les feuilles sont employées en cuisine comme assaisonnement des poissons, grillades et sauces provencales. Il est stimulant et digestif. De petites fleurs bleues apparaissent le long des rameaux persistants d'avril à juin. Cette magnifique plante exige une situation très ensoleillée et un sol sec et calcaire.","growTime":45,"monthStart":1,"monthEnd":12,"maintenance":"Garder le pot dans une pièce lumineuse, une véranda ou sur le rebord d’une fenêtre.Si le romarin en pot ne craint pas le manque d’eau et la sécheresse, il est très sensible à l’excès d’eau et à l’humidité. Les arrosages doivent donc être très modérés","soil":"très bien drainé","luminosity":2,"picturePath":"Romarin.png","humidity":0,"temperatureMin":0,"temperatureMax":0,"createdAt":null,"updatedAt":null},{"id":3,"name":"Persil","description":"Le persil est une plante aromatique appartenant à la famille des Apiacées comme le céleri, le fenouil, le cerfeuil ou encore la coriandre. Originaire de Méditerranée, il produit des feuilles vertes et parfumées toute l’année que l’on utilise en cuisine. De juin à août, il peut monter en graines et produire des fleurs jaunes/vertes.","growTime":25,"monthStart":1,"monthEnd":12,"maintenance":"Récolter toute les 3 à 4 semaines","soil":"riche","luminosity":1,"picturePath":"Persil.png","humidity":0,"temperatureMin":0,"temperatureMax":0,"createdAt":null,"updatedAt":null},{"id":9,"name":"Sarriette","description":"Plante aromatique originaire du sud de l'Europe, dont l'arôme rappelle à la fois la menthe et le thym. La sarriette commune, ou annuelle, a des feuilles mates, vert cendré. La sarriette vivace, ou de montagne, à feuilles plus étroites et raides, connue sous son nom provençal de « poivre d'âne », est plus rare.","growTime":21,"monthStart":1,"monthEnd":12,"maintenance":"Désherbez régulièrement, Pour une production plus abondante, rabattez les tiges à 10 cm de la souche chaque printemps. ","soil":"sol drainé, sec","luminosity":2,"picturePath":"Sarriette.png","humidity":0,"temperatureMin":0,"temperatureMax":0,"createdAt":null,"updatedAt":null},{"id":10,"name":"Aneth","description":"Plante aromatique originaire d'Orient et introduite dès l'Antiquité en Europe où elle est communément appelée « faux anis », « fenouil bâtard» ou «fenouil puant». L'aneth (qui vient du mot grec , « fenouil ») était à Rome le symbole de la vitalité.","growTime":21,"monthStart":1,"monthEnd":12,"maintenance":"Coupez les feuilles régulièrement, avant la floraison, car ce sont elles qui parfument les plats cuisinés. Arrosez surtout en été quand il fait très chaud","soil":"Humus, Terreau","luminosity":2,"picturePath":"Aneth.png","humidity":1,"temperatureMin":0,"temperatureMax":0,"createdAt":null,"updatedAt":null
    }])
});

//Test de recherche sur une description
it('Returns plant-related descriptions', async () => {
    const  DESCRIPTION = await getInformationPlantsFromApi("fenouil")
    expect(DESCRIPTION).toStrictEqual([{"id":3,"name":"Persil","description":"Le persil est une plante aromatique appartenant à la famille des Apiacées comme le céleri, le fenouil, le cerfeuil ou encore la coriandre. Originaire de Méditerranée, il produit des feuilles vertes et parfumées toute l’année que l’on utilise en cuisine. De juin à août, il peut monter en graines et produire des fleurs jaunes/vertes.","growTime":25,"monthStart":1,"monthEnd":12,"maintenance":"Récolter toute les 3 à 4 semaines","soil":"riche","luminosity":1,"picturePath":"Persil.png","humidity":0,"temperatureMin":0,"temperatureMax":0,"createdAt":null,"updatedAt":null},{"id":10,"name":"Aneth","description":"Plante aromatique originaire d'Orient et introduite dès l'Antiquité en Europe où elle est communément appelée « faux anis », « fenouil bâtard» ou «fenouil puant». L'aneth (qui vient du mot grec , « fenouil ») était à Rome le symbole de la vitalité.","growTime":21,"monthStart":1,"monthEnd":12,"maintenance":"Coupez les feuilles régulièrement, avant la floraison, car ce sont elles qui parfument les plats cuisinés. Arrosez surtout en été quand il fait très chaud","soil":"Humus, Terreau","luminosity":2,"picturePath":"Aneth.png","humidity":1,"temperatureMin":0,"temperatureMax":0,"createdAt":null,"updatedAt":null
    }])
});

//Test qui n'est sence ne rien renvoyer
it('Returns nothing', () => {
    const NOTHING = getInformationPlantsFromApi("42")
    expect(NOTHING).toEqual({"_U": 0, "_V": 0, "_W": null, "_X": null}) //Objet vide
});

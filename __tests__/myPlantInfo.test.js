import React from "react";

const dateFormat = function(theDate) {
    const annee = theDate.substring(0, 4);
    const mois = theDate.substring(5, 7);
    const jour = theDate.substring(8, 10);
    const heure = theDate.substring(11, 13);
    const minutes = theDate.substring(14, 16);
    const secondes = theDate.substring(17, 19);
    return (
        heure +
        ":" +
        minutes +
        ":" +
        secondes +
        " " +
        jour +
        "/" +
        mois +
        "/" +
        annee
    );
};
/*
jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
}));

 */


describe("MyPlantInfo", () => {

    it("dateFormat function", () => {
       const baseDate = "2020-11-27T11:08:43:000Z";
       expect(dateFormat(baseDate)).toEqual("11:08:43 27/11/2020");
        //expect(baseDate).toEqual(baseDate);
    });

});
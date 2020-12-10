module.exports = {

    preset: "react-native",
    collectCoverage: true,
    //coverageReporters : ["html"],
    transformIgnorePatterns: [
        "node_modules/(?!(jest-)?react-native|react-navigation)",
        "./Components/potDetails/"
    ],
    moduleNameMapper: {
        "^image![a-zA-Z0-9$_-]+$": "GlobalImageStub",
        "^[@./a-zA-Z0-9$_-]+\\.(png|gif)$": "RelativeImageStub"
    },
    setupFiles: [ "./node_modules/react-native-gesture-handler/jestSetup.js" ],
    verbose :true,
};
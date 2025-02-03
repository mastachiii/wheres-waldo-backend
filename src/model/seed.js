// Populate database with game levels..
const { level } = require("../model/queries");

level.createLevel({
    name: "hollywood",
    sceneName: "When the Stars Come Out",
    waldo: "1351, 464",
    woof: "1635, 699",
    wilma: "1136, 723",
    odlaw: "1066, 858",
});

level.createLevel({
    name: "fruit",
    sceneName: "The Mighty Fruit Fight",
    waldo: "1712, 716",
    wilma: "256, 917",
    woof: "1684, 615",
    odlaw: "1269, 605",
    wizard: "483, 527",
});

level.createLevel({
    name: "space",
    sceneName: "The Future",
    waldo: "777, 672",
    wilma: "566, 560",
    woof: "1128, 981",
    odlaw: "136, 743",
    wizard: "1500, 624",
});

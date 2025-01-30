const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class Level {
    async createLevel({ name, sceneName, waldo, wenda, wilma, woof, odlaw, wizard }) {
        await prisma.level.create({
            data: {
                name,
                sceneName,
                waldo,
                wenda,
                wilma,
                woof,
                odlaw,
                wizard,
            },
        });
    }

    async getAllLevels() {
        const levels = await prisma.level.findMany();
        console.log(levels);
        return levels;
    }
}

const db = new Level();

// db.createLevel({
//     name: "hollywood",
//     sceneName: "When the Stars Come Out",
//     waldo: "1350, 532",
//     woof: "1635, 805",
//     wilma: "1136, 832",
//     odlaw: "1066, 986",
// });

// db.createLevel({
//     name: "fruit",
//     sceneName: "The Might Fruit Fight",
//     waldo: "1712, 716",
//     wilma: "256, 917",
//     woof: "1684, 615",
//     odlaw: "1269, 605",
//     wizard: "483, 527",
// });

// db.createLevel({
//     name: "space",
//     sceneName: "The Future",
//     waldo: "777, 672",
//     wilma: "566, 560",
//     woof: "1128, 981",
//     odlaw: "136, 743",
//     wizard: "1500, 624",
// });

db.getAllLevels();

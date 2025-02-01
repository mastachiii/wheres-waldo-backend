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
        const levels = await prisma.level.findMany({
            orderBy: {
                id: "asc",
            },
        });

        return levels;
    }

    async getLevel(id) {
        const level = await prisma.level.findUnique({
            where: { id },
            include: {
                attempts: {
                    orderBy: {
                        timeFinished: "asc",
                    },
                },
            },
        });

        return level;
    }

    async updateLevel({ timeFinished, playerName, id }) {
        await prisma.level.update({
            where: { id },
            data: {
                attempts: {
                    create: {
                        timeFinished,
                        playerName,
                    },
                },
            },
        });
    }
}

const db = new Level();

// Populate db...
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

module.exports = {
    level: new Level(),
};

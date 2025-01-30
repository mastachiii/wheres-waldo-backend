const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class Level {
    async createLevel({ name, sceneName, waldo, wenda, woof, odlaw, wizard }) {
        await prisma.level.create({
            name,
            sceneName,
            waldo,
            wenda,
            woof,
            odlaw,
            wizard,
        });
    }
}

const db = new Level();

db.createLevel({
    name: "hollywood",
    sceneName: "When the Stars Come Out",
    waldo: "1350, 532",
    woof: "1635, 805",
    wenda: "1136, 832",
    odlaw: "1066, 986",
});

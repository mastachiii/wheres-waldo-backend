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
                    take: 20,
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

module.exports = {
    level: new Level(),
};

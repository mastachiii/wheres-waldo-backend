const { level } = require("../model/queries");

const db = require("../model/queries").level;

class LevelController {
    async getAllLevels(req, res, next) {
        try {
            const levels = await db.getAllLevels();

            res.send(levels);
        } catch (err) {
            next(err);
        }
    }

    async getLevel(req, res, next) {
        try {
            const level = await db.getLevel(req.params.id);

            res.send(level);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new LevelController();

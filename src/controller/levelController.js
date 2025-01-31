const { level } = require("../model/queries");

const db = require("../model/queries").level;

class LevelController {
    async getAllLevels(req, res, next) {
        try {
            const levels = await db.getAllLevels();

            res.status(200).json({ levels });
        } catch (err) {
            next(err);
        }
    }

    async getLevel(req, res, next) {
        try {
            const level = await db.getLevel(+req.params.id);

            res.status(200).json({ level });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new LevelController();

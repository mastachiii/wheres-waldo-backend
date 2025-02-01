const { differenceInSeconds } = require("date-fns");
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

            res.status(200).json({ level, timeStarted: new Date() });
        } catch (err) {
            next(err);
        }
    }

    async createLevelAttempt(req, res, next) {
        try {
            const { name, timeStarted } = req.body;
            const timeFinished = differenceInSeconds(new Date(), new Date(timeStarted));

            await db.updateLevel({ timeFinished, playerName: name, id: +req.params.id });

            return res.status(200).json({ timeFinished });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new LevelController();

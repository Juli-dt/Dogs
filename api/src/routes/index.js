const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getDogs, getByName } = require("../controllers/dogs")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", async (req, res) => {
    try {
        const dogs = await getDogs();
        return res.status(200).json(dogs)
    } catch (error) {
        console.log(error);
    }
})
router.get("/dogs", async (req, res) => {
    try {
        const { id } = req.query;
        const dog = await getByName(id)
        console.log(dog);
        return res.status(200).json(dog)
    } catch (error) {
        console.log(error);
    }
})
module.exports = router;

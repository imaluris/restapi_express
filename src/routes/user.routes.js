
    const router = require('express').Router();
    const users = require('../controllers/user.controller');

    router.post('/insert', users.create);

    router.get('/findall',users.findAll);

    router.get("/:id", users.findById);

    router.put("/update/:id", users.update);

    router.delete("/delete/:id", users.delete);

    module.exports = router;



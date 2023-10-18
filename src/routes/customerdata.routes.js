
const router = require('express').Router();
const customerdata = require('../controllers/customerdata.controller');

router.post('/insert', customerdata.create);

router.get('/getall', customerdata.getall);

router.get('/getbyid/:id', customerdata.findById);

router.delete('/delete/:id', customerdata.delete);



module.exports = router;



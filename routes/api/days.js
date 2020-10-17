const express = require('express');
const router = express.Router();
const daysCtrl = require('../../controllers/api/days');

router.use(require('../../config/auth'));

router.get('/', daysCtrl.index);
router.post('/', daysCtrl.create);
router.delete('/:id', daysCtrl.delete);
router.put('/:id', daysCtrl.update);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;

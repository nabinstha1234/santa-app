const { Router } = require('express');

const santaMessageController =
  require('../controllers/santa-message.controller')();

const router = Router();

router.get('/:id', santaMessageController.getSantaMessage);
router.get('/', santaMessageController.getSantaMessages);
router.post('/', santaMessageController.createSantaMessage);
router.put('/:id', santaMessageController.updateSantaMessage);
router.delete('/:id', santaMessageController.deleteSantaMessage);

module.exports = router;

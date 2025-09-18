var express = require('express');
var router = express.Router();

const { createUser } = require('../Controller/createContoller.js');
const { FetchUser } = require('../Controller/readController.js');
const { updateUser } = require('../Controller/updateController.js');
const { deleteUser } = require('../Controller/deleteController.js');

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

router.post('/register', async (req, res) => {
  try {
    const newUser = await createUser(req.body);
    res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await FetchUser(req.query.firstName); 
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(error.statusCode || 500).json({ success: false, message: error.message });
  }
});

router.put('/', (req, res) => {
  return res.status(400).json({ success: false, message: 'User ID is required in the URL' });
});
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await updateUser(userId, req.body);
    res.status(200).json({ success: true, user: updatedUser });
  } catch (err) {
    res.status(err.statusCode || 500).json({ success: false, message: err.message });
  }
});

router.delete('/', (req, res) => {
  return res.status(400).json({ success: false, message: 'User ID is required in the URL' });
});
router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await deleteUser(userId);
    res.status(200).json({ success: true, user: deletedUser });
  } catch (err) {
    res.status(err.statusCode || 500).json({ success: false, message: err.message });
  }
});

module.exports = router;

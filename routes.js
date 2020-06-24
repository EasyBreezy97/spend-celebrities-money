const router = require('express').Router();
const {fetchData} = require('./fetchData');

router.get('/status', (req,res) => {
  res.json({
    success:true
  })
})


router.get('/list',fetchData)

module.exports = router;
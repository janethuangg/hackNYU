const router = require('express').Router();
let Listing = require('../models/listing.model');

router.route('/').get((req, res) => {
  Listing.find()
    .then(listings => res.json(listings))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
//   const date = Date.parse(req.body.date);

  const newListing = new Listing({
    username,
    description
  });

  newListing.save()
  .then(() => res.json('Listing posted!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Listing.findById(req.params.id)
      .then(listing => res.json(listing))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').delete((req, res) => {
    Listing.findByIdAndDelete(req.params.id)
      .then(() => res.json('Listing deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/update/:id').post((req, res) => {
    Listing.findById(req.params.id)
      .then(listing => {
        listing.username = req.body.username;
        listing.description = req.body.description;
  
        listing.save()
          .then(() => res.json('Listing updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;
const router = require('express').Router();
let Listing = require('../models/listing.model');

router.route('/').get((req, res) => {
  Listing.find()
    .then(listings => res.json(listings))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const address1 = req.body.address1;
  const address2 = req.body.address2;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;
  const headline = req.body.headline;
  const rent = req.body.rent;

  const newListing = new Listing({
    address1,
    address2,
    city,
    state,
    zip,
    headline,
    rent
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
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class = "container">
            <div className="option">
                <Button variant="primary" href="/browse">Browse All Listings</Button>
            </div>
            <div className="option">
                <Button variant="primary" href="/newListing">Make New Listing</Button>
            </div>
        </div>
      </div>
    )
  }
}
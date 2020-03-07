import React, { Component } from 'react';
import axios from 'axios';

export default class Listings extends Component {
    constructor(props) {
        super(props);

        this.renderListings = this.renderListings.bind(this);

        this.state = {
            Listings: [],
        }
    }

    componentDidMount(){
        this.renderListings();
    }

    renderListings = async() => {
        try {
            let res = await axios.get("http://localhost:8000/listings/");
            let listings = res.data;
            console.log(listings);
            // re-render the view with new data
            this.setState({
                Listings: listings.map((listing, i) => (
                    <li key={i} className="list-group-item">{listing.description}</li>
                ))
            });
        }
        catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div>
            <ul className="list-group list-group-flush">
            {this.state.Listings}
            </ul>
            </div>
        )
    }
}

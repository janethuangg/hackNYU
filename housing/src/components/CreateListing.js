import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class CreateListing extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            description: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const listing = {
            username: this.state.username,
            description: this.state.description
        };

        console.log(listing);

        // window.location = '/';

        axios
            .post("http://localhost:8000/listings/add", listing)
            .then(res => console.log(res.data));

        const container = document.querySelector("#form");
        console.log(container);
        const message = document.createElement("h3");
        message.textContent = "Successfully posted new listing!";
        container.appendChild(message);
    }

    render() {
        return (
            <div id="form">
            <h1>Create a New Listing</h1>
            <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
            type="username"
            placeholder="Enter username"
            onChange={this.onChangeUsername}
            />
            </Form.Group>

            <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
            type="description"
            placeholder="Enter description"
            onChange={this.onChangeDescription}
            />
            </Form.Group>

            <Button variant="primary" type="submit">
            Submit
            </Button>
            </Form>
            </div>
        );
    }
}

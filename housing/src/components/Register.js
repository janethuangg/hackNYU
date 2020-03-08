import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            username: "",
            email: "",
            password: "",
            password2: ""
        };
    }

    handleChange(e) {
        console.log(e.target);
        const value = e.target.value;
        this.setState({
            [e.target.id]: value
        });
    }
    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        
        console.log("User Submitted");
        console.log(user);

        axios
            .post("http://localhost:8000/users/register")
            .then(res => console.log(res.data))
        
        const container = document.querySelector("#form");
        console.log(container);

    }

    render() {
        return (
            <div className="login">

            <Form className="loginItem">
            <Form.Group controlId="formLogin">
            <Form.Label>Username</Form.Label>
            <Form.Control
            type="username"
            placeholder="Enter Username"
            onChange={this.handleChange}
            />
            <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
            type="email"
            placeholder="Enter Email"
            onChange={this.handleChange}
            />
            <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
            />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
            type="password2"
            placeholder="Confirm Password"
            onChange={this.handleChange}
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

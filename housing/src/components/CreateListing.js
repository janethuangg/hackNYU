
import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup'
import { Link, animateScroll as scroll } from "react-scroll";

export default class CreateListing extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
          address1: '',
          address2: '',
          city: '',
          state: '',
          zip: '',
          headline: '',
          rent: 0
        }
    }

    handleChange(e) {
        console.log(e.target)
        const value = e.target.value;
        this.setState({
          [e.target.id]: value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const listing = {
            address1: this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            headline: this.state.headline,
            rent: this.state.rent
        };
      
        console.log(listing)
        // window.location = '/';
        const container = document.querySelector('#section3');
        const message = document.createElement('h3');
        const linkToListing = document.createElement('p');

        axios.post('http://localhost:8000/listings/add', listing)
            .then(res => {
                    console.log(res.data)
                    message.textContent = 'Successfully posted new listing!';
                    linkToListing.textContent = 'Check it out here: link';
                })
            .catch(err => {
                message.textContent = 'FAILED';
            });
        
            container.appendChild(message);  
            container.appendChild(linkToListing); 
    }

    render() {
        return (
        <div>
                <Form onSubmit = {this.onSubmit}>
                    <div className = "section" id="section1" style={{paddingTop: "0"}}>
                    <h1>Create a New Listing</h1>
                    <h2>Location Info</h2>
                    <Form.Group controlId="address1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control 
                            type="text" 
                            required
                            placeholder="6 MetroTech Center"
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="address2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control 
                            placeholder="Apartment Number" 
                            type="text" 
                            onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control 
                            placeholder="City" 
                            type="text" 
                            onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="state">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" onChange={this.handleChange}>
                            <option>Choose...</option>
                            <option>NY</option>
                            <option>GA</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="zip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control 
                            placeholder="Zip" 
                            type="text" 
                            onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Row>
                    <Link
                        activeClass="active"
                        to="section2"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}
                    >
                        <Button>Next</Button>
                    </Link>
                    </div>

                    <div className = "section" id="section2">
                        <h2>Listing Info</h2>
                        <Form.Group controlId="headline">
                            <Form.Label>Headline</Form.Label>
                            <Form.Control 
                                type="text" 
                                required
                                placeholder="1B1B close to NYU"
                                onChange={this.handleChange} />
                            <Form.Text className="text-muted">
                                This is what people see first — make it good!
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                                type="text" 
                                required
                                as="textarea" rows="3"
                                placeholder="What do you want people to know about your place?"
                                onChange={this.handleChange} />
                        </Form.Group>
                        
                        <Form.Row>
                            <Form.Group as={Col} md="2" controlId="rent">
                                <Form.Label>Cost per Month</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="text"
                                        placeholder="1500"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                        onChange = {this.handleChange}
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>

                        <Link
                            activeClass="active"
                            to="section3"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                        >
                            <Button>Next</Button>
                        </Link>
                    </div>
                    
                    <div className="section" id="section3">
                        <h2>Your Info</h2>
                        
                        <p>
                            <a href="/login">Sign into an existing account</a> or create a new account below
                        </p>      
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="text" 
                                required
                                placeholder="email@123.com"
                                onChange={this.x} />
                        </Form.Group>
                        <Form.Group controlId="username">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="text" 
                                required
                                placeholder="password123"
                                onChange={this.x} />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </div>
                </Form>
            </div>


        )
    }
}

import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (  
            <Container>
                <Carousel>
                    <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + "images/banner.jpeg"}
                            alt="First slide"
                            />
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2015/12/15/09/02/banner-1093898_960_720.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
        )
    }
}
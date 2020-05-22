import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import SingleGym from './singlegym';

function DisplayGyms(props) {
    return props.gymArray.map(element => <SingleGym key={element.id} name={element.title} url={element.imageUrl} status="Laukiama pavedimo" ></SingleGym>);
}

function GymCard() {

    const [gyms, setGyms] = useState([]);

    function GetAllGyms() {
        fetch("https://localhost:44316/api/gyms",
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(res => res.json())
            .then(a => {
                if (a.error === false) {
                    const { returnResult } = a;
                    alert(a.message);
                    console.log(returnResult);
                    setGyms(returnResult);
                    //return returnResult.forEach(element => <SingleGym name={element.title} url={element.ImageUrl} status="Laukiama pavedimo" ></SingleGym>
                } else {
                    alert(a.message);
                }
            });
    }

    useEffect(() => {
        GetAllGyms();
    }, []);

    return <Container className="pr-0 mt-2">
        <Card className="text-light modal-header">
            <Card.Body className="pb-0">
                <Card.Title>
                    <h2>SPORTO SALES</h2>
                </Card.Title>
                <Row>
                    <DisplayGyms gymArray={gyms} />
                </Row>
            </Card.Body>
        </Card>
    </Container >
}

export default GymCard;
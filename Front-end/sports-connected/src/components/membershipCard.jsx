import React, { useState, useHistory, useEffect } from 'react';
import { Container, Row, Col, Card, Modal, Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';


function DisplayAllMembership(props) {


    const [membership, setMembership] = useState([]);

    return props.membershipData.map(element => {
        //console.log(returnMembershipData(element.offerId, props.offerData, props.gymData));
        // element.offer.title
        console.log(element);
        if (element.isPaid) {
            return <Row>
                <Col>
                    {element.offer.gym.title} | {element.startDate.split("T")[0]} - {element.endDate.split("T")[0]} | <span className="text-success text-uppercase">patvirtinta</span>
                </Col>
            </Row>
        } else {
            return <Row>
                <Col>
                    {element.offer.gym.title} | {element.startDate.split("T")[0]} - {element.endDate.split("T")[0]} | <span className="text-danger text-uppercase">Nepatvirtinta</span>
                </Col>
            </Row>
        }

    });
}

//129751da-9475-4223-b193-b2c266109201
function MembershipCard() {

    const [memberships, setMemberships] = useState([]);
    const [gyms, setGyms] = useState([]);
    const [offers, setOffers] = useState([]);
    const userData = useSelector(state => state.user.userData);

    function GetAllMemberships() {
        fetch("https://sportsconnectedback.azurewebsites.net/api/users/" + userData.id,
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
                    console.log(returnResult.memberships);
                    setMemberships(returnResult.memberships);
                    //return returnResult.forEach(element => <SingleGym name={element.title} url={element.ImageUrl} status="Laukiama pavedimo" ></SingleGym>
                } else {
                    alert(a.message);
                }
            });
    }

    function GetAllGyms() {
        fetch("https://sportsconnectedback.azurewebsites.net/api/gyms",
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
                    //console.log(returnResult);
                    setGyms(returnResult);
                    //return returnResult.forEach(element => <SingleGym name={element.title} url={element.ImageUrl} status="Laukiama pavedimo" ></SingleGym>
                } else {
                    alert(a.message);
                }
            });
    }

    function getOfferData(param) {
        fetch("https://sportsconnectedback.azurewebsites.net/api/offers/",
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(a => {
                if (a.error === false) {
                    const { returnResult } = a;
                    console.log(returnResult);
                    setOffers(returnResult);
                    //return returnResult.forEach(element => <SingleGym name={element.title} url={element.ImageUrl} status="Laukiama pavedimo" ></SingleGym>
                } else {
                    //alert(a.message);
                }
            });
    }


    useEffect(() => {
        GetAllMemberships();
        GetAllGyms();
        getOfferData();
    }, []);

    return (
        <div class="h-100">
            <Card className="text-light modal-header ml-3 h-100">
                <Card.Body >
                    <Card.Title>
                        <h2>NARYSTES</h2>
                    </Card.Title>
                    <Container>
                        <DisplayAllMembership membershipData={memberships} gymData={gyms} offerData={offers}></DisplayAllMembership>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MembershipCard;
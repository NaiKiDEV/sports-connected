import React, { useState, useHistory, useEffect } from 'react';
import { Container, Row, Col, Card, Modal, Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';


function DisplayAllMembership(props) {

    const [membership, setMembership] = useState([]);

    const userId = useSelector(state => state.user.userData.id);

    function deleteMembership(deleteid) {
        const membership = {
            id: deleteid
        }
        fetch("https://sportsconnectedback.azurewebsites.net/api/users/membership/" + deleteid,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: ''
            }
        )
            .then(res => res.json())
            .then(a => {
                if (a.error === false) {
                    window.location.reload();
                } else {
                    alert(a.message);
                }
            });
    }

    function confirmMembership(membership) {
        const membershipUpdate = {
            ...membership,
            isPaid: true
        }
        console.log(membershipUpdate);
        fetch("https://sportsconnectedback.azurewebsites.net/api/users/membership/",
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(membershipUpdate)
            }
        )
            .then(res => res.json())
            .then(a => {
                if (a.error === false) {
                    window.location.reload();
                } else {
                    alert(a.message);
                }
            });
    }

    if (props.membershipData !== undefined) {
        return props.membershipData.map(element => {
            //console.log(returnMembershipData(element.offerId, props.offerData, props.gymData));
            // element.offer.title
            //console.log(element);
            if (element.offer.gym.ownerId === userId) {
                if (element.isPaid) {
                    return <Row>
                        <Col sm={3}>
                            {element.offer.title}
                        </Col>
                        <Col sm={3}>
                            Galioja iki {element.endDate.split("T")[0]}
                        </Col>
                        <Col sm={4}>
                            <span className="text-success text-uppercase">patvirtinta</span>
                        </Col>
                        <Col sm={1}>

                        </Col>
                        <Col sm={1}>
                            <i className="fa fa-close text-danger" onClick={() => deleteMembership(element.id)}></i>
                        </Col>
                    </Row>
                } else {
                    return <Row>
                        <Col sm={3}>
                            {element.offer.title}
                        </Col>
                        <Col sm={3}>
                            Galioja iki {element.endDate.split("T")[0]}
                        </Col>
                        <Col sm={4}>
                            <span className="text-danger text-uppercase">Nepatvirtinta</span>
                        </Col>
                        <Col sm={1}>
                            <i className="fas fa-check text-success" onClick={() => confirmMembership(element)}></i>
                        </Col>
                        <Col sm={1}>
                            <i className="fa fa-close text-danger" onClick={() => deleteMembership(element.id)}></i>
                        </Col>
                    </Row>
                }
            }
        });
    } else {
        return <div></div>
    }

}

//129751da-9475-4223-b193-b2c266109201
function MembershipCard() {

    const [memberships, setMemberships] = useState([]);
    const [gyms, setGyms] = useState([]);
    const [offers, setOffers] = useState([]);
    const userData = useSelector(state => state.user.userData);

    function GetAllMemberships() {
        fetch("https://sportsconnectedback.azurewebsites.net/api/users/membership",
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
                    setMemberships(returnResult);
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
        <div className="h-100">
            <Card className="text-light modal-header ml-3 h-100">
                <Card.Body className="w-100">
                    <Card.Title>
                        <h2>NARYSČIŲ UŽSAKYMAI</h2>
                    </Card.Title>
                    <Container fluid>
                        <DisplayAllMembership membershipData={memberships} gymData={gyms} offerData={offers}></DisplayAllMembership>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MembershipCard;
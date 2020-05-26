import React, { Component, useEffect, useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import SingleGymOffer from './singlegymoffer';
import AddOfferModal from './addOfferModal';


function DisplayOffers(props) {
    return props.offersArray.map(element => <SingleGymOffer key={element.id} id={element.id} title={element.title} description={element.description} price={element.price} ></SingleGymOffer>);
}


function GymOffers() {

    const [offers, setOffers] = useState([]);
    const [addofferModal, setaddofferModal] = useState(false);

    function GetAllOffers() {
        fetch("https://sportsconnectedback.azurewebsites.net/api/offers",
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
                    console.log(returnResult);
                    setOffers(returnResult);
                    //return returnResult.forEach(element => <SingleGym name={element.title} url={element.ImageUrl} status="Laukiama pavedimo" ></SingleGym>
                } else {
                    alert(a.message);
                }
            });
    }

    useEffect(() => {
        GetAllOffers();
    }, []);

    function onModalClick() {
        setaddofferModal(!addofferModal);
    }

    return (
        <div>
            <Card className="text-light modal-header ml-3 px-0 pb-0">
                <Card.Body className="px-0 w-100 pb-0">
                    <Card.Title className="pl-4">
                        <h2>JŪSŲ PASIULYMAI</h2>
                    </Card.Title>
                    <Container fluid className="px-0 offers_height">
                        <DisplayOffers offersArray={offers}></DisplayOffers>
                    </Container>
                    <div className="float-right">
                        <Button variant="link" className="btn-add text-uppercase px-3 my-2" onClick={() => onModalClick()}>
                            Pridėti
                        </Button>
                    </div>
                </Card.Body>
            </Card>
            <AddOfferModal onModalClick={() => onModalClick()}
                isOpen={addofferModal}
                gymId="ec136088-eeba-4c1c-96ce-c6b379d4151d"
            ></AddOfferModal>
        </div>
    )
}

export default GymOffers;
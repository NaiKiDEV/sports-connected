import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


function SingleGymOffer(props) {

    const history = useHistory();

    function deleteOffer() {
        fetch("https://sportsconnectedback.azurewebsites.net/api/offers/" + props.id,
            {
                method: 'DELETE',
                cache: 'no-cache',
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

    return (
        <Row className="pl-4 mb-0 w-100 offers mx-0 py-2">
            <Col sm={6}>
                {props.title}
            </Col>
            <Col sm={3} className="text-right">
                {props.price} €
            </Col>
            <Col sm={3}>
                <div className="float-right pr-2">
                    <i className="fas fa-edit mr-3 offer-edit"></i>
                    <i className="fa fa-close offer-delete" onClick={() => deleteOffer()}> </i>
                </div>
            </Col>
        </Row>
    );
}

export default SingleGymOffer;
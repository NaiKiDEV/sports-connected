import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import SingleGym from './singlegym';
import MembershipCard from './gymAdminMembershipCard';
import GymOffers from './gymoffers';
import GymUserStats from './gymUserStats';
import CourtCard from './courtcard';
import TrainerCard from './trainercard';
import Table from 'react-bootstrap/Table';
import { MDBDataTable } from 'mdbreact';


function DisplayGyms(props) {
  return props.gymArray.map(element => <SingleGym key={element.id} name={element.title} url={element.imageUrl} status="Laukiama pavedimo" ></SingleGym>);
}

function GymCard() {

  const [gyms, setGyms] = useState([]);

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
  const data = {
    columns: [
      {
        label: 'Vardas',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Pavardė',
        field: 'surname',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Telefono numeris',
        field: 'phone',
        sort: 'asc',
        width: 200
      },
      {
        label: 'El. paštas',
        field: 'email',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Sutarties sudarymo data',
        field: 'startdate',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Sutarties pabaigos data',
        field: 'enddate',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Sutarties tipas',
        field: 'type',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Ar sutartis apmokėta',
        field: 'paid',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        name: 'Jonas',
        surname: 'Granauskas',
        phone: '+370 6124230',
        email: 'granauskas@gmail.com',
        startdate: '2019-04-20',
        enddate: '2021-04-20',
        type: 'Visos dienos',
        paid: 'Taip'
      },
      {
        name: 'Petras',
        surname: 'Popovicius',
        phone: '+370 60273210',
        email: 'popovicpetras@gmail.com',
        startdate: '2001-01-09',
        enddate: '2002-01-03',
        type: 'Puse dienos',
        paid: 'Ne'
      },
      {
        name: 'Julijus',
        surname: 'Kazlauskas',
        phone: '+370 66155642',
        email: 'julijus19@gmail.com',
        startdate: '2016-01-09',
        enddate: '2020-01-03',
        type: 'Visos dienos',
        paid: 'Taip'
      }
      ,
      {
        name: 'Iveta',
        surname: 'Malakauskiene',
        phone: '+370 66155642',
        email: 'iveta.mal@gmail.com',
        startdate: '2016-01-09',
        enddate: '2020-01-03',
        type: 'Visos dienos',
        paid: 'Ne'
      }
      ,
      {
        name: 'Irena',
        surname: 'Mazoraite',
        phone: '+370 66155642',
        email: 'mazoraite.iveta@gmail.com',
        startdate: '2016-01-09',
        enddate: '2020-01-03',
        type: 'Puse dienos',
        paid: 'Ne'
      }
      ,
      {
        name: 'Nerijus',
        surname: 'Urbonas',
        phone: '+370 66155642',
        email: 'nerijusart@gmail.com',
        startdate: '2016-01-09',
        enddate: '2020-01-03',
        type: 'Visos dienos',
        paid: 'Taip'
      },
      {
        name: 'Jonas',
        surname: 'Granauskas',
        phone: '+370 6124230',
        email: 'granauskas@gmail.com',
        startdate: '2019-04-20',
        enddate: '2021-04-20',
        type: 'Visos dienos',
        paid: 'Taip'
      },
      {
        name: 'Petras',
        surname: 'Popovicius',
        phone: '+370 60273210',
        email: 'popovicpetras@gmail.com',
        startdate: '2001-01-09',
        enddate: '2002-01-03',
        type: 'Puse dienos',
        paid: 'Ne'
      },
      {
        name: 'Julijus',
        surname: 'Kazlauskas',
        phone: '+370 66155642',
        email: 'julijus19@gmail.com',
        startdate: '2016-01-09',
        enddate: '2020-01-03',
        type: 'Visos dienos',
        paid: 'Taip'
      }
      ,
      {
        name: 'Iveta',
        surname: 'Malakauskiene',
        phone: '+370 66155642',
        email: 'iveta.mal@gmail.com',
        startdate: '2016-01-09',
        enddate: '2020-01-03',
        type: 'Visos dienos',
        paid: 'Ne'
      }
      ,
      {
        name: 'Irena',
        surname: 'Mazoraite',
        phone: '+370 66155642',
        email: 'mazoraite.iveta@gmail.com',
        startdate: '2016-01-09',
        enddate: '2020-01-03',
        type: 'Puse dienos',
        paid: 'Ne'
      }
      ,
      {
        name: 'Nerijus',
        surname: 'Urbonas',
        phone: '+370 66155642',
        email: 'nerijusart@gmail.com',
        startdate: '2016-01-09',
        enddate: '2020-01-03',
        type: 'Visos dienos',
        paid: 'Taip'
      }
    ]
  };
  return <Container fluid className="mt-5 mb-5">
    <Card className="text-light modal-header">
      <Card.Body className="pb-0">
        <Card.Title>
          <h2>GYM ADMIN</h2>
        </Card.Title>
      </Card.Body>
    </Card>
    <Container fluid className="mt-5 mb-5">
      <Row>
        <Col md={{ span: 4 }}>
          <MembershipCard />
        </Col>
        <Col md={{ span: 4 }}>
          <GymUserStats />
        </Col>
        <Col md={{ span: 4 }}>
          <GymOffers />
        </Col>
      </Row>
    </Container>
    <MDBDataTable
      striped
      borderless
      entriesLabel='Rodyti'
      info={false}
      searchLabel='Paieška'
      paginationLabel={['Praeitas', 'Sekantis']}
      noRecordsFoundLabel="Nerasta elementų"
      data={data}
    />
  </Container >
}


export default GymCard;
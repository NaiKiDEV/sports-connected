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
  const [memberships, setMemberships] = useState([]);
  const [filteredMemb, setFilteredMemb] = useState([]);

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

  function GetAllMemberships(gymId) {
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
          console.log(returnResult);
          setMemberships(returnResult);

          //return returnResult.forEach(element => <SingleGym name={element.title} url={element.ImageUrl} status="Laukiama pavedimo" ></SingleGym>
        } else {
          alert(a.message);
        }
      }).then(() => formTable()
      );
  }

  useEffect(() => {
    GetAllGyms();
    GetAllMemberships();
  }, []);

  useEffect(() => {
    formTable();
  }, [memberships]);

  const [tableData, setTableData] = useState({
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
    rows: []
  });

  function formTable() {
    //debugger
    const tempArray = tableData.rows;
    memberships.forEach(element => {
      //debugger
      if (element.offer.gymId === "ec136088-eeba-4c1c-96ce-c6b379d4151d") {
        setFilteredMemb({ ...filteredMemb, element });
        //debugger
        tempArray.push({
          name: element.user.name,
          surname: element.user.surname,
          phone: element.user.phoneNumber,
          email: element.user.email,
          startdate: element.startDate,
          enddate: element.startDate,
          type: element.offer.title,
          paid: element.isPaid.toString()
        });

      }
    });
    //console.log(data.rows, "cia rowai");
    setTableData({
      ...tableData, rows: tempArray
    });
  }


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
      data={tableData}
    />
  </Container >
}


export default GymCard;
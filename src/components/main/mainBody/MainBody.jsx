import React from 'react'
import './MainBody.css'
import { Col, Container, Row } from 'react-bootstrap'
import Sidebar from './sidebar/Sidebar'
import Courses from './courses/Courses'
import MainDesk from './mainDesc/MainDesk'

export default function MainBody() {
  return (
    <>
      <Container fluid className='mainbody__container'>
        <Row>
          <Col xs={3}>
            <Sidebar />
          </Col>
          <Col xs={9}>
            <Courses className='courses' />
          </Col>
        </Row>
      </Container>
      <MainDesk />
    </>
  )
}

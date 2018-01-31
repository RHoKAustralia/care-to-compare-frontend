import React from 'react'
import { FormGroup, Row, Col } from 'react-bootstrap'

const FieldGroup = ({ controlId, label, field, helpBlock }) => {
  return (
    <FormGroup controlId={controlId}>
      <Row>
        <Col xs={12}>{label}</Col>
      </Row>
      <Row>
        <Col md={7}>{field}</Col>
      </Row>
      <Row>
        <Col xs={12}>{helpBlock}</Col>
      </Row>
    </FormGroup>
  )
}

export default FieldGroup

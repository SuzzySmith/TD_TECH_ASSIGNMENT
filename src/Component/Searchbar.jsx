import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function Searchbar() {
  return (
   
      <InputGroup className=" pt-4 ">
        <Form.Control
        className="border border-0 shadow-sm p-3 mb-5 bg-body-tertiary "
          placeholder="What will you eat?"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2" style={{backgroundColor : "#ED7227"}}
        className="border border-0 shadow-sm p-3 mb-5 bg-body-tertiary searchbar">
        <i className="bi bi-search" ></i>
        </Button>
      </InputGroup>

  )
}

export default Searchbar
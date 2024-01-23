import React from 'react'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'


const DropdownActionbar = ({ actionItems }) => {
    console.log(actionItems)

   

  
    const handleAction = (actioncall) => {
        actioncall.action()
      }
    return (
        <div>
            <Container fluid>
                <div className='actionBlock'>
                    <Row>
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    select items
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {actionItems.length > 0 && actionItems.map((items, index) => (
                                        <Dropdown.Item key={index} onClick={() => handleAction(items)}>{items.actionTitle}</Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </div>
            </Container>


        </div>
    )
}

export default DropdownActionbar

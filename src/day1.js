import { logDOM } from "@testing-library/react";
import react from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";





const day1  = () => {
    return(
        
        <>
        
        <Card style={{ width: '200rem' }}>
  <Card.Header>Featured</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
</Card>
       
       
        </>

        
        
    );
}
 export default day1
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Gambar1 from '../spb.jpg'; // Nama variabel berbeda
import Gambar2 from '../kitty1.jpg'; // Nama variabel berbeda
import Gambar3 from '../kitty2.jpg'; // Nama variabel berbeda
import Row from 'react-bootstrap/Row'; // Import Row dari Bootstrap

function ContohCard() {
  return (
    <Row>
      <div style={{ padding: '10px' }} className="col-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Gambar1} /> {/* Menggunakan Gambar1 */}
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title
              and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      
      <div style={{ padding: '10px' }} className="col-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Gambar2} /> {/* Menggunakan Gambar2 */}
          <Card.Body>
            <Card.Title>Additional Card</Card.Title>
            <Card.Text>
              This is some additional content for another card.
            </Card.Text>
            <Button variant="primary">Explore</Button>
          </Card.Body>
        </Card>
      </div>
      
      <div style={{ padding: '10px' }} className="col-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Gambar3} /> {/* Menggunakan Gambar3 */}
          <Card.Body>
            <Card.Title>Additional Card</Card.Title>
            <Card.Text>
              This is some additional content for another card.
            </Card.Text>
            <Button variant="primary">Explore</Button>
          </Card.Body>
        </Card>
      </div>
    </Row>
  );
}

export default ContohCard;

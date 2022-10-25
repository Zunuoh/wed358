import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img
          className="caurosel"
          src="https://images.pexels.com/photos/1417255/pexels-photo-1417255.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="caurosel"
          src="https://images.pexels.com/photos/752842/pexels-photo-752842.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="caurosel"
          src="https://images.pexels.com/photos/288008/pexels-photo-288008.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default UncontrolledExample;
import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const Nested = () => {
  return (
    <>
      {/* Nested Start */}
      <div className={'w-full py-5 my-2'}>
        <h1 className={'text-center p-4'}>Well Nested Function</h1>
        <div className={'antialiased flex items-center justify-center gap-4 p-2'}>
          <div className={'max-w-md w-full'}>
            <Card>
              <Card.Title> Hello Word</Card.Title>
              <Card.Body>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas deleniti dicta doloribus laboriosam,
                neque obcaecati quos maiores voluptatibus cum velit.
              </Card.Body>
              <Card.Footer>
                <Button>Read More</Button>
              </Card.Footer>
            </Card>
          </div>
          <div className={'max-w-md w-full'}>
            <Card>
              <Card.Title> Hello Word</Card.Title>
              <Card.Body>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas deleniti dicta doloribus laboriosam,
                neque obcaecati quos maiores voluptatibus cum velit.
              </Card.Body>
              <Card.Footer>
                <Button>Read More</Button>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
      {/* Nested End */}
    </>
  );
};

export default Nested;

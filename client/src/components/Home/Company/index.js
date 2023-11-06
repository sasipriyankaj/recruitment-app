import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const Company = () => {
   render() {
    const backgroundImageUrl =
      'https://img.freepik.com/free-vector/recruitment-agency-searching-job-applicants_1262-19873.jpg?w=996&t=st=1698990045~exp=1698990645~hmac=8d3ffe62f92f26a83029bdbd9609665c2f4e87a79f925f38316b2fa4804d8706';

    const bodyStyle = {
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      height: '100vh',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
    };
  return (
    <Container>
      <Card className="shadow-sm">
        <Card.Body>
          <h1>Company Home</h1>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Company;

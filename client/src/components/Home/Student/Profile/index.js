import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';

const Profile = ({
  firstName,
  lastName,
  email,
  address,
  phone,
  coverLetter,
  gender,
  resume, // Add resume
}) => {
  const navigate = useNavigate();

  return (
    <Container className="col-md-4">
      <Card className="shadow-sm">
        <Card.Header as="h2" className="text-center">
          Profile
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="firstName" className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control readOnly type="text" name="firstName" value={firstName} />
            </Form.Group>
            <Form.Group controlId="lastName" className "mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control readOnly type="text" name="lastName" value={lastName} />
            </Form.Group>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control readOnly type="text" name="email" value={email} />
            </Form.Group>
            <Form.Group controlId="address" className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control readOnly type="text" name="address" value={address} />
            </Form.Group>
            <Form.Group controlId="phone" className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control readOnly type="text" name="phone" value={phone} />
            </Form.Group>
            <Form.Group controlId="coverLetter" className="mb-3">
              <Form.Label>Cover Letter</Form.Label>
              <Form.Control as="textarea" rows={4} readOnly name="coverLetter" value={coverLetter} />
            </Form.Group>
            <Form.Group controlId="gender" className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Control readOnly type="text" name="gender" value={gender} />
            </Form.Group>
            {resume && (
              <div>
                <Form.Label>Resume</Form.Label>
                <a href={resume} download>
                  Download Resume
                </a>
              </div>
            )}
            <Button variant="success" onClick={() => navigate(ROUTES.PROFILE_EDIT)}>
              Edit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

Profile.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  coverLetter: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  resume: PropTypes.string, // Update the prop type for resume
};

export default Profile;

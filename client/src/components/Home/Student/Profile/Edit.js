import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';

const Edit = ({
  firstName,
  lastName,
  email,
  address,
  coverLetter,
  gender,
  resume, // Add resume
  handleChange,
  handleSubmit,
  handleResumeUpload, // Add handleResumeUpload function
  isProcessing,
  error,
  dismissAlert,
}) => {
  const navigate = useNavigate();

  return (
    <Container className="col-md-4">
      <Card className="shadow-sm">
        <Card.Header as="h2" className="text-center">
          Edit Profile
        </Card.Header>
        <Card.Body>
          <Alert
            variant="danger"
            show={error}
            dismissible
            onClose={dismissAlert}
          >
            {error}
          </Alert>
          <Form.Group controlId="resume" className="mb-3">
          <Form.Label>Resume</Form.Label>
          <Form.Control
        type="file"
      name="resume"
            onChange={handleResumeUpload}
      disabled={isProcessing}
    />
          </Form.Group>

            <Button
              className="me-2"
              variant="success"
              type="submit"
              disabled={isProcessing}
            >
              {isProcessing ? 'Updating...' : 'Update'}
            </Button>
            <Button
              variant="light"
              onClick={() => navigate(ROUTES.PROFILE)}
              disabled={isProcessing}
            >
              Cancel
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

Edit.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  coverLetter: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  resume: PropTypes.object, // Update the prop type for resume
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleResumeUpload: PropTypes.func.isRequired, // Add the prop type for resume upload
  isProcessing: PropTypes.bool.isRequired,
  error: PropTypes.string,
  dismissAlert: PropTypes.func.isRequired,
};

export default Edit;
import React, { useState } from 'react';

// Inside your component or a parent component
const [resumeFile, setResumeFile] = useState(null);

const handleResumeUpload = (e) => {
  const selectedFile = e.target.files[0];
  setResumeFile(selectedFile);
};

// Pass `handleResumeUpload` and `resumeFile` to the `Profile` component as props
<Profile
  // Other props...
  resume={resumeFile}
  handleResumeUpload={handleResumeUpload}
  // Other props...
/>

import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Company from '../../../components/Home/Company/Lazy';
import StudentsContainer from './StudentsContainer/Lazy';
import JobsContainer from './JobsContainer/Lazy';
import NewContainer from './JobsContainer/NewContainer/Lazy';
import ProfileContainer from './ProfileContainer/Lazy';
import EditContainer from './ProfileContainer/EditContainer/Lazy';
import NotFound from '../../../components/NotFound/Lazy';

class CompanyContainer extends Component {
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
      <body style={bodyStyle}>
        <Routes>
          <Route index element={<Company />} />
          <Route path="students" element={<StudentsContainer />} />
          <Route path="jobs" element={<JobsContainer />} />
          <Route path="jobs/new" element={<NewContainer />} />
          <Route path="profile" element={<ProfileContainer />} />
          <Route path="profile/edit" element={<EditContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </body>
    );
  }
}

export default CompanyContainer;

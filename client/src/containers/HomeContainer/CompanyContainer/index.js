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
      'https://static.vecteezy.com/system/resources/previews/005/367/549/non_2x/illustration-of-resume-paper-with-magnifying-glass-suitable-for-design-element-of-job-vacancy-poster-recruitment-agency-website-background-and-resume-builder-service-vector.jpg';

    const companyStyle = {
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    };

    return (
      <div style={companyStyle}>
        <Routes>
          <Route index element={<Company />} />
          <Route path="students" element={<StudentsContainer />} />
          <Route path="jobs" element={<JobsContainer />} />
          <Route path="jobs/new" element={<NewContainer />} />
          <Route path="profile" element={<ProfileContainer />} />
          <Route path="profile/edit" element={<EditContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

export default CompanyContainer;

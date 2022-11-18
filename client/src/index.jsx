import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Home from './pages/Home.jsx';

import ClubAdminProfilePage from './pages/ClubAdminProfilePage.jsx'
import Clubs from './pages/Clubs.jsx'
import AllClubs from './pages/AllClubs.jsx'
import CreateEvent from './pages/CreateEvent.jsx'
import LoginPage from './pages/LoginPage.jsx';
import Navbar from './pages/NavBar.jsx';
import Events from './pages/Events.jsx';
import RegisterForm from './pages/RegisterForm.jsx'
import ClubAdminMain from './pages/ClubAdminMain.jsx';
import PositionCreate from './pages/PositionCreate.jsx'
import Positions from './pages/Positions.jsx';
import NewAnnouncement from './pages/NewAnnouncement.jsx';
import MyClubs from './pages/MyClubs.jsx';
import ClubRegisterReq from './pages/ClubRegisterReq.jsx';
import NewClubReqConfirmation from './pages/NewClubReqConfirmation.jsx';
import SCSUclubreview from './pages/SCSUclubreview.jsx';
import SCSUConfirmation from './pages/SCSUConfirmation.jsx';
import SCSUClubs from './pages/SCSUClubs.jsx'
import MyAccounts from './pages/MyAccounts.jsx';

ReactDOM.render(
  (
    <Router>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Helmet>
      <Navbar />
      {/* Add global elements like navbar outside the switch */}
      <Routes>
        <Route exact path={"/club-admin-profile"}
          element={<ClubAdminProfilePage email="email" description="description" phoneNumber="1234567890" clubName="Club Name" />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/club-register" element={<ClubRegisterReq />} />
        <Route path="/club-signup-confirmation" element={<NewClubReqConfirmation />} />
        <Route path="/SCSUclubreview" element={<SCSUclubreview />} />
        <Route path="/SCSUConfirmation" element={<SCSUConfirmation />} />
        <Route path="/SCSUClubs" element={<SCSUClubs />} />

        <Route exact path="/clubs" element={<Clubs />} />
        <Route path="/clubMain" element={<ClubAdminMain />} />
        <Route exact path="/allclubs" element={<AllClubs />} />
        <Route exact path="/create-event" element={<CreateEvent />} />
        <Route exact path="/new-announcement" element={<NewAnnouncement />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/MyAccount" element={<MyAccounts />} />
        <Route exact path="/register" element={<RegisterForm />} />
        <Route path="/events" element={<Events />} />
        <Route exact path="/create-position" element={<PositionCreate />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/my-clubs" element={<MyClubs />} />
        <Route path="/" element={<AllClubs />} />
      </Routes>
    </Router>
  ),
  document.getElementById('root'),
);
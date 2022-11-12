import React, { Component } from "react";
import axios from 'axios';
import PositionCard from "./PositionCard.jsx";
import { useEffect,useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import { PostAddSharp } from "@mui/icons-material";
import '../styles.css';

/**
 * A component used for browsing job listings.
 * @component
 */

class Positions extends Component{

  state = {
    jobPosition: '',
    clubName: '',
    email: '',
    positions: []
  };

  componentDidMount = async () => {
    await this.getPositionInfo();
  };

  getPositionInfo = () => {
    return axios.get('http://127.0.0.1:5001/positions')
      .then((response) => {
        const data = response.data;
        this.setState({ positions: data})
        console.log('Data has been received!');
      })
      .catch(() => {
        alert('Error receiving data!');
      });
  }

  /**
   * Used to display job info from the db
   * @param {Positions} positions - information containing basic job listings
   */

  displayPositionInfo = (positions) => {
    if (!positions.length) return null;
    return positions.map((position, index) => (
      
      <Grid item sx={{ m: 2 }} key={index}>
        <PositionCard key={index} eImage={position.clubImage} ePosition={position.jobPosition} cName={position.clubName} eMail={position.email}></PositionCard>
      </Grid>
    ));
  }

  render() {
    console.log('State: ', this.state);
    return(

      <Container sx={{m: "120px auto 40px auto"}} maxWidth="lg">
        <Typography  gutterBottom variant="h2" align="center">Browse Job Listings</Typography>
      <Grid container>
          {this.displayPositionInfo(this.state.positions)}
      </Grid>
      </Container>
    )
  }
}

export default Positions;
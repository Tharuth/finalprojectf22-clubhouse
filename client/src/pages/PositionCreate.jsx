import React, { Component } from "react";
import { Typography, Container, makeStyles } from '@material-ui/core/';
import PositionForm from "./PositionForm.jsx";

const useStyles = makeStyles({
  container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: '120px auto 48px auto',
  },
});

/**
* Component for displaying a form to create a new event.
* @component
*/
const PositionCreate = () => {

  const classes = useStyles();

  return (
      <Container className={classes.container}>
          <Typography variant="h2" gutterBottom align="center">
              Create a New Job Posting
          </Typography>
          <PositionForm />
      </Container>
  );
}

export default PositionCreate;
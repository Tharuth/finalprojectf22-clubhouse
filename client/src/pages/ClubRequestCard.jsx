import * as React from 'react';
import { CardActions, Box, Button, Card, CardContent, Typography, Collapse, IconButton, DialogTitle, DialogContentText, DialogContent, DialogActions, Dialog} from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import EventTag from "./EventTag.jsx"
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

/**
 * Display fetched information in a card
 * @param {*} props 
 * @component
 */
export default function ClubRequestCard(props) {

  // const [password, setPassword] = useState('');
  
  /**
   * generate a random password and set it to variable password
   */
  // useEffect(() => {
  //   const generatePassword = async ()=>{
  //     const randomPassword =
  //     Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  //     setPassword(randomPassword);
  //     };
  //     generatePassword();
  //   },[]);
    
    const navigate = useNavigate();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [open, setOpen] = React.useState(false);
    const [openDeny, setOpenDeny] = React.useState(false);
    const [openDenyConfirm, setOpenDenyConfirm] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClickOpenDeny = () => {
      setOpenDeny(true);
    };

    const handleClose = (props) => {
      setOpen(false);
    };

    const handleCloseDeny = () => {
      setOpenDeny(false);
    };

  return (
    <Card sx={{ width: 800 }} raised >
    <Box display="flex">
      <CardContent sx={{ flexGrow: 1, minWidth: 350 }}>
        <Typography gutterBottom variant="h7" component="h2">{props.cName} </Typography>  
      </CardContent>
     
      <CardActions>
         <Button variant="contained" size="small" onClick={handleClickOpen}>Approve</Button>
         <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title" fontSize="17px">
              {"The following approval email will be sent to the club."}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description" >
                <Typography gutterBottom>
                  Dear {props.cName},
                </Typography>
                <Typography gutterBottom paragraph>
                We wish to inform you that your registration request has been approved. 
                You can use the following credentials to log in.  
                </Typography>
                <Typography  color="primary">
                email: {props.cEmail}
                </Typography>
                <Typography  gutterBottom color="primary">
                password: {props.cPass}  
                </Typography>
                <Typography gutterBottom>
                Best, 
                </Typography>
                <Typography>
                SCSU 
                </Typography>

              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              
              <Button onClick={() => {
                setOpen(false);
                //create a club and add it to the db
                const clubName = props.cName;
                const clubPhone = props.cPhone;
                const email = props.cEmail;
                const clubDesc = props.cDesc;
                const image = "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png";
                const clubTags = props.cTags;
                const text = "Dear " + props.cName + ", \n\n" + "We wish to inform you that your registration request has been approved.  You can use the following credentials to log in.\n\n" + "email: " + props.cEmail + "\n" + "password: " + password + "\n\n" + 
                "Best, \nSCSU";
                const newClub = { email, clubName, clubPhone, clubDesc, image, clubTags, text};
                fetch('http://localhost:5001/clubs/create', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newClub)
                }).then(() => {

                }).catch((err) => {
                    console.log(err);
                })
                
                //delete the club from the clubrequests db
                fetch('http://localhost:5001/clubrequestdel/' + props.cKey, {method: 'DELETE'}).then(() => {

                }).catch((err) => {
                    console.log(err);
                })

                //add login credentials to the users db
                const name = props.cName;
                const password = props.cPass;
                const accountType = 'club';
                const newClubLogin = { email, password, name, accountType};
                console.log(newClubLogin);
                fetch('http://localhost:5001/logincreate', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newClubLogin)
                }).then(() => {

                }).catch((err) => {
                    console.log(err);
                })

                navigate("/SCSUConfirmation");
              }} autoFocus  > Confirm</Button>
            </DialogActions>
          </Dialog>
         <Button variant={openDenyConfirm ? "outlined": "contained"} size="small" onClick={handleClickOpenDeny}>{openDenyConfirm ? "Rejected" : "Reject"}</Button>
         <Dialog
            open={openDeny}
            onClose={handleCloseDeny}
            aria-labelledby="alert-dialog-title2"
            aria-describedby="alert-dialog-description2"
          >
            <DialogTitle id="alert-dialog-title2" fontSize="17px">
              {"The following rejection email will be sent to the club."}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description2">
              <Typography gutterBottom>
                  Dear {props.cName},
                </Typography>
                <Typography gutterBottom paragraph>
                We wish to inform you that your registration request has been rejected. 
                </Typography>
                <Typography gutterBottom>
                Best, 
                </Typography>
                <Typography>
                SCSU 
                </Typography>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDeny} >Cancel</Button>
              <Button onClick={()=>{
                setOpenDeny(false);

                //delete the club from the club-requests database
                const text = "Dear " + props.cName + ", \n\n We wish to inform you that your registration request has been rejected. \n\n Best, \nSCSU"
                const email = props.cEmail;
                console.log(email);
                const del = {text, email}
                fetch('http://localhost:5001/clubrequestdel/' + props.cKey, {method: 'DELETE', 'body': JSON.stringify(del)}).then(() => {

                }).catch((err) => {
                    console.log(err);
                })
                navigate("/SCSUConfirmation");
              }} autoFocus >Confirm</Button>
            </DialogActions>
          </Dialog>
       </CardActions>
    </Box>
    
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="more info"
        >
        <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent> 
          <Typography >Email address: {props.cEmail}</Typography>
          <Typography >Phone number: {props.cPhone}</Typography>
          <Typography >Club description: {props.cDesc}</Typography>
          <Box display="inline-flex" flexWrap="wrap" mt="20px"> 
            {(props.cTags).map((tag) => (
              <EventTag data={tag}/> 
            ))}
          </Box>
        </CardContent>
      </Collapse>

    </Card>
  );
}

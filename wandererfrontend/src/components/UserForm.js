import * as React from 'react';
import { useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LocationForm from './LocationForm.js'
import Dialog from '@mui/material/Dialog'; 
import DialogTitle from '@mui/material/DialogTitle'; 
import DialogContent from '@mui/material/DialogContent'; 
import DialogContentText from '@mui/material/DialogContentText'; 
import DialogActions from '@mui/material/DialogActions'; 
import '../style/UserForm.css';

export default function UserForm() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [origin, setOrigin] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const handleOriginChange = (location) => {
    setOrigin(location);
  };

  const openSubmitDialog = () => {
    setOpenDialog(true);
  };
  const closeSubmitDialog = () => {
    setOpenDialog(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const wanderer={firstName, lastName, origin};
    console.log(wanderer);

    /*Add new wanderer*/
    fetch("http://localhost:8080/wanderers/marker", {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(wanderer)
      }).then((response) => {
        if (response.ok) {
          console.log("Marker sent successfully");
        } else {
          console.error("Marker failed");
        }
    });

    openSubmitDialog();

    /*Reset state*/
    setFirstName("");
    setLastName("");
    setOrigin("");

  };


  return (
    <div className='userform-container'>
        <TextField
          id="clickable-element"
          className="text"
          label="First Name"
          placeholder="Ex. Joe"
          multiline
          variant="standard"
          name = "firstName"
          value = {firstName} onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          id="clickable-element"
          className="text"
          label="Last Name"
          placeholder="Ex. Doe"
          multiline
          variant="standard"
          name = "lastName"
          value = {lastName} onChange={(e) => setLastName(e.target.value)}
        />
        <LocationForm 
          onLocationSelect={handleOriginChange}
        />

        <Button className="button" variant="outlined"
          onClick={handleFormSubmit}
          >Submit
        </Button>

        <Dialog open={openDialog} onClose={closeSubmitDialog}>
        <DialogTitle>Marker Placed</DialogTitle>
        <DialogContent>
          <DialogContentText>Welcome stanger to the wandering list!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeSubmitDialog} color="primary">
            cool!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
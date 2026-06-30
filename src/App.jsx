import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import './App.css'
import DataCard from './DataCard'
import dogs from "./dogs.json";


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';

import Modal from '@mui/material/Modal';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import { useState } from 'react';
import TextField from '@mui/material/TextField';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


import Forms from './Forms';

function App() {
  //States
  //Handler -> 1 to handle email and whars a email
  //Returns

  //const [counter, setCounter] = useState(0);
  const [selectedDog, setSelectedDog] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const handleOpen = (dog) => setSelectedDog(dog);
  const handleClose = () => setSelectedDog(null);

  console.log("Current Search Query state:", searchQuery);
  const filteredDogs = dogs.filter((dog) => {
    // Convert text to lowercase 
    const matchesName = dog.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesName;
  });
 
  return (
    <>
      <Container maxWidth="md" sx={{ mb: 4 }}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ py: 2 }}
        >
          Foster Dogs! 
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mx: 10 }}
        >
        </Typography>
        
      </Container>
      <Forms />

      <Box
        component="form"
        sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}
        noValidate
        autoComplete="off"
      >
       <TextField 
          id="outlined-basic" 
          label="Search Dogs..." 
          variant="outlined" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} 
          fullWidth //this make it full width 
        />
      </Box>

      <Modal
        open={Boolean(selectedDog)}
        onClose={handleClose}
        aria-labelledby="modal-title"
      >
      <Box sx={style}>
        {selectedDog && (
          <>
            <CardMedia
              component="img"
              height="350px"
              src={selectedDog.imageURL}
              alt={selectedDog.name}
            />
            <CardContent sx={{ p: 3 }}>
              <Typography id="modal-title" variant="h4" component="h2" gutterBottom>
                Meet {selectedDog.name}!
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                <strong>Age:</strong> {selectedDog.age} years old
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                <strong>Size:</strong> {selectedDog.size}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                <strong>Gender:</strong> {selectedDog.gender}
              </Typography>
                
              {/* <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                <Button variant="contained" color="primary">
                  Apply to Foster
                </Button>
                <Button variant="outlined" onClick={handleClose}>
                  Close
                </Button>
              </Box> */}
              </CardContent>
            </>
          )}
      </Box>
      </Modal>

      <Box sx={{ width: '100%', px: 4 }}>
        <Grid spacing={4} container>
          {filteredDogs.map((dog) => (
            <Grid size={4} key={dog.id}>
              <DataCard
                name={dog.name}
                imageURL={dog.imageURL}
                age={dog.age}
                size={dog.size}
                gender={dog.gender}
                onCardClick={() => handleOpen(dog)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

    </>
  );
}

export default App


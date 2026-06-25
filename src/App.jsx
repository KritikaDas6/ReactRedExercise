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


import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import { useState } from 'react';

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






function App() {

  const [counter, setCounter] = useState(0);
  return (
  

    <>

    {/* //header */}
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





      <Button
          variant="contained"
          sx={{ px: 6, mx: "auto" }}
          onClick={() => {
            setCounter(counter + 1);
            console.log("You clicked me!", {counter});
          }}
        > Click Me
      </Button>

      {/* <Typography variant="h5">
        Clicks so far: {counter}
      </Typography> */}

   
      <Grid spacing={4} container>

        {dogs.map((dog) => (
          <Grid>
            <DataCard
              name={dog.name}
              imageURL={dog.imageURL}
              age= {dog.age}
              size= {dog.size}
              gender= {dog.gender}
            />
          </Grid>
        ))}
      </Grid>


    </>

    
  )

}

export default App


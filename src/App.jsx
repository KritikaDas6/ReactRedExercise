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

import motleyImage from './assets/motley.png';
import NilaImage from './assets/Nila.png';
import harrisImage from './assets/harris.png';
import gilbertImage from './assets/gilbert.png';

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


// import characters from './protagonists.json'

function App() {
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
{/* 
      <Container maxWidth="lg"> 
        <Button variant="contained" color="error" className="characterButton">

            Red Button?
  
        </Button>
      </Container> */}


     {/* //cards */}
     <Box sx={{ width: '100%' }}>
     <Grid container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
         <Grid size={4}>
          <DataCard 
                imageURL="/src/assets/Nila.png"
                name="Nila"
                age={2}
                size="large"
                gender="male"
              />
        </Grid>
      

         <Grid size={4}>
               
              <DataCard 
                imageURL={"/src/assets/harris.png"}
                name="Harris"
                age={2}
                size="large"
                gender="male"
              />
        </Grid>

         {/* <Grid size={4}> */}
          {/* {/* <Item>
            {/* <Card sx={{ maxWidth: 345 }}> */}
              {/* <CardMedia
                sx={{ height: 400 }}
                image={gilbertImage}
                title="blue iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Gilbert
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            {/* </Card> */}

          {/* </Item>  */}

          <Grid size={4}>
          <DataCard
            imageURL={motleyImage}
            name = {"Motley"}
            age = {5}
            size = {"small"}
            gender = {"male"}
          />
        </Grid> 
     

        <Grid size={4}>
          <DataCard
            imageURL={gilbertImage}
            name = {"Gilbert"}
            age = {5}
            size = {"small"}
            gender = {"male"}
          />
        </Grid> 



      </Grid>
    </Box>





      
    
    </>

    
  )
}

export default App
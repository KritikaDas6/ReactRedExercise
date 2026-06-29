import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';

export default function DataCard({ imageURL, name, age, size, gender, onCardClick}) {
  return (
    <Card sx={{ maxWidth: 445, cursor: 'pointer' }} onClick={onCardClick}> 
      
      <CardMedia component="img" height="400px" image={imageURL} title = {name} />
      <CardContent sx={{ pt: 3 }}>
        <Typography gutterBottom variant="h5" component="div">
                {name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
            Age: {age}
        </Typography>
          
        <Typography variant="body2" color="text.secondary">
            Size: {size} | Gender: {gender}
      </Typography>

      </CardContent>
    </Card>
  );
}   
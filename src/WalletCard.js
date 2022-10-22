import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './WalletCard.css';

export default function MediaCard({pageLink,Heading,discription}) {
  // console.log(pageLink);
  // console.log(Heading);
  // console.log(discription);
  let imgUrl = discription;
  imgUrl=imgUrl.split("<img");
  imgUrl=imgUrl[1].split("src=\"");
  imgUrl=imgUrl[1].split("\"");
  imgUrl=imgUrl[0];
  console.log(imgUrl);
  return (
   
    <Card sx={{ maxWidth:9000  }}>
      <CardMedia
        component="img"
        height="140"
        image={imgUrl}
        alt={Heading}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {Heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
      {Heading}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={pageLink} size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

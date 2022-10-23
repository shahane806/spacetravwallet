import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './WalletCard.css';
import { DataLayerContextValue } from './datalayer';
export default function MediaCard({item}) {
  let[{count},dispatch] = DataLayerContextValue();
  function countF(){
    count+=1;
    // console.log(count);
    dispatch({
      type:"SET_COUNT",
      count:count,
    });
  }

  let imgUrl = item.content;
  imgUrl=imgUrl.split("<img");
  imgUrl=imgUrl[1].split("src=\"");
  imgUrl=imgUrl[1].split("\"");
  imgUrl=imgUrl[0];
  // console.log(imgUrl);
  return (
   <div className='walletCardDiv'>

    <Card sx={{width:400 }} >
      <CardMedia
        component="img"
        height="140"
        image={imgUrl}
        alt={item.title}
        />
      <CardContent >
        <Typography gutterBottom variant="h5"  component="div">
         {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
      {item.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={countF} href={item.url} size="small">Learn More</Button>
      </CardActions>
    </Card>
        </div>
  );
}

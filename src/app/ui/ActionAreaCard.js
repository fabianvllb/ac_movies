import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import styles from './ActionAreaCard.module.css';


export default function ActionAreaCard(props) {
  const { imageUrl, imageAlt, title, score } = props;

  var scoreIcon;
  var scoreIconAlt;

  if (score < 60) {
    scoreIcon = 'https://docs-assets.developer.apple.com/published/94095adab2dbf237fdb79d39f2a13157/rotten-tomatoes-rating-icons-2@2x.png'
    scoreIconAlt = 'rotten icon'
  } else if (60 < score && score < 75) {
    scoreIcon = 'https://docs-assets.developer.apple.com/published/9426fd70cb3c493b0384adcb72bff351/rotten-tomatoes-rating-icons-1.png'
    scoreIconAlt = 'fresh icon'
  } else {
    scoreIcon = 'https://docs-assets.developer.apple.com/published/0d9755fc21f147837c514a9b34e706d7/rotten-tomatoes-rating-icons-3@2x.png'
    scoreIconAlt = 'certified fresh icon'
  }

  return (
    <Card variant='outlined' sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={imageUrl}
          alt={imageAlt}
        />
        <CardContent sx={{ padding: '7px 17px' }}>
          <div className={styles['card-title']}>
            <img src={scoreIcon} alt={scoreIconAlt} width="20" height="20" />
            <p className={styles.rating}>{score}%</p>
            <Typography sx={{ display: 'none' }} variant="h6" color="text.primary">
              {score}
            </Typography>
          </div>
          <Typography variant="body1" color="text.primary">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card >
  );
}
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
            <svg className={styles.scoreIcon} viewBox='0 0 295 305'>
              <path fill='#FA320A' d='M33.2,89.1c-22.1,23.1-34.6,54.7-32.1,94c5,80.3,80.3,126.3,156,121.5c75.8-4.7,142.9-59.5,137.9-139.9 c-2.9-47.3-27-82.6-63.2-102.4L128.4,49.8L33.2,89.1z'></path>
              <path fill='#00912D' d='M156.9,43.1c15.6-3.7,60.4-0.4,74.7,18.7c0.9,1.1-0.4,3.3-1.7,2.7c-23.7-10.3-63.8,23.1-91.8,5.6 c0.2,6.3-1,37-44.3,38.8c-1,0-1.6-1-0.9-1.7c5.8-6.6,11.6-23.3,3.2-32.2C76.5,92.4,65.9,98.1,23.4,86.6c-1.4-0.4-0.9-2.6,0.6-3.2 c8-3.1,26.2-16.5,43.5-22.5c3.3-1.1,6.5-2,9.7-2.5c-19-1.7-27.5-4.3-39.6-2.5c-1.3,0.2-2.2-1.3-1.4-2.4 c16.3-20.9,46.2-27.3,64.7-16.1C89.4,23.3,80.5,12,80.5,12l21.1-12c0,0,8.7,19.5,15.1,33.7c15.7-23.2,45-25.4,57.3-8.9 c0.7,1,0,2.4-1.3,2.3c-10.1-0.2-15.6,8.9-16,15.9L156.9,43.1z'></path>
            </svg>
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
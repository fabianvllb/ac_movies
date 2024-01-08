'use client'
import * as React from 'react';
import styles from './ActionAreaCard.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Modal from '@mui/material/Modal';
import Link from 'next/link'
import { Container } from '@mui/material';

export default function ActionAreaCard(props) {
  const { movieId, imageUrl, imageAlt, title, score, trailerUrl } = props;
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const modalRef = React.useRef(null);

  var scoreIcon;
  var scoreIconAlt;

  if (score < 60) {
    scoreIcon = '/images/rottenIcon.png'
    scoreIconAlt = 'rotten icon'
  } else if (60 < score && score < 75) {
    scoreIcon = '/images/freshIcon.png'
    scoreIconAlt = 'fresh icon'
  } else {
    scoreIcon = '/images/certifiedFreshIcon.png'
    scoreIconAlt = 'certified fresh icon'
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === ' ' && modalRef.current && modalRef.current.contains(document.activeElement)) {
      event.preventDefault(); // Prevent scrolling
      // Add logic to start playing the video here
      console.log('Play video');
    } else if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  return (
    <Card variant='outlined' sx={{ maxWidth: 200 }}>
      <IconButton
        onClick={handleOpenModal}
        aria-label={`Play ${title} trailer`}
        sx={{
          padding: '0'
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={imageUrl}
          alt={imageAlt}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            position: 'absolute',
            borderRadius: '50%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 1)', // Semi-transparent black on hover
            },
          }}
        >
          <PlayArrowIcon sx={{ color: 'white' }} aria-hidden="true" />
        </Box>
      </IconButton>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby={`${title} trailer`}
        onKeyDown={handleKeyPress}
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
        }}>
          <iframe
            className={styles.videoPlayer}
            width="1120"
            height="630"
            src={trailerUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen />
        </Box>
      </Modal>

      <Link
        href={{
          pathname: '/movies/review',
          query: { id: movieId },
        }}
        sx={{
          textDecoration: 'none',
          color: 'black'
        }}
      >
        <CardContent sx={{ padding: '7px 17px' }}>
          <div className={styles['card-title']}>
            <img src={scoreIcon} alt={scoreIconAlt} width="20" height="20" />
            <p className={styles.rating}>{score}%</p>
            <Typography sx={{ display: 'none' }} variant="h6" color="text.primary">
              {score}
            </Typography>
          </div>
          <Typography sx={{ marginLeft: '3px' }} variant="body1" color="text.primary">
            {title}
          </Typography>
        </CardContent>
      </Link>
    </Card >
  );
}
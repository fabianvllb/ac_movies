import { Box, Typography } from '@mui/material';
import React from 'react'

export default function Score(props) {
  const { score } = props;
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
  return (
    <Box sx={{ display: 'flex' }}>
      <img src={scoreIcon} alt={scoreIconAlt} width="20" height="20" />
      <Typography sx={{ fontSize: '0.9rem', fontWeight: '600' }}>{score}%</Typography>
    </Box>
  )
}


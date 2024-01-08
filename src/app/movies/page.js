import React from 'react'
import styles from './page.module.css'
import Box from '@mui/material/Box'
import { Container, Link, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2
import Movie from '../model/movie'
import Score from './Score'

export default function Page() {
  const movieList = Movie.getAllMovies()

  return (
    <Container id='main-content' className={styles['main-content']}>
      <Box sx={{ display: 'flex', flexDirection: 'row', m: '10px 0' }}>

        {/* main view */}
        <Box id='main-view' sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <h1>
              Our collection of movie review
            </h1>
          </Box>
          <Box>
            <Grid container spacing={2} sx={{ border: '1px solid lightgray', borderRadius: '2px', px: '40px' }}>
              <Grid xs={6} >
                <h2 className={styles.columnTitles}>Movies</h2>
                <nav aria-label="movie list">
                  <List>
                    {movieList.map((movie, index) => {
                      return (
                        <ListItem disablePadding key={index}>
                          <ListItemButton sx={{ gap: '20px' }} component={Link} href={`/movies/review?id=${movie.id}`}>
                            <Score score={movie.score} />
                            <ListItemText primary={movie.title} />
                          </ListItemButton>
                        </ListItem>
                      )
                    })}
                  </List>
                </nav>
              </Grid>
              <Grid xs={6}>
                <h2 className={styles.columnTitles}>TV Shows</h2>
                <nav aria-label="tv shows list">
                  <List>
                    {movieList.map((movie, index) => {
                      return (
                        <ListItem disablePadding key={index}>
                          <ListItemButton sx={{ gap: '20px' }} component={Link} href={`/movies/review?id=${movie.id}`}>
                            <Score score={movie.score} />
                            <ListItemText primary={movie.title} />
                          </ListItemButton>
                        </ListItem>
                      )
                    })}
                  </List>
                </nav>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Box>
    </Container>
  )
}

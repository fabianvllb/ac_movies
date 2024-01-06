'use client'
import React from 'react'
import styles from './page.module.css'
import { Container, Typography, Box } from '@mui/material'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import Movie from '../../model/movie'


export default function Page() {
  const searchParams = useSearchParams()
  const movieId = searchParams.get('id')

  var movieData = Movie.getMovieById(parseInt(movieId))
  const movieTitle = movieData.title
  //{movieData.title} movie review

  return (
    <main className={styles.main}>
      <Container id='main-content' className={styles['main-content']}>
        <Typography role='textbox' variant='h2' sx={{ fontSize: '2rem', m: '10px 0' }}>
          {`${movieData.title} movie review`}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Typography variant='body1' sx={{ textAlign: 'justify' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere lorem ipsum dolor sit. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Facilisis mauris sit amet massa. Turpis nunc eget lorem dolor sed.
            <br />Aliquet enim tortor at auctor urna nunc. Aliquet nec ullamcorper sit amet risus nullam eget. Adipiscing commodo elit at imperdiet dui accumsan.Viverra maecenas accumsan lacus vel facilisis. Consequat interdum varius sit amet mattis vulputate enim. Vitae et leo duis ut diam quam nulla porttitor massa. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Sapien eget mi proin sed libero enim. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Faucibus purus in massa tempor nec feugiat.
          </Typography>
          <Image
            className={styles.movieImage}
            src={movieData.imageUrl}
            width={220}
            height={350}
            alt="Movie poster"
          />
        </Box>

      </Container>
    </main >
  )
}
import Container from '@mui/material/Container'
import styles from './page.module.css'
import ActionAreaCard from './ui/ActionAreaCard'
import { Box, Typography } from '@mui/material';

const movies = [
  {
    id: 0,
    title: 'Migration',
    score: 72,
    imageUrl: 'https://resizing.flixster.com/JZYaPcQJsNfrhyXoxKf20_p54q8=/206x305/v2/https://resizing.flixster.com/PaF2nohEOe1U4u8uP_tFCOj1ciE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQyZjYzYzk0LTBjZmMtNGMxZi04ZjQ1LTZiNzBhNmRiOTk4MS5qcGc=',
    trailerUrl: 'https://www.youtube.com/embed/cQfo0HJhCnE?si=abuOnp83U7Td1D6d',
  },
  {
    id: 1,
    title: 'Ferrari',
    score: 73,
    imageUrl: 'https://resizing.flixster.com/QEL5ezTZV_fcdXgg7VwLF6xSEKc=/206x305/v2/https://resizing.flixster.com/i9CeWWf69GItCAWYaYws0z92NSs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzFiM2FmYWMxLWIyMDEtNDQ3OC04YjU4LWYxNDg4N2MyOWI0YS5qcGc=',
    trailerUrl: 'https://www.youtube.com/embed/ERIBTIlVVJQ?si=85cYDaazILv3Yten',
  },
  {
    id: 2,
    title: 'Wonka',
    score: 83,
    imageUrl: 'https://resizing.flixster.com/ZJ5aqScAhzuxf3-3QdnKS3h0TC4=/206x305/v2/https://resizing.flixster.com/Bx2OFTZyXMQCB30_E6EmiA52wZo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZiMzI0ODJhLTZmNzYtNDNkZC04MjdhLTBlODVhOTgzNzQ2Zi5qcGc=',
    trailerUrl: 'https://www.youtube.com/embed/otNh9bTjXWg?si=cQ3Jg3yzlSWApOVA',
  },
  {
    id: 3,
    title: 'American Fiction',
    score: 93,
    imageUrl: 'https://resizing.flixster.com/D6ibeGMz_eOsT_VtX73q5zUwcjg=/206x305/v2/https://resizing.flixster.com/Kes35WjbggKb9o6T7JG1nBGE2RE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2M4ODA3YzJjLTA5YWItNDFhZi1hNDc5LTc0MWU0NWMxYTU3ZS5qcGc=',
    trailerUrl: 'https://www.youtube.com/embed/i0MbLCpYJPA?si=G1hqp1MwnzwDZbNt',
  },
  {
    id: 4,
    title: 'Wish',
    score: 48,
    imageUrl: 'https://resizing.flixster.com/vazf4WmNLiT_T2l2_3Cjnrwi5kM=/206x305/v2/https://resizing.flixster.com/qIk5F8LNkRDAxu6Tn6XvYJ1rVMg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2MyODNiYmIxLTYyOWMtNDJiNi1iZmZlLTE4ZGQ2MGQwZGFiNS5qcGc=',
    trailerUrl: 'https://www.youtube.com/embed/oyRxxpD3yNw?si=xhqZa1PIQX3rKaeb',
  },
];
//{ title: 'Poor Things', score: 93, imageUrl: 'https://resizing.flixster.com/t1AsBaA_GhqQDdLdMOswbCP0zF8=/206x305/v2/https://resizing.flixster.com/U_RT77J5o2EfMC-DdAc7Dm8CkKY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzNmM2FiYmJhLTFjYTgtNDljOC04MjQ4LTU1Yjg0M2NkNTdmZC5qcGc=' },

const streaming = [
  { id: 5, title: 'Dr. Death', score: 80, imageUrl: 'https://resizing.flixster.com/9OhWEw1VIc2OepA63GYc45GXA2o=/206x305/v2/https://resizing.flixster.com/EyjgA7ILgI4ymEufJXCku8GS8J0=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vODVhMzJhMzctYjNjNS00NzEyLTgwOGYtZTc5YjMwOTY5ZmNhLmpwZw==' },
  { id: 6, title: 'What If...?', score: 83, imageUrl: 'https://resizing.flixster.com/ZY6oxl52fj6d7aFKJN8PqsEL0Qo=/206x305/v2/https://resizing.flixster.com/st7R24S0NNVYsn_4L-MStarRlL0=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vYmQyZjNlMDctOTVmZC00ZmQyLTgxOGQtZjA3OTg1ZTI0MmIyLmpwZw==' },
  { id: 7, title: 'Maestro', score: 79, imageUrl: 'https://resizing.flixster.com/9ksb0eFoytUoT86OohQBu83lnI0=/206x305/v2/https://resizing.flixster.com/QxuXNaDPg5NQX_DPml6C0zV1A5E=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZmMDhiMTk1LTc5MzMtNGQ0OS04NTNiLTY2MWEwZDBkYjRlMi5qcGc=' },
  { id: 8, title: 'Percy Jackson and the Olympians', score: 96, imageUrl: 'https://resizing.flixster.com/-K5gGejxbdpRpmjMgLghxD_Vx-w=/206x305/v2/https://resizing.flixster.com/hJzR0MHvZQwWpNe48WQXUlnv6-8=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vMTNlNzcyMjUtNDQxNS00NDllLTg5MzEtY2RmZmQxZDBhZGVmLmpwZw==' },
  { id: 9, title: 'Rebel Moon: Part One - A Child of Fire', score: 24, imageUrl: 'https://resizing.flixster.com/CCTwucvqizkxoWsRKclAQauBRAQ=/206x305/v2/https://resizing.flixster.com/2bpFxoybigCD78l_tMP4wE7m6j4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2IwMmU1NmEwLTM0MzQtNDYzMC1iNWExLWFiMmNiMzRkNzcwZC5qcGc=' },
];

export default function Home() {

  return (
    <main className={styles.main}>
      <Container id='main-content' className={styles['main-content']}>
        <section className={styles.mediaSection}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', p: '0 20px', textAlign: 'justify' }}>
            <h1 className={styles.sectionTitle}>Welcome to Moovies_AC!</h1>
            <Typography variant='body1'>
              Thank you for visiting Moovies_AC – your ultimate destination for insightful movie and TV show reviews. We are thrilled to have you here!
            </Typography>
            <h2>🎬 About Moovies_AC</h2>
            <Typography variant='body1'>
              At Moovies_AC, we're passionate about the world of cinema and television. Our mission is to provide you with honest and comprehensive reviews, helping you make informed decisions about what to watch next. Whether you're a film buff or a casual viewer, our platform is designed to cater to your diverse tastes and preferences.
            </Typography>
            <h2>🌟 Constantly Adding Reviews</h2>
            <Typography variant='body1'>
              Our team of dedicated reviewers is committed to bringing you the latest reviews and scores for both movies and TV shows. We understand that the entertainment landscape is ever-evolving, and we strive to stay ahead by continuously updating our content. Expect to find fresh perspectives, thoughtful analyses, and, most importantly, recommendations tailored just for you.
            </Typography>
            <h2>🍿 Discover, Enjoy, and Stay Informed</h2>
            <Typography variant='body1'>
              Explore our collection of reviews, discover hidden gems, and stay up-to-date with the latest releases. Whether you're into blockbuster films, indie masterpieces, or binge-worthy TV series, Moovies_AC has something for everyone.
              <br /><br />
              Sit back, relax, and let Moovies_AC be your guide to the captivating world of movies and TV shows. We hope you enjoy your time here, and don't forget to check back regularly for new reviews and recommendations!
              <br /><br />
              Happy watching!
            </Typography>
          </Box>
        </section>
        <section className={styles.mediaSection}>
          <h2 className={styles.sectionTitle}>Recently added Movies</h2>
          <Box className={styles.imageCarousel}>
            {movies.map((movie, index) => {
              return (
                <ActionAreaCard
                  movieId={movie.id}
                  imageUrl={movie.imageUrl}
                  imageAlt={`${movie.title} poster`}
                  title={movie.title}
                  score={movie.score}
                  trailerUrl={`${movie.trailerUrl}&autoplay=1`}
                  key={index}
                />
              );
            })}
          </Box>
        </section>
        <section className={styles.mediaSection}>
          <h2 className={styles.sectionTitle}>Recently added on streaming</h2>
          <Box className={styles.imageCarousel}>
            {streaming.map((movie, index) => {
              return (
                <ActionAreaCard
                  movieId={movie.id}
                  imageUrl={movie.imageUrl}
                  imageAlt={`${movie.title} poster`}
                  title={movie.title}
                  score={movie.score}
                  trailerUrl={`${movie.trailerUrl}&autoplay=1`}
                  key={index}
                />
              );
            })}
          </Box>
        </section>
      </Container>
    </main >
  )
}

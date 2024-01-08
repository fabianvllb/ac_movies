import Container from '@mui/material/Container'
import styles from './page.module.css'
import ActionAreaCard from './ui/ActionAreaCard'
import { Box, Typography, Link, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import Movie from './model/movie'

export default function Home() {
  const movieList = Movie.getAllMovies()
  const tvShowsList = Movie.getAllTVShows()

  return (
    <main className={styles.main}>
      <Container id='main-content' className={styles['main-content']}>
        <section className={styles.mediaSection}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', p: '0 20px', textAlign: 'justify' }}>
            <h1 className={styles.sectionTitle}>Welcome to AC_Movies!</h1>
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
          <Box >
            <nav aria-label="movie list">
              <List className={styles.imageCarousel}>
                {movieList.map((movie, index) => {
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
              </List>
            </nav>
          </Box>
        </section>
        <section className={styles.mediaSection}>
          <h2 className={styles.sectionTitle}>Recently added on tv shows</h2>
          <Box >
            <nav aria-label="tv show list">
              <List className={styles.imageCarousel}>
                {tvShowsList.map((movie, index) => {
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
              </List>
            </nav>
          </Box>
        </section>
      </Container>
    </main >
  )
}

import Container from '@mui/material/Container'
import styles from './page.module.css'
import ActionAreaCard from './ui/ActionAreaCard'
import { Box } from '@mui/material';

const movies = [
  { title: 'Migration', score: 72, imageUrl: 'https://resizing.flixster.com/JZYaPcQJsNfrhyXoxKf20_p54q8=/206x305/v2/https://resizing.flixster.com/PaF2nohEOe1U4u8uP_tFCOj1ciE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQyZjYzYzk0LTBjZmMtNGMxZi04ZjQ1LTZiNzBhNmRiOTk4MS5qcGc=' },
  { title: 'Ferrari', score: 73, imageUrl: 'https://resizing.flixster.com/QEL5ezTZV_fcdXgg7VwLF6xSEKc=/206x305/v2/https://resizing.flixster.com/i9CeWWf69GItCAWYaYws0z92NSs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzFiM2FmYWMxLWIyMDEtNDQ3OC04YjU4LWYxNDg4N2MyOWI0YS5qcGc=' },
  { title: 'Wonka', score: 83, imageUrl: 'https://resizing.flixster.com/ZJ5aqScAhzuxf3-3QdnKS3h0TC4=/206x305/v2/https://resizing.flixster.com/Bx2OFTZyXMQCB30_E6EmiA52wZo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZiMzI0ODJhLTZmNzYtNDNkZC04MjdhLTBlODVhOTgzNzQ2Zi5qcGc=' },

  { title: 'American Fiction', score: 93, imageUrl: 'https://resizing.flixster.com/D6ibeGMz_eOsT_VtX73q5zUwcjg=/206x305/v2/https://resizing.flixster.com/Kes35WjbggKb9o6T7JG1nBGE2RE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2M4ODA3YzJjLTA5YWItNDFhZi1hNDc5LTc0MWU0NWMxYTU3ZS5qcGc=' },
  { title: 'Wish', score: 48, imageUrl: 'https://resizing.flixster.com/vazf4WmNLiT_T2l2_3Cjnrwi5kM=/206x305/v2/https://resizing.flixster.com/qIk5F8LNkRDAxu6Tn6XvYJ1rVMg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2MyODNiYmIxLTYyOWMtNDJiNi1iZmZlLTE4ZGQ2MGQwZGFiNS5qcGc=' },
];
//{ title: 'Poor Things', score: 93, imageUrl: 'https://resizing.flixster.com/t1AsBaA_GhqQDdLdMOswbCP0zF8=/206x305/v2/https://resizing.flixster.com/U_RT77J5o2EfMC-DdAc7Dm8CkKY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzNmM2FiYmJhLTFjYTgtNDljOC04MjQ4LTU1Yjg0M2NkNTdmZC5qcGc=' },

const streaming = [
  { title: 'Dr. Death', score: 80, imageUrl: 'https://resizing.flixster.com/9OhWEw1VIc2OepA63GYc45GXA2o=/206x305/v2/https://resizing.flixster.com/EyjgA7ILgI4ymEufJXCku8GS8J0=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vODVhMzJhMzctYjNjNS00NzEyLTgwOGYtZTc5YjMwOTY5ZmNhLmpwZw==' },
  { title: 'What If...?', score: 83, imageUrl: 'https://resizing.flixster.com/ZY6oxl52fj6d7aFKJN8PqsEL0Qo=/206x305/v2/https://resizing.flixster.com/st7R24S0NNVYsn_4L-MStarRlL0=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vYmQyZjNlMDctOTVmZC00ZmQyLTgxOGQtZjA3OTg1ZTI0MmIyLmpwZw==' },
  { title: 'Maestro', score: 79, imageUrl: 'https://resizing.flixster.com/9ksb0eFoytUoT86OohQBu83lnI0=/206x305/v2/https://resizing.flixster.com/QxuXNaDPg5NQX_DPml6C0zV1A5E=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZmMDhiMTk1LTc5MzMtNGQ0OS04NTNiLTY2MWEwZDBkYjRlMi5qcGc=' },
  { title: 'Percy Jackson and the Olympians', score: 96, imageUrl: 'https://resizing.flixster.com/-K5gGejxbdpRpmjMgLghxD_Vx-w=/206x305/v2/https://resizing.flixster.com/hJzR0MHvZQwWpNe48WQXUlnv6-8=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vMTNlNzcyMjUtNDQxNS00NDllLTg5MzEtY2RmZmQxZDBhZGVmLmpwZw==' },
  { title: 'Rebel Moon: Part One - A Child of Fire', score: 24, imageUrl: 'https://resizing.flixster.com/CCTwucvqizkxoWsRKclAQauBRAQ=/206x305/v2/https://resizing.flixster.com/2bpFxoybigCD78l_tMP4wE7m6j4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2IwMmU1NmEwLTM0MzQtNDYzMC1iNWExLWFiMmNiMzRkNzcwZC5qcGc=' },
];

export default function Home() {

  return (
    <main className={styles.main}>
      <Container id='main-content' className={styles['main-content']}>
        <section className={styles.mediaSection}>
          <h2 className={styles.sectionTitle}>Recently added Movies</h2>
          <Box className={styles.imageCarousel}>
            {movies.map((movie) => {
              return (
                <ActionAreaCard
                  imageUrl={movie.imageUrl}
                  imageAlt={`${movie.title} poster`}
                  title={movie.title}
                  score={movie.score}
                />
              );
            })}
          </Box>
        </section>
        <section className={styles.mediaSection}>
          <h2 className={styles.sectionTitle}>Recently added on streaming</h2>
          <Box className={styles.imageCarousel}>
            {streaming.map((movie) => {
              return (
                <ActionAreaCard
                  imageUrl={movie.imageUrl}
                  imageAlt={`${movie.title} poster`}
                  title={movie.title}
                  score={movie.score}
                />
              );
            })}
          </Box>
        </section>
      </Container>
    </main >
  )
}

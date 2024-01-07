'use client'
import React from 'react'
import styles from './page.module.css'
import { Container, Typography, Box, IconButton } from '@mui/material'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import Movie from '../../model/movie'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Link from 'next/link'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Page() {
  const searchParams = useSearchParams()
  const movieId = searchParams.get('id')
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  var movieData = Movie.getMovieById(parseInt(movieId))
  var movieList = Movie.getAllMovies()

  function MaintenanceTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <Container
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', m: '20px 0', border: '1px solid  black' }}
        {...other}
      >
        {value === index && (
          <Typography variant='body1'>{children}</Typography>
        )}
      </Container>
    )
  }
  function CustomTabPanel(props) {
    const { children, value, index, dataList, ...other } = props;

    function Score(props) {
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

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ display: 'flex', flexDirection: 'column', p: '5px 15px' }}>
            <nav aria-label="other movie reviews">
              <List>
                {dataList.map((movie) => {
                  return (
                    <ListItem disablePadding>
                      <ListItemButton sx={{ gap: '20px' }} component={Link} href={`/movies/review?id=${movie.id}`}>
                        <Score score={movie.score} />
                        <ListItemText primary={movie.title} />
                      </ListItemButton>
                    </ListItem>
                  )
                })}
              </List>
            </nav>
          </Box>
        )
        }
      </div >
    );
  }

  /*CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  */

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <main className={styles.main}>
      <Container id='main-content' className={styles['main-content']}>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '30px', m: '10px 0' }}>

          {/* left panel */}
          <Box sx={{ minWidth: '30%', border: '1px solid lightgrey', borderRadius: '2px' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs variant="fullWidth" value={value} onChange={handleChange} >
                <Tab label="In theaters" wrapped {...a11yProps(0)} />
                <Tab label="Streaming" wrapped {...a11yProps(1)} />
                <Tab label="TV shows" wrapped {...a11yProps(2)} />
              </Tabs>
              <CustomTabPanel value={value} index={0} dataList={movieList} />
              {/*<CustomTabPanel value={value} index={1} dataList={} />*/}
              {/*<CustomTabPanel value={value} index={2} dataList={} />*/}
              <MaintenanceTabPanel value={value} index={1}>Nothing here yet!</MaintenanceTabPanel>
              <MaintenanceTabPanel value={value} index={2}>Nothing here yet either!</MaintenanceTabPanel>
            </Box>
          </Box>

          {/* main view */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '95%' }}>
              <Typography role='textbox' variant='h2' sx={{ fontSize: '1.5rem' }}>
                {`${movieData.title} movie review`}
              </Typography>
              <IconButton aria-label="Add to favourites" size="medium">
                <FavoriteBorderIcon />
              </IconButton>
            </Box>

            {/* icon bar */}
            {/*<Container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
              <Typography component="legend">Rate this movie! </Typography>
              <Rating name="no-value" value={null} />
            </Container>*/}
            {/* review */}
            <Box>
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
                  alt={`${movieData.title} movie poster`}
                  loading='lazy'
                />
              </Box>
              <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                Nascetur ridiculus mus mauris vitae ultricies leo integer. Senectus et netus et malesuada fames ac turpis egestas integer. Duis convallis convallis tellus id interdum. Neque convallis a cras semper. Nascetur ridiculus mus mauris vitae ultricies leo integer. Senectus et netus et malesuada fames ac turpis egestas integer. Duis convallis convallis tellus id interdum. Neque convallis a cras semper.
              </Typography>
            </Box>
            <iframe
              className={styles.videoPlayer}
              loading='lazy'
              width="100%"
              height="342"
              src={movieData.trailerUrl}
              title="YouTube video player"
              aria-label={`${movieData.title} trailer video`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen />
          </Box>
        </Box>

      </Container>
    </main >
  )
}
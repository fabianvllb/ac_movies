'use client'
import React from 'react'
import styles from './page.module.css'
import { Container, Typography, Box, IconButton, Checkbox } from '@mui/material'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import Movie from '../../model/movie'
import Favorite from '@mui/icons-material/Favorite'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Link from 'next/link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import AddToQueueIcon from '@mui/icons-material/AddToQueue'
import RemoveFromQueueOutlinedIcon from '@mui/icons-material/RemoveFromQueueOutlined'

export default function Page() {
  const searchParams = useSearchParams()
  const movieId = searchParams.get('id')
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue)
  };

  var movieData = Movie.getMovieById(parseInt(movieId))
  var movieList = Movie.getAllMovies()

  function MaintenanceTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <Box
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
        {...other}
      >
        {value === index && (
          <Typography variant='body1'>{children}</Typography>
        )}
      </Box>
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
                {dataList.map((movie, index) => {
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

  const favouriteLabel = { inputProps: { 'aria-label': 'Add to favourites' } }
  const watchLaterLabel = { inputProps: { 'aria-label': 'Add to watch later playlist' } }

  return (
    <main className={styles.main}>
      <Container className={styles['main-content']}>
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
              <MaintenanceTabPanel value={value} index={1}>No movies here yet</MaintenanceTabPanel>
              <MaintenanceTabPanel value={value} index={2}>Nothing here yet either!</MaintenanceTabPanel>
            </Box>
          </Box>

          {/* main view */}
          <Box id='main-content' sx={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '95%' }}>
              <Typography role='textbox' variant='h2' sx={{ fontSize: '1.5rem' }}>
                {`${movieData.title} movie review`}
              </Typography>
              <Box>
                <Checkbox {...favouriteLabel} icon={<FavoriteBorder />} checkedIcon={<Favorite color='warning' />} />
                <Checkbox {...watchLaterLabel} icon={<AddToQueueIcon />} checkedIcon={<RemoveFromQueueOutlinedIcon />} />
              </Box>
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
                  In this cinematic journey, audiences are thrust into a captivating world where the line between reality and fantasy is blurred with masterful finesse. The film weaves a complex narrative, blending elements of suspense, drama, and a touch of the supernatural. From the opening scenes to the climactic finale, the storytelling is both gripping and thought-provoking, leaving viewers on the edge of their seats.
                  <br />The cast delivers stellar performances, embodying their characters with depth and nuance. Their on-screen chemistry adds an authentic layer to the unfolding drama. The supporting cast also shines, providing memorable moments that enrich the overall tapestry. The cinematography is a visual feast, capturing the essence of the story in every frame.
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
                Beyond its technical prowess, the movie explores profound themes that resonate on a universal level. It delves into the complexities of human relationships, the consequences of choices, and the relentless pursuit of one's true self. The film successfully navigates the delicate balance between entertainment and intellectual stimulation, offering a satisfying and thought-provoking cinematic experience. Without revealing too much, this enigmatic masterpiece is sure to leave audiences pondering its themes long after the credits roll, making it a must-watch for those seeking a film that transcends genres and challenges conventional storytelling norms.
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
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen />
          </Box>
        </Box>

      </Container>
    </main >
  )
}
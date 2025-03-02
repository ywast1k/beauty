import { Box, Typography, Button } from '@mui/material';
import brandLogo from '../assets/hero4.jpg';
import { Link } from 'react-router-dom';



function HeroSection() {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url(${brandLogo})`,
        margin: 0,
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography variant="h2" gutterBottom>
        Ваш Салон Красоты
      </Typography>
      <Typography variant="h5" gutterBottom>
        Откройте для себя мир совершенства
      </Typography>
      <Button variant="contained" color="secondary" size="large" sx={{ mt: 3 }} component={Link} to="/registration">
        Записаться сейчас
      </Button>
    </Box>
  );
}

export default HeroSection;
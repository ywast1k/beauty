
import { Box, Typography, Container, Grid} from '@mui/material';
import aboutUsImage from '../assets/aboutBack.jpg';

function AboutUs() {
  return (
    <Container sx={{ py: 8 , height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', px: 2,}}>
      <Typography variant="h4" align="center" gutterBottom>
        О нас
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={aboutUsImage}
            alt="Наш салон"
            sx={{
              width: '100%',
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" color="textSecondary" paragraph>
            Добро пожаловать в наш уютный салон красоты — место, где ваши руки и ноги обретают безупречность, а взгляд становится чарующим. Мы специализируемся на изысканном маникюре и педикюре, искусстве оформления бровей и создании роскошных ресниц. Наша команда талантливых мастеров с трепетом и вниманием подходит к каждому гостю, чтобы подчеркнуть вашу индивидуальность и естественную красоту. Погрузитесь в атмосферу заботы и гармонии, доверьтесь нашим профессионалам и позвольте себе сиять каждый день.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutUs;
import { Container, Typography,Box } from '@mui/material';
import Grid from '@mui/material/Grid';

function ContactUs() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Свяжитесь с нами
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Адрес:</Typography>
          <Typography variant="body1">Kengisgatan 1E</Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>Телефон:</Typography>
          <Typography variant="body1">+46 73 670 89-93</Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>Email:</Typography>
          <Typography variant="body1">exempel@exempel.com</Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>Часы работы:</Typography>
          <Typography variant="body1">Пн-Пт: 9:00 - 20:00</Typography>
          
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ width: '100%', height: '300px' }} component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d273.2089558351278!2d23.36958784483266!3d67.20955725431058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45d3f5f8ce1e4707%3A0x6c72f64b11ecbc07!2sKengisgatan%201E%2C%20984%2031%20Pajala!5e0!3m2!1sru!2sse!4v1740350926509!5m2!1sru!2sse"  // Вставьте ссылку на вашу карту
            
            allowFullScreen
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactUs;

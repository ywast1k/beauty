
import {  Container, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Manicure from '../assets/manicure.jpg';
import Resnitsi from '../assets/resnitsi.jpg';
import Brovi from '../assets/brovi.jpg';
import Pedicure from '../assets/pedicure.jpeg';



const services = [
  {
    title: 'Маникюр',
    description: 'Профессиональный уход за вашими руками и ногтями.',
    image: Manicure
  },
  {
    title: 'Педикюр',
    description: 'Индивидуальный подход для идеальных стоп.',
    image: Pedicure
  },
  {
    title: 'Ресницы',
    description: 'Преобразите свой взгляд с помощью профессионального наращивания и ламинирования ресниц. Мы создаём естественную длину и объём, подчеркивая вашу природную красоту.',
    image: Resnitsi
  },
  {
    title: 'Брови',
    description: 'Искусство идеальных бровей: моделирование, окрашивание и коррекция формы для гармонии и выразительности вашего лица. Индивидуальный подход к каждому образу.',
    image: Brovi
  },
  // Добавьте остальные услуги
];

function Services() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom paddingBottom={10}>
        Наши услуги
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {services.map((service) => (
          <Grid item key={service.title} xs={12} sm={6} md={4} >
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
              <CardMedia component="img" image={service.image} alt={service.title} height="200" />
              <CardContent >
                <Typography variant="h5" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {service.description}
                </Typography>
              </CardContent>
              <Button size="small" color="primary">
                Подробнее
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Services;

import { Container, Typography, Avatar, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import client from '../assets/client1.jpg';

const testimonials = [
  {
    name: 'Анна Иванова',
    feedback: 'Прекрасный салон! Осталась очень довольна услугами.',
    avatar: client,
  },
  {
    name: 'Анна Иванова',
    feedback: 'Ну что за счастье использовать ваши услуги!',
    avatar: client,
  },
  {
    name: 'Анна Иванова',
    feedback: 'Ну как бы всё хорошо, но можно и лучше.',
    avatar: client,
  },
  // Добавьте другие отзывы
];

function Testimonials() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom paddingBottom={10}>
        Отзывы наших клиентов
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial) => (
          <Grid item key={testimonial.name} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ width: 64, height: 64, mx: 'auto', mb: 2}} />
                <Typography variant="h6" align="center">
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                  &quot;{testimonial.feedback}&quot;
                </Typography>
              </CardContent>
            </Card>
            
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Testimonials;

// src/components/ServiceDetails.jsx

import { useParams } from 'react-router-dom';
import { Container, Typography, Grid, CardMedia, Box, Rating } from '@mui/material';

import services from '../services';

function ServiceDetails() {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography variant="h5">Услуга не найдена</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <CardMedia component="img" image={service.image} alt={service.title} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            {service.title}
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Цена: {service.price} ₽
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Продолжительность: {service.duration} минут
          </Typography>
          <Typography variant="body1" gutterBottom>
            {service.details}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Rating value={service.rating} precision={0.1} readOnly />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Отзывы клиентов
          </Typography>
          {service.reviews.map((review, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Typography variant="subtitle1">{review.author}</Typography>
              <Rating value={review.rating} readOnly size="small" />
              <Typography variant="body2" color="textSecondary">
                {review.date}
              </Typography>
              <Typography variant="body1">{review.comment}</Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default ServiceDetails;

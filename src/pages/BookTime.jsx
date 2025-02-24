// src/pages/BookTime.jsx
import { List, ListItem, ListItemText } from '@mui/material';
import { useState, useContext, useEffect } from 'react';
import {
  Typography,
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import {
  LocalizationProvider,
  DatePicker,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { UserContext } from '../UserContext';
// import '@mui/x-date-pickers/styles';

function BookTime() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(dayjs());
  const [procedure, setProcedure] = useState('');
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(UserContext); 

  const availableTimeSlots = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
  ];


  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
  }, []);

  // Сохраняем бронирования в localStorage при изменении состояния bookings
  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }, [bookings]);

  if (!user) {
    return (
      <Typography variant="h6" sx={{ mt: 4 }}>
        Пожалуйста, войдите или зарегистрируйтесь для бронирования.
      </Typography>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      date: selectedDate.format('YYYY-MM-DD'),
      time: selectedTime.format('HH:mm'),
      procedure,
      user: user.username,
    };
  
    // Проверяем, занято ли уже это время
    const isBooked = bookings.some(
      (booking) =>
        booking.date === newBooking.date && booking.time === newBooking.time
    );
  
    if (isBooked) {
      alert('Это время уже забронировано. Пожалуйста, выберите другое время.');
    } else {
      setBookings([...bookings, newBooking]);
      alert('Ваше бронирование успешно создано!');
    }
  };

  const bookedTimes = bookings
  .filter((booking) => booking.date === selectedDate.format('YYYY-MM-DD'))
  .map((booking) => booking.time);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Бронирование времени
        </Typography>
        <DatePicker
          label="Дата"
          value={selectedDate}
          onChange={(newValue) => {
            setSelectedDate(newValue);
            setSelectedTime(dayjs().hour(9).minute(0)); // Сброс времени при изменении даты
          }}
          slots={{ textField: TextField }}
          slotProps={{
            textField: {
              fullWidth: true,
              required: true,
              margin: 'normal',
            },
        }}
            shouldDisableDate={(day) => {
                const formattedDate = day.format('YYYY-MM-DD');
                // Если все время занято в этот день, отключаем дату
                const bookingsForDate = bookings.filter(
                  (booking) => booking.date === formattedDate
                );
                return bookingsForDate.length >= availableTimeSlots.length;
              }}
            />
        <FormControl fullWidth required margin="normal">
          <InputLabel id="time-label">Время</InputLabel>
          <Select
            labelId="time-label"
            value={selectedTime.format('HH:mm')}
            label="Время"
            onChange={(e) =>
              setSelectedTime(
                dayjs(selectedDate.format('YYYY-MM-DD') + 'T' + e.target.value)
              )
            }
          >
            {availableTimeSlots.map((time) => (
              <MenuItem key={time} value={time} disabled={bookedTimes.includes(time)}>
                {time}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth required margin="normal">
          <InputLabel id="procedure-label">Процедура</InputLabel>
          <Select
            labelId="procedure-label"
            value={procedure}
            label="Процедура"
            onChange={(e) => setProcedure(e.target.value)}
          >
            <MenuItem value="Маникюр">Маникюр</MenuItem>
            <MenuItem value="Педикюр">Педикюр</MenuItem>
            <MenuItem value="Ресницы">Ресницы</MenuItem>
            <MenuItem value="Брови">Брови</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Забронировать
        </Button>
      </Box>

      <Typography variant="h5" sx={{ mt: 4 }}>
      Существующие бронирования
    </Typography>
    {bookings.length === 0 ? (
      <Typography variant="body1">Нет текущих бронирований</Typography>
    ) : (
      <List>
        {bookings.map((booking, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${booking.date} в ${booking.time}`}
              secondary={`Процедура: ${booking.procedure}, Пользователь: ${booking.user}`}
            />
          </ListItem>
        ))}
      </List>
    )}
    </LocalizationProvider>
  );
}

export default BookTime;
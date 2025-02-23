import { Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: 'center',
        borderTop: '1px solid #e0e0e0',
        mt: 4
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © 2025 Beauty-Salon. Посетите дополнительные сайты.
      </Typography>
      <Box>
        <IconButton
          component="a"
          href="https://www.facebook.com/profile.php?id=61572395836786"
          target="_blank"
          rel="noopener noreferrer"
          color="black"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.instagram.com/li_ka_beautysalong/?igsh=MWdiczJvd29rb3ZmNw%3D%3D&utm_source=qr&fbclid=IwY2xjawIodFxleHRuA2FlbQIxMAABHRVOBngSMmFAMZBdMhfM0XtfyOkLhlVDccfCyaZg3yjpHfDufP9eWY-Asw_aem_BgfRbVVeb2-5eox2TnmakQ"
          target="_blank"
          rel="noopener noreferrer"
          color="black"
        >
          <InstagramIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
        Разработано Константином. Пишите на kostyabine@gmail.com
      </Typography>
    </Box>
  );
}

export default Footer;
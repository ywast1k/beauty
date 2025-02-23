


import { PageContainer } from '@toolpad/core/PageContainer';

function PageContainerFullScreen() {
  

  

   return (     
        <PageContainer>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d273.2089558351278!2d23.36958784483266!3d67.20955725431058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45d3f5f8ce1e4707%3A0x6c72f64b11ecbc07!2sKengisgatan%201E%2C%20984%2031%20Pajala!5e0!3m2!1sru!2sse!4v1740350926509!5m2!1sru!2sse" 
            width="1000" 
            height="600"
            style={{ flex: 1, border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </PageContainer>
  
    
  );
}


export default PageContainerFullScreen;
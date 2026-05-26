function Locations() {
  return (
    <div className='locations-page'>
      <h1>Our Locations</h1>

      <div className='location-card'>
        <h2>Hoboken</h2>

        <a
          href='https://www.google.com/maps/search/?api=1&query=123+Washington+Street+Hoboken+NJ'
          target='_blank'
          rel='noopener noreferrer'
          className='map-link'
        >
          123 Washington Street
        </a>

        <p>7AM - 8PM</p>
      </div>

      <div className='location-card'>
        <h2>Jersey City</h2>

        <a
          href='https://www.google.com/maps/search/?api=1&query=45+Grove+Street+Jersey+City+NJ'
          target='_blank'
          rel='noopener noreferrer'
          className='map-link'
        >
          45 Grove Street
        </a>

        <p>7AM - 9PM</p>
      </div>

      <div className='location-card'>
        <h2>Manhattan</h2>

        <a
          href='https://www.google.com/maps/search/?api=1&query=22+Bleecker+Street+New+York+NY'
          target='_blank'
          rel='noopener noreferrer'
          className='map-link'
        >
          22 Bleecker Street
        </a>

        <p>6AM - 10PM</p>
      </div>
    </div>
  );
}

export default Locations;
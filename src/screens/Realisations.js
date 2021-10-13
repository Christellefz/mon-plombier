import './Realisations.css'

import { Carousel } from 'react-carousel-minimal'

const Realisations = () => {
  const data = [
    {
      image:
        'https://images.pexels.com/photos/8146338/pexels-photo-8146338.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-8146338.jpg&fm=jpg',
      caption: `<div>
                  San Francisco
                  <br/>
                  Next line
                </div>`
    },
    {
      image:
        'https://images.pexels.com/photos/8141966/pexels-photo-8141966.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      caption: 'Scotland'
    },
    {
      image:
        'https://images.pexels.com/photos/8134782/pexels-photo-8134782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      caption: 'Darjeeling'
    },
    {
      image:
        'https://images.pexels.com/photos/8142977/pexels-photo-8142977.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-8142977.jpg&fm=jpg',
      caption: 'San Francisco'
    },
    {
      image:
        'https://images.pexels.com/photos/8089164/pexels-photo-8089164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      caption: 'Scotland'
    },
    {
      image:
        'https://images.pexels.com/photos/8089265/pexels-photo-8089265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      caption: 'Darjeeling'
    },
    {
      image:
        'https://images.pexels.com/photos/8082223/pexels-photo-8082223.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      caption: 'San Francisco'
    },
    {
      image:
        'https://images.pexels.com/photos/8082549/pexels-photo-8082549.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      caption: 'Scotland'
    },
    {
      image:
        'https://images.pexels.com/photos/8082232/pexels-photo-8082232.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 ',
      caption: 'Darjeeling'
    }
  ]

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold'
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold'
  }
  return (
    <div className='App'>
      <div style={{ textAlign: 'center' }}>
        <h2>Ici un Caroussel pour présenter vos activités</h2>
        <p>
          Une façon efficace d&apos;apporter du dynamisme et de
          l&apos;interactivité à votre site
        </p>
        <div
          style={{
            padding: '0 20px'
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width='850px'
            height='500px'
            captionStyle={captionStyle}
            radius='10px'
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition='bottom'
            automatic={true}
            dots={true}
            pauseIconColor='white'
            pauseIconSize='40px'
            slideBackgroundColor='darkgrey'
            slideImageFit='cover'
            thumbnails={true}
            thumbnailWidth='100px'
            style={{
              textAlign: 'center',
              maxWidth: '850px',
              maxHeight: '500px',
              margin: '40px auto'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Realisations

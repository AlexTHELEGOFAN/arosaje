import * as React from "react"
import { Link } from "gatsby"
import Carousel from "better-react-carousel"

const HomeCarousel = ({ ads }) => {
  console.log(ads)
  return (
    <Carousel cols={1} rows={1} gap={100} scrollSnap={true} showDots={true}>
      {ads ? (
        ads.map(ads => (
          <Carousel.Item>
            <img
              width="30%"
              src={ads.img}
              alt={ads.title}
              className="bg-green-100 flex ml-[35%]"
            />
          </Carousel.Item>
        ))
      ) : (
        <p className="text-center">Aucune annonce trouvée</p>
      )}
    </Carousel>
  )
}

export default HomeCarousel

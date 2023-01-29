import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import { FreeMode, Navigation, Thumbs, Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  photos: string[];
  photoIndex: number;
}

export default function PhotoSlider({ photos, photoIndex = 1 }: Props) {
  const [selectedSlide, setSelectedSlide] = useState(photoIndex);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Box maxH="100vh">
      <Swiper
        modules={[Navigation, Zoom, Thumbs]}
        slidesPerView={1}
        navigation
        zoom
        onSlideChange={(swiper) => {
          setSelectedSlide(swiper.activeIndex);
        }}
        thumbs={{ swiper: thumbsSwiper }}
      >
        {photos.map((image, i) => (
          <SwiperSlide zoom key={image}>
            <Image src={`images/${image}`} height="60vh" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[FreeMode, Navigation, Thumbs]}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        spaceBetween={10}
        // @ts-ignore
        onSwiper={setThumbsSwiper}
      >
        {photos.map((image, i) => (
          <SwiperSlide zoom key={image}>
            <Image
              src={`images/${image}`}
              opacity={selectedSlide === i ? 0.5 : 1}
              boxSize="200px"
              objectFit="cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

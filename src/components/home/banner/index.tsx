import { Flex } from "@mantine/core";
import imgBanner from "./banner.json";
import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel';

const Banner = () => {

  return (
    <Flex h={550}
    w={"100%"}>
        <Carousel
        h={550}
        w={"100%"}
    >
         {imgBanner.imagens.map((image, index) => (
          <Carousel.Slide
            key={index}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Carousel.Slide>
        ))}
    </Carousel>
    </Flex>
  );
};

export default Banner;

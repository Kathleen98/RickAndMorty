import { Flex } from "@mantine/core";
import imgBanner from "./banner.json";

const Banner = () => {

  return (
    <Flex
    w={"100%"}
    h={550}
      style={{
        borderRadius: 16,
        backgroundImage: `url(${imgBanner.imagens.map((image) => (image))})`,
        backgroundSize: "cover",
      }}
    ></Flex>
  );
};

export default Banner;

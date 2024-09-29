import {
  BackgroundImage,
  Flex,
  Grid,
  Text,
  Title,
} from "@mantine/core";
import NavBar from "../navBar";
import Header from "../header";

const Home = () => {
  return (
    <Grid justify="space-around" bg={"#121418"} p={8}>
      <Grid.Col span={12}>
        <Header />
      </Grid.Col>
      <Grid.Col span={1} mih={"100vh"}>
        <NavBar />
      </Grid.Col>
      <Grid.Col
        span={10.2}
        mah={"90vh"}
        style={{
          background:
            "linear-gradient(#4FB87D,#3FBE94, #34BC9D, #27B8A7, #19B6B4, #0AB2C1 )",
          borderRadius: 16,
        }}
      >
        <Flex
          w={"100%"}
          h={"100%"}
          justify={"space-around"}
          align={"center"}
          direction={"column"}
        >
          <Flex
            w={"90%"}
            bg={"#121418"}
            h={300}
            style={{ borderRadius: 16, position: "relative" }}
          >
            <BackgroundImage
              w={"100%"}
              h={"100%"}
              style={{
                borderRadius: 16,
                position: "relative",
                display: "flex",
                justifyContent: "center",
                backgroundSize: "100% 300px",
              }}
              src={
                "https://i.pinimg.com/originals/1b/3c/14/1b3c147a4b4e6125af7b21eff5216c3f.gif"
              }
            ></BackgroundImage>
          </Flex>
          <Flex w={"100%"} style={{ borderRadius: 8 }} direction={"column"}>
            <Title pb={16} ta={"center"}>
              Galeria
            </Title>
            <Flex w={"100%"} gap={"1rem"} justify={"center"}>
              <Flex
                direction={"column"}
                justify={"center"}
                align={"center"}
                bg={"#121418"}
                w={200}
                h={250}
                style={{ borderRadius: 8 }}
              >
                <BackgroundImage
                  w={"68%"}
                  h={"80%"}
                  src={"../../public/img/morty.png"}
                />
                <Text fz={18} c={"#fff"} fw={600}>
                  Morty
                </Text>
              </Flex>
              <Flex
                direction={"column"}
                justify={"center"}
                align={"center"}
                bg={"#121418"}
                w={200}
                h={250}
                style={{ borderRadius: 8 }}
              >
                <BackgroundImage
                  w={"68%"}
                  h={"80%"}
                  src={"../../public/img/rick.png"}
                />
                <Text fz={18} c={"#fff"} fw={600}>
                  Rick
                </Text>
              </Flex>
              <Flex
                direction={"column"}
                justify={"center"}
                align={"center"}
                bg={"#121418"}
                w={200}
                h={250}
                style={{ borderRadius: 8 }}
              >
                <BackgroundImage
                  w={"68%"}
                  h={"80%"}
                  src={"../../public/img/summer.png"}
                />
                <Text fz={18} c={"#fff"} fw={600}>
                  Summer
                </Text>
              </Flex>

              <Flex
                direction={"column"}
                justify={"center"}
                align={"center"}
                bg={"#121418"}
                w={200}
                h={250}
                style={{ borderRadius: 8 }}
              >
                <BackgroundImage
                  w={"68%"}
                  h={"80%"}
                  src={"../../public/img/beth.png"}
                />
                <Text fz={18} c={"#fff"} fw={600}>
                  Beth
                </Text>
              </Flex>
              <Flex
                direction={"column"}
                justify={"center"}
                align={"center"}
                bg={"#121418"}
                w={200}
                h={250}
                style={{ borderRadius: 8 }}
              >
                <BackgroundImage
                  w={"68%"}
                  h={"80%"}
                  src={"../../public/img/jerry.png"}
                />
                <Text fz={18} c={"#fff"} fw={600}>
                  Jerry
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex>
            <Title>To Do List</Title>
        </Flex>
        </Flex>
       
      </Grid.Col>
    </Grid>
  );
};

export default Home;

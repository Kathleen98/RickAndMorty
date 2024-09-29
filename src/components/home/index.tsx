import { BackgroundImage, Box, Flex, Grid, Image, ScrollArea, Text, Title } from "@mantine/core";
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
        mah={"85vh"}
        style={{
          background:
            "linear-gradient(#4FB87D,#3FBE94, #34BC9D, #27B8A7, #19B6B4, #0AB2C1 )",
          borderRadius: 16,
        }}
      >
        <Flex w={"100%"} h={"100%"} justify={"space-around"} align={"center"} direction={"column"}>
          <Flex
            w={"90%"}
            bg={"#121418"}
            h={300}
            style={{ borderRadius: 16, position: "relative" }}
          >
            <BackgroundImage
              w={"100%"}
              h={"100%"}
              style={{ borderRadius: 16, position:"relative", display: "flex", justifyContent:"center", backgroundSize: "100% 300px" }}
              src={
                "https://i.pinimg.com/originals/1b/3c/14/1b3c147a4b4e6125af7b21eff5216c3f.gif"
              }
            >
            </BackgroundImage>
          </Flex>
          <ScrollArea>
            <Flex w={"100%"} bg={"#121418"} style={{borderRadius: 8}}>
                <Title>Galeria</Title>
                <Flex>
                    <Box>
                        <BackgroundImage src={""} />
                    </Box>
                </Flex>
            </Flex>
          </ScrollArea>
        </Flex>
      </Grid.Col>
    </Grid>
  );
};

export default Home;

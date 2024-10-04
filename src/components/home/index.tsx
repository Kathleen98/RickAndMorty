import {
  Flex,
} from "@mantine/core";
import Header from "../header";
import Banner from "./banner";

const Home = () => {
  return (
    <Flex direction={"column"} bg={"#111"} h={"100vh"}>
        <Header />
        <Flex justify={"center"} p={"8px 16px"} w={"100%"} h={"100vh"}>
          <Banner />
        </Flex>
    </Flex>
  );
};

export default Home;

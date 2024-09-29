import { Flex, Image, Text, Title } from "@mantine/core";
import Header from "../header";

const TaksList = () => {
  return (
    <>
    <Header />
    <Flex mih={"100vh"} justify={"center"} bg={"#121418"}>
      <Flex style={{alignSelf:"start"}}></Flex>
      <Flex
        w={"70%"}
        h={500}
        style={{ background: "linear-gradient(to right, #A0D8E0, #B3E5FC)" }}
      >
        <Flex
          w={300}
          c={"#84B6BD"}
          bg={"#2b2929"}
          direction={"column"}
          p={16}
          style={{ borderRadius: 12 }}
        >
          <Title>Tarefa</Title>
          <Text>Descrição da tarefa</Text>
          <Image src={"../../public/img/rickAndMoty.png"} />
        </Flex>
      </Flex>
    </Flex>
    </>
  );
};

export default TaksList;

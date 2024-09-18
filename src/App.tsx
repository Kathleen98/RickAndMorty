import { Container, Flex, Title } from "@mantine/core";
import "./App.css";
import "@mantine/core/styles.css";
import CardTasks from "./components/cardsTaks";

function App() {
  return (
    <Flex
      w={"100vw"}
      h={"100vh"}
      style={{
        background: "linear-gradient(86deg,#D2E0FB, #CDC1FF, #E5D9F2, #F5EFFF)",
      }}
    >
      <Container p={16} w={1200}>
        <Title ta={"center"} c={"#3C3D37"}>
          To Do List
        </Title>
        <Flex w="100%" justify={"center"} pt={"2rem"}>
          <CardTasks />
        </Flex>
      </Container>
    </Flex>
  );
}

export default App;

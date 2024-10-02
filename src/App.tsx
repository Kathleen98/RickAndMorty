import { Flex } from "@mantine/core";
import "./App.css";
import "@mantine/core/styles.css";
import Register from "./components/signUp";

function App() {
  return (
    <Flex
      w={"100vw"}
      h={"100vh"}
      style={{
        background: "#fff",
      }}
    >
      
      
        <Register />
    </Flex>
  );
}

export default App;

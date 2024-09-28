import { BackgroundImage, Flex } from "@mantine/core";
import FormSignUp from "./form";

const Register = () => {
  return (
    <Flex w={"100%"}>
      <BackgroundImage
        w={"100%"}
        h={"100%"}
        src="https://images6.alphacoders.com/133/1334908.jpg"
      >
        <Flex w={"100%"} h={"100%"} justify={"center"} align={"center"}>
          <FormSignUp />
        </Flex>
      </BackgroundImage>
    </Flex>
  );
};

export default Register;

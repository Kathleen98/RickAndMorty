import { BackgroundImage, Button, Flex, TextInput } from "@mantine/core";
import z from 'zod';

const schemaName = z.object({
    userName: z.string()
});

type schemaName = z.infer<typeof schemaName>

const FormSignUp = () => {



  return (
    <Flex
      w={"96%"}
      h={"100%"}
      align={"end"}
      justify={"end"}
      style={{ backdropFilter: "blur(3px)", borderRadius: 16 }}
    >
      <Flex justify={"center"} align={"center"} w={700} h={450}>
        <Flex
          w={450}
          h={450}
          direction={"column"}
          component="form"
          m={"1rem"}
        >
          <BackgroundImage
            p={26}
            w={"100%"}
            h={"100%"}
            style={{ borderRadius: 16, display: "flex", justifyContent: "center", alignItems: "center" }}
            src="https://i.pinimg.com/564x/db/b0/7e/dbb07e8f61ddb94f9b9a8980f5060bfe.jpg"
          >
            <Flex
              bg={"rgba(255, 255, 255, 0.7)"}
              w={"100%"}
              h={"50%"}
              p={16}
              direction={"column"}
              gap={16}
              align={"center"}
              justify={"center"}
              style={{ borderRadius: 16 }}
            >
              <TextInput
                w={"80%"}
                c={"#000"}
                fw={600}
                label={"Digita seu nome aê, merdinha"}
              />
              <Button type="submit" bg={"#48DD1D"}>
                Enviar
              </Button>
            </Flex>
          </BackgroundImage>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FormSignUp;

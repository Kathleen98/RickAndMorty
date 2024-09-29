import {
  BackgroundImage,
  Flex,
  Image,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import style from "./index.module.css";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schemaSignIn = z.object({
  email: z.string().email({ message: "Insira um e-mail válido" }),
  password: z.string().min(1, { message: "Campo obrigatório" }),
});

type schemaSignIn = z.infer<typeof schemaSignIn>;

const SignIn = () => {
  const {} = useForm<schemaSignIn>({
    resolver: zodResolver(schemaSignIn),
  });

  return (
    <Flex mih={"100vh"} bg={"#000"} justify={"center"} align={"center"}>
      <Flex classNames={style} p={"36 86"} h={650} style={{ borderRadius: 16 }}>
        <BackgroundImage
          src={
            "https://i.pinimg.com/564x/f1/3a/36/f13a36c13395972ba8c69e59e66eba5a.jpg"
          }
        >
          <Image w={300} src={"../../public/img/logo.png"} />
          <Flex w={300} m={"0 auto"} gap={16} direction={"column"}>
            <TextInput
              label={"Seu e-mail interdimencional"}
              styles={{
                label: {
                  color: "#fff",
                },
              }}
            />
            <PasswordInput
              label={"Sua senha"}
              styles={{
                label: {
                  color: "#fff",
                },
              }}
            />
          </Flex>
        </BackgroundImage>
      </Flex>
    </Flex>
  );
};

export default SignIn;

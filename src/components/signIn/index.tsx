import {
  Anchor,
  Button,
  Flex,
  Image,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import style from "./index.module.css";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const schemaSignIn = z.object({
  email: z.string().email({ message: "Insira um e-mail válido" }),
  password: z.string().min(1, { message: "Campo obrigatório" }),
});

type schemaSignIn = z.infer<typeof schemaSignIn>;

const SignIn = () => {
  const navigate = useNavigate();
  const { register, formState, handleSubmit } = useForm<schemaSignIn>({
    resolver: zodResolver(schemaSignIn),
  });

  const { mutate: signIn } = useMutation({
    mutationFn: async ({ email, password }: any) => {
      const signInAPI = "https://66c019dbba6f27ca9a55bb0c.mockapi.io/users";
      const response = await fetch(signInAPI);

      const users = await response.json();

      const user = users.find(
        (user: any) => user.email === email && user.password === password
      );

      if (user) {
        navigate("/home");
      } else {
        console.error("Email ou senha inválidos");
      }
    },
    onSuccess: () => {},
    onError: () => {},
  });

  const onSubimit = (userData: any) => {
    signIn(userData);
  };

  return (
    <Flex mih={"100vh"} justify={"center"} align={"center"} classNames={style}>
      <Flex
        direction={"column"}
        align={"center"}
        p={"48px 0"}
        style={{
          borderRadius: "3%",
          position: "relative",
          backdropFilter: "blur(15px)",
          zIndex: 2,
          background: "rgba(196, 215, 255, .1)",
        }}
      >
        <Image w={"50%"} src={"https://private-user-images.githubusercontent.com/99849068/378114255-6ed2b274-2311-45f1-8b91-6de0bd466212.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjkzNjMzMzYsIm5iZiI6MTcyOTM2MzAzNiwicGF0aCI6Ii85OTg0OTA2OC8zNzgxMTQyNTUtNmVkMmIyNzQtMjMxMS00NWYxLThiOTEtNmRlMGJkNDY2MjEyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDE5VDE4MzcxNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBmODEzOTlhMmQ1NGJmMjNhODllMWJhZThkNGJiNjNmZDc5OGRkNmZkMzQwNTM4OWRlMmNmYjk2YjU5Y2U2NjMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.V9i0G41Q91Fuj9i0roVgihPlhs1OfqDaobBTxkgQ2vc"} />
        <Flex
          component="form"
          m={"0 auto"}
          gap={16}
          direction={"column"}
          onSubmit={handleSubmit(onSubimit)}
          style={{ zIndex: 0 }}
          p={8}
        >
          <TextInput
            label={"E-mail interdimencional"}
            styles={{
              label: {
                color: "#05acc4",
              },
            }}
            {...register("email")}
            error={formState.errors.email?.message}
          />
          <PasswordInput
            label={"Senha interdimencional"}
            styles={{
              label: {
                color: "#05acc4",
              },
            }}
            {...register("password")}
            error={formState.errors.password?.message}
          />
          <Flex>
            <Anchor
              c={"#05acc4"}
              fw={600}
              fz={12}
              onClick={() => navigate("/")}
            >
              Vai, preenche esse cadastro inútil... ou não, tanto faz.
            </Anchor>
          </Flex>
          <Button type="submit">Abrir Portal</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignIn;

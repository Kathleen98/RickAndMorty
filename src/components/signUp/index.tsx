import {
  Button,
  Flex,
  Image,
  NativeSelect,
  PasswordInput,
  TextInput,
  Title,
} from "@mantine/core";
import style from "./index.module.css";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

const genderList = [
  "Masculino",
  "Feminino",
  "Andrógino",
  "Sapienóide",
  "Transdimensional",
  "Cibernético",
  "Neutro",
  "Extraterrestre",
];

const schemaSignUp = z
  .object({
    name: z.string().min(1, {
      message: "Esse campo é obrigatório, Morty! Não dá pra ignorar!",
    }),
    email: z.string().email().min(1, {
      message: "Esse campo é obrigatório, Morty! Não dá pra ignorar!",
    }),
    password: z.string().min(1, {
      message: "Esse campo é obrigatório, Morty! Não dá pra ignorar!",
    }),
    confirmPassword: z.string().min(1, {
      message: "Esse campo é obrigatório, Morty! Não dá pra ignorar!",
    }),
    gender: z
      .enum(["Masculino",
  "Feminino",
  "Andrógino",
  "Sapienóide",
  "Transdimensional",
  "Cibernético",
  "Neutro",
  "Extraterrestre",]),
  })
  .refine((pass) => pass.password === pass.confirmPassword, {
    message:
      "As senhas não estão na mesma dimensão, Morty! Elas não coincidem, que nem eu e a lógica algumas vezes!",
    path: ["confirmPassword"],
  });

type schemaSignUp = z.infer<typeof schemaSignUp>;

const SignUp = () => {
  const { register, handleSubmit, reset, formState } = useForm<schemaSignUp>({
    resolver: zodResolver(schemaSignUp),
  });

  const { mutate: signUpUser } = useMutation({
    mutationFn: async (usersData) => {
      const singUpUsersAPI =
        "https://66c019dbba6f27ca9a55bb0c.mockapi.io/users";

      const response = await fetch(singUpUsersAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usersData),
      });
if(!response.ok){
  throw new Error("Erro ao criar usuário")
}
return await response.json()
    },
    onSuccess: () => {},
    onError: () => {},
  });

  const onSubit = (userData: any) => {
    console.log(userData);
    signUpUser(userData)
    reset();
  };

  return (
    <Flex
      w={"100vw"}
      mih={"100vh"}
      classNames={style}
      justify={"center"}
      align={"center"}
    >
      <Flex
        component="form"
        onSubmit={handleSubmit(onSubit)}
        direction={"column"}
        style={{ backdropFilter: "blur(10px)", borderRadius: 200 }}
        p={56}
        c={"#14A8B7"}
        gap={12}
      >
        <Flex
          justify={"center"}
          direction={"column"}
          pb={"1rem"}
          align={"center"}
        >
          <Image w={250} src={"../../public/img/logo.png"} />
          <Title fz={22}>Vai, se registra aí!</Title>
        </Flex>
        <TextInput
          label={"Nome completo... como se fosse importante"}
          {...register("name")}
          error={formState.errors.name?.message}
        />
        <TextInput
          label={"Manda o e-mail logo!"}
          {...register("email")}
          error={formState.errors.email?.message}
        />
        <PasswordInput
          label={"Senha, porque claro.."}
          {...register("password")}
          error={formState.errors.password?.message}
        />
        <PasswordInput
          label={"Confirma a senha. De novo."}
          {...register("confirmPassword")}
          error={formState.errors.confirmPassword?.message}
        />
        <NativeSelect {...register("gender")} data={genderList} label={"Escolhe aí, vai."} />
        <Button type="submit">Manda ver!</Button>
      </Flex>
    </Flex>
  );
};

export default SignUp;

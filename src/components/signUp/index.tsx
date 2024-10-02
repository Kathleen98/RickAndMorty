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
import z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const schemaSignUp = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
})

type schemaSignUp = z.infer<typeof schemaSignUp>

const SignUp = () => {
  const {register} = useForm<schemaSignUp>({
    resolver: zodResolver(schemaSignUp)
  });
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
        direction={"column"}
        style={{ backdropFilter: "blur(10px)", borderRadius: 200 }}
        p={56}
        c={"#A1CDE1"}
        gap={12}
      >
        <Flex justify={"center"} direction={"column"} pb={"1rem"} align={"center"}>
          <Image w={250} src={"../../public/img/logo.png"} />
          <Title fz={22}>Vai, se registra aí!</Title>
        </Flex>
        <TextInput label={"Nome completo... como se fosse importante"} 
          {...register("name")}
        />
        <TextInput label={"Manda o e-mail logo!"} 
            {...register("email")}
        />
        <PasswordInput label={"Senha, porque claro.."} 
          {...register("password")}
        />
        <PasswordInput label={"Confirma a senha. De novo."} />
        <NativeSelect label={"Escolhe aí, vai."} />
        <Button type="submit">Manda ver!</Button>
      </Flex>
    </Flex>
  );
};

export default SignUp;

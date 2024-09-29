import {
  BackgroundImage,
  Button,
  Flex,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const schemaName = z.object({
  userName: z.string().min(1, { message: "Campo obrigatório" }),
  email: z
    .string()
    .min(1, { message: "Campo obrigatório" })
    .email({ message: "Insira um e-mail válido" }),
  password: z
    .string()
    .min(4, { message: "A senha deve conter no mínimo 4 caracteres" }),
});

type schemaName = z.infer<typeof schemaName>;

const FormSignUp = () => {
  const { register, handleSubmit, reset, formState } = useForm<schemaName>({
    resolver: zodResolver(schemaName),
  });
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    localStorage.setItem("name", data.userName);
    console.log(data);
    reset();
    // navigate('/redirect');
  };

  return (
    <Flex w={"96%"} h={"100%"} align={"end"} justify={"end"}>
      <Flex justify={"center"} align={"center"} w={700} h={450}>
        <Flex
          w={450}
          h={450}
          direction={"column"}
          component="form"
          m={"1rem"}
          onSubmit={handleSubmit(onSubmit)}
        >
          <BackgroundImage
            p={26}
            w={"100%"}
            h={"100%"}
            style={{
              borderRadius: 200,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            src="https://i.pinimg.com/564x/db/b0/7e/dbb07e8f61ddb94f9b9a8980f5060bfe.jpg"
          >
            <Flex
              bg={"rgba(255, 255, 255, 0.7)"}
              w={"100%"}
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
                styles={{
                  label: {
                    fontWeight: 600,
                    fontSize: "1rem",
                  },
                }}
                label={"Digita seu nome aê, merdinha"}
                {...register("userName")}
                error={formState.errors.userName?.message}
              />
              <TextInput
                w={"80%"}
                c={"#000"}
                fw={600}
                label={"Seu e-mail interdimencional"}
                styles={{
                  label: {
                    fontWeight: 600,
                    fontSize: "1rem",
                  },
                }}
                {...register("email")}
                error={formState.errors.email?.message}
              />
              <PasswordInput
                w={"80%"}
                c={"#000"}
                fw={600}
                label={"Essa senha vai te proteger dos Gromflomites?"}
                styles={{
                  label: {
                    fontWeight: 600,
                    fontSize: "1rem",
                  },
                }}
                {...register("password")}
                error={formState.errors.password?.message}
              />
              <Button type="submit" bg={"#48DD1D"}>
                Enviar e abrir um portal!
              </Button>
            </Flex>
          </BackgroundImage>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FormSignUp;

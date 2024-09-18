import { Button, Flex, Textarea, TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";
import btnStyle from './button.module.css';
import textIptStyle from './textInput.module.css';

const FormsTasks = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Flex
      component="form"
      w={"100%"}
      direction={"column"}
      onSubmit={handleSubmit(onSubmit)}
      align={"center"}
    >
      <TextInput
        {...register("title", { required: "Campo obrigatório" })}
        placeholder="Título da tarefa"
        w={400}
        radius={16}
        classNames={textIptStyle}
      />
      <Textarea
        {...register("description", { required: "Campo obrigatório" })}
        placeholder="Descriação da tarefa"
        w={400}
        m={"1rem 0"}
        radius={16}
      />
      <Button
      autoContrast
        classNames={btnStyle}
        type="submit"
        c={"#000"}
        fw={600}
        w={300}
      >
        Adicionar
      </Button>
    </Flex>
  );
};

export default FormsTasks;

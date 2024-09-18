import { Button, Card, Flex, ScrollArea, Select, Text, Textarea, TextInput, Title } from "@mantine/core";
import { useForm } from "react-hook-form";

interface FormData{
  title: string;
  description: string;
}

const CardTasks = () => {
  const { register, handleSubmit, formState:{errors} } = useForm<FormData>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const statusTaks: string[] = ["Concluído", "Em andamento", "Pendente"];

  const getBackgroundColor = (status: string) => {
    switch (status) {
      case "Concluído":
        return "#DEF9C4";
      case "Pendente":
        return "#FF8787";
      case "Em andamento":
        return "#CAF4FF";
    }
  };

  return (
    <Flex direction={"column"} gap={16}>
      <Flex
      component="form"
      w={"100%"}
      direction={"column"}
      onSubmit={handleSubmit(onSubmit)}
      align={"center"}
    >
      <TextInput
        {...register("title", { required: "Campo obrigatório" } )}
        placeholder="Título da tarefa"
        error={errors.title?.message}
        w={400}
        radius={16}
      />
      <Textarea
        {...register("description", { required: "Campo obrigatório" })}
        placeholder="Descriação da tarefa"
        error={errors.description?.message}
        w={400}
        m={"1rem 0"}
        radius={16}
      />
      <Button
      autoContrast
        type="submit"
        c={"#000"}
        fw={600}
        w={300}
      >
        Adicionar
      </Button>
    </Flex>
      <ScrollArea>
        <Card bg={"#fff"} h={"100%"} style={{ borderRadius: 8 }}>
          <Title fz={18}>Nome da tarefa</Title>
          <ScrollArea>
            <Text fz={14}>Descrição da tarefa</Text>
          </ScrollArea>
          <Select
            placeholder={"Status"}
            data={statusTaks}
            radius={16}
            w={130}
            bg={getBackgroundColor(statusTaks[0])}
          />
        </Card>
      </ScrollArea>
    </Flex>
  );
};

export default CardTasks;

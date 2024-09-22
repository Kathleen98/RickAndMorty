import {
  Button,
  Card,
  Flex,
  ScrollArea,
  Select,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import selectStyle from './select.module.css'

interface FormData {
  title: string;
  description: string;
}

interface Tasks {
  id: number;
  title: string;
  description: string;
  createdAt: string
}

const CardTasks = () => {
  const [tasks, setTaks] = useState<Tasks[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();



  const onSubmit = (data: any) => {
    const newTasks: Tasks = {
      id: tasks.length +1,
      title: data.title,
      description: data.description,
      createdAt: new Date().toLocaleString()
    };

    setTaks((prevTasks) => [...prevTasks, newTasks]);
    reset();
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
    <Flex direction={"column"} gap={16} w={1200}>
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
        <Button autoContrast type="submit" c={"#000"} fw={600} w={300}>
          Adicionar
        </Button>
      </Flex>
      <ScrollArea>
        <Flex gap={16}>
        {tasks.length > 0 ? tasks.map((task) => (
              <Card key={task.id} bg={"#fff"} h={"100%"} style={{ borderRadius: 8 }}>
            <Title fz={16}>{task.title}</Title>
            <ScrollArea>
              <Text fz={14}>
                {task.description}
              </Text>
            </ScrollArea>
            <Select
              placeholder={"Status"}
              data={statusTaks}
              radius={16}
              w={130}
              classNames={selectStyle}
              styles={{options: getBackgroundColor}}
            />
            <Text c={"#CCD3CA"} fz={10} span>data de criação: {task.createdAt}</Text>
          </Card>
        )) : null}
        </Flex>
      </ScrollArea>
    </Flex>
  );
};

export default CardTasks;

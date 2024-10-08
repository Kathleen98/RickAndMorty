import { Button, Flex, Tooltip } from "@mantine/core";
import { IoHomeOutline, IoImageOutline } from "react-icons/io5";
import { GoTasklist } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navitage = useNavigate()

  return (
    <Flex direction={"column"} justify={"center"} align={"center"} gap={20}>
      <Tooltip label="Home">
        <Button w={60} h={60} bg={"transparent"}>
          <IoHomeOutline color="#05acc4" size={30} />
        </Button>
      </Tooltip>
      <Tooltip label="Galeria">
        <Button w={60} h={60} bg={"transparent"}>
          <IoImageOutline color="#05acc4" size={30} />
        </Button>
      </Tooltip>
      <Tooltip label="To Do List">
        <Button w={60} h={60} bg={"transparent"} onClick={() => navitage("/toDoList")}>
          <GoTasklist color="#05acc4" size={30} />
        </Button>
      </Tooltip>
    </Flex>
  );
};

export default NavBar;

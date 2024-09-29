import { Button, Flex, Tooltip } from "@mantine/core";
import { IoHomeOutline, IoImageOutline } from "react-icons/io5";
import { GoTasklist } from "react-icons/go";

const NavBar = () => {
  return (
    <Flex direction={"column"} justify={"center"} align={"center"} gap={20}>
      <Tooltip label="Home">
        <Button w={55} bg={"transparent"}>
          <IoHomeOutline color="#05acc4" size={25} />
        </Button>
      </Tooltip>
      <Tooltip label="Galeria">
        <Button w={55} bg={"transparent"}>
          <IoImageOutline color="#05acc4" size={25} />
        </Button>
      </Tooltip>
      <Tooltip label="To Do List">
        <Button w={55} bg={"transparent"}>
          <GoTasklist color="#05acc4" size={25} />
        </Button>
      </Tooltip>
    </Flex>
  );
};

export default NavBar;

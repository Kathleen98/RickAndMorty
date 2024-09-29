import { Flex, Image, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const navigate = useNavigate()

  useEffect(() => {
    const localStorageData = localStorage.getItem("userDate");

    if (localStorageData) {
      try {
        const userDatas = JSON.parse(localStorageData);

        if (userDatas.userName) {
          setUserName(userDatas.userName);
        }
      } catch (error) {
        console.error("Erro ao analisar localStorange");
      }
    }
  }, []);

  return (
    <Flex bg="#121418" align={"center"} justify={"space-between"} p={"0 2rem"}>
      <Image  onClick={() => navigate("/home")}  w={120} src={"../../public/img/logo.png"} style={{cursor: "pointer"}} />
      <Flex>
        <Text c={"#fff"}>A porra da, {userName}!</Text>
      </Flex>
    </Flex>
  );
};

export default Header;

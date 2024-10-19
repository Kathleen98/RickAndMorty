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
      <Image  onClick={() => navigate("/home")}  w={120} src={"https://private-user-images.githubusercontent.com/99849068/378114255-6ed2b274-2311-45f1-8b91-6de0bd466212.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjkzNjMzMzYsIm5iZiI6MTcyOTM2MzAzNiwicGF0aCI6Ii85OTg0OTA2OC8zNzgxMTQyNTUtNmVkMmIyNzQtMjMxMS00NWYxLThiOTEtNmRlMGJkNDY2MjEyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDE5VDE4MzcxNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBmODEzOTlhMmQ1NGJmMjNhODllMWJhZThkNGJiNjNmZDc5OGRkNmZkMzQwNTM4OWRlMmNmYjk2YjU5Y2U2NjMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.V9i0G41Q91Fuj9i0roVgihPlhs1OfqDaobBTxkgQ2vc"} style={{cursor: "pointer"}} />
      <Flex>
        <Text c={"#fff"}>Fala aê, {userName}!</Text>
      </Flex>
    </Flex>
  );
};

export default Header;

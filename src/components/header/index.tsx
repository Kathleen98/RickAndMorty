import { Flex, Image, Text } from "@mantine/core"
import { useEffect, useState } from "react"

const Header = () => {
    const [userName, setUserName] = useState<string | null>(null);

    useEffect(() => {
        const name = localStorage.getItem("name");

        if(name){
            setUserName(name)
        }
    })


    return(
        <Flex bg="#121418" align={"center"} justify={"space-between"}p={"0 2rem"}>
            <Image w={150} src={"../../public/img/logo.png"} />
            <Flex>
                <Text c={"#fff"}>A porra da,{" "}{userName}!</Text>
            </Flex>
        </Flex>
    )
}

export default Header
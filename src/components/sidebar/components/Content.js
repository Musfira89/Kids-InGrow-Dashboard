// chakra imports
import { Box, Flex, Stack } from "@chakra-ui/react";
//   Custom components
import Logo from "../../../assets/img/layout/Logo.png"
import Links from "components/sidebar/components/Links";
import React from "react";

// FUNCTIONS

function SidebarContent(props) {
  const { routes } = props;
  // SIDEBAR
  return (
    <Flex direction='column' height='100%' pt='25px' px="16px" borderRadius='30px'>
      <Flex align='center' direction='column'>
        <img src={Logo} alt="logo"   />
       </Flex>     
     <Stack direction='column' mb='auto' mt='8px'>
        <Box ps='20px' pe={{ md: "16px", "2xl": "1px" }}>
          <Links routes={routes} />
        </Box>
      </Stack>

    
    </Flex>
  );
}

export default SidebarContent;


import React from "react";

// Chakra imports
import {
  Box,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

// Custom components
import Banner from "views/user/Activities/components/Banner";
import ActivityCards from "components/card/Activity";

// Assets
import activity from "../../../assets/img/activities/activity.png"
import activity1 from "../../../assets/img/activities/activity1.jpg"
import activity2 from "../../../assets/img/activities/activity2.jpg"



export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb='20px'
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}>
          <Banner />
          <Flex direction='column'>
            <Flex
              mt='45px'
              mb='20px'
              justifyContent='space-between'
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}>
              <Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
                Suggested Activities
              </Text>
              <Flex
                align='center'
                me='20px'
                ms={{ base: "24px", md: "0px" }}
                mt={{ base: "20px", md: "0px" }}>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#art'>
                  Age 1 year
                </Link>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#music'>
                Age 2 year
                </Link>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#collectibles'>
                  Age 3 year
                </Link>
              </Flex>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap='20px'>
              <ActivityCards 
                name='Communication'
                description=' Practice turn-taking conversations to enhance communication skills.'         

                image={activity1}
                download='#'
              />
              <ActivityCards 
                name='Social Interaction'
                author='By Nick Wilson'
                description=' sensory activities like deep breathing exercises to manage repetitive behaviors'         

                image={activity2}
      
                download='#'
              />
              <ActivityCards 
                name='Communication '
                description=' sensory activities like deep breathing exercises to manage repetitive behaviors'         
                image={activity1}
         
                download='#'
              />
     
          
              <ActivityCards 
                name='Motor Skills'
                author='By Peter Will'
                description=' sensory activities like deep breathing exercises to manage repetitive behaviors'         

                image={activity2}
                download='#'
              />
              <ActivityCards 
                name='Social Interaction'
                author='By Mark Benjamin'
                description=' sensory activities like deep breathing exercises to manage repetitive behaviors'         

                image={activity2}
                download='#'
              />
              <ActivityCards 
                name='Repetitive Behaviours'
                description=' sensory activities like deep breathing exercises to manage repetitive behaviors'         
                image={activity}
                download='#'
              />
            </SimpleGrid>
          </Flex>
        </Flex>
    
      </Grid>
      {/* Delete Product */}
    </Box>
  );
}

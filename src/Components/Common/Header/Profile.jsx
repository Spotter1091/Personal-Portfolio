import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Link,
  IconButton,
  VStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaGooglePlusG,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import ProfilePicture from "../../../assets/images/spotter.jpg";
import Typical from "react-typical";

const Profile = () => {
  return (
    <Flex
      align="center"
      justify="center"
      textAlign="center"
      minH="80vh"
      bg="gray.800"
      p={5}
    >
      <Flex
        color="white"
        align="center"
        direction={{ base: "column-reverse", md: "row" }}
        mb={{ base: "40px", md: "0" }}
      >
      
        <VStack spacing={4} textAlign="center">
        
          <Flex justify="center" gap={4}>
            <Link
              href="https://web.facebook.com/adedayo.ogunsemoyin"
              isExternal
            >
              <IconButton
                icon={<FaFacebook />}
                aria-label="Facebook"
                variant="outline"
                size="lg"
                colorScheme="facebook"
                transition="all 0.3s"
                _hover={{ transform: "scale(1.4)" }}
              />
            </Link>
            <Link href="#" isExternal>
              <IconButton
                icon={<FaGooglePlusG />}
                aria-label="Google Plus"
                variant="outline"
                size="lg"
                colorScheme="red"
                transition="all 0.3s"
                _hover={{ transform: "scale(1.4)" }}
              />
            </Link>
            <Link href="#" isExternal>
              <IconButton
                icon={<FaInstagram />}
                aria-label="Instagram"
                variant="outline"
                size="lg"
                colorScheme="pink"
                transition="all 0.3s"
                _hover={{ transform: "scale(1.4)" }}
              />
            </Link>
            <Link href="#" isExternal>
              <IconButton
                icon={<FaYoutube />}
                aria-label="YouTube"
                variant="outline"
                size="lg"
                colorScheme="red"
                transition="all 0.3s"
                _hover={{ transform: "scale(1.4)" }}
              />
            </Link>
          </Flex>

    
          <Text fontSize={{ base: "20px", md: "24px" }} color="white">
            Hello, I'm{" "}
            <Text as="span" color="orange.500" fontWeight="bold">
              Adedayo
            </Text>
          </Text>

          <Heading
            as="h1"
            fontSize={{ base: "35px", md: "40px" }}
            fontFamily="cursive"
            color="white"
          >
            <Typical
              loop={Infinity}
              steps={[
                "Enthusiastic Dev 😃",
                1000,
                "Frontend Developer 💻",
                1000,
                "JavaScript Dev ⚡",
                1000,
                "React Dev ⚛️",
                1000,
                "Cross Platform Dev 📱",
                1000,
              ]}
            />
          </Heading>

          <Text fontSize="19px" color="white" mt={2}>
            Transforming ideas into interactive digital experiences, one pixel
            at a time.
          </Text>

      
          <Flex gap={4} mt={6}>
            <Button colorScheme="blue" size="lg">
              Hire Me
            </Button>
            <Link href="adedayo ogunsemoyin.pdf" download>
              <Button
                colorScheme="orange"
                variant="outline"
                size="lg"
                _hover={{ bg: "cornsilk", color: "black" }}
              >
                Resume
              </Button>
            </Link>
          </Flex>
        </VStack>

        <Box
          mt={{ base: "-90px", md: "0" }}
          ml={{ base: "0", md: "100px" }}
          boxShadow="0 1px 2px 0px rgba(0, 0, 0, 0.2)"
          backgroundColor="white"
          display="flex"
          align="center"
          justify="center"
          borderRadius="full"
          w={{ base: "275px", md: "380px" }}
          h={{ base: "275px", md: "380px" }}
          // overflow="hidden"
          transition="all 1s ease-out"
          _hover={{ transform: "scale(1.07)" }}
        >
          <Image
            src={ProfilePicture}
            w="380px"
            h="380px"
            // size={{ height: "100px", width: "300px" }}

            // objectFit="cover"

            borderRadius="full"
            backgroundSize="cover"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Profile;

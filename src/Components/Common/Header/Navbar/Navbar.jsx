import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Box, Flex, Link, IconButton, useDisclosure } from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure(); 

  return (
    <Box bg="gray.800" color="white" px={10} py={6}>
      <Flex align="center" justify="space-around">
        
        <Link href="#" fontSize="2xl" fontWeight="bold">
          Valor Digital Unitz
        </Link>

      
        <Flex
          as="ul"
          display={{ base: "none", md: "flex" }} /* Hidden on small screens */
          align="center"
          listStyleType="none"
        >
          <Box as="li" mx={4}>
            <Link href="#" _hover={{ color: "orange.400" }}>
              Home
            </Link>
          </Box>
          <Box as="li" mx={4}>
            <Link href="#" _hover={{ color: "orange.400" }}>
              Services
            </Link>
          </Box>
          <Box as="li" mx={4}>
            <Link href="#" _hover={{ color: "orange.400" }}>
              Projects
            </Link>
          </Box>
          <Box as="li" mx={4}>
            <Link href="#" _hover={{ color: "orange.400" }}>
              About
            </Link>
          </Box>
          <Box as="li" mx={4}>
            <Link href="#" _hover={{ color: "orange.400" }}>
              Contact
            </Link>
          </Box>
        </Flex>

      
        <Box display={{ base: "block", md: "none" }} onClick={onToggle}>
          <IconButton
            icon={isOpen ? <FaTimes /> : <FaBars />}
            fontSize="1.5em"
            variant="unstyled"
            aria-label="Toggle Navigation"
          />
        </Box>
      </Flex>

      
      {isOpen && (
        <Flex
          as="ul"
          flexDirection="column"
          align="flex-start"
          listStyleType="none"
          mt={4}
          display={{ base: "flex", md: "none" }} 
          bg="gray.800"
          p={4}
          w="full"
        >
          <Box as="li" py={2}>
            <Link href="#" _hover={{ color: "orange.400" }}>
              Home
            </Link>
          </Box>
          <Box as="li" py={2}>
            <Link href="#" _hover={{ color: "orange.400" }}>
              Services
            </Link>
          </Box>
          <Box as="li" py={2}>
            <Link href="#" _hover={{ color: "orange.400" }}>
              Projects
            </Link>
          </Box>
          <Box as="li" py={2}>
            <Link href="#" _hover={{ color: "orange.400" }}>
              About
            </Link>
          </Box>
          <Box as="li" py={2}>
            <Link href="#" _hover={{ color: "orange.400" }}>
              Contact
            </Link>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default Navbar;

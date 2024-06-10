import { Flex } from '@chakra-ui/react'

const NavbarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg="#fafafa"
      color="black"
      {...props}
      >
      {children}
    </Flex>
  )
}

export default NavbarContainer
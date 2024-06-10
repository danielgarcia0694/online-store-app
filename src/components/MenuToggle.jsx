import { Box } from '@chakra-ui/react'
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <MdClose fontSize={32} /> : <MdMenu fontSize={32} />}
    </Box>
  );
};

export default MenuToggle
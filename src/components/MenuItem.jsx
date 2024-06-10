import { Link, Text } from "@chakra-ui/react";

const MenuItem = ({ children, isLast, to = "/", ...res }) => {
  return (
    <Link href={to}>
      <Text display="block" {...res}>
        {children}
      </Text>
    </Link>
  );
};

export default MenuItem
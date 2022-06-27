import { Box, StackDivider, VStack, Text } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        <Box h={['100%', '500px']}>
          <Text
            fontSize={['21px', '6xl']}
            w={['100%', '70%']}
            m={['7', '55']}
            p={10}
          >
            اتحدنا بكل شغف لتكوين علامة فارقة في سوق الانتاج، ونطمح لتطوير
            الأعمال الابداعية بطريقة جذابة وسلسة
          </Text>
        </Box>
      </VStack>
    </>
  );
};

export default Header;

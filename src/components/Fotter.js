import {
  ChevronLeftIcon,
  EmailIcon,
  ExternalLinkIcon,
  PhoneIcon,
} from '@chakra-ui/icons';
import { Box, Container, Stack, VStack, Link } from '@chakra-ui/react';
import React from 'react';

const Fotter = () => {
  return (
    <>
      <VStack>
        <Container maxW="md" mt="50px">
          <hr />
        </Container>
      </VStack>
      <Stack
        direction={['column', 'row']}
        spacing={['10px', '94px']}
        mr={['40px', '500']}
        mt={50}
      >
        <Box w="150px" h="120px">
          <Link href="#" isExternal>
            <ChevronLeftIcon mx="2px" />
            اتحدنا بكل شغف لتكوين علامة فارقة في سوق الانتاج
          </Link>
        </Box>
        <Box w="150px" h="120px">
          <Link href="#" isExternal>
            <PhoneIcon mx="2px" /> 9270 329 59 966+
          </Link>

          <Link href="#" isExternal mt={['2px']}>
            <EmailIcon mx="2px" /> hi@prowolves.com
          </Link>
        </Box>
        <Box h="60px"></Box>
      </Stack>
    </>
  );
};

export default Fotter;

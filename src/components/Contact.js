import React from 'react';
import {
  Container,
  Grid,
  GridItem,
  VStack,
  Box,
  StackDivider,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';
import imgTwitter from '../img/twitter.svg';
import { Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  return (
    <>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
        mt={55}
      >
        <Box h="10px">
          {/*  m={55} p={10} */}
          <Text
            fontSize={['23px', '4xl']}
            w={['100%', '70%']}
            m={['7', '55']}
            mr={['40px']}
            mb={['50px']}
          >
            كلمنا
          </Text>
        </Box>
      </VStack>
      <Container mt={55} mr={['40px', '500px']}>
        <Stack
          direction={['column', 'row']}
          spacing={['3', '5']}
          mr={['0px', '140px']}
        >
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <Stack direction="row">
              <Link href="https://www.youtube.com/watch?v=p8geoEgdrr0&list=RDp8geoEgdrr0&start_radio=1">
                <Image
                  h={10}
                  w={10}
                  objectFit="cover"
                  src={imgTwitter}
                  alt="Twitter"
                  color="red"
                />
              </Link>
            </Stack>
            <Stack direction="row">
              <Image
                h={10}
                w={10}
                objectFit="cover"
                src={imgTwitter}
                alt="Twitter"
              />
            </Stack>
            <Stack direction="row">
              <Image
                h={10}
                w={10}
                objectFit="cover"
                src={imgTwitter}
                alt="Twitter"
              />
            </Stack>
            <Stack direction="row">
              <Image
                h={10}
                w={10}
                objectFit="cover"
                src={imgTwitter}
                alt="Twitter"
              />
            </Stack>
          </Grid>
        </Stack>
      </Container>
    </>
  );
};

export default Contact;

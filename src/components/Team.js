import React from 'react';
import {
  Avatar,
  Wrap,
  WrapItem,
  Text,
  HStack,
  SimpleGrid,
  Box,
  Heading,
  VStack,
  StackDivider,
  AvatarGroup,
  Stack,
} from '@chakra-ui/react';
function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}
const Team = () => {
  return (
    <>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        <Box h="10px">
          <Text fontSize={['23px', '4xl']} w={['100%', '70%']} m={['7', '55']} mr={['40px']}>
            مين حنا؟
          </Text>
        </Box>
      </VStack>
      <SimpleGrid columns={1} mr={['120px', '630px']} mt={['50px', '0px']}>
        <Stack direction="row" spacing={5}>
          <AvatarGroup size="md" max={2}>
            <Avatar name="Wala" />
            <Avatar name="Emad" />
            <Avatar name="Tarq" />
            <Avatar name="Khaled" />
            <Avatar name="Wala" />
          </AvatarGroup>
        </Stack>
      </SimpleGrid>
      <SimpleGrid columns={['2', '1']} m={['90px', '100']}>
        <Stack
          direction={['column', 'row']}
          spacing={['3', '5']}
          mr={['0px', '140px']}
        >
          <Box w={['200px']} h={['120px']}>
            <Feature title="🎬 ولاء" desc="مدير عام - منتج" />
          </Box>
          <Box w={['200px']} h={['120px']}>
            <Feature title="🎬 عماد" desc="كاتب - مخرج" />
          </Box>
          <Box w={['200px']} h={['120px']}>
            <Feature title="🎬  طارق" desc="مدير تصوير وإضاءة" />
          </Box>
          <Box w={['200px']} h={['120px']}>
            <Feature title="🎬 خالد" desc="منتج مونتاج" />
          </Box>
        </Stack>
      </SimpleGrid>
    </>
  );
};

export default Team;

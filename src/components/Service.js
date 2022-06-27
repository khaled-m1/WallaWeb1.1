import React from 'react';
import {
  Box,
  StackDivider,
  VStack,
  Text,
  Stack,
  Heading,
  HStack,
  SimpleGrid,
  Show,
  Hide,
} from '@chakra-ui/react';
function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}
const Service = () => {
  return (
    <>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        <Box h="10px">
          <Text
            fontSize={['23px', '4xl']}
            w={['100%', '70%']}
            m={['7', '55']}
            p={10}
          >
            خدماتنا
          </Text>
        </Box>
      </VStack>

      <SimpleGrid columns={['2', '1']} m={['90px', '100']} p={['1', '10']}>
        <Stack
          direction={['column', 'row']}
          spacing={['3', '5']}
          mr={['0px', '140px']}
        >
          <Box w={['200px']} h={['120px']}>
            <Feature title="🎬 إدارة الانتاج" desc="أفلام - إعلانات - تغطيات" />
          </Box>
          <Box w={['200px']} h={['120px']}>
            <Feature title="🎬 كتابة المحتوى" desc="محتوى ابداعي - سيناريو" />
          </Box>
          <Box w={['200px']} h={['150px']}>
            <Feature title="🎬 إدارة تصوير" desc="معدات - طاقم عمل محترف" />
          </Box>
          <Box w={['200px']} h={['120px']}>
            <Feature title="🎬 مـونـتــــــــــــاج" desc="تحرير - تلوين" />
          </Box>
        </Stack>
      </SimpleGrid>
    </>
  );
};

export default Service;

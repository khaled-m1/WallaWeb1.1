import React from 'react';
import { ChakraProvider, Box, Grid, HStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Navbar from './components/Navbar';
import theme from './Theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <HStack spacing={['50%','85vw']} mt={0} p={2}>
          <Box textAlign="center" fontSize="xl">
            <Navbar />
          </Box>
          <Box textAlign="center" fontSize="xl">
            <Grid>
              <ColorModeSwitcher justifySelf="flex-end" />
            </Grid>
          </Box>
        </HStack>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

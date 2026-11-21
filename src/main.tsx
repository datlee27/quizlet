import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { defaultTheme } from '@themes/defaut-theme';
import { SoundProvider } from '@contexts/sound-context';
import App from './App';
import './App.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={defaultTheme}>
      <SoundProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SoundProvider>
    </ChakraProvider>
  </React.StrictMode>
);

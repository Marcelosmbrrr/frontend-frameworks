import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Router } from './routes';
import { AuthProvider } from './context/Auth';
import { PaginationProvider } from './context/Pagination';
import { MenuOpenProvider } from './context/MenuOpen';
import { SnackbarProvider } from 'notistack';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <PaginationProvider>
      <SnackbarProvider>
        <MenuOpenProvider>
          <Router />
        </MenuOpenProvider>
      </SnackbarProvider>
    </PaginationProvider>
  </AuthProvider>,
)
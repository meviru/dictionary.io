import React from 'react'
import ReactDOM from 'react-dom/client'
import AppLayout from './layout/components/AppLayout.tsx'
import DictionaryProvider from './context/index.tsx'
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DictionaryProvider>
      <AppLayout />
    </DictionaryProvider>
  </React.StrictMode>,
)

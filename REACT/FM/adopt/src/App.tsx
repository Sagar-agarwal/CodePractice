import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import './App.css';
import Details from './components/Details';
import SearchParams from './components/SearchParams';
import AdoptedPetContext from './contexts/AdoptedPetContext';

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });
  const adoptedPet = useState(null);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <header id="my-id">
            <Link to={'/'}>Adopt Me</Link>
          </header>
          <Routes>
            <Route path="/" element={<SearchParams></SearchParams>}></Route>
            <Route path="/details/:id" element={<Details></Details>}></Route>
          </Routes>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;

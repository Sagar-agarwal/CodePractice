import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Details from './components/Details';
import SearchParams from './components/SearchParams';

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header id="my-id">
          <Link to={'/'}>Adopt Me</Link>
        </header>
        <Routes>
          <Route path="/" element={<SearchParams></SearchParams>}></Route>
          <Route path="/details/:id" element={<Details></Details>}></Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;

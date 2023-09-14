import { useQuery } from '@tanstack/react-query';
import fetchBreedList from '../hooks/fetchBreedList';

export default function useBreedList(animal: string): [[], string] {
  const results = useQuery(['breeds', animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status];
}

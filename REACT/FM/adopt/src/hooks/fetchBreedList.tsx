const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];
  if (!animal) return [];

  const res = await fetch(`https://pets-v2.dev-apis.com/breeds?animal=${animal}`);

  if (!res.ok) {
    return new Error('fetchBreedList fetch not ok');
  }

  return res.json();
};

export default fetchBreedList;

/*
export default function useBreedList(animal: string) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState('unloaded');

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal as keyof typeof localCache]) {
      setBreedList(localCache[animal]);
    }
    if (animal) {
      requestBreedList();
    }

    async function requestBreedList() {
      setStatus('loading');
      setBreedList([]);

      const res = await fetch(`https://pets-v2.dev-apis.com/breeds?animal=${animal}`);
      const json = await res.json();
      localCache[animal as keyof typeof localCache] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus('loaded');
    }
  }, [animal]);

  return [breedList, status];
}
*/

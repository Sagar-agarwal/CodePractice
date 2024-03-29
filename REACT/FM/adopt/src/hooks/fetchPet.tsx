const fetchPet = async ({ queryKey }: { queryKey: Array<string> }) => {
  const id = queryKey[1];

  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    return new Error(`details/${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchPet;

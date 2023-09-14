const fetchPets = async ({ queryKey }) => {
  const { animal, breed, location } = queryKey[1];
  const res = await fetch(
    `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!res.ok) {
    return new Error('Could not Initial load Pets');
  }

  return res.json();
};

export default fetchPets;

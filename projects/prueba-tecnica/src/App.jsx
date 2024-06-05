import { useEffect, useState } from 'react';
import { getRandomFact } from './logic/facts';
import { useCatImage } from './hooks/useCatImage';
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
//const CAT_ENDPOINT_IMAGE_URL =`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

export function App() {
  const [fact, setFact] = useState();
  const { imageUrl } = useCatImage({ fact });

  // para recuperar la cita al cargar la pagina
  useEffect(() => {
    getRandomFact().then(setFact);
  }, []);

  const HandleFact = async () => {
    const newFact = await getRandomFact();
    setFact(newFact);
  };

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={HandleFact}>Get new fact</button>

      {fact && <p>{fact}</p>}
      <img
        src={imageUrl}
        alt={`Image extracted using the first Thre words for ${fact}`}
      />
    </main>
  );
}

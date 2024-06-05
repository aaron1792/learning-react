import { useEffect, useState } from 'react';
import { getRandomFact } from './logic/facts';
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
//const CAT_ENDPOINT_IMAGE_URL =`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  //para recuperar la imagen cada vez que tenemos una cita nueva

  useEffect(() => {
    if (!fact) return;

    const firstWord = fact.split(' ', 3).join(' ');
    console.log(firstWord);

    fetch(
      `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        console.log(response);

        const { url } = response;

        setImageUrl(`${url}`);
      });
  }, [fact]);
  return { imageUrl };
} // {imageUrl: 'https://...'}

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

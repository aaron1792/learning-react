import { useCatImage } from './hooks/useCatImage';
import { useCatFact } from './hooks/useCatFact';
import { Otro } from './components/Otro';
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
//const CAT_ENDPOINT_IMAGE_URL =`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`

export function App() {
  const [fact, refreshFact] = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const HandleFact = async () => {
    refreshFact();
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
      <Otro />
    </main>
  );
}

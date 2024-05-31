import { useEffect, useState } from "react"
const CAT_ENDPOINT_RANDOM_FACT='https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL =`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
const CAT_PREFIX_IMAGE_URL='https://cataas.com'

export function App(){


   

    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    useEffect(()=>{
fetch(CAT_ENDPOINT_RANDOM_FACT)
.then(res => res.json())
.then(data => {


    const {fact} = data
    setFact(fact)

    const firstWord = fact.split(' ', 3).join(' ')
    console.log(firstWord)

    fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`)
    
    .then(res => res.json())
    .then(response =>{

        console.log(response)

const { url } = response


setImageUrl(`https://${url}`)


    })
    

    })
}
    
    
    




    ,[])

    

    return(

        <main>

           <h1>App de gatitos</h1>

           {fact && <p>{fact}</p>}
            <img src={imageUrl} alt={`Image extracted using the first Thre words for ${fact}`}/>
            
        </main>

       
    )
}
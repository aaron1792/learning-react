import { useEffect, useState } from "react"
import { getRandomFact } from "../logic/facts"

export function useCatFact  ()  {


    const [fact, setFact] = useState()

    const refreshFact = () => {

        getRandomFact().then(newFact => setFact
            (newFact)
        )
    }

    //para recuperar la cita al cargar l apagina

    useEffect(refreshFact, [])

    return {fact, refreshFact}
    
}
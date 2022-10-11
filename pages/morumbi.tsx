import { NextPageContext } from 'next';
import React, { useEffect, useState } from 'react'

type MorumbiProps = {
    frase?: string;
    autor?: string;
}

export default function MorumbiPage(props: MorumbiProps) {
    //state em react utiliza padrao getter & setter.
    // const [get, set] = useState(0);
    const [frase, setFrase] = useState(props.frase);
    const [autor, setAutor] = useState(props.autor);
    const [contador, setContador] = useState(0);

    // userEffect(função, array)
    useEffect(() => {
        console.log("Executou o userEfect");
        if (contador == 0) {
            document.title = "Carrgeou a página, executou a primeira vez";
        }else{
            document.title = "Carrgeou a página, executou" + contador + " vezes";            
        }
    }, [frase, autor, contador]);

    return (
        <>
            <h1>{frase}</h1>
            {autor && <h2>{autor}</h2>}
            <button onClick={(e) => { setFrase("Vamos São Paulo") }}> Mudar a frase</button>
            <button onClick={(e) => { setAutor("Inglide") }}> Mudar o autor </button>
            <button onClick={(e) => { setContador(contador+1) }}> Contador</button>
        </>
    );
}
MorumbiPage.getInitialProps = async (ctx: NextPageContext) => {
    const resposta = await fetch('https://type.fit/api/quotes');
    const data = await resposta.json();
    const position = Math.floor(Math.random() * data.length);
    const frase = data[position].text;
    const autor = data[position].author;

    return {
        frase,
        autor
    }
}
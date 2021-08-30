import React, {useState} from 'react';

const FirstFunction = () => {
    // console.log(useState());
    // const value = useState()[0];
    // const handler = useState()[1];
    //  console.log(value,handler);
    let [title, setTitle] = useState('Düşünmek Ne Kadar Anlamlı?')

    const handleClick = () => {
        if(title === 'Düşünmek Ne Kadar Anlamlı?') {
            setTitle('Hello World')
        } else {
            setTitle('Cevabını Ben de Bilemiyorum')
        }
    }

    return (
        <React.Fragment>
            <h2>{title}</h2>
            <button type="button" onClick={handleClick}>Change Text</button>
        </React.Fragment>
    )

}

export default FirstFunction;
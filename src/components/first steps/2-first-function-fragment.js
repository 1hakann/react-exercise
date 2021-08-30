import React from 'react'

const firstFunction = () => {
    let title = 'Düşünmek Ne Kadar Anlamlı?';

    const handleClick = () => {
        title = 'Neleri Düşündüğümüze Göre Değişebilir';
        console.log(title);
    }

    return (
        <React.Fragment>
            <h2>{title}</h2>
            <button className='btn_yellow' type='button' onClick={handleClick}>Change Text</button>
        </React.Fragment>
    )
}

export default firstFunction
import React, {useState} from 'react';

const SimpleCounter = () => {
    const [value, setValue] = useState(0)

    const resetCounter = () => {
        setValue(0)
    }

    const counter = () => {
        setTimeout(() => {
            // setValue(value + 1)
            setValue((prevState) => {
                return prevState + 1
            })
        })
    }

    return(
        <>
        <section style={{ margin: '4rem 0' }}>
        <h2>{value}</h2>
        <button className='btn_yellow' style={{ display:'inline' }} onClick={() => setValue(value+1)}>Increase</button>
        <button className='btn_yellow' onClick={resetCounter}>Reset</button>
        <button className='btn_yellow' onClick={() => setValue(value-1)}>Decrease</button>
        </section>
        <section style={{ margin: '4rem 0' }}>
        <h2>{value}</h2>
        <button className='btn_yellow' onClick={counter}>Counter</button>

        </section>
        </>
    )
}

export default SimpleCounter
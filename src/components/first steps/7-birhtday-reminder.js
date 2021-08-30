import React, {useState} from 'react';
import List from './List'
import {data} from '../../data/data' 

const BirhdayReminder = () => {
    const [people, setPeople] = useState(data)

    return (
        <main>
            <section className="container">
                <h3>{data.length} birthdays today</h3>
                <List people={people}/>
                <button onClick={() => {setPeople([])}}>Clear List</button>
            </section>
        
        </main>
    )
}

export default BirhdayReminder;
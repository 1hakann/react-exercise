import React, {useState} from 'react'
import {data} from '../../data/data'

const BasicUseState = () => {
  const [people,setPeople] = useState(data)
  const removeItem = (id) => {
      let newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople)
  }

  return (
      <>
      {
          people.map((person) => {
            const {id,name} = person;
            return (
              <div key={id} className='item'>
                  <h4>{name}</h4>
                  <button className='btn_yellow' onClick={() => removeItem(id)}>Remove Item</button>
              </div>
            )
          })
      }
      </>
  )
}

export default BasicUseState

// 1-import react,useState,data
// 2- const BasicUseState = () => {} and export
// 3- people, setPeople define for useState
// 4- return <> {} enter inside
// 5- people.map((person) => {})
// 6- const id,name define for person
// 7- key id and others
// 8- give button onClick arrow func setPeople
// 9- define removeItem arrow func give id as a parameter
// 10- add newPeople var and filter the people and compare id and current id
// 11 - assign result to setPeople method
// 12- button onClick method name should change as a removeItem and give id as a parameter
import React, {useState} from 'react'
import {data} from '../../data/data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const Review = () => {
    const [index, setIndex] = useState(0)  
    console.log(data);
    const {id,name,age,image,occupation} = data[index]

    const checkNumber = (number) => {
        if(number > data.length-1) {
            return 0;
        }

        if(number < 0) {
            return data.length - 1;
        }
        return number;
    }

    const prevPerson = () => {
        setIndex((index) => {
          let newIndex = index - 1;
          return checkNumber(newIndex);
        });
      };

    const nextPerson = () => {
            setIndex((index) => {
                let newIndex = index + 1;
                return checkNumber(newIndex);
            })
        }

    const randomPerson = () => {
        let randNum = Math.floor(Math.random() * data.length);
        if(randNum === index) {
            randNum = index + 1;
        }
        setIndex(checkNumber(randNum));
    }

    return (
        <article className="review">
            <div className="img-container">
                <img className="person-img" src={image} alt={name} />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4>{name}</h4>
            <p className="job">{occupation}</p>
            <p className="info">{age}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="random-btn" onClick={randomPerson}>Surprise Me</button>
        </article>
    )
}

export default Review
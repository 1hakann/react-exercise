import React, {useState, useEffect} from 'react'
import Loading from './Loading'
import Tours from './Tours'
import '../../css/tour.css';

const url = 'https://retoolapi.dev/Pk8anL/tour';

function TourApp() {
    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState([])
    
    const fetchData = async () => {
        
        setLoading(true)
        
        try {
            const response = await fetch(url)
            const tours = await response.json()
            setLoading(false)
            setTours(tours)

        } catch (err) {
            setLoading(false)
            console.log(err);
        }
    }

    const removeTour = (id) => {
        const newTour = tours.filter((tour => tour.id !== id))
        setTours(newTour)
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    if(loading) {
        return (
            <main>
                <Loading />
            </main>
        )
    }

    if(tours.length === 0) {
        return (
            <main>
                <div className="title">
                <h2>No tours left</h2>
                <button className="btn" onClick={() => fetchData()}>Refresh</button>
                </div>
            </main>
        )
    }
    
    return (
        <main>
         <Tours tours={tours} removeTour={removeTour} />
        </main>
    )
} 

export default TourApp
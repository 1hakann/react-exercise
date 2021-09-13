import React from 'react'
import Review from './Review'
import '../../css/review.css';

function ReviewApp() {
    return (
        <main>
            <section className="container">
                <div className="title">
                <h2 style={{ textAlign: 'center' }}>our reviews</h2>
                <div className='underline'></div>
                </div>
                <Review />
            </section>
        </main>
    )
}

export default ReviewApp
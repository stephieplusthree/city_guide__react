import React from 'react';
import { InfoConsumer } from '../context';
import Footer from '../layouts/Footer';


function Home() {
    return (
        <div>
            <InfoConsumer>
                {data => {
                    return <h2>{data}</h2>
                }}
            </InfoConsumer>
            <Footer />
        </div>
    )
}

export default Home;

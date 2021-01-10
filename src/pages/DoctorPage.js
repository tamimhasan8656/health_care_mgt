import React from 'react';
import Cards from '../Components/Cards';
import Navbar from "../Components/Navbar"

function DoctorPage() {
    return (
        <div>
            <Navbar />
            <div className= "doctor-page">
            <div className="doctors">
            <Cards />
            </div>
            </div>
        </div>
        
    )
}

export default DoctorPage

import React from 'react';
import NavBar from './components/navBar.jsx';
import Home from './components/home.jsx';
import Icons from './components/icons.jsx';
import Services from './components/services.jsx';
import About from './components/about.jsx';
import Doctors from './components/doctors.jsx';
import Book from './components/book.jsx';
import Review from './components/review.jsx';
import Footer from './components/footer.jsx';
function App () {
    return (
        <div className="bodybox">
            <NavBar/>
            <Home/>
            <Icons/>
            {/*<Services/>*/}
            <Services/>
            <About/>
            <Doctors/>
            <Book/>
            <Review/>
            <Footer/>
        </div>
    );
}
export default App;
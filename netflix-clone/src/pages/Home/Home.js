import React from 'react'
import Header from '../../componenet/Header/Header'
import Footer from '../../componenet/Footer/Footer'
import Banner from '../../componenet/Banner/Banner'
//import RowList from '../../components/Rows/RowList/RowList'
import RowList from '../../componenet/Rows/RowList/RowList'

const Home=()=> {
return (
    <> 
        <Header/>
        <Banner/>
        <RowList/>
        <Footer/>
    </>
)
}

export default Home
import React from 'react'
import Navbar from '../components/navbar'
import PresentationSection from '../components/presentationSection'
import RecentArticlesSection from '../components/RecentArticlesSection'
import PopularCategoriesSection from '../components/PopularCategoriesSection'
import LatestTutorialsSection from '../components/LatestTutorialsSection'
import SearchInput from '../components/SearchInput'
import LanguageFrameworkSection from '../components/LanguageFrameworkSection'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <PresentationSection />
            <SearchInput />
            <div style={{ display: "flex" }}>
                <RecentArticlesSection />
                <LatestTutorialsSection />
                <PopularCategoriesSection />
            </div>
            <LanguageFrameworkSection />
            <Footer />
        </div>
    )
}

export default Home
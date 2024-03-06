import Navbar from "../components/Navbar"
import Card from "../components/Card"

import SectionHeader from '../components/SectionHeader'
import sectionData from "./SectionsData"
import { section1Data, section2Data, section3Data } from "./data"; // Import the sliced data

const cardsData = [section1Data, section2Data, section3Data]; // Array of section data



export default function App() {
    const cards = (data) => {
        return data.map(item => (
            <Card
                key={item.id}
                {...item}
            />
        ));
    };  
    const sections = sectionData.map((item, index) => (
        <div key={item.id}>
            <SectionHeader imageUrl={item.imageUrl} headerText={item.headerText} paragraphText={item.paragraphText} />
            <section className="cards-list">{cards(cardsData[index])}</section> 
        </div>
    ));
    
    return (
        <div>
            <Navbar />
            {sections}
        </div>
    )
}
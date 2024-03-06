import Navbar from "../components/Navbar"
import Card from "../components/Card"
import data from "./data"
import SectionHeader from '../components/SectionHeader'
import sectionData from "./SectionsData"



export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
                
            />
        )
    })    
    const sections = sectionData.map(item => (
        <div key={item.id}>
            <SectionHeader imageUrl={item.imageUrl} headerText={item.headerText} paragraphText={item.paragraphText} />
            <section className="cards-list">{cards}</section>
        </div>
    ));
    
    return (
        <div>
            <Navbar />
            {sections}
        </div>
    )
}
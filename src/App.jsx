import Navbar from "../components/Navbar"
import sectionData from "./SectionsData"
import { section1Data, section2Data, section3Data } from "./data"; // Import the sliced data
// import Sections from '../components/Sections';
import Modal from '../components/Modal';
import {useState} from 'react';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
const cardsData = [section1Data, section2Data, section3Data]; // Array of section data



const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCardData, setSelectedCardData] = useState(null);

    const openModal = (cardData) => {
        setSelectedCardData(cardData);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
        <Navbar />
        {
            sectionData.map((item, index) => (
                <div key={item.id}>
                <SectionHeader 
                    imageUrl={item.imageUrl} 
                    headerText={item.headerText} 
                    paragraphText={item.paragraphText} 
                />
                <section className="cards-list">
                    {cardsData[index].map(cardItem => (
                    <Card
                        key={cardItem.id} 
                        {...cardItem} 
                        handleOpen={() => openModal(cardItem)}
                    />
                    ))}
                </section>
                </div>
            ))
        }
        {/* <Sections sectionData={sectionData} cardsData={cardsData} handleOpen={openModal}/>  */}
        
        {isModalOpen && (
                    <Modal
                        handleClose={closeModal}
                        {...selectedCardData}
                    />
        )}

        </div>
    );
};

export default App;
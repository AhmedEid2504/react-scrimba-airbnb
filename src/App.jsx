// Importing necessary components and data
import Navbar from "../components/Navbar"; // Navbar component
import sectionData from "./SectionsData"; // Data for sections
import { section1Data, section2Data, section3Data } from "./data"; // Importing sliced data for sections
import Modal from '../components/Modal'; // Modal component for displaying detailed information
import {useState} from 'react'; // useState hook for managing state
import SectionHeader from '../components/SectionHeader'; // Component for rendering section headers
import Card from '../components/Card'; // Component for rendering cards

// Array containing data for each section
const cardsData = [section1Data, section2Data, section3Data];

// App component
const App = () => {
    // State variables to manage the modal state and selected card data
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
    const [selectedCardData, setSelectedCardData] = useState(null); // Selected card data

    // Function to open the modal and set the selected card data
    const openModal = (cardData) => {
        setSelectedCardData(cardData);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Rendering JSX
    return (
        <div>
            {/* Render the Navbar component */}
            <Navbar />

            {/* Map through the sectionData and render the SectionHeader and Card components */}
            {
                sectionData.map((item, index) => (
                    <div key={item.id}>
                        {/* Render the SectionHeader component */}
                        <SectionHeader 
                            imageUrl={item.imageUrl} 
                            headerText={item.headerText} 
                            paragraphText={item.paragraphText} 
                        />
                        {/* Rendering the section's cards */}
                        <section className="cards-list">
                            {/* Map through the cardsData and render the Card component */}
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
            {/* Render the modal if isModalOpen is true */}
            {isModalOpen && (
                <Modal
                    handleClose={closeModal}
                    {...selectedCardData}
                />
            )}
        </div>
    );
};

export default App; // Exporting the App component as default

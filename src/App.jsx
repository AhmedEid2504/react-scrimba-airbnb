import Navbar from "../components/Navbar"
import sectionData from "./SectionsData"
import { section1Data, section2Data, section3Data } from "./data"; // Import the sliced data
import Sections from '../components/Sections';
const cardsData = [section1Data, section2Data, section3Data]; // Array of section data



const App = () => {
    return (
        <div>
        <Navbar />
        <Sections sectionData={sectionData} cardsData={cardsData} />
        </div>
    );
};

export default App;
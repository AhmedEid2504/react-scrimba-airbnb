import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';

const Sections = ({ sectionData, cardsData }) => {
    return sectionData.map((item, index) => (
        <div key={item.id}>
        <SectionHeader 
            imageUrl={item.imageUrl} 
            headerText={item.headerText} 
            paragraphText={item.paragraphText} 
        />
        <section className="cards-list">
            {cardsData[index].map(cardItem => (
            <Card key={cardItem.id} {...cardItem} />
            ))}
        </section>
        </div>
    ));
};

export default Sections;
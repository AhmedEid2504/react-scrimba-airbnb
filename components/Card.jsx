import PropTypes from 'prop-types'; // Importing PropTypes for prop type validation

// Card component definition
function Card(props) {
    // Determine badgeText based on open spots and location
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }
    
    // Rendering JSX for the card
    return (
        <div className="card" onClick={props.handleOpen}>
            {/* Display badgeText if it exists */}
            {badgeText && 
                <div className="card--badge">{badgeText}</div>
            }
            {/* Card image */}
            <img 
                src={props.coverImg} 
                alt="Cover image for card"
                className="card--image" 
            />
            {/* Card statistics */}
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" alt="Star icon" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            {/* Card title */}
            <p className="card--title">{props.title}</p>
            {/* Card price */}
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    );
}

// Prop type validation for the Card component
Card.propTypes = {
    openSpots: PropTypes.number.isRequired, // Number of open spots
    location: PropTypes.string.isRequired, // Location of the activity
    coverImg: PropTypes.string.isRequired, // URL for the cover image
    description: PropTypes.string.isRequired, // Description of the activity
    stats: PropTypes.shape({
        rating: PropTypes.number.isRequired, // Rating of the activity
        reviewCount: PropTypes.number.isRequired, // Number of reviews
    }).isRequired,
    title: PropTypes.string.isRequired, // Title of the activity
    price: PropTypes.number.isRequired, // Price per person
    handleOpen: PropTypes.func.isRequired, // Function to handle card opening
};

export default Card; // Exporting the Card component as default

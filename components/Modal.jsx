import PropTypes from 'prop-types';

const Modal = ({ handleClose, title, coverImg, stats, location, description, price }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{title}</h2>
                <img src={coverImg} alt="Cover image for card" className="card--image" />
                <div className="card--stats">
                    <img src="../images/star.png" className="card--star" alt="Star" />
                    <span>{stats.rating}</span>
                    <span className="gray">({stats.reviewCount}) • </span>
                    <span className="gray">{location}</span>
                </div>
                <p className="card--title">{title}</p>
                <p className="card--price">
                    <span className="bold">From ${price}</span> / person
                </p>
                <p>{description}</p>
                <button className="close-btn" onClick={handleClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

Modal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        rating: PropTypes.number.isRequired,
        reviewCount: PropTypes.number.isRequired,
    }).isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default Modal;

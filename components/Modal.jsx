import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
const Modal = ({ handleClose, title, coverImg, stats, location, description, price }) => {
    const modalRef = useRef(null);

    // Close modal when user clicks outside of it
    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            handleClose();
        }
    };
    useEffect(() => {
        // Add event listener when component mounts
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Remove event listener when component unmounts
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });
    
    return (
        <div className="modal">
            <div className="modal-content" ref={modalRef}>
                <div>
                    <button className="close-btn" onClick={handleClose}>
                        Close
                    </button>
                    <img src={coverImg} alt="Cover image for card" className="modal-image" />
                </div>
                <div className='modal-details'>
                    <h2>{title}</h2>
                    <p>
                        <span className="bold">From ${price}</span> / person
                    </p>
                    <p>{description}</p>
                    <p>{location}</p>
                    <button className='modal-buy'>Book Now</button>
                </div>
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

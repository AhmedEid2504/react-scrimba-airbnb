import PropTypes from 'prop-types'; // Importing PropTypes for prop type validation
import { useEffect, useRef } from 'react'; // Importing useEffect and useRef hooks from React

// Modal component definition
const Modal = ({ handleClose, title, coverImg, location, description, price }) => {
    const modalRef = useRef(null); // Ref for modal element

    // Function to handle click outside of modal to close it
    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            handleClose();
            document.body.style.overflow = 'scroll';
        }
    };

    // Add event listener for click outside of modal when component mounts
    useEffect(() => {
        // Prevent scrolling on the body when modal is open
        document.body.style.overflow = 'hidden';

        document.addEventListener('mousedown', handleClickOutside);

        // Clean up event listener when component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'scroll';
        };
    });

    // Rendering JSX for the modal
    return (
        <div className="modal">
            <div className="modal-content" ref={modalRef}>
                <div>
                    {/* Close button */}
                    <button className="close-btn" onClick={handleClose}>
                        Close
                    </button>
                    {/* Modal image */}
                    <img src={coverImg} alt="Cover image for card" className="modal-image" />
                </div>
                <div className='modal-details'>
                    {/* Modal title */}
                    <h2>{title}</h2>
                    {/* Modal price */}
                    <p>
                        <span className="bold">From ${price}</span> / person
                    </p>
                    {/* Modal description */}
                    <p>{description}</p>
                    {/* Modal location */}
                    <p>{location}</p>
                    {/* Book now button */}
                    <button className='modal-buy'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

// Prop type validation for the Modal component
Modal.propTypes = {
    handleClose: PropTypes.func.isRequired, // Function to handle closing the modal
    title: PropTypes.string.isRequired, // Title of the activity
    coverImg: PropTypes.string.isRequired, // URL for the cover image
    location: PropTypes.string.isRequired, // Location of the activity
    description: PropTypes.string.isRequired, // Description of the activity
    price: PropTypes.number.isRequired, // Price per person
};

export default Modal; // Exporting the Modal component as default

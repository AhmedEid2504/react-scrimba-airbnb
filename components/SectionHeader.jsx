import PropTypes from 'prop-types';

const SectionHeader = (props) => {
    return (
        <div className='hero'>
            <div className='hero-details'>
                <h1 className="hero--header">{props.headerText}</h1>
                <p className="hero--text">{props.paragraphText}</p>
            </div>
            <img src={props.imageUrl} className="hero--photo" alt="hero-photo" />
        </div>
    );
}

SectionHeader.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    headerText: PropTypes.string.isRequired,
    paragraphText: PropTypes.string.isRequired,
};

export default SectionHeader;
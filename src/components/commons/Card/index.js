import PropTypes from 'prop-types';
import './index.css';

const Card = (props) => (
    <div 
        className="task-card"
    >
        <div className="task-card-title">
            { props.title.toUpperCase() }
        </div>
        <div className="delimiter" />
        <div className="task-card-container">
            { props.children }
        </div>
    </div>
);

Card.defaultProps = {
    title: '',
};

Card.propTypes = {
    title: PropTypes.string,
};

export default Card;
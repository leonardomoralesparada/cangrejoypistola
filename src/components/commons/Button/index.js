import PropTypes from 'prop-types';
import './index.css';

const Button = (props) => (
    <div 
        className="task-button"
        onClick={props.onClick}
    >
        { `${props.title.charAt(0).toUpperCase()}${props.title.slice(1).toLowerCase()}` }
    </div>
);

Button.defaultProps = {
    title: '',
    onClick: () => {},
};

Button.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
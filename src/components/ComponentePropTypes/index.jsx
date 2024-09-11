import PropTypes from "prop-types";

const ComponentePropTypes = ({propStr, propNum}) => {
    return (
        <div>
            <h2>Props</h2>
            <p>Prop string: {propStr}</p>
            <p>Prop number: {propNum}</p>
        </div>
    )
}

ComponentePropTypes.propTypes = {
    propStr: PropTypes.string.isRequired,
    propNum: PropTypes.number.isRequired,
}

export default ComponentePropTypes;
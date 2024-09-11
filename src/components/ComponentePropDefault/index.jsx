// eslint-disable-next-line react/prop-types
const ComponentePropDefault = ({prop1, prop2}) => {
    return (
        <div>
            <h2>Props</h2>
            <p>Prop1: {prop1}</p>
            <p>Prop2: {prop2}</p>
        </div>
    )
}

ComponentePropDefault.defaultProps = {
    prop1: "Valor default para prop 1",
    prop2: "Valor default para prop 2",
}

export default ComponentePropDefault;
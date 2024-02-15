import PropTypes from "prop-types"

function Student(props) {
    const styles = {
        backgroundColor : "purple",
        color : "black",
    }
    return (
        <div style={styles}>
            <p>Name: {props.name} || age : {props.age} </p>
            <p>Student : {props.isStudent ? "true" : "false"}</p>
        </div>
    )
}

// Testing logic to show that the data is entred in the right types :) 
Student.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent: PropTypes.bool,
}

// Default props (whene there is no input)
Student.defaultProps = {
    name : "Guest",
    age: 0,
    isStudent : false,
}
export default Student;
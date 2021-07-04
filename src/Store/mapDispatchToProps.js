import root from "./root";

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: (message) => {
            dispatch(root(message))
        }
    }
};

export default mapDispatchToProps
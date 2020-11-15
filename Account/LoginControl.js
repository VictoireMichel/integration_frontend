import HomeConnectedWithPot from "../Components/Home/HomeConnectedWithPot";
import React from "react";
import HomeNotConnected from "../Components/Home/HomeNotConnected";
import {connect} from "react-redux";

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const isLoggedIn = this.props.isLoggedIn;
        console.log(this.props);
        console.log(isLoggedIn);

            if (isLoggedIn) {
                return <HomeConnectedWithPot />;
            } else {
                return <HomeNotConnected />;
            }
    }
}


const mapStateToProps = (state) => {
    return {
        id: state.storeUserId.id,
        isLoggedIn: state.isLogged.isLoggedIn
    }
}

export default connect(mapStateToProps)(LoginControl)
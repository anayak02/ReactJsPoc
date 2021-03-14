import { Component } from "react";
import { Link } from "react-router-dom";

class Logout extends Component{

    render(){
        return(
            <div className="container">
                <div className="row">Logout successfull !!</div>
                <div className="row"><Link to="/login">login again</Link></div>
            </div>
        );
    }
}

export default Logout ;
import { Component } from "react";
import axios from 'axios'
class Dashboard extends Component{

    componentDidMount(){

    //  fetch("http://localhost:3000/app/user/getAllUserDetails")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       console.log("rs ="+result.rows)
    //     },
        
    //     (error) => {
    //       console.log(error);
    //     }
    //   )
     //---------------------------

        const user = {
            "email":"arjun430@gmail.com",
            "password":"test124"
        };

      axios.post("http://localhost:3000/app/user/signin",user).then(res=>{
            console.log("> :"+res.data.result); 
            console.log("> :"+res.data.user[0].email);
        })

    }

    render(){

        return(

            <div><h1>Dashboard</h1></div>
        );
    }

}

export default Dashboard;
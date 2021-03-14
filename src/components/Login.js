import React ,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card} from 'primereact/card'
import {Button} from 'primereact/button'
import {InputText} from 'primereact/inputtext'
import 'primeflex/primeflex.css';
import axios from 'axios';
import { Collapse } from 'bootstrap'

class Login extends Component{
    

    componentDidMount(){     
        // const s ={process.env.REACT_APP_API_URL} 
        
    }

    constructor(props){
        super(props);
        this.state={
            
            login_user_id:'',
            password:''
        }
    }

    login=(event)=>{
     event.preventDefault();   
     
     

    if(this.state.login_user_id==='')
        alert("Please Enter UserID")
    else if(this.state.password==='')
        alert("Please Enter Password")
    else{
                const user = {
                    "email":this.state.login_user_id,
                    "password":this.state.password
                };

                // axios.post("http://localhost:3000/app/user/signin",user).then(res=>{
                axios.post("http://www.gilpil.com/app/user/signin",user).then(res=>{
                // console.log("> :"+res.data.result); 
                // console.log("> :"+res.data.user[0].email);
                // alert("email = "+res.data.user[0].email);

                if(this.state.login_user_id===res.data.user[0].login_user_id && this.state.password===res.data.user[0].password){
                    window.location.href = "/dashboard";
                }
                else {
                    alert("Invalid UserId & Password");
                    window.location.href = "/login";
                }


            }).catch(err=>{

                alert("Invalid UserId & Password");
                window.location.href = "/login";
            })
   


       } 


    }

    setUserId=(e)=>{
        this.setState({login_user_id:e.target.value })
    }

    setPasword=(e)=>{
       this.setState({password:e.target.value})
    }
  
    render(){

        return(
     
            <div align="center">
            
            <Card title="Admin Login" style={{ width: '25em' }} footer={footer} header={header}>
                
                
                 <form action="#" onSubmit={this.login}>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="UserId">UserID</label>
                                <InputText   onChange={this.setUserId} type="text"/>
                            </div>
                            <div className="p-field">
                                <label htmlFor="Password" >Passowrd</label>
                                <InputText  onChange={this.setPasword} />
                            </div>
                            <Button type="submit" label="Login" icon="" />
                        </div>
                </form>

                
            </Card>
            </div>
         
        );
    }
}

export default Login;

const header = (
    <div>

            <Card>Welcome To Control Pannel</Card>       
            

    </div>
);
const footer = (
    <span>
      
        
    </span>
);
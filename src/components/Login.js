import React ,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card} from 'primereact/card'
import {Button} from 'primereact/button'
import {InputText} from 'primereact/inputtext'
import 'primeflex/primeflex.css';
import {Redirect} from 'react-router-dom'

class Login extends Component{


    constructor(props){
        super(props);
        this.state={
            login_user_id:'',
            password:''
        }
    }

    login=(event)=>{
     event.preventDefault();   
     
     if(this.state.login_user_id==="arjun430" && this.state.password==="test123"){
      window.location.href = "/dashboard";
     }
    else {
        window.location.href = "/login";
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
                <p className="p-m-0" style={{lineHeight: '1.5'}}>
                
                 <form onSubmit={this.login}>
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

                </p>
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
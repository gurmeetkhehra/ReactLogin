import React, {Component} from 'react';

class Login extends Component{
    state={
        cities:['San Francisco', 'San Jose', 'Santa Clara', 'San Mateo', 'Belmont', 'Palo Alto'],
        listValue: '',
        gender:'',
        userName:'',
        userPassword:''
    }
    //update the listValue in the state
    handelList= (e)=>{
        this.setState({listValue:e.target.value})
        console.log(this.state.listValue)

    } 
    //update the gender in the state
    handelRadio = (e)=> {
        this.setState({
            gender: e.target.value
        })
        // console.log(this.state.gender)
    }
    // update the Username in the state
    handelName = (e)=> {
        this.setState({userName: e.target.value})
    }
    //update the password in the state
    handelPassword=(e)=>{
        this.setState({userPassword:e.target.value})

    }

    handelSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state)
    }
        render(){
        return(
            <div>
                <h1>Login Page</h1>
                <form className='myForm'>
                    <input type='text' placeholder='enter user name' className='txt' 
                    value={this.state.userName}
                    onChange={this.handelName}/>
                   
                    <input type='password' placeholder= 'enter you password' className='txt'
                    value={this.state.userPassword}
                    onChange={this.handelPassword}/>

                    <div onChange={this.handelRadio}>

                        <label for='Male'>Male</label>
                        <input type='radio' value='male' name='gender'/>

                        <label for= 'female'>Female</label>
                        <input type='radio' value='female' name='gender'/>
                    </div>
                    <select onChange={this.handelList}>
                        {/* maping the cities array from the state and
                         display each city as and option */}
                        {this.state.cities.map((city,index)=>(
                            <option key={index} value={city}>{city}</option>
                        ))}
                           
                    </select>
                   

                    <button className='formButton' onClick={this.handelSubmit}>Login</button>
                </form>
            </div>
        );
    }
}
export default Login;
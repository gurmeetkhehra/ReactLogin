import React, {Component} from 'react'

class Log extends Component{
    constructor(props){
        super(props)
    }
    state = {
        email: '',
        password: '',
        confirmpassword:'',
        countries: {
            countriesList: ['US', 'France', 'India',],
            US:['CA', 'FL', 'NY', 'TX', 'CT', 'OR',],
            France: ['Brittany', 'Normandy', 'Grand Est',
            'Occitanie', 'Rhone-Alpes', 'Paris'],
            India: ['Punjab', 'Delhi', 'Rajasthan', 
            'Bihar', 'Jammu and Kashmir', 'Haryana']
            //US is key and Item are inside the array such 'CA'. index is the start start 0 - 5.
        },
        selectCountry:'US'
    }

    handelEmail =(e)=>{
        this.setState({
            email: e.target.value
        })
    }

    handelPassword =(e)=>{
        this.setState({
            password: e.target.value
        })
    }
    handelConfirmpassword =(e)=>{
        this.setState({
            confirmpassword: e.target.value
        })
    }
    handelSubmit = (e) =>{
        e.preventDefault();
        if(this.state.password != this.state.confirmpassword){
            alert('Please re-entry your password')
        }
    }


    handelCountries = (e)=> {
        this.setState({selectCountry: e.target.value})
    }

    render(){

        return(
            <div>
                <h4 style={{marginBottom:30}}>Login Page</h4>

                <form onSubmit = {this.handelSubmit}>
                    <input className='input-text' value={this.state.email}
                    //what ever typing inside the input it will update state.email 
                    // with the value that we type.
                    onChange={this.handelEmail} type='text' placeholder='enter email'/>
                    
                    <br></br>

                    <input className='input-password' value={this.state.password} 
                    type='password' onChange={this.handelPassword} placeholder='enter password'/>

                    <input className='confirm-password' value={this.state.confirmpassword}
                    type='password' onChange={this.handelConfirmpassword} placeholder='enter confirmpassword'/>

                    <br></br>
                    <br></br>

                    <select onChange={this.handelCountries} value={this.state.selectCountry}>
                        {this.state.countries.countriesList.map((item,index)=>(
                            // display option from country list array
                            // If u do map go throw value each array 
                            //index is of the value such as 1 2 3.
                            <option key={index} value={item}>{item}</option>
                            ))}
                    </select>
                    <select>
                        {this.state.countries[this.state.selectCountry].map(item=> <option>{item}</option>)}
                    </select>
                    <br></br>
                    <button>Login</button>
                    {/* {this.state.password}
                    {this.state.confirmpassword} */}
                </form>

            </div>
        );
    }

}
export default Log;
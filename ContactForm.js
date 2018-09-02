import React, {Component} from 'react';

class ContactForm extends Component{
	state ={
		name: null,
		email:null,
		age: 0,
		gender: null,
		loc: null,
		message:null

	}

	handleChange = (e) =>{
		this.setState({
			[e.target.id]:e.target.value
		})
	}

	handleSubmit = (e) =>{
		e.preventDefault();
		alert('Welcome');
	}


	render(){
		return(
			<div>
				<form onSubmit = {this.handleSubmit}>
				<fieldset>
					<label htmlFor="name">Name: </label>
					<input type = "text" placeholder="name" id = "name" onChange={this.handleChange} /> <br/> <br/>

					<label htmlFor="email">Email: </label>
					<input type = "text" placeholder="email" id = "email" onChange={this.handleChange} /> <br/> <br/>

					<label htmlFor="date">Date: </label> 
					<input type="Date"/><br/><br/>

					<label htmlFor="age">Age: </label>
					<input type = "text" placeholder="age" id = "age" onChange={this.handleChange} /> <br/> <br/>

					<label htmlFor="gender">Gender: </label>
					<input type = "text" placeholder="gender" id = "gender" onChange={this.handleChange} /> <br/> <br/>

					<label htmlFor="loc">Location: </label>
					<input type = "text" placeholder="location" id = "loc" onChange={this.handleChange} /><br/>

					<p>State of Origin: <select>
								<option>Select </option>
								<option>Abia </option>	
								<option>Adamawa </option>
								<option>Akwa Ibom </option>	
								<option> Anambra</option>
								<option>Bauchi</option>	
								<option>Bayelsa</option>	
								<option> Benue</option>
								<option> Borno</option>	
								<option> Cross River</option>
								<option>Delta </option>		
								<option>Ebonyi </option>	
								<option>Enugu </option>
								<option>Edo </option>	
								<option>Ekiti </option>
								<option> Gombe</option>	
								<option>Imo </option>
								<option>Jigawa </option>	
								<option>Kaduna </option>
								<option> Kano</option>	
								<option>Katsina </option>
								<option>Kebbi </option>	
								<option> Kogi</option>	
								<option>Kwara </option>
								<option>Lagos </option>	
								<option>Nasarawa </option>
								<option>Niger </option>		
								<option>Ogun </option> 
								<option>Ondo </option>
								<option>Osun </option>	
								<option>Oyo </option>
								<option>Plateau </option>	
								<option> Rivers</option>	
								<option>Sokoto </option>
								<option>Taraba </option>	
								<option>Yobe </option>
								<option>Zamfara </option>		
								<option>Federal Capital Territory (FCT) Abuja </option>
			</select></p>


					<button> Sign Up </button> -

					</fieldset>
				</form>

			 </div>

		)
	}

}



export default ContactForm
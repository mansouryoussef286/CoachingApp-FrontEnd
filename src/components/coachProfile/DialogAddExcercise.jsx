import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const DialogAddExcercise = (props) => {
	const [errors, setError] = useState({
		DescriptionError: '',
		LinkError: '',
	});

	const [register, setregister] = useState({
		description: '',
		link: '',
	});
	let handlerInput = (eventObject) => {
		let x = register;
		x[eventObject.target.name] = eventObject.target.value;
		setregister({
			description: x.description,
			link: x.link,
		})
	}

	const addWorkout = () => {
		console.log(register);
		axios.post("https://easyfit.azurewebsites.net/api/Exercise", 
		{
			description: register.description,
			link: register.link,
		})
			.then(() => {
				setregister({
					description: "",
					link: ""
				})
				props.close("displayResponsive");
				props.refetch();
				alert("excercise added!");
			})
			.catch(err => {
				console.log(err);
				alert("something unexcpected happened :(");
			});
	}
	return (
		<>
			<section className='coachSignupContainer dialoghieght'>
				<div className='cont hoverForm'>
					<div className='formB my-1'>
						<h2>Add excercise</h2>
						<form className='height=h-100' action="">
							<div className='inputB'>
								<span>Description </span>
								<input type="text" name="description" placeholder="Enter description" onChange={handlerInput} />
							</div>
							<span className='registerError'>{errors.DescriptionError}</span>

							<div className='inputB'>
								<span>Link </span>
								<input type="text" name="link" placeholder="Enter workout link" onChange={handlerInput} />
							</div>
							<span className='registerError'>{errors.LinkError}</span>

							<div className="inputB">
								<input type="button" value="Add" onClick={() => { addWorkout() }} />
							</div>
							<div className="inputB">
								<span id="warning"></span>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	)
}

import React, { useState } from 'react';
import axios from 'axios';


export const DialogAddWorkout = (props) => {
	const [errors, setError] = useState({
		NotesError: '',
		DurationError: '',
		NameError: '',
	});

	const [register, setregister] = useState({
		name: '',
		duration: '',
		notes: ''
	});
	let handlerInput = (eventObject) => {
		let x = register;
		x[eventObject.target.name] = eventObject.target.value;
		setregister({
			name: x.name,
			duration: x.duration,
			notes: x.notes
		})
	}

	const addWorkout = () => {
		// console.log(register);
		// axios.post("https://localhost:7109/api/workout", 
		axios.post("https://easyfit.azurewebsites.net/api/workout", 
		{
			name: register.name,
			duration: parseInt( register.duration),
			notes: register.notes,
		})
			.then(() => {
				setregister({
					name: "",
					duration: "",
					notes: ""
				})
				props.close("displayResponsive");
				props.refetch();
				alert("workout added!");
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
						<h2>Add workout</h2>
						<form className='height=h-100' action="">
							<div className='inputB'>
								<span>Name </span>
								<input type="text" name="name" placeholder="Enter Name" onChange={handlerInput} />
							</div>
							<span className='registerError'>{errors.NameError}</span>

							<div className='inputB'>
								<span>Duration </span>
								<input type="text" name="duration" placeholder="Enter Duration" onChange={handlerInput} />
							</div>
							<span className='registerError'>{errors.DurationError}</span>

							<div className='inputB'>
								<span>Notes </span>
								<input type="text" name="notes" placeholder="Enter Notes" onChange={handlerInput} />
							</div>
							<span className='registerError'>{errors.NotesError}</span>

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

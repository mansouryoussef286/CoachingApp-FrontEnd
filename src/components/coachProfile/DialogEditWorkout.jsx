import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useLocation } from 'react-router'
import { useEffect } from 'react';

import { useFetch } from '../../useFetch';
import Spinner from 'react-bootstrap/Spinner';
import { Link, useNavigate } from 'react-router-dom';


export const DialogEditWorkout = (props) => {
	const navigate = useNavigate();

	const [errors, setError] = useState({
		NotesError: '',
		DurationError: '',
		NameError: '',
	});
	const [sets, setSets] = useState();
	const [reps, setReps] = useState();
	const [rank, setRank] = useState(10);

	const location = useLocation();
	// console.log(location.state);

	const [workoutExcercises, setWorkoutExcercises] = useState({
		name: location.state.name,
		duration: location.state.duration,
		notes: location.state.notes,
		workout_Exercises: location.state.workout_Exercises
	});

	let handlerInput = (eventObject) => {
		if (eventObject.target.name !== "sets" && eventObject.target.name !== "reps") {

			let x = workoutExcercises;
			x[eventObject.target.name] = eventObject.target.value;
			setWorkoutExcercises({
				name: x.name,
				duration: x.duration,
				notes: x.notes,
				workout_Exercises: x.workout_Exercises
			})
		} else if (eventObject.target.name === "sets") {
			setSets(eventObject.target.value);
		} else {
			setReps(eventObject.target.value);
		}
	}

	const { data: exercises, loading, error, refetch } = useFetch('http://localhost:8888/excercises');

	if (loading) return (<div className='center-div'> <Spinner animation="grow" /></div>);
	if (exercises == null) return (<div className='center-div'> <Spinner animation="grow" /></div>);

	if (error) return (<h1>error...</h1>);

	// console.log(exercises);

	const insertExercise = () => {
		let wExsss = workoutExcercises.workout_Exercises;
		let dd = document.getElementById('dropdownexcercises');
		setRank(rank+1);
		wExsss.push({
			workoutID: location.state.id,
			excerciseID: parseInt(dd.value),
			sets: parseInt(sets),
			reps: parseInt(reps),
			notes: "",
			rank: rank
		});
		console.log({
			id: location.state.id,
			notes: workoutExcercises.notes,
			duration: workoutExcercises.duration,
			coachID: 0,
			name: workoutExcercises.name,
			workout_Exercises: wExsss
		});
		axios.put(`https://easyfit.azurewebsites.net/api/Workout/${location.state.id}`,
			{
				id: location.state.id,
				notes: workoutExcercises.notes,
				duration: workoutExcercises.duration,
				coachID: 0,
				name: workoutExcercises.name,
				workout_Exercises: wExsss
			})
			.then(() => {
				refetch();
			})
			.catch(err => {
				console.log(err);
				alert("something unexcpected happened :(");
			});
	}
	const editWorkout = () => {
		// console.log(register);
		// axios.post("https://localhost:7109/api/workout", 
		// axios.post("https://easyfit.azurewebsites.net/api/workout", 
		// {
		// 	name: workoutExcercises.name,
		// 	duration: parseInt( workoutExcercises.duration),
		// 	notes: workoutExcercises.notes,
		// })
		// 	.then(() => {
		// 		workoutExcercises({
		// 			name: "",
		// 			duration: "",
		// 			notes: ""
		// 		})
		// 		props.close("displayResponsive");
		// 		props.refetch();
		// 		alert("workout added!");
		// 	})
		// 	.catch(err => {
		// 		console.log(err);
		// 		alert("something unexcpected happened :(");
		// 	});
		console.log(workoutExcercises);
	}

	return (
		<>
			<section className='coachSignupContainer dialoghieght'>
				<div className='cont hoverForm'>
					<div className='formB my-1'>
						<h2>Edit workout</h2>
						<form className='height=h-100' action="">
							<div className='inputB'>
								<span>Name </span>
								<input type="text" name="name" placeholder="Enter Name" value={workoutExcercises.name} onChange={handlerInput} />
							</div>
							<span className='registerError'>{errors.NameError}</span>

							<div className='inputB'>
								<span>Duration </span>
								<input type="text" name="duration" placeholder="Enter Duration" value={workoutExcercises.duration} onChange={handlerInput} />
							</div>
							<span className='registerError'>{errors.DurationError}</span>

							<div className='inputB'>
								<span>Notes </span>
								<input type="text" name="notes" placeholder="Enter Notes" value={workoutExcercises.notes} onChange={handlerInput} />
							</div>
							<span className='registerError'>{errors.NotesError}</span>

							<div className='inputB'>
								<span>Excercises </span>
								<div className='d-flex '>
									<select className='' onChange={handlerInput} id='dropdownexcercises'>
										{exercises.map((exercise) => <option value={exercise.id}>{exercise.description} </option>)}

									</select>
									<input type="number" name="sets" placeholder="sets" style={{ "width": "18%" }} value={sets} onChange={handlerInput} />
									<input type="number" name="reps" placeholder="reps" style={{ "width": "18%" }} value={reps} onChange={handlerInput} />
									<input type="button" name="" value="insert" style={{ "width": "15%" }} onClick={insertExercise} />
								</div>
							</div>
							<span className='registerError'>{ }</span>

							<div className='inputB overflow-auto'>
								<span>Excercises List</span>
								<table class="table table-striped">
									<thead>
										<tr>
											<th scope="col">#</th>
											<th scope="col">Description</th>
											<th scope="col">Link</th>
											<th scope="col">Sets</th>
											<th scope="col">Reps</th>
											<th scope="col">Notes</th>
											<th scope="col"></th>
										</tr>
									</thead>
									<tbody>
										{/* <tr>
											<th scope="row">1</th>
											<td>Mark</td>
											<td>https://www.google.com</td>
											<td>4</td>
											<td>10</td>
											<td>notee</td>
											<td>
												<button className='btn btn-warning' >edit</button>
												<button className='btn btn-danger'>delete</button>
											</td>
										</tr> */}
										{
											workoutExcercises.workout_Exercises.map((exc, index) => {
												return (
													<>
														<tr>
															<th scope="row">{index + 1}</th>
															<td>{exc.excercise.description==null?exc.excercise.description:""}</td>
															<td>{exc.excercise.link}</td>
															<td>{exc.sets}</td>
															<td>{exc.reps}</td>
															<td>{exc.notes}</td>
															<td>
																<button className='btn btn-warning' >edit</button>
																<button className='btn btn-danger'>delete</button>
															</td>
														</tr>
													</>
												)
											})
										}
									</tbody>
								</table>
							</div>
							<div className="inputB">
								<input type="button" value="Edit" onClick={editWorkout} />
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

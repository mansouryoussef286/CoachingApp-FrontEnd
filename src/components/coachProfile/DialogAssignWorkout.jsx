import React, { useState } from 'react';

export const DialogAssignWorkout = (props) => {
	const [errors, setError] = useState({
		NotesError: '',
		DurationError: '',
		NameError: '',
	});

	return (
		<>
			<section className='coachSignupContainer dialoghieght'>
				<div className='cont hoverForm'>
					<div className='formB my-1'>
						<h2>Assign workouts</h2>
						<form className='height=h-100' action="">
							<div className='inputB'>
								<span>Workouts </span>
								<div className='d-flex '>
									<select className=''>
										<option value="">one</option>
									</select>
									<input type="number" name="sets" placeholder="sets" style={{"width": "15%"}}/>
									<input type="number" name="reps" placeholder="reps" style={{"width": "15%"}}/>
									<input type="button" name="" value="insert" style={{"width": "15%"}}/>
								</div>
							</div>
							<span className='registerError'>{ }</span>

							<div className='inputB overflow-auto'>
								<span>Workouts List</span>
								<table class="table table-striped">
									<thead>
										<tr>
											<th scope="col">#</th>
											<th scope="col">Name</th>
											<th scope="col">Duration</th>
											<th scope="col">Notes</th>
											<th scope="col"></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">1</th>
											<td>day1</td>
											<td>10</td>
											<td>notee</td>
											<td>
												<button className='btn btn-danger'>delete</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>

							<div className="inputB">
								{/* <input type="button" value="Edit" onClick={checkRegister}/>    */}
								<input type="button" value="Edit" />
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

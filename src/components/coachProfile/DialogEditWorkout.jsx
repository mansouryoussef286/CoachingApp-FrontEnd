import React, { useState } from 'react';

export const DialogEditWorkout = (props) => {
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
						<h2>Edit workout</h2>
						<form className='height=h-100' action="">
							<div className='inputB'>
								<span>Name </span>
								<input
									type="text"
									id="Name"
									name="Name"
									placeholder="Enter Name"
								/>
							</div>
							<span className='registerError'>{errors.NameError}</span>

							<div className='inputB'>
								<span>Duration </span>
								<input
									type="text"
									id="Name"
									name="Name"
									placeholder="Enter Duration"
								/>
							</div>
							<span className='registerError'>{errors.DurationError}</span>

							<div className='inputB'>
								<span>Notes </span>
								<input
									type="text"
									id="Name"
									name="Name"
									placeholder="Enter Notes"
								/>
							</div>
							<span className='registerError'>{errors.NotesError}</span>

							<div className='inputB'>
								<span>Excercises </span>
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
										<tr>
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

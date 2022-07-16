import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const Signup = () => {
        const navigate = useNavigate();

        const [register, setregister] = useState({
                Name: '',
                Age: '',
                Email: '',
                Mobile: '',
                gender: '',
                street: '',
                City: '',
                Pass: '',
                ConfPass: ''
        });
        const [errors, setError] = useState({
                NameError: '',
                AgeError: '',
                EmailError: '',
                MobileError: '',
                genderError: '',
                streetError: '',
                CityError: '',
                PassError: '',
                ConfPassError: ''
        });

        let handlerInput = (eventObject) => {
                let x = register;
                x[eventObject.target.name] = eventObject.target.value;
                setregister({
                        Name: x.Name,
                        Age: x.Age,
                        Email: x.Email,
                        Mobile: x.Mobile,
                        gender: x.gender,
                        street: x.street,
                        City: x.City,
                        Pass: x.Pass,
                        ConfPass: x.ConfPass
                })
        }

        const checkRegister = (e) => {
                e.preventDefault();
                let name = '', age = '', email = '', mobile = '', gender = '', street = '', city = '', pass = '', conpass = '';
                //     console.log('register');
                //     console.log(name, email, mobile,gender);
                //     console.log(register);

                if (register.Name == "" || register.Name == null)
                        name = "Please enter Name";
                if (register.Email == "" || register.Email == null)
                        email = "Please enter Email";
                if (register.age == "" || register.Age == null)
                        age = "Please enter Age";
                if (register.Mobile == "" || register.Mobile == null)
                        mobile = "Please enter mobile";
                if (register.gender == "" || register.gender == null)
                        gender = "Choose Gender";
                if (register.street == "" || register.street == null)
                        street = "Please enter street";
                if (register.City == "" || register.City == null)
                        city = "Please enter City";

                if (register.Pass == "" || register.Pass == null)
                        pass = "Please enter password";
                if (register.ConfPass == "" || register.ConfPass == null)
                        conpass = "Please enter confirm password";

                if (register.Pass != register.ConfPass)
                        conpass = "Password and confirm password must be the same";

                setError({
                        NameError: name,
                        AgeError: age,
                        EmailError: email,
                        MobileError: mobile,
                        genderError: gender,
                        streetError: street,
                        CityError: city,
                        PassError: pass,
                        ConfPassError: conpass

                });
                // console.log(name, email, mobile,gender);
                // console.log(register);
                if (register.Name != "" && register.Age != "" && register.Email != "" && register.City != "" && register.ConfPass != "" && register.Pass != "" && register.street != "" && register.Mobile != "" && register.gender != "" && register.Pass == register.ConfPass)
                        navigate("/clientinfo", { state: register });
        }
        return (
                <>
                        <section className='coachSignupContainer '>
                                <div className="imgbg">
                                        <img src="/assets/images/LoginImage.png" alt="smartGymawyy" />

                                </div>
                                <div className='cont'>
                                        <div className='formB'>
                                                <h2>Sign Up</h2>
                                                <form className='height=h-100' action="">
                                                        <div className='inputB'>
                                                                <span>Name </span>
                                                                <input
                                                                        type="text"
                                                                        id="Name"
                                                                        name="Name"
                                                                        placeholder="Enter Name"
                                                                        value={register.Name}
                                                                        onChange={handlerInput}
                                                                />
                                                        </div>
                                                        <span className='registerError'>{errors.NameError}</span>

                                                        <div className='inputB'>
                                                                <span>Email </span>
                                                                <input
                                                                        type="email"
                                                                        id="Email"
                                                                        name="Email"
                                                                        placeholder="Enter Email"
                                                                        value={register.Email}
                                                                        onChange={handlerInput}
                                                                />
                                                        </div>
                                                        <span className='registerError'>{errors.EmailError}</span>

                                                        <div className='inputB'>
                                                                <span>Age </span>
                                                                <input
                                                                        type="number"
                                                                        id="Age"
                                                                        name="Age"
                                                                        placeholder="Enter Age"
                                                                        value={register.Age}
                                                                        onChange={handlerInput}
                                                                />
                                                        </div>
                                                        <span className='registerError'>{errors.AgeError}</span>

                                                        <div className='inputB'>
                                                                <span>Mobile </span>
                                                                <input
                                                                        type="number"
                                                                        id="Mobile"
                                                                        name="Mobile"
                                                                        placeholder="Enter Mobile Number"
                                                                        value={register.Mobile}
                                                                        onChange={handlerInput}
                                                                />
                                                        </div>
                                                        <span className='registerError'>{errors.MobileError}</span>

                                                        <div className="inputB">
                                                                <select name="gender" id="gender" value={register.gender} onChange={handlerInput}>
                                                                        <option value="">Choose Gender</option>
                                                                        <option value="Male">Male</option>
                                                                        <option value="Female">Female</option>
                                                                        <option value="Others">Others</option>
                                                                </select>
                                                        </div>
                                                        <span className='registerError'>{errors.genderError}</span>

                                                        <div className='inputB'>
                                                                <span>Address </span>
                                                                <input type="text"
                                                                        id="street"
                                                                        name="street" placeholder="Enter Country"
                                                                        value={register.street}
                                                                        onChange={handlerInput}
                                                                />
                                                        </div>
                                                        <span className='registerError'>{errors.streetError}</span>

                                                        <div className='inputB'>
                                                                <input
                                                                        type="text"
                                                                        id="City" name="City"
                                                                        placeholder="Enter City"
                                                                        value={register.City}
                                                                        onChange={handlerInput}
                                                                />
                                                        </div>
                                                        <span className='registerError'>{errors.CityError}</span>

                                                        {/* <div className='inputB'> 
                                <span>Certificates </span>
                                <input 
                                type="file" 
                                id="Certificates"
                                name="Certificates"
                                placeholder="Uplode Certificates"
                                value={register.Certificates}
                                onChange={handlerInput}
                                /> 
                        </div>
                        <span className='registerError'>{errors.CertificatesError}</span>

                        <div className='inputB'> 
                                <span>Images </span>
                                <input 
                                type="file" 
                                id="Images"
                                name="Images"
                                placeholder="Uplode Images"
                                value={register.Images}
                                onChange={handlerInput}
                                className='btn btn-danger'
                                /> 
                        </div>
                        <span className='registerError'>{errors.ImagesError}</span> */}


                                                        <div className="inputB">
                                                                <span>Password </span>
                                                                <input
                                                                        type="password"
                                                                        id="Pass" name="Pass"
                                                                        placeholder="Password"
                                                                        value={register.Pass}
                                                                        onChange={handlerInput}
                                                                />
                                                        </div>
                                                        <span className='registerError'>{errors.PassError}</span>


                                                        <div className="inputB">
                                                                <span>Confirm Password </span>
                                                                <input
                                                                        type="password"
                                                                        id="ConfPass"
                                                                        name="ConfPass"
                                                                        placeholder="Password"
                                                                        value={register.ConfPass}
                                                                        onChange={handlerInput}
                                                                />
                                                        </div>
                                                        <span className='registerError'>{errors.ConfPassError}</span>


                                                        <div className="inputB">

                                                                <input type="button" value="Register" onClick={checkRegister} />
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

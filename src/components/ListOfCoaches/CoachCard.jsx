import React,{ useState }  from 'react';
import { Rating } from 'primereact/rating';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-brands-svg-icons'

export const CoachCard = () => {

    return (
        <div className='CoachesContainer'>
            
            <Card className='cardbox' >
            <div className='coachcard'>
            <img className='coachImg' alt="Card" src="assets/images/coach.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
             <p>
                 Name : ahmed  elsokary
                 <br></br>
                 Age :24
                 <br></br>
                 Gender:Male
                 <br></br>
                 <Rating  value={3} readOnly stars={5} cancel={false} />
                 <h6 className='CoachRatings'>2K Ratings</h6>
             </p>
            
            </div>
            <hr></hr>
      
                <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    </p>
                    <hr></hr>
                    <p>quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                   
            </Card>
            <Card className='cardbox' >
            <div className='coachcard'>
            <img className='coachImg' alt="Card" src="assets/images/coach.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
             <p>
                 Name : ahmed  elsokary
                 <br></br>
                 Age :24
                 <br></br>
                 Gender:Male
                 <br></br>
                 <Rating  value={3} readOnly stars={5} cancel={false} />
                 <h6 className='CoachRatings'>2K Ratings</h6>
             </p>
            
            </div>
            <hr></hr>
      
                <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    </p>
                    <hr></hr>
                    <p>quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                   
            </Card>
            <Card className='cardbox' >
            <div className='coachcard'>
            <img className='coachImg' alt="Card" src="assets/images/coach.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
             <p>
                 Name : ahmed  elsokary
                 <br></br>
                 Age :24
                 <br></br>
                 Gender:Male
                 <br></br>
                 <Rating  value={3} readOnly stars={5} cancel={false} />
                 <h6 className='CoachRatings'>2K Ratings</h6>
             </p>
            
            </div>
            <hr></hr>
      
                <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    </p>
                    <hr></hr>
                    <p>quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                   
            </Card>
            <Card className='cardbox' >
            <div className='coachcard'>
            <img className='coachImg' alt="Card" src="assets/images/coach.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
             <p>
                 Name : ahmed  elsokary
                 <br></br>
                 Age :24
                 <br></br>
                 Gender:Male
                 <br></br>
                 <Rating  value={3} readOnly stars={5} cancel={false} />
                 <h6 className='CoachRatings'>2K Ratings</h6>
             </p>
            
            </div>
            <hr></hr>
      
                <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    </p>
                    <hr></hr>
                    <p>quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                   
            </Card>
            
        </div>

    )
}

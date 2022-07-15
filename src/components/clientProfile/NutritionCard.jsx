import React, { useState } from 'react'
import { CardComponent } from './CardComponent'
export const NutritionCard = () => {
  const [day, setDay] = useState('Day 1');

  const handleChange = (e) => {
    setDay(e.target.value)
  }

  return (
    <CardComponent classes='workout-Card'  >
      <div className='d-flex flex-column h-100' id='Nutration'>
        <select value={""} onChange={handleChange} style={{ width: '130px' }} class="form-select" aria-label="Default select example">
          <option >Select day</option>
          <option >Day One</option>
          <option >Day Two</option>
          <option >Day Three</option>
          <option >Day Four</option>
          <option >Day Five</option>
          <option >Day Six</option>
          <option >Day Seven</option>
        </select>
        <h1 style={{ textAlign: "center", marginBottom: '30px' }}>{day}</h1>
        <div className='food'>
          <div className='meal'>
            <h3>Nutrition Plan</h3>
            <img style={{ width: '250px' }} alt="Card" src="assets/images/food.jpg" />
            <ul>
              <li>One grapefruit</li>
              <li>Two poached eggs (or fried in a non-stick pan)</li>
              <li> Two slices whole-grain toast with one pat of butter each</li>
              <li>One cup low-fat milk</li>
              <li> One cup of black coffee or herbal tea</li>
            </ul>
          </div>
        </div>
      </div>
    </CardComponent>
  )
}

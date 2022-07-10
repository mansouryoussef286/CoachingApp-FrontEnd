import React, { useState } from 'react'
import { CardComponent } from './CardComponent'
export const NutritionCard = () => {
  const [day, setDay] = useState('Day 1');

  const handleChange = (e) => {
    setDay(e.target.value)
  }

  return (
    <CardComponent classes='workout-Card' >
     
    </CardComponent>
  )
}

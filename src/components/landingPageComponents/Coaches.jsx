import React ,{useState}from 'react'
import { Card } from 'antd';

export const Coaches = () => {
    const [coachs,setCoachs]=useState([
        {Name:'Ahemd',type:'Crossfit'}
    ]);
    return (
        <>
        <Card
        title="Default size card"
        extra={<a href="#">More</a>}
        style={{
            width: 300,
        }}
        >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        </Card>
    </>
    )
    }
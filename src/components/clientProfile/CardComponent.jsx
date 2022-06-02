import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Rating } from 'primereact/rating';
import { Card } from 'primereact/card';

import { Dropdown } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
export const CardComponent = (props) => {

    const[classes, setClasses] = useState("cardbox");
    const[classes2, setClasses2] = useState("");
    useEffect(()=>{
        if(props.classes != null){
            let newClasses = `${classes} ${props.classes}`;
            console.log(newClasses);
            setClasses(newClasses);
        }
        if(props.CardwithDotsclasses != null){
            console.log(props.CardwithDotsclasses);
            setClasses2(props.CardwithDotsclasses);
        }
    },[])
    
    console.log(props.children);
    return (
        <div className={classes2} style={{ position: 'relative' }}>
            <Dropdown autoClose='outside' drop='up' rootCloseEvent='click' className='coachCardContextMenu'>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                    <FontAwesomeIcon icon={faEllipsis} className='threedots' />
                </Dropdown.Toggle>

                <Dropdown.Menu align={'end'} rootCloseEvent='mousedown' as={CustomMenu}>
                    <Dropdown.Item eventKey="1">
                        <Link to={'/'}>go to profile</Link>
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2">add to favourites</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Card className={classes}>
                {props.children}
            </Card>
        </div>
    );
}



//#region three dots of sub menu
// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
    href=""
    ref={ref}
    onClick={(e) => {
        e.preventDefault();
        onClick(e);
    }}
    >
    {children}
    </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');

    return (
        <div
        // ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
        >
        <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
            (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
        </ul>
        </div>
    );
    },
);
//#endregion
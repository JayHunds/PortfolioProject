import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
export function Example(props)
{
    var items = [
        {
            name: "Matt Brogan-Senior Software Developer",
            description: "My name is Matt Brogan, I was Jaysons mentor during his time at true coders. Jayson has a great mind for problem solving, is a fast learner, great communicator and displays a strong interest in understanding how to address issues. He accepted every challenge I presented and often asked for extra materials to study up on during his course. He would make a spectacular addition to any software team.",
            width: "81.65%",
            height: 230,
            topMargin: 80,
            leftMargin: 172,
            backgroundColor: 'lightGray', 
            buttonText: "LinkedIn", 
            buttonLink: "https://www.linkedin.com/in/matt-brogan-aba6271a8/" 
        },
        {
            name: "Mack McCall-TrueCoders TA",
            description: "I worked with Jayson as a TA during his time in TrueCoders' Software Engineering program. Jayson was always ready to learn and was consistently one of the first students to complete his assignments. He picks up concepts quickly and is always ready for a new challenge. On top of this, he took initiative to complete multiple side projects during the class, in addition to his coursework. Jayson was a pleasure to teach and is a stellar junior developer.",
            width: '81.65%',
            height: 230,
            topMargin: 80,
            leftMargin: 172,
            backgroundColor: 'lightGray', 
            buttonText: "LinkedIn",
            buttonLink: "https://www.linkedin.com/in/mackmccall/" 
        },        
        {
            name: "Seth Bowman-TrueCoders Instructor",
            description: "",
            width: "81.65%",
            height: 230,
            topMargin: 80,
            leftMargin: 172,
            backgroundColor: 'lightGray',
            buttonText: "",
            buttonLink: "" 
        },
        {
            name: "Cruz Sanchez-TrueCoders VP",
            description: "",
            width: '81.65%',
            height: 230,
            topMargin: 80,
            leftMargin: 172,
            backgroundColor: 'lightGray', 
            buttonText: "", 
            buttonLink: "" 
        }
    ];

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    );
}

export function Item(props) {
    const { width, height, topMargin, leftMargin, backgroundColor, buttonText, buttonLink } = props.item;

    const itemStyle = {
        width: width,
        height: height + 'px',
        marginTop: topMargin + 'px',
        marginLeft: leftMargin + 'px',
        backgroundColor: backgroundColor
    };

    return (
        <Paper style={itemStyle}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <Button className="CheckButton" href={buttonLink} target="_blank">
                {buttonText}
            </Button>
        </Paper>
    );
}


    
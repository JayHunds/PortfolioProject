import React from 'react';

export function Example(props) {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            width: 200,
            height: 150,
            topMargin: 20,
            leftMargin: 50
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            width: 250,
            height: 200,
            topMargin: 30,
            leftMargin: 100
        }
    ]

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

export function Item(props) {
    const { width, height, topMargin, leftMargin } = props.item;

    const itemStyle = {
        width: width + 'px',
        height: height + 'px',
        marginTop: topMargin + 'px',
        marginLeft: leftMargin + 'px'
    };

    return (
        <Paper style={itemStyle}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
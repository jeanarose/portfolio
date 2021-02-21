import React, {useState, useEffect} from 'react';

const Portfolio = (props) => {
    const [project, setProject] = useState(
        {
            name: "Dog Meet Dog",
            url: "https://gentle-sea-84823.herokuapp.com/",
            github: "https://github.com/mollymccollumwx/dog-meet-dog",
            image: "../../../images/dog-meet-dog-screenshot.png"
        }
    )
    return (
        <>
            <h1>Hello World</h1>
            <img src="../../images/dog-meet-dog-screenshot.png" alt=""/>
        </>
    );
};

export default Portfolio;
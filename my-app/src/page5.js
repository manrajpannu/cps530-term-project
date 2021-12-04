import React from "react";
import Card from "./components/card";
import Nav from "./components/nav";

import { useState, useEffect } from "react";
import { useRef } from "react/cjs/react.development";

const Page5 = () => {

    const [bakendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch("/api").then(
            response => response.json()

        ).then(
            data => {
            setBackendData(data)
            }
        )


    }, []);
    console.log(bakendData)
    return (

        <div className="pageContent">
                        <Nav />

        <Card title="Conclusion" content="Overall, our experience with the frameworks was very enjoyable. The two frameworks performed beyond our expectations. They were easy to install and configure because of how well documented they are online and the vast amount of tutorials and guides that exist for them. Creating pages with React was straightforward and enjoyable because of the HTML-like syntax of JSX. Using React was very easy and enjoyable because of how useful the modularity of components is. Using a Node.Js backend through Express was also very easy to do due to the readily available documentation and javascript syntax. The learning curve to both these frameworks is very shallow if you have adequate knowledge of basic html and javascript. Because both Node.Js and React.JS are extensions of vanilla javascript and html they share a similar syntax which makes learning their features very easy and fast. However, if one’s fundamental javascript and html knowledge is weak learning these frameworks may be challenging. All in all, we were comfortable with Vanilla JS and HTML, so using these frameworks was not very challenging. In comparison with javascript, html, php, and css, learning react and node, had a slightly steeper learning curve because of the new JSX syntax that we had to adjust to. In retrospect, We don’t think we would make many significant changes to the website. One potential change we would add is implementing a database to our Page 4 example site to save user data. We did not regret our choice in frameworks because we think these are useful frameworks due to their functionality and popularity."/>
        </div>
    )
}

export default Page5
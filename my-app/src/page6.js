import React from "react";
import Card from "./components/card";
import Nav from "./components/nav";
import Credits from "./components/credits";
import Profile from "./components/Profile";
const Page6 = () => {



    return (

        <div className="pageContent">
                        <Nav />
        <Credits title="Credits and References" sources="https://www.simplilearn.com/tutorials/reactjs-tutorial/what-is-reactjs https://reactjs.org/ https://www.w3schools.com/whatis/whatis_react.asp https://www.section.io/engineering-education/why-node-js-is-popular/ https://insights.stackoverflow.com/survey/2020#technology-other-frameworks-libraries-and-tools-all-respondents3 https://www.voidcanvas.com/describing-node-js/ https://trio.dev/blog/companies-use-node-js https://www.altexsoft.com/blog/engineering/the-good-and-the-bad-of-node-js-web-app-development/ https://nodejs.org/en/ https://reactjs.org/ https://codepen.io/P1N2O/pen/pyBNzX https://github.com/tbakerx/react-resume-template"/>
        <Card title="Team Members:" content="Avneet Sidhu & Manraj Pannu" />
        <Profile name="Avneet Sidhu" responsibilities="Page 1, Collaborated on Page 3 and Page 4, Collaborated on Conclusion" />
        <Profile name="Manraj Pannu" responsibilities="Page 2, Collaborated on Page 3 and Page 4, Collaborated on Conclusion" />
        </div>

    )
}

export default Page6;
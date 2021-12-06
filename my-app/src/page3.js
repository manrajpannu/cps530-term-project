import React from "react";
import Card from "./components/card";
import Nav from "./components/nav";
const Page3 = () => {



    return (

        <div className="pageContent">
                        <Nav />
        <Card title = "Tutorial on how to make a good looking page"  content="We will explain how to create a good-looking Resume/CV landing page."/>
        <Card title = "Step 1"  content="Firstly, you need to design your resume website using React and style it accordingly with CSS. I suggest you look online for other people's resume websites for inspiration to build your own" image="https://i.gyazo.com/c63254f7ab4425d8734bafc6e822811c.png"/>
        <Card title = "Step 2"  content="Once you understand the basic layout of your website, We need to add the additional page's our website, we'll be using the Routes component from react-router-dom package. Our Resume website will have a Home, Projects, Skills and Contact us Page." image="https://i.gyazo.com/d41790635d0dd998bb99daabf926d299.png"/>
        <Card title = "Step 3"  content="For the Homepage we want big bold letters saying our first and last name. We also want buttons leading to our Linkedin, Github and Resume and have a really nice gradient background making it come together."/>
        <Card title = "Step 4"  content="For the Projects page, we have each of our significant projects or experience layed out on the page. under each image we have a short description on the most importants details about that project. To create these, we will make a Project component class that will take in a Name, Picture and Description."/>
        <Card title = "Step 5"  content="For the Skiils page, we show our expertise in five of your major skills as a Software Developer. We will make a Skill component that will take a name and percentage. " image="https://i.gyazo.com/6c4c7e57a28e7c1f6d15a3ea32ad27dc.png"/>
        <Card title = "Step 6"  content="Finally for the Contact Us page, we will have a simple form for potential clients. It will send an email directly to your inbox."/>
        </div>
    )
}

export default Page3;
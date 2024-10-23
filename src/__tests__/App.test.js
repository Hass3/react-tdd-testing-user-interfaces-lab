import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _____`", ()=>{
    render(<App />);
    const topLevelHeading = screen.getByRole("heading", {
        name : /hi, i'm/i,
        exact: false,
        level:1,
    });

    expect(topLevelHeading).toBeInTheDocument();
})

 test("image of me with an alt text identifying the content of the image", ()=>{
    render(<App />);
    const img = screen.getByAltText("Hello")
    expect(img).toBeInTheDocument()
 })


 test("displays a second-level heading with the text `About Me`", ()=>{
    render(<App/>)
    const secondLevelHeading = screen.getByRole("heading", {
        name : /about me/i,
        level:2,
    });
    expect(secondLevelHeading).toBeInTheDocument();
 })

 test("displays a paragraph with my biography", ()=>{
    render(<App />)
    const paragraph = screen.getByText("this is my biography")
    expect(paragraph).toBeInTheDocument();
 })

 test("Link to my GitHub page", ()=>{
   render(<App />)
   const linkElement = screen.getByRole("link", { name: /Git Hub/i })
   expect(linkElement).toBeInTheDocument();
   expect(linkElement).toHaveAttribute("href","https://github.com/Hass3/react-tdd-testing-user-interfaces-lab")
 })

 test("Link to my LinkedIn page",()=>{
    render(<App />)
    const linkElement = screen.getByRole("link", { name: /linked in/i })
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href","https://www.linkedin.com/")
 })
/*


Two links, one to your GitHub page, and one to your LinkedIn page */
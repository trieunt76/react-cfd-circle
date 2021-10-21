import React from "react";
import { CourseList } from "../../components";
import { Action, Banner, Different, Gallery, Testimonial } from "./components";

const Homepage = () => {
    return (
        <main className="homepage" id="main">
            <Banner />
            <CourseList />
            <Different />
            <Testimonial />
            <Gallery />
            <Action />
        </main>
    );
};

export default Homepage;

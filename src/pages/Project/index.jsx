import React from "react";
import { ProjectItem, ProjectTitle } from "./components";

const Project = () => {
    return (
        <main className="projectpage" id="main">
            <section className="section-1">
                <div className="container">
                    <ProjectTitle />
                    <div className="list row">
                        <ProjectItem />
                        <ProjectItem />
                        <ProjectItem />
                        <ProjectItem />
                        <ProjectItem />
                        <ProjectItem />
                    </div>
                    <div className="bottom">
                        <div className="btn overlay round btn-more">
                            tải thêm
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Project;

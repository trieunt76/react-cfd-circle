import React from "react";

const ProfileProject = () => {
    return (
        <div className="tab3" style={{ display: "none" }}>
            <div className="row">
                <div className="col-md-6 course">
                    <div className="wrap">
                        <a href="!#" className="cover">
                            <img src="img/img8.png" alt="thumbnail" />
                        </a>
                        <div className="info">
                            <a href="!#" className="name">
                                Furnitown
                            </a>
                            <p className="des">
                                Dự án hoàn thành trong khóa CFD1 Offline của CFD
                                Team.
                            </p>
                        </div>
                        <div className="bottom">
                            <div className="teacher">
                                <div className="avatar">
                                    <img src="img/avt.png" alt="avatar" />
                                </div>
                                <div className="name">Trần Nghĩa</div>
                            </div>
                            <div className="register-btn">Website</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 course">
                    <div className="wrap">
                        <a href="!#" className="cover">
                            <img src="img/img8.png" alt="thumbnail" />
                        </a>
                        <div className="info">
                            <a href="!#" className="name">
                                GboxMB
                            </a>
                            <p className="des">
                                Dự án hoàn thành trong khóa CFD1 Offline của CFD
                                Team.
                            </p>
                        </div>
                        <div className="bottom">
                            <div className="teacher">
                                <div className="avatar">
                                    <img src="img/avt.png" alt="avatar" />
                                </div>
                                <div className="name">Trần Nghĩa</div>
                            </div>
                            <div className="register-btn">Website</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-wrap">
                <div className="btn overlay btn-icon round">
                    <img src="img/icon-upload.svg" alt="icon" /> Tải lên
                </div>
            </div>
        </div>
    );
};

export default ProfileProject;

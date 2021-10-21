import React from "react";

const ProfileCourse = () => {
    return (
        <div className="tab2" style={{ display: "none" }}>
            <div className="item">
                <div className="cover">
                    <img src="img/img3.png" alt="thumbnail" />
                </div>
                <div className="info">
                    <a href="!#" className="name">
                        front-end căn bản
                    </a>
                    <div className="date">Khai giảng ngày 09/09/2019</div>
                    <div className="row">
                        <div>
                            <img
                                src="img/clock.svg"
                                alt="icon"
                                className="icon"
                            />
                            54 giờ
                        </div>
                        <div>
                            <img
                                src="img/play.svg"
                                alt="icon"
                                className="icon"
                            />
                            25 video
                        </div>
                        <div>
                            <img
                                src="img/user.svg"
                                alt="icon"
                                className="icon"
                            />
                            20 học viên
                        </div>
                    </div>
                    <div className="process">
                        <div className="line">
                            <div className="rate" style={{ width: "30%" }} />
                        </div>
                        30%
                    </div>
                    <div className="btn overlay round btn-continue">
                        Tiếp tục học
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="cover">
                    <img src="img/img7.png" alt="thumbnail" />
                </div>
                <div className="info">
                    <a href="!#" className="name">
                        front-end nâng cao
                    </a>
                    <div className="date">Khai giảng ngày 09/09/2019</div>
                    <div className="row">
                        <div>
                            <img
                                src="img/clock.svg"
                                alt="icon"
                                className="icon"
                            />
                            54 giờ
                        </div>
                        <div>
                            <img
                                src="img/play.svg"
                                alt="icon"
                                className="icon"
                            />
                            25 video
                        </div>
                        <div>
                            <img
                                src="img/user.svg"
                                alt="icon"
                                className="icon"
                            />
                            20 học viên
                        </div>
                    </div>
                    <div className="process">
                        <div className="line">
                            <div className="rate" style={{ width: "30%" }} />
                        </div>
                        30%
                    </div>
                    <div className="btn overlay round btn-continue">
                        Tiếp tục học
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCourse;
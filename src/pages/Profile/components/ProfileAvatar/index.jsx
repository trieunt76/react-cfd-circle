import React from "react";

const ProfileAvatar = () => {
    return (
        <div className="top-info">
            <div className="avatar">
                {/* <span class="text">H</span> */}
                <img src="img/avatar-lg.png" alt="avatar user" />
                <div className="camera" />
            </div>
            <div className="name">trần nghĩa</div>
            <p className="des">Thành viên của team CFD1-OFFLINE</p>
        </div>
    );
};

export default ProfileAvatar;

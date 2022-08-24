import React from "react";
import Avatar from "./Avatar";

function UserProfileCard() {
    return (
        <div className="card">
            <Avatar />

            <div className="card-name"> Samuel Fatodu </div>{" "}
            <div className="">
                I am a Software Engineering student at Altschool Africa.{" "}
            </div>{" "}
        </div>
    );
}

export default UserProfileCard;
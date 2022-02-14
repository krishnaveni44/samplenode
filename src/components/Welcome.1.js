import React from "react";

export function Welcome({ name, profile }) {
  return (
    <div clasName="come">
      <img className="user-profile-pic" src={profile} alt="profile pic" />
      <h1>Hello, {name}🎄😀</h1>
    </div>
  );
}

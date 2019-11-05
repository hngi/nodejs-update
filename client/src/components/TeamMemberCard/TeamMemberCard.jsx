import React from 'react';
import './style.css';
import teamMembers from '../../assets/data/members.json';

export default function index() {
  return (
    <>
      {teamMembers.map(member => {
        return (
          <div
            className="team-member d-flex align-items-center p-3"
            key={member.id}
          >
            <img src={member.image} alt="" className="team-member-image" />
            <div className="ml-4">
              <p className="team-member-name">{member.name}</p>
              <p className="team-member-role mt-2">{member.role}</p>
              <a href={`${member.github}`} className="team-member-email"><i class="fab fa-github-alt"></i></a>
              <a href={`mailto: ${member.email}`} className="team-member-email"><i class="fas fa-envelope"></i></a>
            </div>
          </div>
        );
      })}
    </>
  );
}

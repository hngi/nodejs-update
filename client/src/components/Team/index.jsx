import React from 'react';
import './style.css';
import TeamMember from '../TeamMemberCard';

export default function Team() {
  return (
    <main className="wrapper mt-4">
      <h1 className="team-title mb-5">Meet the team</h1>
      <div className="team-memebers">
        <TeamMember />
      </div>
    </main>
  );
}

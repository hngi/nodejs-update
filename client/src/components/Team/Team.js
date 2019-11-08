import React from 'react';
import './Team.css';
import TeamMember from '../TeamMemberCard/TeamMemberCard';
export default function Team() {
  return (
    <main className='wrapper mt-4'>
      <h1 className='team-title mb-5'>Meet the team</h1>
      <div className='team-memebers'>
        <TeamMember />
      </div>
    </main>
  );
}

import React from 'react';
import MemberCard from './MemberCard';
import styles from './MembersGrid.module.css';

export default function MembersGrid({ members }) {
  if (!members.length) {
    return (
      <div className={styles.grid}>
        <p>No profiles available in this category yet.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {members.map(m => (
        <MemberCard key={m.id} member={m} />
      ))}
    </div>
  );
}
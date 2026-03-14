import React, { useMemo, useState } from 'react';
import MembersGrid from '../components/about_section/MembersGrid';
import ToggleTabs from '../components/about_section/ToggleTabs';
import styles from '../components/about_section/AboutSection.module.css';
import data from '../components/about_section/data/members.json';

function Aboutus() {
  const [active, setActive] = useState('members');

  const filtered = useMemo(() => {
    if (active === 'members') {
      return data.filter((m) => m.type === 'member');
    }
    if (active === 'alumni') {
      return data.filter((m) => m.type === 'alumni');
    }
    return data;
  }, [active]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTitle}>Members & Alumni</div>
        <ToggleTabs active={active} setActive={setActive} />
      </header>

      <MembersGrid members={filtered} />
    </div>
  );
}

export default Aboutus;
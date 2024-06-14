import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import TextComponent from './TextComponent';
import styles from './Main.module.css'

function MainComponent() {
  return (
    <div className={styles.main}>
        <TextComponent />
      <LanguageSwitcher />
      
    </div>
  );
};

export default MainComponent;
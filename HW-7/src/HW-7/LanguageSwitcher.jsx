import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import styles from './Main.module.css'

function LanguageSwitcher() {
  const { toggleLanguage } = useContext(LanguageContext);

  return (
    <button className={styles.btn} onClick={toggleLanguage}>Switch Language</button>
  );
};

export default LanguageSwitcher;

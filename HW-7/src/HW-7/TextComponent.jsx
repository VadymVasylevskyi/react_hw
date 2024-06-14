import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import styles from './Main.module.css'

function TextComponent() {
  const { language } = useContext(LanguageContext);

  const text = {
    en: 'English language was chosen',
    ru: 'Выбран русский язык'
  };

  return <p className={styles.text}>{text[language]}</p>;
};

export default TextComponent;

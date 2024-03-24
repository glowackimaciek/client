'use client';

import { useState } from 'react';
import styles from '../styles/RegisterPage.module.css'; 

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState(null); // State do przechowywania informacji o błędzie

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj można dodać logikę walidacji danych rejestracji, np. wysłanie żądania do serwera
    console.log('Dane do rejestracji:', formData);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        <span className={styles.icon}>🔑</span> Rejestracja
      </h2>
      {error && <p className={styles.error}>{error}</p>} {/* Wyświetlanie komunikatu błędu */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="username" className={styles.label}>Nazwa użytkownika:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Adres email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>Hasło:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>Zarejestruj się</button>
      </form>
      <div className={styles.links}>
        <p>Masz już konto? <a href="/logowanie">Zaloguj się</a></p>
      </div>
    </div>
  );
}

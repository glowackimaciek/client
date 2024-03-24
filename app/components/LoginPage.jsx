'use client';

import { useState } from 'react';
import styles from '../styles/LoginPage.module.css'; 

export default function LoginPageClient() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState(null); // Stan do przechowywania informacji o błędzie

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj można dodać logikę walidacji danych logowania, np. wysłanie żądania do serwera
    if (formData.username === 'admin' && formData.password === 'admin') {
      // Tutaj można przekierować użytkownika do innej strony po pomyślnym zalogowaniu
      console.log('Zalogowano pomyślnie!');
    } else {
      setError('Nieprawidłowa nazwa użytkownika lub hasło'); // Ustawienie informacji o błędzie
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        <span className={styles.icon}>🔒</span> Logowanie
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
        <button type="submit" className={styles.button}>Zaloguj się</button>
      </form>
      <div className={styles.links}>
        <p>Masz już konto? <a href="/rejestracja">Zarejestruj się</a></p>
        <p>Zapomniałeś hasła? <a href="/reset-hasla">Zresetuj hasło</a></p>
      </div>
    </div>
  );
}

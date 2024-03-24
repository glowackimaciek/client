import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Moja Aplikacja React</h1>
      <nav>
        <ul>
          <li><a href="/">Strona główna</a></li>
          <li><a href="/about">O nas</a></li>
          {/* Dodaj inne elementy nawigacji tutaj */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
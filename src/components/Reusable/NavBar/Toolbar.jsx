import React, { useContext } from 'react';
import '../../../style/CSS/Reusable/Navbar/Navbar.css';
import { ThemeContext } from '../../../ThemeContext';

export default function Toolbar() {
  const [theme, changeTheme] = useContext(ThemeContext);
  const handleChange = () => {
    changeTheme();
  };

  return (
    <select
      className="toolbar"
      name="theme"
      defaultValue={theme}
      onChange={handleChange}
    >
      <option value="dark">Sombre</option>
      <option value="light">Clair</option>
    </select>
  );
}

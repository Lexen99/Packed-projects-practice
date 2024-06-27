import UseLocalStorage from "./UseLocalStorage";
import './LightDarkMode.css';

const LightDarkMode = () => {

    const [theme, setTheme] = UseLocalStorage('theme', 'dark');

    function handleOnToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    console.log(theme)

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello world!</p>
        <button onClick={handleOnToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;

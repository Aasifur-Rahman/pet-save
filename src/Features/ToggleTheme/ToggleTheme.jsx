import useTheme from "../../hooks/useTheme";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("myDarkTheme");
    } else {
      setTheme("mytheme");
    }
  };
  return (
    <div>
      <input
        checked={theme === "mytheme" ? false : true}
        onChange={handleToggle}
        type="checkbox"
        value="synthwave"
        className="toggle theme-controller "
      />
    </div>
  );
};

export default ToggleTheme;

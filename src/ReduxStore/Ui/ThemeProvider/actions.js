export default function ThemeProviderAction(dispatch, mode) {
  const theme = window.localStorage.getItem('theme');
  if (theme) {
    window.localStorage.setItem('theme', mode);
    return dispatch({
      type: mode,
    });
  } else {
    window.localStorage.setItem('theme', 'LIGHT_MODE');
  }
}

function loadPersistedState() {
  try {
    const themeMode = window.localStorage.getItem('theme') || 'LIGHT_MODE';
    return themeMode;
  } catch (err) {
    // [not implemented yet] show the user a message to enable localStorage for good experience
    return undefined;
  }
}
export default loadPersistedState;

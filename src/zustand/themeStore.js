
const themeState = {
  dark: false,
  bgColor: '#fff',
  txtColor: '#111'
}

let themeStore = (set, get) => {
  return {
    themeState,
    toggleDarkMode: (darkMode) => {
      set(
        (state) => {
          // return {
          //   ...state,
          //   dark: darkMode
          // }
          state.themeState.dark = darkMode;
          state.themeState.bgColor = darkMode ? '#111' : '#fff';
          state.themeState.txtColor = darkMode ? '#fff' : '#111';
        },
        false,
        `theme/toggle_${darkMode ? 'dark' : 'light'}`
      )
    }
  }
}


export default themeStore;
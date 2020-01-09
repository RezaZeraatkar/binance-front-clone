// function themeProvider(type) {
//   switch (type) {
//     case type === 'Light_THEME':
//       return {
//         typography: {
//           colors: {
//             primaryColor: ,
//             secondaryColor: ,
//           },
//         },
//       };

//     default:
//       return {
//         typography: {
//           colors: {
//             positiveColor: 'green',
//             negativeColor: 'red',
//           },
//         },
//       };
//   }
// }

const ThemeVars = {
  Colors: {
    PrimaryColor: '#12161c',
    WarningColor: '#F0B90B',
    LightWarningColor: '#f7cf2e',
    DarkColor: '#000',
  },
  Button: {
    FontSize: '12px',
  },
  BreakPoints: {
    md: '991px',
    mdBackgroundColor: '#14171a',
  },
};
export default ThemeVars;

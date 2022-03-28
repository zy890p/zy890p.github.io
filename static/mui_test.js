'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _MaterialUI = MaterialUI,
    colors = _MaterialUI.colors,
    CssBaseline = _MaterialUI.CssBaseline,
    ThemeProvider = _MaterialUI.ThemeProvider,
    Typography = _MaterialUI.Typography,
    Container = _MaterialUI.Container,
    createTheme = _MaterialUI.createTheme,
    Box = _MaterialUI.Box,
    SvgIcon = _MaterialUI.SvgIcon,
    Link = _MaterialUI.Link,
    Button = _MaterialUI.Button,
    Autocomplete = _MaterialUI.Autocomplete,
    TextField = _MaterialUI.TextField;

// Create a theme instance.

var theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: colors.red.A400
    }
  }
});

var top3 = ['Star War', 'Shark', 'Titanic', 'Romeo & Juliet'];

function LightBulbIcon(props) {
  return React.createElement(
    SvgIcon,
    props,
    React.createElement('path', { d: 'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z' })
  );
}

function ProTip() {
  return React.createElement(
    Typography,
    { sx: { mt: 6, mb: 3 }, color: 'text.secondary' },
    React.createElement(LightBulbIcon, { sx: { mr: 1, verticalAlign: 'top' } }),
    'Pro tip: See more',
    ' ',
    React.createElement(
      Link,
      { href: 'https://mui.com/getting-started/templates/' },
      'templates'
    ),
    ' on the MUI documentation.'
  );
}

function Copyright() {
  return React.createElement(
    Typography,
    { variant: 'body2', color: 'text.secondary', align: 'center' },
    'Copyright © ',
    React.createElement(
      Link,
      { color: 'inherit', href: 'https://mui.com/' },
      'Your Website'
    ),
    ' ',
    new Date().getFullYear(),
    '.'
  );
}

function App() {
  return React.createElement(
    Container,
    { maxWidth: 'sm' },
    React.createElement(
      Box,
      { sx: { my: 4 } },
      React.createElement(
        Typography,
        { variant: 'h4', component: 'h1', gutterBottom: true },
        'CDN example'
      ),
      React.createElement(ProTip, null),
      React.createElement(
        Button,
        { variant: 'contained' },
        'Contained'
      ),
      React.createElement(
        Button,
        { variant: 'outlined' },
        'Outlined'
      ),
      React.createElement(Autocomplete, {
        disablePortal: true,
        id: 'combo-box-demo',
        options: top3,
        sx: { width: 300 },
        renderInput: function renderInput(params) {
          return React.createElement(TextField, _extends({}, params, { label: 'Movie' }));
        }
      }),
      React.createElement(Copyright, null)
    )
  );
}

ReactDOM.render(React.createElement(
  ThemeProvider,
  { theme: theme },
  React.createElement(CssBaseline, null),
  React.createElement(App, null)
), document.querySelector('#root'));
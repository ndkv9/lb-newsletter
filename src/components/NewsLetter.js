import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import { makeStyles } from '@material-ui/core/styles'

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      light: '#424242',
      main: '#212121',
      dark: '#000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#d80711',
      dark: '#f44336',
      contrastText: '#fff',
    },
  },
});

const useStyles = makeStyles({
  field: {
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: "5px",
  },
  btn: {
    height: "48px",
  },
  cancelBtn: {
    marginLeft: "10px",
  }
})

function NewsLetter() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" >
        <Toolbar >
          <Stack direction="row" spacing={2}>
            <Avatar alt="logo" src="https://stripe-images.s3.us-west-1.amazonaws.com/works-with/0bf92fa8419e3237a6fb6eac9b1c225099f96741"/>
          </Stack>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="center">
            Need more lead? Try our bots and forms
          </Typography>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            marginRight="10px"
          >
            <div>
              <TextField
                id="standard-textarea"
                label="Email"
                placeholder="Placeholder"
                multiline
                variant="filled"
                size="small"
                className={classes.field}
              />
            </div>
          </Box>
          <Button variant="contained" color="secondary" className={classes.btn}>Submit</Button>
          <Stack direction="row" spacing={1} >
            <IconButton aria-label="fingerprint" color="inherit" >
              <CancelIcon className={classes.cancelBtn}/>
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default NewsLetter

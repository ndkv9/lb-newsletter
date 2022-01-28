import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
  toolbar: {
    backgroundColor: "#000",
  },
  btn: {
    backgroundColor: "#F00",
    color: "#000",
  },
  cancelBtn: {
    marginLeft: "30px"
}
})

function NewsLetter() {
  const classes = useStyles()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar className={classes.toolbar}>
          <Stack direction="row" spacing={2}>
            <Avatar alt="logo" src="https://cdn-icons.flaticon.com/png/512/4494/premium/4494500.png?token=exp=1643373760~hmac=2478f82eec95fcb2fb521e455889a876"/>
          </Stack>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="center">
            Need more lead?
          </Typography>
          <Button color="inherit" >Subscribe</Button>
          <Stack direction="row" spacing={1} className={classes.cancelBtn}>
            <IconButton aria-label="fingerprint" color="inherit">
              <CancelIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>

  )
}

export default NewsLetter

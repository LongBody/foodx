import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import SignInGoogle from './googleSignIn'
import SignInFacebook from './facebookSignIn'
import Slide from '@material-ui/core/Slide';
import AccountCircle from '@material-ui/icons/AccountCircle';
import '../../scss/appbar.scss'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalLogin() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="login__foodx__modal">
      <Button variant="outlined"  onClick={handleClickOpen}>
      <AccountCircle style={{color:"#f4d2d6"}}/> <span style={{color:"#f4d2d6"}}>Register/ Login</span>
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Login Foodx"}</DialogTitle>
        <DialogContent>
        <SignInGoogle />
        <SignInFacebook />
        </DialogContent>
        
      </Dialog>
    </div>
  );
}

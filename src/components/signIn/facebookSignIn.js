import React from 'react';
import { Button } from '@material-ui/core';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import '../../scss/googleFacebookSignIn.scss'




export default function FacebookSignIn() {

    const responseFacebook = (response) => {
        console.log(response); 
        let userProfile ={
            userName:response.name,
            imageUrl:response.picture.data.url,
        }

        localStorage.setItem("foodxShop", JSON.stringify(userProfile));
        window.location.reload();
       
        }
    
    

    return ( <div style = {
            {
                display: "flex",
                justifyContent: "center",
                paddingBottom: 10,
                width: "100%",
                backgroundColor: "rgb(255, 255, 255)",
            }
        } >

   <FacebookLogin appId = "1000559690451489"
    fields = "name,email,picture"
    callback = { responseFacebook }
    autoLoad={false}
    cssClass="btn__Facebook"
    icon={<i className="fab fa-facebook-square" ></i>}
    textButton = "&nbsp;&nbsp;Sign In with Facebook" /> 
      </div>
    ); }


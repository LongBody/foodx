import React from "react";
import { GoogleLogin } from "react-google-login";
import '../../scss/googleFacebookSignIn.scss'

export default function GoogleSignIn() {


    const responseGoogle = async(response) => {
        console.log(response)
        if (response) {
            // let userProfile = {
            //     userName: response.profileObj.name,
            //     imageUrl: response.profileObj.imageUrl,
            // }

            localStorage.setItem("foodxShop", JSON.stringify("long"));
            window.location.reload();
        }



    }


    return ( <div div style = {
            {
                display: "flex",
                justifyContent: "center",
                paddingBottom: 1,
                width: "100%",
                backgroundColor: "rgb(255, 255, 255)",
            }
        } >
        <
        GoogleLogin clientId = "1079345342714-8q3900edhd8glu594i1kbgovile1bgio.apps.googleusercontent.com"
        render = {
            (renderProps) => ( < button onClick = { renderProps.onClick }
                disabled = { renderProps.disabled }
                className = "btn__Google" >
                <
                img style = {
                    { height: 20, marginRight: 10 } }
                src = "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg " / >
                Sign in with Google { " " } < /button>
            )
        }
        onSuccess = { responseGoogle }
        onFailure = { responseGoogle }
        cookiePolicy = { "single_host_origin" }
        />{" "} </div >
    );
}
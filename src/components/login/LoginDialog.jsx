import React, { useState, useContext } from "react";
import {
  Dialog,
  Box,
  TextField,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { authenticateSignup, authenticateLogin } from "../../service/Api";
import { LoginContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'


/* Component Styles */
const Component = styled(Box)`
  display: flex;
  flex-direction: column;
  background: #96b6c5;
  padding: 20px;

  @media (min-width: 600px) {
    flex-direction: row;
    height: 70vh;
  }
  @media (min-width: 601px) and (max-width : 800px) {
    height: 43vh;
  }
`;

const Image = styled(Box)`
  width: 100%;
  padding: 0 2%;
  margin-bottom: 20px;

  @media (min-width: 600px) {
    width: 38%;
    margin-bottom: 0;
  }

`;

const Form = styled(Box)`
  background: white;
  display: flex;
  flex-direction: column;
  padding: 16px;
  flex: 1;
  overflow-y: hidden;
`;

/* Button Styles */
const LoginButton = styled(Button)`
  text-transform: none;
  background: #22314b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  margin-top : 10px;
`;

// const RequestOTP = styled(Button)`
//   text-transform: none;
//   background: #fff;
//   color: #2874f0;
//   height: 48px;
//   border-radius: 2px;
//   box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
// `;

/* Typography Styles */
const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
  padding : 20px 0px;
`;

const CreateAccount = styled(Typography)`
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
  padding : 10px 0px;
`;

const Error = styled(Typography)`
  color: red;
  font-size: 10px;
  font-weight: 600;
`;

// /* Other Element Styles */
const TextBlock = styled(TextField)`
  margin-top: 2px;
`;





const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const loginInitialValues = {
  email: "",
  password: "",
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  phone: "",
};
export default function LoginDialog({ open, setOpen }) {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const { setAccount } = useContext(LoginContext);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);
  
  const navigate = useNavigate();

  const closeDialog = () => {
    setOpen(false);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };
  
  const toggleLogin = () =>{
    toggleAccount(accountInitialValues.login)
  }

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    setError(false);
  };
  

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    console.log(response);
    const signupToken = response.data.token;
    if(signupToken !== undefined){
      localStorage.setItem("signupToken", signupToken);
      localStorage.setItem("firstName", response.data.user.firstname);
      handleClose();
      setAccount(localStorage.getItem("firstName"));
      navigate("/");
      toast.success("Signup Successfully", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    else{
      alert(response.data.message)
    }
  };


  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    console.log(response);

    const loginToken = response.data.token;
    if (loginToken !== undefined) {
      localStorage.setItem("loginToken", loginToken);
      localStorage.setItem("firstName", response.data.user.firstname);
      console.log(response.data.user.firstname,"name");

        handleClose();
        const name = localStorage.getItem("firstName")
        console.log(name);
        setAccount(name);
        navigate("/"); // Move the navigation here
        toast.success("Login Successfully", {
          position: toast.POSITION.TOP_RIGHT
        });
      }
     else{
      alert(response.data.message)
    }
  };

  return (
    <Dialog
    // style={{width:"94%"}}
      open={open}
      onClose={() => {
        closeDialog();
      }}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Image className="login">
          <Typography variant="h5" style={{ margin: 12 }}>
            {account.heading}
          </Typography>
          <Typography style={{ margin: 12 }}>{account.subHeading}</Typography>
        </Image>

        {account.view === "login" ? (
          <Form>
            <TextBlock
              variant="standard"
              onChange={(e) => onValueChange(e)}
              name="email"
              label="Enter Email"
            />
            {error && <Error>Please enter valid email or password</Error>}
            <TextBlock
              variant="standard"
              onChange={(e) => onValueChange(e)}
              name="password"
              label="Enter password"
            />
            <Text>
              By continuing, you agree to ClickCart's Terms and Privacy Policy.
            </Text>
            <LoginButton
              onClick={() => loginUser()}
              sx={{
                ":hover": {
                  bgcolor: "#22314b",
                  color: " #fff",
                },
              }}
            >
              Login
            </LoginButton>
            {/* <Text style={{ textAlign: "center" }}>OR</Text>
            <RequestOTP>Request OTP</RequestOTP> */}
            <CreateAccount onClick={() => toggleSignup()}>
              New to ClickCart? Create an account
            </CreateAccount>
          </Form>
        ) : (
          <Form>
            <TextBlock
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="firstname"
              label="Enter FirstName"
            />

            <TextBlock
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="lastname"
              label="Enter LastName"
            />

            <TextBlock
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="email"
              label="Enter Email"
            />

            <TextBlock
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="phone"
              label="Enter Phone"
            />

            <TextBlock
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="password"
              label="Enter Password"
            />

            <LoginButton
              onClick={() => signupUser()}
              sx={{
                ":hover": {
                  bgcolor: "#22314b",
                  color: " #fff",
                },
              }}
            >
              SignUp
            </LoginButton>
            <CreateAccount onClick={() => toggleLogin()}>
              Already SignUp? Log In
            </CreateAccount>
          </Form>
        )}
      </Component>
    </Dialog>
  );
}

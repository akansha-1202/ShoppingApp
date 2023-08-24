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

// const Component = styled(Box)`
//   height: 70vh;
//   width: 90vh;
//   display: flex;
//   background: #96b6c5;
// `;

// const Image = styled(Box)`
//   width: 38%;
//   height: 70vh;
//   padding: 0 2% 0 2%;
// `;

// const Form = styled(Box)`
//   background: white;
//   display: flex;
//   flex-direction: column;
//   padding: 5% 3%;
//   flex: 1;
//   overflow: auto;
//   & > div,
//   & > button,
//   & > p {
//     margin-top: 5%;
//   }
// `;

// const LoginButton = styled(Button)`
//   text-transform: none;
//   background: #22314b;
//   color: #fff;
//   height: 48px;
//   border-radius: 2px;
// `;

// const RequestOTP = styled(Button)`
//   text-transform: none;
//   background: #fff;
//   color: #2874f0;
//   height: 48px;
//   border-radius: 2px;
//   box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
// `;

// const Text = styled(Typography)`
//   color: #878787;
//   font-size: 12px;
// `;

// const CreateAccount = styled(Typography)`
//   margin: auto 0 5px 0;
//   text-align: center;
//   color: #2874f0;
//   font-weight: 600;
//   font-size: 12px;
//   cursor: pointer;
// `;

// const Error = styled(Typography)`
//   color: red;
//   font-size: 10px;
//   line-height: 0;
//   font-weight: 600;
// `;

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
  padding: 20px;
  flex: 1;
  overflow: auto;
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
  padding : 20px 0px;
`;

const Error = styled(Typography)`
  color: red;
  font-size: 10px;
  font-weight: 600;
`;

// /* Other Element Styles */
const TextBlock = styled(TextField)`
  margin-top: 10px;
`;

/* Apply these styles in your component as per the original code */




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
  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    setError(false);
  };
  // const signupUser = async () => {
  //   let response = await authenticateSignup(signup);
  //   console.log(response);

  //   const token = response.data.token;  
  //   if (response.data.message === "User Registered Successfully" && token) {
  //     localStorage.setItem("recievedToken", token);
  //     alert("User Registered Successfully");
  //     if (response.status === 200) {
  //       handleClose();
  //       setAccount(response.data.user.firstname);
  //       navigate("/"); // Move the navigation here
  //     } else {
  //       setError(true);
  //     }
  //   }
  //   else if (response.data.message === "User's email ID is already in use...!!!") {
  //     alert("User's email ID is already in use, Try to Login");
  //     handleClose();
  //   }
  //   if (!response) return;
  // };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    console.log(response);
    if (!response) return;
    handleClose();
    setAccount(signup.firstname);
  };
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    console.log(response);

    const token = response.data.token;
    if (response.data.message === "User Logged in Successfully" && token) {
      localStorage.setItem("recievedToken", token);
      if (response.status === 200) {
        handleClose();
        setAccount(response.data.user.firstname);
        navigate(-1); // Move the navigation here
      } else {
        setError(true);
      }
    } else if (response.data.message === "User is not registered") {
      alert("User is not registered, Please register first!!");
    } else if (response.data.message === "Invalid Password") {
      alert("Password does not match, Try entering the correct password!!");
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
          </Form>
        )}
      </Component>
    </Dialog>
  );
}

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

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
  display: flex;
  background: #96b6c5;
`;

const Image = styled(Box)`
  width: 38%;
  height: 70vh;
  padding: 0 2% 0 2%;
`;

const Form = styled(Box)`
  background: white;
  display: flex;
  flex-direction: column;
  padding: 5% 3%;
  flex: 1;
  overflow: auto;
  & > div,
  & > button,
  & > p {
    margin-top: 5%;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #22314b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;

const CreateAccount = styled(Typography)`
  margin: auto 0 5px 0;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
`;

const Error = styled(Typography)`
      color : red;
      font-size :10px;
      line-height : 0;
      font-weight : 600;
`

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
  const signupUser = async () => {
    let response = await authenticateSignup(signup);
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
    if (response.status === 200) {
      handleClose();
      setAccount(response.data.data.firstname);
    } else {
      setError(true);
    }
  };

  return (
    <Dialog
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
            <TextField
              variant="standard"
              onChange={(e) => onValueChange(e)}
              name="email"
              label="Enter Email"
            />
            {error && (
              <Error>Please enter valid email or password</Error>
            )}
            <TextField
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
            <Text style={{ textAlign: "center" }}>OR</Text>
            <RequestOTP>Request OTP</RequestOTP>
            <CreateAccount onClick={() => toggleSignup()}>
              New to ClickCart? Create an account
            </CreateAccount>
          </Form>
        ) : (
          <Form>
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="firstname"
              label="Enter FirstName"
            />

            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="lastname"
              label="Enter LastName"
            />

            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="email"
              label="Enter Email"
            />

            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="phone"
              label="Enter Phone"
            />

            <TextField
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

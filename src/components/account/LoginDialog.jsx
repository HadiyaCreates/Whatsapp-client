// // 668695065714-o7937r2nbir5dle955431ll5d6s8m2jg.apps.googleusercontent.com
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { qrCodeImage } from "../constants/data";
import { styled } from "@mui/material/styles";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { addUser } from "../../service/api";

const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
}));

const Container = styled(Box)(({ theme }) => ({
  padding: "56px 0 56px 56px",
  [theme.breakpoints.down("sm")]: {
    padding: "20px",
    textAlign: "center",
  },
}));

const QRCodeWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  margin: "50px",
  [theme.breakpoints.down("sm")]: {
    margin: "20px 0",
  },
}));

const QRCode = styled("img")(({ theme }) => ({
  height: "264px",
  width: "264px",
  display: "block",
  maxWidth: "100%",
  height: "auto",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "26px",
  color: "#525252",
  fontWeight: 300,
  fontFamily: "inherit",
  marginBottom: "25px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    marginBottom: "15px",
  },
}));

const StyledList = styled(List)(({ theme }) => ({
  "& > li": {
    padding: 0,
    marginTop: "15px",
    fontSize: "18px",
    lineHeight: "28px",
    color: "#4a4a4a",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
}));

const dialogStyle = {
  height: "96%",
  marginTop: "5%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

const LoginDialog = () => {

   const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async(res) => {
    const decoded = jwtDecode(res.credential);
    console.log(decoded);
    setAccount(decoded);
    await addUser(decoded);
  };

  const onLoginError = (res) => {
    console.log("Login Failed", res);
  };

  return (
    <Dialog open={true} PaperProps={{ style: dialogStyle }} hideBackdrop={true}>
      <Component>
        <Container>
          <Title>To use WhatsApp on your computer:</Title>
          <StyledList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap Menu or Settings and select WhatsApp Web</ListItem>
            <ListItem>3. Point your phone to this screen to capture the code</ListItem>
          </StyledList>
        </Container>
        <QRCodeWrapper>
          <QRCode src={qrCodeImage} alt="qr_code" />
          <Box
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
          </Box>
        </QRCodeWrapper>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;

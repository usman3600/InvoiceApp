import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useMemo} from "react"
import {useSelector} from "react-redux"
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Client from "./components/ClientProfile";
import SignUp from "./pages/SignUp";
import Clients from "./pages/Clients";
import Invoice from "./pages/Invoice";
import Payment from "./pages/Payment";
import InvoiceGenerator from "./pages/InvoiceGenerator";
import AdminProfile from "./pages/AdminProfile";
import themeSettings from "./components/theme";
import Navbar from "./components/Navbar";
import PaymentComplete from "./pages/PaymentComplete";

function App() {
  const mode = useSelector((state)=>state.mode)
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode])

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/payment-complete" element={<PaymentComplete/>} />
          <Route
            path="*"
            element={
              <Navbar>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/invoice" element={<Invoice />} />
                  <Route path="/invoicegenerator" element={<InvoiceGenerator />}/>
                  <Route path="/clients" element={<Clients />} />
                  <Route path="/adminprofile" element={<AdminProfile />} />
                </Routes>
              </Navbar>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

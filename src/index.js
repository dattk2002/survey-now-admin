import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Statistic from "./components/Statistic";
import UserList from "./components/UserList";
import UserSurveyed from "./components/UserSurveyed";
import CreatedSurvey from "./components/CreatedSurvey";
import AboutUs from "./components/AboutUs";
import RedeemRequests from "./components/RedeemRequests";
import TransactionHistory from "./components/TransactionHistory";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/createdsurvey" element={<CreatedSurvey />} />
          <Route path="/statistic" element={<Statistic />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/usersurveyed" element={<UserSurveyed />} />
          <Route path="/redeem-requests" element={<RedeemRequests />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route index element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

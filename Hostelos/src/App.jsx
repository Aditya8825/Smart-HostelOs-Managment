import React, { useState } from "react";
import "./App.css";
import StudentDashboard from "./StudentDashboard";

function App() {
  const [page, setPage] = useState("login");

  // =====================================================
  // LOGIN STATES
  // =====================================================

  const [hostelId, setHostelId] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // =====================================================
  // LOGIN FUNCTION
  // =====================================================

  const handleLogin = (e) => {
    e.preventDefault();

    const correctHostelId = "Aditya8825";
    const correctPassword = "Hostel@123";

    if (
      hostelId.trim() === correctHostelId &&
      password === correctPassword
    ) {
      setLoginError("");
      setPage("dashboard");
    } else {
      setLoginError("Invalid Hostel ID/Email or Password");
    }
  };

  // =====================================================
  // SHOW STUDENT DASHBOARD
  // =====================================================

  if (page === "dashboard") {
    return <StudentDashboard />;
  }

  // =====================================================
  // LOGIN PAGE
  // =====================================================

  return (
    <div className="login-page">

      {/* =================================================
          FULL BACKGROUND IMAGE
      ================================================= */}
<img 
    src="/download.jpeg"
    alt="Hostel"
    className="background-image"/>
    <div className="background-overlay"></div>


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="login-page-content">


        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <section className="left-section">


          {/* =================================================
              HOSTELOS BRAND
          ================================================= */}

          <div className="brand">

            <div className="brand-icon">
              🏨
            </div>

            <div>

              <h1>
                𝙷𝚘𝚜𝚝𝚎𝚕<span>𝓞S</span>
              </h1>

              <p>
                Smart Hostel Maintenance
              </p>

            </div>

          </div>


          {/* =================================================
              HERO CONTENT
          ================================================= */}

          <div className="hero-content">

            <h2>
              𝙵𝚛𝚘𝚖 𝙲𝚘𝚖𝚙𝚕𝚊𝚒𝚗𝚝𝚜
              <br />
              𝚝𝚘 <span>𝚁𝚎𝚜𝚘𝚕𝚞𝚝𝚒𝚘𝚗𝚜</span>
            </h2>

            <p className="description">
              HostelOS turns messy hostel complaints
              <br />
              into structured, prioritized ,trackable
              <br />
             and maintenance.
            </p>

          </div>


          {/* =================================================
              FOUR FEATURES
          ================================================= */}

          <div className="features">


            {/* REPORT */}

            <div className="feature">

              <div className="feature-icon blue">
                🚨
              </div>

              <div>
                <h3>
                  Report
                </h3>

                <p>
                  in seconds
                </p>
              </div>

            </div>


            {/* AI UNDERSTAND */}

            <div className="feature">

              <div className="feature-icon green">
                🤖
              </div>

              <div>
                <h3>
                  AI Understand
                </h3>

                <p>
                  & categorizes
                </p>
              </div>

            </div>


            {/* TRACK */}

            <div className="feature">

              <div className="feature-icon orange">
                📈
              </div>

              <div>
                <h3>
                  Track
                </h3>

                <p>
                  in real-time
                </p>
              </div>

            </div>


            {/* FASTER */}

            <div className="feature">

              <div className="feature-icon purple">
                🚀
              </div>

              <div>
                <h3>
                  Faster
                </h3>

                <p>
                  resolutions
                </p>
              </div>

            </div>


          </div>

        </section>


        {/* =================================================
            RIGHT LOGIN SIDE
        ================================================= */}

        <section className="right-section">


          {/* =================================================
              TOP MESSAGE
          ================================================= */}

          <div className="top-message">
            Simple Complaints — Better Hostels
          </div>


          {/* =================================================
              GLASS LOGIN CARD
          ================================================= */}

          <div className="login-card">


            {/* LOGO */}

            <div className="login-logo">

              <div className="login-logo-icon">
                🏨
              </div>

              <h1>
                  𝙷𝚘𝚜𝚝𝚎𝚕<span>𝓞S</span>
              </h1>

            </div>


            {/* TITLE */}

            <h2>
              Welcome Back!
            </h2>

            <p className="login-subtitle">
              Login to your account
            </p>


            {/* =================================================
                LOGIN FORM
            ================================================= */}

            <form onSubmit={handleLogin}>


              {/* HOSTEL ID */}

              <div className="input-group">

                <label>
                  Email or Hostel ID
                </label>

                <div className="input-wrapper">

                  <span className="input-icon">
                    ✉
                  </span>

                  <input
                    type="text"
                    placeholder="you@hostel.com"
                    value={hostelId}
                    onChange={(e) => {
                      setHostelId(e.target.value);
                      setLoginError("");
                    }}
                    required
                  />

                </div>

              </div>


              {/* PASSWORD */}

              <div className="input-group">

                <label>
                  Password
                </label>

                <div className="input-wrapper">

                  <span className="input-icon">
                    🔒
                  </span>

                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setLoginError("");
                    }}
                    required
                  />

                </div>

              </div>


              {/* LOGIN ERROR */}

              {loginError && (
                <p className="login-error">
                  {loginError}
                </p>
              )}


              {/* LOGIN BUTTON */}

              <button
                type="submit"
                className="login-button"
              >

                <span>
                  →
                </span>

                Login

              </button>

            </form>


            {/* =================================================
                NEW USER
            ================================================= */}

            <p className="new-user">

              New user?

              <span>
                Contact your warden
              </span>

            </p>


            {/* =================================================
                SECURITY
            ================================================= */}

            <div className="security">

              <div className="security-icon">
                ✓
              </div>

              <div>

                <strong>
                  Safe • Secure • Smart
                </strong>

                <p>
                  Your hostel, our priority.
                </p>

              </div>

            </div>


          </div>

        </section>


      </div>

    </div>
  );
}

export default App;
import React, { useState } from "react";
import "./StudentDashboard.css";

function StudentDashboard() {
  const [activePage, setActivePage] = useState("dashboard");

  // Complaint form states
  const [showComplaintForm, setShowComplaintForm] = useState(false);
  const [complaintTitle, setComplaintTitle] = useState("");
  const [complaintDescription, setComplaintDescription] = useState("");

  // Complaints
  const [complaints, setComplaints] = useState([
    {
      title: "Bathroom tap repair",
      date: "20 Sep 2026",
      status: "Pending",
    },
    {
      title: "Room fan issue",
      date: "15 Sep 2026",
      status: "Resolved",
    },
  ]);

  // Submit complaint
  const handleSubmitComplaint = (e) => {
    e.preventDefault();

    if (
      complaintTitle.trim() === "" ||
      complaintDescription.trim() === ""
    ) {
      alert("Please fill both fields.");
      return;
    }

    const newComplaint = {
      title: complaintTitle,
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      status: "Pending",
    };

    setComplaints([newComplaint, ...complaints]);

    setComplaintTitle("");
    setComplaintDescription("");
    setShowComplaintForm(false);

    alert("Complaint submitted successfully!");
  };

  // Number of pending complaints
  const pendingComplaints = complaints.filter(
    (complaint) => complaint.status === "Pending"
  ).length;

  return (
    <div className="dashboard">

      {/* ================================================= */}
      {/* SIDEBAR */}
      {/* ================================================= */}

      <aside className="sidebar">

        {/* Logo */}
        <div className="sidebar-logo">

          <div className="logo-icon">
            🏨
          </div>

          <div>
            <h2>HostelOS</h2>
            <span>Student Portal</span>
          </div>

        </div>


        {/* Navigation */}
        <nav className="sidebar-nav">

          {/* Dashboard */}
          <button
            className={activePage === "dashboard" ? "active" : ""}
            onClick={() => {
              setActivePage("dashboard");
              setShowComplaintForm(false);
            }}
          >
            <span>📊</span>
            Dashboard
          </button>


          {/* Room */}
          <button
            className={activePage === "room" ? "active" : ""}
            onClick={() => {
              setActivePage("room");
              setShowComplaintForm(false);
            }}
          >
            <span>🛏️</span>
            Room
          </button>


          {/* Complaints */}
          <button
            className={activePage === "complaints" ? "active" : ""}
            onClick={() => {
              setActivePage("complaints");
              setShowComplaintForm(false);
            }}
          >
            <span>📝</span>
            Complaints
          </button>


          {/* Mess */}
          <button
            className={activePage === "mess" ? "active" : ""}
            onClick={() => {
              setActivePage("mess");
              setShowComplaintForm(false);
            }}
          >
            <span>🍽️</span>
            Mess
          </button>


          {/* Notices */}
          <button
            className={activePage === "notices" ? "active" : ""}
            onClick={() => {
              setActivePage("notices");
              setShowComplaintForm(false);
            }}
          >
            <span>📢</span>
            Notices
          </button>

        </nav>


        {/* ================================================= */}
        {/* SIDEBAR BOTTOM */}
        {/* ================================================= */}

        <div className="sidebar-bottom">

          {/* Logout */}
          <button
            onClick={() => {
              window.location.href = "/";
            }}
          >
            🚪 Logout
          </button>

        </div>

      </aside>


      {/* ================================================= */}
      {/* MAIN CONTENT */}
      {/* ================================================= */}

      <main className="main-content">


        {/* ================================================= */}
        {/* DASHBOARD PAGE */}
        {/* ================================================= */}

        {activePage === "dashboard" && (

          <>

            {/* Header */}
            <header className="dashboard-header">

              <div>
                <h1>Dashboard</h1>
                <p>Welcome back, Aditya!</p>
              </div>


              {/* Profile */}
              <div className="profile">

                <div className="notification">
                  🔔
                </div>

                <div className="avatar">
                  AR
                </div>

                <div>
                  <strong>Aditya Raj</strong>
                  <span>Student</span>
                </div>

              </div>

            </header>


            {/* Welcome Card */}
            <section className="welcome-card">

              <div>

                <h2>
                  Welcome back, Aditya! 👋
                </h2>

                <p>
                  Here's what's happening with your hostel today.
                </p>

              </div>


              <div className="welcome-icon">
                🏠
              </div>

            </section>


            {/* Statistics */}
            <section className="stats">

              {/* Room Number */}
              <div className="stat-card">

                <div className="stat-icon">
                  🛏️
                </div>

                <div>
                  <span>Room Number</span>
                  <h3>204</h3>
                </div>

              </div>


              {/* Roommates */}
              <div className="stat-card">

                <div className="stat-icon">
                  👥
                </div>

                <div>
                  <span>Roommates</span>
                  <h3>2</h3>
                </div>

              </div>


              {/* Open Complaints */}
              <div className="stat-card">

                <div className="stat-icon">
                  📝
                </div>

                <div>
                  <span>Open Complaints</span>
                  <h3>{pendingComplaints}</h3>
                </div>

              </div>

            </section>


            {/* ================================================= */}
            {/* RECENT COMPLAINTS */}
            {/* ================================================= */}

            <section className="dashboard-section">

              <div className="section-header">

                <div>
                  <h2>Recent Complaints</h2>

                  <p>
                    Your latest hostel complaints
                  </p>
                </div>


                <button
                  onClick={() => {
                    setActivePage("complaints");
                    setShowComplaintForm(false);
                  }}
                >
                  View All
                </button>

              </div>


              <div className="table-container">

                <table>

                  <thead>

                    <tr>
                      <th>Complaint</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>

                  </thead>


                  <tbody>

                    {complaints.map((complaint, index) => (

                      <tr key={index}>

                        <td>
                          {complaint.title}
                        </td>

                        <td>
                          {complaint.date}
                        </td>

                        <td>

                          <span
                            className={
                              complaint.status === "Pending"
                                ? "status pending"
                                : "status resolved"
                            }
                          >
                            {complaint.status}
                          </span>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </section>


            {/* ================================================= */}
            {/* QUICK ACTIONS */}
            {/* ================================================= */}

            <section className="dashboard-section">

              <div className="section-header">

                <div>
                  <h2>Quick Actions</h2>

                  <p>
                    Commonly used hostel services
                  </p>
                </div>

              </div>


              <div className="quick-actions">

                {/* New Complaint */}
                <div
                  className="quick-card"
                  onClick={() => {
                    setActivePage("complaints");
                    setShowComplaintForm(true);
                  }}
                >

                  <div className="quick-icon">
                    📝
                  </div>

                  <div>

                    <h3>New Complaint</h3>

                    <p>
                      Report a hostel problem
                    </p>

                  </div>

                </div>


                {/* Room Details */}
                <div
                  className="quick-card"
                  onClick={() => setActivePage("room")}
                >

                  <div className="quick-icon">
                    🛏️
                  </div>

                  <div>

                    <h3>Room Details</h3>

                    <p>
                      View your room information
                    </p>

                  </div>

                </div>


                {/* Mess Menu */}
                <div
                  className="quick-card"
                  onClick={() => setActivePage("mess")}
                >

                  <div className="quick-icon">
                    🍽️
                  </div>

                  <div>

                    <h3>Mess Menu</h3>

                    <p>
                      View today's mess menu
                    </p>

                  </div>

                </div>

              </div>

            </section>

          </>

        )}


        {/* ================================================= */}
        {/* COMPLAINTS PAGE */}
        {/* ================================================= */}

        {activePage === "complaints" && (

          <div className="complaints-page">

            {/* Header */}
            <div className="complaints-header">

              <div>

                <h1>Complaints</h1>

                <p>
                  Report any problem related to your hostel.
                </p>

              </div>


              <button
                className="add-complaint-btn"
                onClick={() => setShowComplaintForm(true)}
              >
                + Add New Complaint
              </button>

            </div>


            {/* Complaint Form */}
            {showComplaintForm && (

              <div className="complaint-form-card">

                <h2>Add New Complaint</h2>


                <form onSubmit={handleSubmitComplaint}>

                  {/* Title */}
                  <div className="complaint-input-group">

                    <label>
                      Title of Complaint
                    </label>

                    <input
                      type="text"
                      placeholder="Enter complaint title"
                      value={complaintTitle}
                      onChange={(e) =>
                        setComplaintTitle(e.target.value)
                      }
                    />

                  </div>


                  {/* Description */}
                  <div className="complaint-input-group">

                    <label>
                      Explain Your Complaint
                    </label>

                    <textarea
                      placeholder="Explain your complaint in detail..."
                      rows="7"
                      value={complaintDescription}
                      onChange={(e) =>
                        setComplaintDescription(e.target.value)
                      }
                    />

                  </div>


                  {/* Submit */}
                  <button
                    type="submit"
                    className="submit-complaint-btn"
                  >
                    Submit Complaint
                  </button>


                  {/* Cancel */}
                  <button
                    type="button"
                    className="cancel-complaint-btn"
                    onClick={() => {
                      setShowComplaintForm(false);
                      setComplaintTitle("");
                      setComplaintDescription("");
                    }}
                  >
                    Cancel
                  </button>

                </form>

              </div>

            )}


            {/* Complaint List */}
            {!showComplaintForm && (

              <div className="dashboard-section">

                <div className="section-header">

                  <div>

                    <h2>Your Complaints</h2>

                    <p>
                      View all complaints submitted by you.
                    </p>

                  </div>

                </div>


                <div className="table-container">

                  <table>

                    <thead>

                      <tr>
                        <th>Complaint</th>
                        <th>Date</th>
                        <th>Status</th>
                      </tr>

                    </thead>


                    <tbody>

                      {complaints.map((complaint, index) => (

                        <tr key={index}>

                          <td>
                            {complaint.title}
                          </td>

                          <td>
                            {complaint.date}
                          </td>

                          <td>

                            <span
                              className={
                                complaint.status === "Pending"
                                  ? "status pending"
                                  : "status resolved"
                              }
                            >
                              {complaint.status}
                            </span>

                          </td>

                        </tr>

                      ))}

                    </tbody>

                  </table>

                </div>

              </div>

            )}

          </div>

        )}


        {/* ================================================= */}
        {/* ROOM PAGE */}
        {/* ================================================= */}

        {activePage === "room" && (

          <div className="dashboard-section">

            <h2>Room Details</h2>

            <p>
              Room Number: <strong>204</strong>
            </p>

            <p>
              Roommates: <strong>2</strong>
            </p>

            <p>
              Block: <strong>A Block</strong>
            </p>

          </div>

        )}


        {/* ================================================= */}
        {/* MESS PAGE */}
        {/* ================================================= */}

        {activePage === "mess" && (

          <div className="dashboard-section">

            <h2>Mess</h2>

            <p>
              View today's hostel mess menu here.
            </p>

          </div>

        )}


        {/* ================================================= */}
        {/* NOTICES PAGE */}
        {/* ================================================= */}

        {activePage === "notices" && (

          <div className="dashboard-section">

            <h2>Notices</h2>

            <p>
              Important hostel notices will appear here.
            </p>

          </div>

        )}

      </main>

    </div>
  );
}

export default StudentDashboard;
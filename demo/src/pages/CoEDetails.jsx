import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { centersData } from "../data/centersData";
import "./CoEDetails.css";

const CoEDetails = () => {
  const { id } = useParams();

  // Hooks
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupProject, setPopupProject] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [requestSent, setRequestSent] = useState(false);

  // Find CoE
  const coe = centersData.coes.find((c) => c.id === parseInt(id));

  // Combine all projects with guaranteed unique IDs
  const allProjects = useMemo(() => {
    if (!coe) return [];
    return [
      { ...coe.bestProject, category: "best", id: "best-project" },
      ...coe.ongoing.map((p, index) => ({
        ...p,
        category: "ongoing",
        id: `ongoing-${index}`,
      })),
      ...coe.completed.map((p, index) => ({
        ...p,
        category: "completed",
        id: `completed-${index}`,
      })),
    ];
  }, [coe]);

  // Filter + Search
  const filteredProjects = useMemo(() => {
    return allProjects.filter((proj) => {
      const matchesFilter = filter === "all" ? true : proj.category === filter;
      const matchesSearch = proj.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [allProjects, filter, searchTerm]);

  if (!coe) return <h2>CoE not found</h2>;

  const toggleDescription = (projectId) => {
    setExpandedProjectId(expandedProjectId === projectId ? null : projectId);
  };

  const handleContributeClick = (project) => {
    setPopupProject(project);
    setShowPopup(true);
    setRequestSent(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  // Close popup
  const closePopup = () => {
    setShowPopup(false);
    setRequestSent(false); // Reset for the next time it opens
  };

  // --- MODIFIED FUNCTION ---
  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending request
    setTimeout(() => {
      setRequestSent(true); // Show the success message
      setFormData({ name: "", email: "", message: "" }); // Clear the form

      // After showing the message, wait 2 seconds then close the popup
      setTimeout(() => {
        closePopup();
      }, 2000); // 2000ms = 2 seconds
    }, 800);
  };

  return (
    <div className="coe-details-container">
      <div className="coe-banner">
        <h1 className="coe-title">{coe.name}</h1>
        <p className="coe-agency">
          <b>Collaborating Agency:</b> {coe.agency}
        </p>
      </div>

      <div className="project-filters">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="filter-buttons">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={filter === "ongoing" ? "active" : ""}
            onClick={() => setFilter("ongoing")}
          >
            Ongoing
          </button>
          <button
            className={filter === "completed" ? "active" : ""}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>
      </div>

      <div className="projects-rows">
        {filteredProjects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          filteredProjects.map((proj) => (
            <div key={proj.id} className="project-row">
              <div className="project-title">{proj.title}</div>
              <div className="project-action">
                {proj.category === "ongoing" ? (
                  <button
                    className="contribute-btn"
                    onClick={() => handleContributeClick(proj)}
                  >
                    Contribute
                  </button>
                ) : (
                  <span className="completed-label">Completed</span>
                )}
                <span
                  className="toggle-arrow"
                  onClick={() => toggleDescription(proj.id)}
                >
                  ▼
                </span>
              </div>
              {expandedProjectId === proj.id && (
                <div className="project-description">{proj.description}</div>
              )}
            </div>
          ))
        )}
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="close-btn" onClick={closePopup}>
              ✕
            </button>
            {!requestSent ? (
              <>
                <h2>Contribute to "{popupProject?.title}"</h2>
                <form onSubmit={handleSubmit} className="popup-form">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Message or details about your contribution"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <button type="submit" className="submit-btn">
                    Send Request
                  </button>
                </form>
              </>
            ) : (
              <div className="success-message">
                ✅ Request Sent Successfully!
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CoEDetails;
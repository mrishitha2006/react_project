import React, { useState } from "react";

const ContributeModal = ({ onClose }) => {
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Contribute to this project</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Share your contribution idea..."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        {submitted && <p className="success">Thank you for contributing!</p>}
        <button onClick={onClose} style={{ marginTop: "1rem", background: "gray" }}>Close</button>
      </div>
    </div>
  );
};

export default ContributeModal;

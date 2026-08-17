import React, { useState } from "react";
import "./ContactForm.css";
import { Fade } from "react-reveal";
import { FaEnvelope, FaCopy, FaCheck, FaPaperPlane } from "react-icons/fa";

export default function ContactForm({ theme, email }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger direct mailto link prefilled
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <Fade bottom duration={1200} distance="30px">
      <div className="contact-form-wrapper">
        <div
          className="email-quick-card"
          style={{
            backgroundColor: theme.surfaceElevated || theme.projectCard || "#171c28",
            borderColor: `${theme.border || "#2d3748"}50`,
          }}
        >
          <div className="email-info-group">
            <div
              className="email-icon-badge"
              style={{
                backgroundColor: `${theme.accentColor || "#7F52FF"}18`,
                color: theme.accentColor || "#7F52FF",
              }}
            >
              <FaEnvelope size={22} />
            </div>
            <div>
              <span className="email-label" style={{ color: theme.secondaryText }}>
                Direct Email
              </span>
              <h4 className="email-value" style={{ color: theme.text }}>
                {email}
              </h4>
            </div>
          </div>

          <button
            className={`copy-email-btn ${copied ? "copied" : ""}`}
            onClick={handleCopyEmail}
            style={{
              backgroundColor: copied ? "#10B981" : theme.accentColor || "#7F52FF",
              color: "#ffffff",
            }}
          >
            {copied ? (
              <>
                <FaCheck size={14} /> Copied!
              </>
            ) : (
              <>
                <FaCopy size={14} /> Copy Email
              </>
            )}
          </button>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          style={{
            backgroundColor: theme.surfaceElevated || theme.projectCard || "#171c28",
            borderColor: `${theme.border || "#2d3748"}50`,
          }}
        >
          <h3 className="form-title" style={{ color: theme.text }}>
            Send Me a Message
          </h3>
          <p className="form-subtitle" style={{ color: theme.secondaryText }}>
            Have a project in mind or want to discuss mobile app opportunities? Drop a message below!
          </p>

          <div className="form-row">
            <div className="form-group">
              <label style={{ color: theme.text }}>Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Alex Smith"
                value={formData.name}
                onChange={handleChange}
                style={{
                  color: theme.text,
                  backgroundColor: `${theme.body || "#000000"}40`,
                  borderColor: `${theme.border || "#2d3748"}50`,
                }}
              />
            </div>
            <div className="form-group">
              <label style={{ color: theme.text }}>Your Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="alex@example.com"
                value={formData.email}
                onChange={handleChange}
                style={{
                  color: theme.text,
                  backgroundColor: `${theme.body || "#000000"}40`,
                  borderColor: `${theme.border || "#2d3748"}50`,
                }}
              />
            </div>
          </div>

          <div className="form-group">
            <label style={{ color: theme.text }}>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Mobile App Project Inquiry / General Tech Talk"
              value={formData.subject}
              onChange={handleChange}
              style={{
                color: theme.text,
                backgroundColor: `${theme.body || "#000000"}40`,
                borderColor: `${theme.border || "#2d3748"}50`,
              }}
            />
          </div>

          <div className="form-group">
            <label style={{ color: theme.text }}>Message</label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Hi Maulik, I'd love to chat about..."
              value={formData.message}
              onChange={handleChange}
              style={{
                color: theme.text,
                backgroundColor: `${theme.body || "#000000"}40`,
                borderColor: `${theme.border || "#2d3748"}50`,
              }}
            />
          </div>

          <button
            type="submit"
            className="submit-form-btn"
            style={{
              backgroundColor: theme.accentColor || "#7F52FF",
              color: "#ffffff",
            }}
          >
            <FaPaperPlane size={14} style={{ marginRight: "8px" }} /> Send Message
          </button>

          {submitted && (
            <p className="form-success-msg" style={{ color: "#10B981" }}>
              ✓ Mail client opened! If it didn't open automatically, use the Copy Email button above.
            </p>
          )}
        </form>
      </div>
    </Fade>
  );
}

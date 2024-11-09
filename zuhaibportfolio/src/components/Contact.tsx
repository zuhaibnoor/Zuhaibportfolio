import React from 'react'
import { FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { IoMailSharp } from 'react-icons/io5'

const Contact = () => {
  return (
    <div id = "contact" style={{
        background: "#121212", // Dark background to suit black
        borderRadius: "15px",   // Slightly rounded corners
        padding: "30px",        // Add more padding
        margin: "20px auto",    // Center the section and add margin
        maxWidth: "800px",      // Limit the max width for readability
        color: "#EAEAEA",       // Light text color for contrast
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Add shadow for depth
    }}>
        <div style={{
            fontSize: "18px",       // Slightly smaller font size
            lineHeight: "1.6",      // Increase line height for readability
            textAlign: "center",    // Center align the text
            fontFamily: "'Roboto', sans-serif",  // Use a modern font
        }}>
            <div style={{
                fontWeight: "bold",  // Bold title
                fontSize: "24px",    // Larger title font size
                marginBottom: "15px", // Add space below title
            }}>
                CONTACT ME
            </div>
            <div style={{
                display: "flex",      // Use flexbox for alignment
                justifyContent: "center", // Center align the items
                gap: "20px",          // Space between icons
                marginTop: "20px",    // Add space from the text
            }}>
                <a href="https://www.linkedin.com/in/zohaibnoor" target="_blank" rel="noopener noreferrer" style={{ color: "#EAEAEA", fontSize: "30px" }}>
                    <FaLinkedin />
                </a>
                <a href="mailto:zuhaibnoor2003@gmail.com" style={{ color: "#EAEAEA", fontSize: "30px" }}>
                    <IoMailSharp />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" style={{ color: "#EAEAEA", fontSize: "30px" }}>
                    <FaFacebook />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" style={{ color: "#EAEAEA", fontSize: "30px" }}>
                    <FaWhatsapp />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Contact

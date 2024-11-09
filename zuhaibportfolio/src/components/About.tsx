import React from 'react'

const About = () => {
  return (
    <div style={{
        background: "#121212", // Dark background to suit black
        borderRadius: "15px",   // Slightly rounded corners
        padding: "30px",        // Add more padding
        margin: "20px auto",    // Center the section and add margin
        maxWidth: "800px",      // Limit the max width for readability
        color: "#EAEAEA",       // Light text color for contrast
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" // Add shadow for depth
      }}>
        <div id="about" style={{
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
                ABOUT ME
            </div>
            <i>
                I&apos;m a Computer Systems Engineering student at NED University with a strong 
                foundation in web development and programming. My skills include HTML, CSS, JavaScript, Python, C, and TypeScript. 
                Currently, I&apos;m focused on advancing my expertise in Django and Next.js to build dynamic and scalable web applications. 
                Passionate about problem-solving and eager to stay updated with the latest technologies, 
                I&apos;m always looking for opportunities to expand my knowledge and refine my skills.
            </i>
        </div>
    </div>
  )
}

export default About

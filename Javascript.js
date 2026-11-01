// Function to change text colour
function setColour(element, colour) {
    element.style.color = colour;
}

// Select all h1, h2, h3, and h4 tags
const headings = document.querySelectorAll("h1, h2, h3, h4");

headings.forEach(heading => {
    // Save the original colour
    const originalColour = heading.style.color || "white";
    
    // Preparation: Set a smooth timing transition and change the cursor type
    heading.style.transition = "all 0.2s ease";
    heading.style.cursor = "pointer";

    // Mouse enters the heading
    heading.onmouseover = () => {
        setColour(heading, "#00C3E3");
        heading.style.transform = "scale(1.05)"; // Makes text grow slightly
        heading.style.textShadow = "2px 2px 8px rgba(0, 0, 255, 0.3)"; // Adds a blue glow
    };

    // Mouse leaves the heading
    heading.onmouseout = () => {
        setColour(heading, originalColour);
        heading.style.transform = "scale(1)"; // Shrinks back to normal
        heading.style.textShadow = "none"; // Removes the glow
    };
});

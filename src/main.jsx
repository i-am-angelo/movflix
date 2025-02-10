// Import the createRoot function from the React DOM client
import { createRoot } from "react-dom/client";

// Import the main CSS file for styling
import "./index.css";

// Import the main App component
import App from "./App.jsx";

// Create a root element and render the App component into the root element
createRoot(document.getElementById("root")).render(<App />);

import React, { useState, useEffect } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [tabContent, setTabContent] = useState(null);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (activeTab === "home") {
      setTabContent(
        <div>
          <h1>Count is {count}</h1>
          <button onClick={() => setCount((prev) => prev + 1)}>Count +</button>
          <br />
          <br />
          <h1>Total Count is {total}</h1>
          <button onClick={() => setTotal((prev) => prev + 1)}>Total Count</button>
        </div>
      );
    } else if (activeTab === "about") {
      setTabContent(<h2>This is the About tab</h2>);
    } else if (activeTab === "contact") {
      setTabContent(<h2>This is the Contact tab</h2>);
    }
  }, [activeTab, count, total]); // content updates when tab or count/total changes

  return (
    <div>
      <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("home")}>Home</button>
        <button onClick={() => setActiveTab("about")}>About</button>
        <button onClick={() => setActiveTab("contact")}>Contact</button>
      </nav>

      {tabContent}
    </div>
  );
}

export default App;

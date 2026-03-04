import { useEffect, useState } from "react";

function Announcements() {

  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {

    console.log("Fetching announcements...");

    // Simulating backend API
    setTimeout(() => {
      const data = [
        "Midterm exam starts next week",
        "Project submission deadline Friday",
        "Guest lecture on AI tomorrow",
        "New library resources available now",
        "Campus closed on Monday for holiday",
        "Scholarship applications open until end of month"
      ];

      setAnnouncements(data);
    }, 2000);

  }, []);

  return (
    <div>
      <h3>Latest Announcements</h3>

      {announcements.length === 0 ? (
        <p>Loading announcements...</p>
      ) : (
        <ul>
          {announcements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

    </div>
  );
}

export default Announcements;
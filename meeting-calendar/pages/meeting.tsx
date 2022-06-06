import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function MyApp() {
  const [value, onChange] = useState(new Date());

  const handleChange = (date: Date) => {
    console.log(date);
    window.open(
      "https://video-app-4265-5450-dev.twil.io/?passcode=07385842655450"
    );
    onChange(date);
  };

  return (
    <div>
      <Calendar onChange={handleChange} value={value} />
    </div>
  );
}

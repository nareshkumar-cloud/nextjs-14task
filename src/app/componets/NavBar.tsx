import React, { useState } from "react";

const NavBar = () => {
  const [dropdownVisible, setDropdownVisible] = useState({
    timeframe: false,
    people: false,
    topic: false,
  });

  const [selected, setSelected] = useState({
    timeframe: "All-Time",
    people: ["All"],  // Initialize with "All" for People
    topic: "All",
  });

  const toggleDropdown = (key: string) => {
    setDropdownVisible((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSelect = (key: string, value: string) => {
    if (key === "people") {
      setSelected((prev) => {
        if (value === "All") {
          return {
            ...prev,
            people: ["All"],  // Reset to "All" when "All" is selected
          };
        }
        // Handle selecting/deselecting individual people
        const updatedPeople = prev.people.includes(value)
          ? prev.people.filter((person) => person !== value)
          : [...prev.people, value];
        return {
          ...prev,
          people: updatedPeople,
        };
      });
    } else {
      setSelected((prev) => ({
        ...prev,
        [key]: value,
      }));
    }

    // Close dropdown after selection
    setDropdownVisible((prev) => ({ ...prev, [key]: false }));
  };

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center p-3 rounded-lg mt-4 space-y-4 sm:space-y-0 sm:space-x-4">
      {/* Timeframe Dropdown */}
      <div className="relative w-full sm:w-1/3">
        <button
          className="bg-white p-3 rounded-xl flex items-center justify-between w-full cursor-pointer"
          onClick={() => toggleDropdown("timeframe")}
        >
          <span>
            Timeframe: <b>{selected.timeframe}</b>
          </span>
          <span className="ml-2 text-xl">
            {dropdownVisible.timeframe ? "▲" : "▼"}
          </span>
        </button>
        {dropdownVisible.timeframe && (
          <ul className="absolute bg-white border rounded shadow-md mt-2 w-full z-10">
            {["All-Time", "Today", "This Week", "This Month"].map((time) => (
              <li
                key={time}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSelect("timeframe", time)}
              >
                {time}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* People Dropdown */}
      <div className="relative w-full sm:w-1/3">
        <button
          className="bg-white p-3 rounded-xl flex items-center justify-between w-full cursor-pointer"
          onClick={() => toggleDropdown("people")}
        >
          <span>
            People:{" "}
            <b>
              {selected.people.length === 1 && selected.people[0] === "All"
                ? "All"
                : selected.people.join(", ")}
            </b>
          </span>
          <span className="ml-2 text-xl">
            {dropdownVisible.people ? "▲" : "▼"}
          </span>
        </button>
        {dropdownVisible.people && (
          <ul className="absolute bg-white border rounded shadow-md mt-2 w-full z-10">
            {["All", "User1", "User2", "Group1", "Group2"].map((person) => (
              <li
                key={person}
                className="p-2 hover:bg-gray-200 cursor-pointer flex items-center"
                onClick={() => handleSelect("people", person)}
              >
                <input
                  type="checkbox"
                  id={person}
                  checked={selected.people.includes(person)}
                  onChange={() => handleSelect("people", person)}
                  className="mr-2"
                />
                {person}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Topic Dropdown */}
      <div className="relative w-full sm:w-1/3">
        <button
          className="bg-white p-3 rounded-xl flex items-center justify-between w-full cursor-pointer"
          onClick={() => toggleDropdown("topic")}
        >
          <span>
            Topic: <b>{selected.topic}</b>
          </span>
          <span className="ml-2 text-xl">
            {dropdownVisible.topic ? "▲" : "▼"}
          </span>
        </button>
        {dropdownVisible.topic && (
          <ul className="absolute bg-white border rounded shadow-md mt-2 w-full z-10">
            {["All", "Technology", "Science", "Art", "Business"].map((topic) => (
              <li
                key={topic}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSelect("topic", topic)}
              >
                {topic}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

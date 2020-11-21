import React from 'react';

export default function Options({
  label,
  options,
  selectedOption,
  setSelectedOption,
}) {
  return (
    <div className="options">
      <h3>{label}</h3>
      {options.map (option => (
        <span
          className={`option ${selectedOption === option ? 'selected' : null}`}
          key={option.name}
          onClick={() => setSelectedOption (option)}
        >
          {option.name}
        </span>
      ))}
    </div>
  );
}

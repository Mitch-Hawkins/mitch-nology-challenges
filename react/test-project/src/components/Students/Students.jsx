import React from "react";
import { useState } from "react";

const Students = () => {
  const [students] = useState([
    { name: "Harrison", browniePoints: Math.floor(Math.random() * 100) },
    { name: "Sandra", browniePoints: Math.floor(Math.random() * 100) },
  ]);

  return (
    <>
      {students.map((student) => (
        <p key={student.name}>
          {student.name} - {student.browniePoints}
        </p>
      ))}
    </>
  );
};

export default Students;

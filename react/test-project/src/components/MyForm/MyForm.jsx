// import { useState } from "react";

// const states = [
//   { label: "New South Wales", value: "NSW" },
//   { label: "Victoria", value: "VIC" },
//   { label: "Queensland", value: "QLD" },
// ];

// const MyForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     selectedState: states[0].value,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="firstName">First Name:</label>
//         <input
//           type="text"
//           id="firstName"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="state">State:</label>
//         <select
//           id="state"
//           name="selectedState"
//           value={formData.selectedState.value}
//           onChange={handleInputChange}
//         >
//           {states.map((state) => (
//             <option key={state.value} value={state.value}>
//               {state.label}
//             </option>
//           ))}
//         </select>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default MyForm;

import { useRef } from "react";

const states = [
  { label: "New South Wales", value: "NSW" },
  { label: "Victoria", value: "VIC" },
  { label: "Queensland", value: "QLD" },
];

const MyForm = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);
    const dataToSendToBackend = Object.fromEntries(formData);
    // const isValid = validateForm(dataToSendToBackend);
    console.log(dataToSendToBackend);
    form.reset();
  };

  console.log(formRef);

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div>
        <label htmlFor="usernameInput">First Name: </label>
        <input type="text" id="firstName" name="firstName" ref={formRef} />
      </div>
      <div>
        <label htmlFor="state">State: </label>
        <select id="state" name="selectedState" ref={formRef}>
          {states.map((state) => (
            <option key={state.value} value={state.value}>
              {state.label}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default MyForm;

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="firstName">First Name:</label>
//         <input
//           type="text"
//           id="firstName"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="state">State:</label>
//         <select
//           id="state"
//           name="selectedState"
//           value={formData.selectedState.value}
//           onChange={handleInputChange}
//         >
//           {states.map((state) => (
//             <option key={state.value} value={state.value}>
//               {state.label}
//             </option>
//           ))}
//         </select>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

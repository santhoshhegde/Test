import { useState } from "react";

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "HR",
    gender: "",
    courses: [],
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        courses: checked
          ? [...prevData.courses, value]
          : prevData.courses.filter((course) => course !== value),
      }));
    } else if (type === "file") {
      const file = files[0];
      if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
        setFormData((prevData) => ({ ...prevData, image: file }));
      } else {
        alert("Please upload a valid image (JPG/PNG).");
      }
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6">Create Employee</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block text-gray-700 font-bold mb-2"
          >
            Mobile No
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            className="w-full p-2 border rounded"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="designation"
            className="block text-gray-700 font-bold mb-2"
          >
            Designation
          </label>
          <select
            id="designation"
            name="designation"
            className="w-full p-2 border rounded"
            value={formData.designation}
            onChange={handleChange}
          >
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Gender</label>
          <div className="flex items-center">
            <label className="mr-4">
              <input
                type="radio"
                name="gender"
                value="M"
                className="mr-2"
                checked={formData.gender === "M"}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="F"
                className="mr-2"
                checked={formData.gender === "F"}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Courses</label>
          <div className="flex flex-col">
            <label className="mb-2">
              <input
                type="checkbox"
                name="courses"
                value="BCA"
                className="mr-2"
                checked={formData.courses.includes("BCA")}
                onChange={handleChange}
              />
              BCA
            </label>
            <label className="mb-2">
              <input
                type="checkbox"
                name="courses"
                value="MCA"
                className="mr-2"
                checked={formData.courses.includes("MCA")}
                onChange={handleChange}
              />
              MCA
            </label>
            <label>
              <input
                type="checkbox"
                name="courses"
                value="BSC"
                className="mr-2"
                checked={formData.courses.includes("BSC")}
                onChange={handleChange}
              />
              BSC
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/jpeg, image/png"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;

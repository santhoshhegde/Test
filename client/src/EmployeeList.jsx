import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("http://localhost:3001/employeeList");
    const response = await data.json();
    setData(response);
    setFilteredData(response);
    // console.log(response);
  };

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term) {
      const filtered = data.filter((item) =>
        Object.values(item).some(
          (value) =>
            value !== null &&
            value !== undefined &&
            value.toString().toLowerCase().includes(term.toLowerCase())
        )
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };
  const handleDelete = async (id) => {
    const response = await fetch("http://localhost:3001/deleteUser/" + id, {
      method: "delete",
    });
    const data = await response.json();
    window.location.reload();
  };

  // if (filteredData.length == 0) return <h1>No data</h1>;
  return (
    <div>
      <header className="flex justify-between bg-blue-400 p-5">
        <h2>Home</h2>
        <h2>Employee List</h2>
        <h2>{localStorage.getItem("Name")}</h2>
        <Link to="/login">Logout</Link>
      </header>

      <div className="flex justify-between bg-yellow-400 p-5">
        <h3>Employee List</h3>
        <h3>Total count {data.length}</h3>
        <Link to="/create-employee">
          <h3>Create Employee</h3>
        </Link>
      </div>

      <div className="flex justify-end bg-gray-200 p-2">
        <label htmlFor="search" className="p-1">
          Search
        </label>
        <input
          type="search"
          placeholder="Search"
          id="search"
          className="p-1 w-80"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <main>
        <div className="overflow-x-auto flex justify-center">
          <table className="min-w-full bg-white border border-gray-300 self-center">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b text-center">Unique Id</th>
                <th className="py-2 px-4 border-b">Image</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Mobile No</th>
                <th className="py-2 px-4 border-b">Designation</th>
                <th className="py-2 px-4 border-b">Gender</th>
                <th className="py-2 px-4 border-b">Course</th>
                <th className="py-2 px-4 border-b">Created date</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b text-center">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.image && (
                      <img
                        src={`http://localhost:3001/${item.image}`}
                        alt={item.name}
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.name}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.email}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.mobile}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.designation}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.gender}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.courses.join(", ")}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.createdAt.slice(0, 10)}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300 text-center">
                    <Link
                      to={`/update/${item._id}`}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Edit
                    </Link>
                    <button
                      className="text-red-500 hover:text-red-700 ml-2"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default EmployeeList;

// import { useEffect, useState } from "react";
// import { useTable, useFilters, usePagination } from "react-table";
// // import ReactPaginate from "react-paginate";

// const EmployeeTable = () => {
//   const [data, setData] = useState([]);
//   //   const [loading, setLoading] = useState(true);
//   const [error] = useState(null);
//   const [filterInput, setFilterInput] = useState("");

//   useEffect(() => {
//     // Fetch data from API
//     // const fetchData = async () => {
//     //   setLoading(true);
//     //   try {
//     //     const response = await axios.get("/api/employees");
//     //     setData(response.data);
//     //   } catch (error) {
//     //     setError(error);
//     //   }
//     //   setLoading(false);
//     // };
//     setData(
//       // /api/employees
//       [
//         {
//           id: 1,
//           name: "John Doe",
//           email: "john@example.com",
//           mobile: "123-456-7890",
//           designation: "Software Engineer",
//           gender: "Male",
//           course: "Computer Science",
//           createDate: "2022-01-01",
//         },
//         {
//           id: 1,
//           name: "John Doe",
//           email: "john@example.com",
//           mobile: "123-456-7890",
//           designation: "Software Engineer",
//           gender: "Male",
//           course: "Computer Science",
//           createDate: "2022-01-01",
//         },
//         {
//           id: 1,
//           name: "John Doe",
//           email: "john@example.com",
//           mobile: "123-456-7890",
//           designation: "Software Engineer",
//           gender: "Male",
//           course: "Computer Science",
//           createDate: "2022-01-01",
//         },
//       ]
//     );
//     // fetchData();
//   }, []);

//   const handleFilterChange = (e) => {
//     const value = e.target.value || undefined;
//     setFilter("name", value); // Update the filter input value
//     setFilterInput(value);
//   };

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     prepareRow,
//     page,
//     canPreviousPage,
//     canNextPage,
//     pageOptions,
//     pageCount,
//     gotoPage,
//     nextPage,
//     previousPage,
//     setPageSize,
//     state: { pageIndex, pageSize },
//     setFilter,
//   } = useTable(
//     {
//       columns: [
//         { Header: "ID", accessor: "id" },
//         { Header: "Name", accessor: "name" },
//         { Header: "Email", accessor: "email" },
//         { Header: "Mobile", accessor: "mobile" },
//         { Header: "Designation", accessor: "designation" },
//         { Header: "Gender", accessor: "gender" },
//         { Header: "Course", accessor: "course" },
//         { Header: "Create Date", accessor: "createDate" },
//         {
//           Header: "Actions",
//           Cell: ({ row }) => (
//             <div>
//               <button onClick={() => handleEdit(row.original.id)}>Edit</button>
//               <button onClick={() => handleDelete(row.original.id)}>
//                 Delete
//               </button>
//             </div>
//           ),
//         },
//       ],
//       data,
//       initialState: { pageIndex: 0, pageSize: 10 },
//     },
//     useFilters,
//     usePagination
//   );

//   const handleEdit = (id) => {
//     // Handle edit logic
//     console.log("Edit", id);
//   };

//   const handleDelete = (id) => {
//     // Handle delete logic
//     console.log("Delete", id);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <input
//         value={filterInput}
//         onChange={handleFilterChange}
//         placeholder={"Search name"}
//       />
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th {...column.getHeaderProps()}>{column.render("Header")}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {page.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => (
//                   <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <div>
//         <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
//           {"<<"}
//         </button>
//         <button onClick={() => previousPage()} disabled={!canPreviousPage}>
//           {"<"}
//         </button>
//         <button onClick={() => nextPage()} disabled={!canNextPage}>
//           {">"}
//         </button>
//         <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
//           {">>"}
//         </button>
//         <span>
//           Page{" "}
//           <strong>
//             {pageIndex + 1} of {pageOptions.length}
//           </strong>{" "}
//         </span>
//         <span>
//           | Go to page:{" "}
//           <input
//             type="number"
//             defaultValue={pageIndex + 1}
//             onChange={(e) => {
//               const page = e.target.value ? Number(e.target.value) - 1 : 0;
//               gotoPage(page);
//             }}
//             style={{ width: "100px" }}
//           />
//         </span>
//         <select
//           value={pageSize}
//           onChange={(e) => {
//             setPageSize(Number(e.target.value));
//           }}
//         >
//           {[10, 20, 30, 40, 50].map((pageSize) => (
//             <option key={pageSize} value={pageSize}>
//               Show {pageSize}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default EmployeeTable;

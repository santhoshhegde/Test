import { useState } from "react";

const EmployeeList = () => {
  const [data, setData] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/40",
      name: "Santhosh",
      email: "Santhosh@gmail.com",
      mobile: "9141567408",
      designation: "Software Developer",
      gender: "Male",
      course: "B.E",
      createDate: "26-07-2024",
    },
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      mobile: "123-456-7890",
      designation: "Software Engineer",
      gender: "Male",
      course: "Computer Science",
      createDate: "2022-01-01",
    },
  ]);
  const [filter, setFilter] = useState(data);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(search)
    );
    setFilter(filtered);
  };
  return (
    <div>
      <header className="flex justify-between bg-blue-400 p-5">
        <h2>Home</h2>
        <h2>Employee List</h2>
        <h2>Santhosh</h2>
        <button>Logout</button>
      </header>

      <div className="flex justify-between bg-yellow-400 p-5">
        <h3>Employee List</h3>
        <h3>Total count {data.length}</h3>
        <h3>Create Employee</h3>
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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
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
              {filter.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b text-center">{item.id}</td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.image}
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
                    {item.course}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.createDate}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300 text-center">
                    <button className="text-blue-500 hover:text-blue-700">
                      Edit
                    </button>
                    <button className="text-red-500 hover:text-red-700 ml-2">
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

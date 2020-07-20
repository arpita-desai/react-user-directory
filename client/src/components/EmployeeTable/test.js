import React from "react";
import Table, { useTable, useFilters, useSortBy } from "react-table";
import employees from "../../employee.json";

const data = [
  {
    id: 1,
    fname: "arpita",
    lname: "patel",
    Position: "SEO"
  },
  {
    id: 101,
    fname: "rinku",
    lname: "patel",
    Position: "developer"
  }
];

const columns = [
  {
    Header: "Unique Id",
    columns: [
      {
        Header: "Id",
        accessor: "id"
      }
    ]
  },
  {
    Header: "Name",
    columns: [
      {
        Header: "First Name",
        accessor: "fName"
      },
      {
        Header: "Last Name",
        accessor: "lName"
      }
    ]
  },
  {
    Header: "Other Info",
    columns: [
      {
        Header: "Position",
        accessor: "position"
      }
    ]
  }
];

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default function App() {
  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

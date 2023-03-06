import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import ReactPaginate from "react-paginate";
import { IEmployeeModel } from "../../interfaces-types/Employee-model";
import SearchBar from "../sorting-bar";
import EmployeeCard from "../employee-card";
import EmployeeListItem from "../employee-list-item";
import "./style.css";
import { SortCategory } from "../../interfaces-types/Sort-category";

interface IProps {
  pageSize: number;
  listView: boolean;
}

const Employees = ({ pageSize, listView }: IProps) => {
  const fetchEmployees = async (): Promise<IEmployeeModel[]> => {
    const headers = { Authorization: process.env.REACT_APP_API_KEY! };
    const res = await fetch(process.env.REACT_APP_API_URL!, { headers });
    return res.json();
  };

  const { data, error, isLoading } = useQuery<IEmployeeModel[]>({
    queryKey: ["groups"],
    queryFn: fetchEmployees,
  });
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [employeeData, setEmployeeData] = useState<IEmployeeModel[]>([]);

  useEffect(() => {
    setEmployeeData(data ?? []);
  }, [data]);

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center">Something went wrong...</p>;

  const offset = itemOffset + pageSize;
  const currentEmployees = employeeData.slice(itemOffset, offset);
  const pageCount = Math.ceil(employeeData.length / pageSize);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * pageSize) % employeeData.length;
    setItemOffset(newOffset);
  };

  const handleSorting = (sortAsc: boolean, category: SortCategory) => {
    if (!employeeData.length) return;
    setEmployeeData(
      [...employeeData].sort((a: IEmployeeModel, b: IEmployeeModel) => {
        if (!a[category]) {
          return sortAsc ? -1 : +1;
        }
        if (!b[category]) {
          return sortAsc ? +1 : -1;
        }
        return sortAsc
          ? a[category].localeCompare(b[category])
          : b[category].localeCompare(a[category]);
      })
    );
  };

  return (
    <>
      <SearchBar handleSorting={handleSorting} />
      {listView ? (
        <ul>
          {currentEmployees.map((employee: IEmployeeModel) => (
            <EmployeeListItem employee={employee} key={employee.email} />
          ))}
        </ul>
      ) : (
        <div className="flex flex-wrap grow justify-between">
          {currentEmployees.map((employee: IEmployeeModel) => (
            <EmployeeCard employee={employee} key={employee.email} />
          ))}
        </div>
      )}
      <ReactPaginate
        className="flex justify-center pagination"
        breakLabel="..."
        nextLabel="➡️"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="⬅️"
      />
    </>
  );
};

export default Employees;

import "./App.css";
import Employees from "./components/employees";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import { EMPLOYEE_PAGE_SIZE } from "./interfaces-types/constants";

const queryClient = new QueryClient();

function App() {
  const [listView, toggleListView] = useState<boolean>(false);
  return (
    <QueryClientProvider client={queryClient}>
      <section className="flex-col px-4 py-2">
        <span className="flex items-center justify-between">
          <h2 className="font-semibold py-4">The fellowship of the tretton37</h2>
          <label className="flex items-center cursor-pointer hover:text-slate-400">
            Toggle Listview
            <input
              id="listview-toggle"
              className="ml-1"
              type="checkbox"
              onChange={() => toggleListView(!listView)}
            />
          </label>
        </span>

        <Employees pageSize={EMPLOYEE_PAGE_SIZE} listView={listView}></Employees>
      </section>
    </QueryClientProvider>
  );
}

export default App;

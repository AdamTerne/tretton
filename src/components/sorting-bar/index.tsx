import { useEffect, useState } from "react";
import { NAME, OFFICE } from "../../interfaces-types/constants";
import { SortCategory } from "../../interfaces-types/Sort-category";

interface IProps {
  handleSorting: (sortAsc: boolean, category: SortCategory) => void;
}

const SortingBar = ({ handleSorting }: IProps) => {
  const [sortAsc, setSortAsc] = useState<boolean>(true);
  const [sortCategory, setSortCategory] = useState<SortCategory>(NAME);

  useEffect(() => {
    if (sortCategory) handleSorting(sortAsc, sortCategory);
  }, [sortAsc, sortCategory]);

  const handleClickedSorting = (category: SortCategory) => {
    if (sortCategory === category) {
      setSortAsc(!sortAsc);
    } else {
      setSortCategory(category);
    }
  };

  return (
    <section className="my-4 p-4 bg-slate-50 flex flex-col">
      <section className="flex items-center">
        <span className="mr-1">Sort by:</span>
        {sortCategory && <small className="mr-1">{sortAsc ? "⬆️" : "⬇️"}</small>}
        <button
          className={`mr-1 hover:text-slate-400 ${sortCategory === NAME && "font-semibold"}`}
          onClick={() => handleClickedSorting(NAME)}
          data-cy="sorting-name"
        >
          Name
        </button>
        <button
          className={`mr-1 hover:text-slate-400 ${sortCategory === OFFICE && "font-semibold"}`}
          onClick={() => handleClickedSorting(OFFICE)}
          data-cy="sorting-office"
        >
          Office
        </button>
      </section>
    </section>
  );
};

export default SortingBar;

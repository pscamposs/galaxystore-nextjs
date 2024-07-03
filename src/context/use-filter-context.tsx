import { FilterType } from "@/types/FilterTypes";
import { createContext, useState } from "react";

interface FilterContextProps {
  filterTag: FilterType;
  updateFilterTag: (filterTag: FilterType) => void;
}

const FilterContext = createContext<FilterContextProps>({
  filterTag: FilterType.ALL,
} as FilterContextProps);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [filterTag, setFilterTag] = useState<FilterType>(FilterType.ALL);
  const updateFilterTag = (tag: FilterType) => {
    setFilterTag(tag);
  };

  return (
    <FilterContext.Provider
      value={{
        updateFilterTag,
        filterTag,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export { FilterContext };

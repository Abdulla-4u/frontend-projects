import { createContext, useContext, useState, type ReactNode } from "react";

type AppContextValue = {
  query: string;
  setQuery: (query: string) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  priceMin: number | null;
  setPriceMin: (priceMin: number | null) => void;
  priceMax: number | null;
  setPriceMax: (priceMax: number | null) => void;
  keyword: string | null;
  setKeyword: (keyword: string | null) => void;
  filter: string | null;
  setFilter: (filter: string | null) => void;
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>("");
  const [priceMin, setPriceMin] = useState<number | null>(null);
  const [priceMax, setPriceMax] = useState<number | null>(null);
  const [keyword, setKeyword] = useState<string | null>("");
  const [filter, setFilter] = useState<string | null>('');

  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        selectedCategory,
        setSelectedCategory,
        priceMin,
        setPriceMin,
        priceMax,
        setPriceMax,
        keyword,
        setKeyword,
        filter,
        setFilter
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used within AppProvider");
  return ctx;
}

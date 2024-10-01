"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState("en");

  const toggleLocale = useCallback(() => {
    setLocale((val) => (val === "en" ? "fr" : "en"));
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale,
    }),
    [locale, setLocale, toggleLocale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);

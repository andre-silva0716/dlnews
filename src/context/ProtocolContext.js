import { createContext, useReducer } from "react"
import protocolReducer from "./ProtocolReducer"

const initialState = {
  loading: false,
  error: null,
  allData: [],
  filterData: [],
  settings: {
    categories: [],
    chains: [],
    currentPageNumber: 1,
    protocolPerPage: 5,
    totalPageCount: 1,
    sortOrder: "",
    sortField: "",
    count: 0,
    filterByItems: { chain: null, category: null },
  },
}


export const ProtocolContext = createContext(initialState)

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(protocolReducer, initialState)

  return (
    <ProtocolContext.Provider value={{ state, dispatch }}>
      {children}
    </ProtocolContext.Provider>
  )
}

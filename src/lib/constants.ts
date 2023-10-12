export const HEADER_TITLES = [
  { label: "Name", value: "name" },
  { label: "Category", value: "category" },
  { label: "TVL", value: "tvl" },
  { label: "1h Change", value: "change_1h" },
  { label: "1d Change", value: "change_1d" },
  { label: "7d Change", value: "change_7d" },
]

export const TITLE_LISTS = {
  footer: " Copyright © DL News 2023. All rights reserved.",
  filter_by_chain: "Filtaer By Chain",
  filter_by_category: "Filter By Category",
  show_page: "Show Page",
  all_protocols: "All Protocols",
}

export const PER_PAGES = [
  { label: "5", value: 5 },
  { label: "15", value: 15 },
  { label: "30", value: 30 },
  { label: "50", value: 50 },
]

export const CONTEXT_TITLE = {
  BEGIN_DATA_FETCH: "BEGIN_DATA_FETCH",
  SUCCESSFUL_DATA_FETCH: "SUCCESSFUL_DATA_FETCH",
  FAILED_DATA_FETCH: "SUCCESSFUL_DATA_FETCH",
  UPDATE_SETTINGS: "UPDATE_SETTINGS",
  DISPLAY_FILTERED_DATA: "DISPLAY_FILTERED_DATA",
  RESET_SETTINGS: "RESET_SETTINGS",
}

const APIURL = {
  api: process.env.REACT_APP_API_URL,
}

export default APIURL

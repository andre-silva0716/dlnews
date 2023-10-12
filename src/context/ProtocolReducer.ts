import { CONTEXT_TITLE } from "../lib/constants"

const protocolReducer = (state, action) => {
  switch (action.type) {
    case CONTEXT_TITLE.BEGIN_DATA_FETCH:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case CONTEXT_TITLE.SUCCESSFUL_DATA_FETCH:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      }
    case CONTEXT_TITLE.FAILED_DATA_FETCH:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      }
    case CONTEXT_TITLE.UPDATE_SETTINGS:
      return {
        ...state,
        settings: {
          ...state.settings,
          ...action.payload,
        },
      }
    case CONTEXT_TITLE.DISPLAY_FILTERED_DATA:
      return {
        ...state,
        filterData: action.payload,
      }
    case CONTEXT_TITLE.RESET_SETTINGS:
      return {
        ...state,
        settings: {
          ...state.settings,
          currentPageNumber: 1,
          protocolPerPage: 5,
          filterByItems: { chain: null, category: null },
        },
      }
    default:
      return state
  }
}

export default protocolReducer

import axios from "axios"
import {
  getAllChains,
  getAllCategories,
  showProtocolPerPage,
} from "../lib/filter-items"
import { CONTEXT_TITLE } from "../lib/constants"
import APIURL from "../lib/constants"

const API_URL = "https://api.llama.fi/protocols"

console.log(APIURL)

export const getAllData = async (dispatch) => {
  dispatch({ type: CONTEXT_TITLE.BEGIN_DATA_FETCH })
  try {
    const response = await axios.get(API_URL)
    dispatch({
      type: CONTEXT_TITLE.SUCCESSFUL_DATA_FETCH,
      payload: response.data,
    })
    return response?.data
  } catch (error) {
    dispatch({ type: CONTEXT_TITLE.FAILED_DATA_FETCH, payload: error })
  }
}

export const getProtocolData = async (dispatch) => {
  dispatch({ type: CONTEXT_TITLE.BEGIN_DATA_FETCH })
  try {
    const allData = await getAllData(dispatch)
    const chains = await getAllChains(allData)
    const categories = await getAllCategories(allData)
    dispatch({
      type: CONTEXT_TITLE.UPDATE_SETTINGS,
      payload: { chains: chains, categories: categories },
    })
  } catch (error) {
    dispatch({ type: CONTEXT_TITLE.FAILED_DATA_FETCH, payload: error })
  }
}

export const updateSettings = async (dispatch, props) => {
  dispatch({ type: CONTEXT_TITLE.BEGIN_DATA_FETCH })
  try {
    dispatch({ type: CONTEXT_TITLE.UPDATE_SETTINGS, payload: props })
  } catch (error) {
    dispatch({ type: CONTEXT_TITLE.FAILED_DATA_FETCH, payload: error })
  }
}

export const getPerPageProtocols = async (dispatch, props) => {
  dispatch({ type: CONTEXT_TITLE.BEGIN_DATA_FETCH })
  try {
    const allData = await getAllData(dispatch)
    const { count, totalPageNum, data } = showProtocolPerPage(allData, props)
    dispatch({
      type: CONTEXT_TITLE.UPDATE_SETTINGS,
      payload: { totalPageCount: totalPageNum, count: count },
    })
    dispatch({
      type: CONTEXT_TITLE.DISPLAY_FILTERED_DATA,
      payload: data,
    })
  } catch (error) {
    dispatch({ type: CONTEXT_TITLE.FAILED_DATA_FETCH, payload: error })
  }
}

export const resetSettings = async (dispatch) => {
  dispatch({ type: CONTEXT_TITLE.RESET_SETTINGS })
}

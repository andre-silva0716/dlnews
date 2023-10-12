import { useContext } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { PER_PAGES } from "../../lib/constants"
import Select from "react-select"
import { ProtocolContext } from "../../context/ProtocolContext"
import { updateSettings } from "../../context/ProtocolAction"
import { DISPLAY, selectStyles } from "../../lib/styles"
import { TITLE_LISTS } from "../../lib/constants"

export const Pagination = () => {
  const { state, dispatch } = useContext(ProtocolContext)
  const { currentPageNumber, protocolPerPage, totalPageCount, count } =
    state.settings

  const onChangePaginate = (page) => {
    updateSettings(dispatch, { protocolPerPage: page.value })
  }

  const onClickNextPage = () => {
    const nextPage = currentPageNumber + 1
    updateSettings(dispatch, { currentPageNumber: nextPage })
  }

  const onClickPrevPage = () => {
    const prevPage = currentPageNumber - 1
    updateSettings(dispatch, { currentPageNumber: prevPage })
  }

  return (
    <div className={`${DISPLAY.end} items-center text-[.87rem] my-8`}>
      <div className="mr-2 font-semibold sm:flex hidden">
        {TITLE_LISTS.show_page}
      </div>
      <Select
        value={state.settings.protocolPerPage}
        placeholder={state.settings.protocolPerPage}
        onChange={onChangePaginate}
        options={PER_PAGES}
        menuPlacement="top"
        styles={selectStyles}
      />
      <div className="mx-8">
        <span>{`${(currentPageNumber - 1) * protocolPerPage + 1} - ${
          currentPageNumber * protocolPerPage
        } of ${count}`}</span>
      </div>
      <div className="flex gap-2">
        <FiChevronLeft
          style={{
            cursor: "pointer",
            color: currentPageNumber - 1 <= 0 ? "gray" : "inherit",
          }}
          onClick={currentPageNumber - 1 > 0 ? onClickPrevPage : undefined}
        />
        <FiChevronRight
          style={{
            cursor: "pointer",
            color: currentPageNumber < totalPageCount ? "inherit" : "gray",
          }}
          onClick={
            currentPageNumber < totalPageCount ? onClickNextPage : undefined
          }
        />
      </div>
    </div>
  )
}

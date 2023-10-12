import { useContext } from "react"
import { ProtocolContext } from "../../context/ProtocolContext"
import { updateSettings, resetSettings } from "../../context/ProtocolAction"
import FilterSelect from "./FilterSelect"
import { FILTER, DISPLAY } from "../../lib/styles"
import { TITLE_LISTS } from "../../lib/constants"

export const Filter = ({ setting }) => {
  const { state, dispatch } = useContext(ProtocolContext)

  const onChangeSetting = (key, value) => {
    const filterByItems = {
      ...state.settings.filterByItems,
      [key]: value.label,
    }
    updateSettings(dispatch, { filterByItems: filterByItems })
  }

  const onClickReset = () => {
    resetSettings(dispatch)
  }

  return (
    <div className={FILTER.container}>
      <button className={FILTER.button} onClick={onClickReset}>
        {TITLE_LISTS.all_protocols}
      </button>
      <div className={`${DISPLAY.between} md:gap-8 gap-2 mt-4 md:mt-0`}>
        <FilterSelect
          filterName={TITLE_LISTS.filter_by_category}
          filterValue={setting.filterByItems.category}
          options={setting.categories}
          onChange={(category) => onChangeSetting("category", category)}
        />
        <FilterSelect
          filterName={TITLE_LISTS.filter_by_chain}
          filterValue={setting.filterByItems.chain}
          options={setting.chains}
          onChange={(chain) => onChangeSetting("chain", chain)}
        />
      </div>
    </div>
  )
}

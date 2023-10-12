import Select from "react-select"
import { DISPLAY, selectStyles } from "../../lib/styles"

const FilterSelect = ({ filterName, filterValue, options, onChange }) => (
  <div className={`${DISPLAY.center} text-[.87rem]`}>
    <div className="mr-2 font-semibold md:flex hidden">{filterName}</div>
    <Select
      value={filterValue}
      onChange={onChange}
      options={options}
      isClearable
      placeholder={filterValue || filterName}
      styles={selectStyles}
    />
  </div>
)

export default FilterSelect

import { useState, useEffect, useContext } from "react"
import { ProtocolContext } from "../../context/ProtocolContext"
import { HEADER_TITLES } from "../../lib/constants"
import { BiCaretDown, BiCaretUp } from "../../lib/icons"
import { updateSettings } from "../../context/ProtocolAction"
import { THEAD, DISPLAY, VARIABLE } from "../../lib/styles"

export const Thead = () => {
  const [sort, setSort] = useState({ column: "", direction: "" })
  const { dispatch } = useContext(ProtocolContext)

  const onClickSort = (title) => {
    if (sort.column !== title) {
      setSort({ column: title, direction: "asc" })
    } else {
      switch (sort.direction) {
        case "":
          setSort({ column: title, direction: "asc" })
          break
        case "asc":
          setSort({ column: title, direction: "desc" })
          break
        default:
          setSort({ column: title, direction: "" })
      }
    }
  }

  useEffect(() => {
    updateSettings(dispatch, {
      sortField: sort.column,
      sortOrder: sort.direction,
    })
  }, [sort])

  return (
    <div className="flex-grow">
      <div className={THEAD.container}>
        {HEADER_TITLES.map((list, index) => (
          <div
            key={index}
            className={`${THEAD.body} ${DISPLAY.itemCenter} ${VARIABLE.cellWidth}`}
            onClick={() => onClickSort(list.value)}
          >
            {list.label}
            <span className={`${DISPLAY.center} flex-col overflow-hidden`}>
              <div className="relative top-[1px]">
                <BiCaretDown
                  color={
                    sort.column === list.value && sort.direction === "asc"
                      ? "blue"
                      : "black"
                  }
                />
              </div>
              <div className="relative bottom-[1px]">
                <BiCaretUp
                  color={
                    sort.column === list.value && sort.direction === "desc"
                      ? "blue"
                      : "black"
                  }
                />
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

import { TBODY, VARIABLE } from "../../lib/styles"

export const Tbody = ({ filterData }) => {
  return (
    <>
      {filterData.length > 0 &&
        filterData.map((protocol, index) => (
          <div key={index} className={TBODY.container}>
            <div className={`flex gap-3 ${VARIABLE.cellWidth}`}>
              <img alt="protocol" className={TBODY.img} src={protocol.logo} />
              <span>{protocol.name}</span>
            </div>
            <div className={VARIABLE.cellWidth}>{protocol.category}</div>
            <div className={VARIABLE.cellWidth}>{protocol.tvl.toFixed(2)}</div>
            <div
              className={`${VARIABLE.cellWidth} ${
                protocol?.change_1h < 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              {protocol?.change_1h !== undefined && protocol?.change_1h !== null
                ? protocol?.change_1h < 0
                  ? protocol?.change_1h.toFixed(2)
                  : `+${protocol?.change_1h.toFixed(2)}`
                : null}
            </div>

            <div
              className={`${VARIABLE.cellWidth} ${
                protocol?.change_1d < 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              {protocol?.change_1d !== undefined && protocol?.change_1d !== null
                ? protocol?.change_1d < 0
                  ? protocol?.change_1d.toFixed(2)
                  : `+${protocol?.change_1d.toFixed(2)}`
                : null}
            </div>

            <div
              className={`${VARIABLE.cellWidth} ${
                protocol?.change_7d < 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              {protocol?.change_7d !== undefined && protocol?.change_7d !== null
                ? protocol?.change_7d < 0
                  ? protocol?.change_7d.toFixed(2)
                  : `+${protocol?.change_7d.toFixed(2)}`
                : null}
            </div>
          </div>
        ))}
    </>
  )
}

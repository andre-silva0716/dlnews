export const DISPLAY = {
  center: "flex justify-between items-center",
  between: "flex justify-between",
  end: "flex justify-end",
  itemCenter: "flex items-center",
}

export const VARIABLE = {
  cellWidth: "min-w-[120px]",
}

export const selectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderColor: state.isFocused ? "" : "gray",
    marginRight: "1rem",
    width: "10rem",
    border: "1px solid #0F2C58",
    fontSize: ".8rem",
  }),
}

export const FILTER = {
  container:
    "md:flex justify-between mb-12 p-3 border border-gray-200 rounded-md block",
  button: "px-3 bg-basic text-white rounded-md py-2 md:py-0",
}

export const TBODY = {
  container:
    "md:w-full w-fit grid md:grid-cols-6 grid-flow-col gap-3 border-b border-gray-200 py-3 items-center md:font-sans font-Inter md:text-[1rem] text-[.9rem]",
  img: "w-10 h-10 rounded-full",
}

export const THEAD = {
  container:
    "md:w-full w-fit grid grid-flow-col gap-3 border-b border-gray-400",
  body: "gap-1 p-3 md:text-[1.2rem] text-[.9rem] font-bold cursor-pointer",
}

export const LAYOUT = {
  container:
    "w-full min-h-screen flex flex-col bg-slate-100 text-basic font-sans",
  main: "w-full flex-grow py-12 px-3 md:px-16",
  tableWrapper: "overflow-x-auto md:overflow-x-visible",
}

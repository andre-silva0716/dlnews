import { TITLE_LISTS } from "../../lib/constants"

export const Footer = () => {
  return (
    <div className="p-5 bg-basic">
      <span className="text-md text-white  font-primary">
        {TITLE_LISTS.footer}
      </span>
    </div>
  )
}

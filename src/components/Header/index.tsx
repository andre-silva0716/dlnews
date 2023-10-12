import { DlnewsLogo } from "../../lib/icons"
import { DISPLAY } from "../../lib/styles"
const Header = () => {
  return (
    <div className={`${DISPLAY.between} bg-basic p-6  border-opacity-70`}>
      <a className="w-[12rem]" href={window.location.href} rel="">
        <DlnewsLogo />
      </a>
    </div>
  )
}

export default Header

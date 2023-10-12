import React, { useContext } from "react"
import { useDeepCompareEffect } from "use-deep-compare"

import { Pagination } from "../components/Pagination"
import Header from "../components/Header"
import { Footer } from "../components/Footer"
import { Thead } from "../components/Thead"
import { Filter } from "../components/Filter"

import { ProtocolContext } from "../context/ProtocolContext"
import { getProtocolData, getPerPageProtocols } from "../context/ProtocolAction"
import { Tbody } from "../components/Tbody"
import { Spinner } from "../components/Spinner"
import { LAYOUT } from "../lib/styles"

const ProtocolComponent: React.FC = () => {
  const { state, dispatch } = useContext(ProtocolContext)
  const { settings, filterData } = state

  useDeepCompareEffect(() => {
    const fetchData = async () => {
      await getProtocolData(dispatch)
      await getPerPageProtocols(dispatch, settings)
    }
    fetchData()
  }, [settings])

  return (
    <div className={LAYOUT.container}>
      <Header />
      <div className={LAYOUT.main}>
        <Filter setting={settings} />
        {state.data?.length > 0 ? (
          <div className={LAYOUT.tableWrapper}>
            <Thead />
            <Tbody filterData={filterData} />
          </div>
        ) : (
          <Spinner />
        )}
        <Pagination />
      </div>
      <Footer />
    </div>
  )
}

export default ProtocolComponent

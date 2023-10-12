export const getAllChains = async (data) => {
  const uniqueChainLabels = data.reduce((accumulatedChains, currentItem) => {
    const chainLabelsFromItem = currentItem.chains.map(
      (chain) => chain.label || chain
    )

    const uniqueChainLabelsFromItem = chainLabelsFromItem.filter(
      (chainLabel) => !accumulatedChains.includes(chainLabel)
    )

    return [...accumulatedChains, ...uniqueChainLabelsFromItem]
  }, [])

  const uniqueChains = uniqueChainLabels.map((chainLabel) => ({
    label: chainLabel,
    key: chainLabel,
  }))

  return uniqueChains.sort((a, b) => a.label.localeCompare(b.label))
}

export const getAllCategories = async (data) => {
  return data
    .reduce((uniqueCategories, item) => {
      const categoryExists = uniqueCategories.some(
        (category) => category.label === item.category
      )
      if (!categoryExists) {
        uniqueCategories.push({ label: item.category, key: item.category })
      }
      return uniqueCategories
    }, [])
    .sort((a, b) => a.label.localeCompare(b.label))
}

export const showProtocolPerPage = (allData, setting) => {
  const filteredAllProtocols = filterProtocols(allData, setting)
  const sortProtocol = sortProtocols(filteredAllProtocols, setting)

  const data = getProtocolPerPage(sortProtocol, setting)
  const totalPageNum = Math.ceil(
    filteredAllProtocols.length / setting.protocolPerPage
  )

  return { data: data, totalPageNum: totalPageNum, count: sortProtocol.length }
}

export const filterProtocols = (data, setting) => {
  const { chain, category } = setting.filterByItems
  const filteredData = data
    .filter((item) => !chain || item.chains.includes(chain))
    .filter((item) => !category || item.category === category)
  return filteredData
}

export const sortProtocols = (data, setting) => {
  const sortedData = data.sort((a, b) => {
    if (setting.sortField === "name") {
      const nameA = a[setting.sortField].toLowerCase()
      const nameB = b[setting.sortField].toLowerCase()
      if (nameA < nameB) {
        return setting.sortOrder === "asc" ? -1 : 1
      }
      if (nameA > nameB) {
        return setting.sortOrder === "asc" ? 1 : -1
      }
      return 0
    } else {
      if (a[setting.sortField] < b[setting.sortField]) {
        return setting.sortOrder === "asc" ? -1 : 1
      }
      if (a[setting.sortField] > b[setting.sortField]) {
        return setting.sortOrder === "asc" ? 1 : -1
      }
      return 0
    }
  })
  return sortedData
}

export const getProtocolPerPage = (data, setting) => {
  const from = (setting.currentPageNumber - 1) * setting.protocolPerPage
  const to = from + setting.protocolPerPage
  const result = data.slice(from, to)
  return result
}

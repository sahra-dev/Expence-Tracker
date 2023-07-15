import { useEffect, useState } from 'react'

const SectionTwo = ({ transAction }) => {
  const [searchItem, setSearchItem] = useState('')
  const [filterTransActions, setFilterTransAction] = useState(transAction)

  const searchHandler = (e) => {
    const filteredItems = transAction.filter((t) =>
      t.desc.toLowerCase().includes(e.toLowerCase()),
    )
    // console.log(filteredItems)
    setFilterTransAction(filteredItems)
  }
  useEffect(() => {
    searchHandler(searchItem)
  }, [transAction])

  return (
    <div className="section2">
      {filterTransActions.length ? (
        <>
          <p className="section2-title">TransAction</p>
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={searchItem}
            onChange={(e) => {
              setSearchItem(e.target.value)
              searchHandler(e.target.value)
            }}
          />
          <div className="lists">
            {filterTransActions.map((item) => {
              return (
                <div
                  className={`item ${
                    item.type === 'expense' ? 'item-expense' : 'item-income'
                  }`}
                  key={item.id}
                >
                  <div>{item.desc}</div>
                  <div> {item.amount} $</div>
                </div>
              )
            })}
          </div>
        </>
      ) : (
        <h4>add some transaction ... !</h4>
      )}
    </div>
  )
}

export default SectionTwo

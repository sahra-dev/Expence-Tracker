import { useEffect, useState } from 'react'
import { BiTrashAlt } from 'react-icons/bi'

const SectionTwo = ({ transAction , deleteHandler }) => {
  const [searchItem, setSearchItem] = useState('')
  const [filterTransActions, setFilterTransAction] = useState(transAction)

  const searchHandler = (e) => {
    const filteredItems = transAction.filter((t) =>
      t.desc.toLowerCase().includes(e.toLowerCase()),
    )
    setFilterTransAction(filteredItems)
  }
  useEffect(() => {
    searchHandler(searchItem)
  }, [transAction])

  return (
    <div className="section2">
      <p className="section2-title">TransActions</p>
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
      {!(transAction.length === 0) ? (
        filterTransActions.length ? (
          <>
            <div className="lists">
              {filterTransActions.map((item) => {
                return (
                  <div
                    className={`item ${
                      item.type === 'expense' ? 'item-expense' : 'item-income'
                    }`}
                    key={item.id}
                  >
                    <div className="item-desc">
                      <div>{item.desc}</div>
                      <div> {item.amount} $</div>
                    </div>
                    <span
                      className="trash-icon"
                      onClick={() => deleteHandler(item.id)}
                    >
                      <BiTrashAlt className="icon" />
                    </span>
                  </div>
                )
              })}
            </div>
          </>
        ) : (
          <h4> Doesn't Exist ... !</h4>
        )
      ) : (
        <h4> Add Some TransAction ... !</h4>
      )}
    </div>
  )
}

export default SectionTwo

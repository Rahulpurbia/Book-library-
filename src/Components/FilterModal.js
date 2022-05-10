import useBooks from '../useBooks'

import "../FilterModal.css"

const FilterModal = ({ setIsModalOpen }) => {

    const { filterParams, setFilterParams, setCurrentPage, isChecked, setIsChecked } = useBooks();

    const filterFree = () => {
        setIsChecked((prev) => ({ ...prev, price: { ...prev["price"], free: !prev.price.free } }))
    }

    const filterPaid = () => {
        setIsChecked((prev) => ({ ...prev, price: { ...prev["price"], paid: !prev.price.paid } }))
    }

    const filterBooks = () => {
        setIsChecked((prev) => ({ ...prev, type: { ...prev["type"], book: !prev.type.book } }))
    }

    const filterMagazine = () => {
        setIsChecked((prev) => ({ ...prev, type: { ...prev["type"], magazine: !prev.type.magazine } }))
    }

    const applyFilter = () => {
        console.log("here")
        setCurrentPage(1);
        setFilterParams({ price: { ...filterParams["price"], free: isChecked.price.free, paid: isChecked.price.paid }, type: { ...filterParams["type"], book: isChecked.type.book, magazine: isChecked.type.magazine } })
        setIsModalOpen(false)
    }

    return (
        <div className="modal-container">
            <div className="modal">
                <div className="header">
                    <i className="fas fa-filter"></i>  Filter
                </div>
                <div className="body">
                    <div className="checkbox-wrapper">
                        <div>Filter by Price</div>
                        <label htmlFor="free">Free</label>
                        <input type="checkbox" id="free" checked={isChecked.price.free} onChange={filterFree} />

                        <label htmlFor="paid">Paid</label>
                        <input type="checkbox" id="paid" checked={isChecked.price.paid} onChange={filterPaid} />
                    </div>
                    <div className="checkbox-wrapper">
                        <div>Filter by Type</div>
                        <label htmlFor="book">Book</label>
                        <input type="checkbox" id="book" checked={isChecked.type.book} onChange={filterBooks} />

                        <label htmlFor="magazine">Magazine</label>
                        <input type="checkbox" id="magazine" checked={isChecked.type.magazine} onChange={filterMagazine} />
                    </div>
                </div>
                <div className='footer'>
                    <button className='cancel-btn' onClick={() => setIsModalOpen(false)}>Cancel</button>
                    <button className='apply-btn' onClick={applyFilter}>Apply</button>
                </div>
            </div>
        </div>
    )
}

export default FilterModal
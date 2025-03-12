const Filter = ({handleFilterChange}) => {
    return (
        <>
            filter shown with: <input onChange={handleFilterChange} />
        </>
    )
}

export default Filter;

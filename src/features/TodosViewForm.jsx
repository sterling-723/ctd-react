const preventRefresh = (e) => e.preventDefault();

export default function TodosViewForm({
  sortDirection,
  setSortDirection,
  sortField,
  setSortField,
  queryString,
  setQueryString,
}) {
  return (
    <>
      <div>
        <label htmlFor="todoSearchBox">Search Todos</label>
        <input
          id="todoSearchBox"
          type="text"
          value={queryString}
          onChange={(e) => {
            setQueryString(e.target.value);
          }}
        />
        <button type="button" onClick={() => setQueryString('')}>
          Clear
        </button>
      </div>
      <form onSubmit={preventRefresh}>
        <label htmlFor="selectPicker">Sort by</label>
        <select
          id="selectPicker"
          onChange={(e) => setSortField(e.target.value)}
          value={sortField}
        >
          <option value="title">Title</option>
          <option value="createdTime">Time added</option>
        </select>
        <button
          type="button"
          onClick={() =>
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
          }
        >
          {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
        </button>
      </form>
    </>
  );
}

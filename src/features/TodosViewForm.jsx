const preventRefresh = (e) => e.preventDefault();

export default function TodosViewForm({
  sortDirection,
  setSortDirection,
  sortField,
  setSortField,
  setQueryString,
}) {
  return (
    <>
      <div>
        <label htmlFor="">Search Todos</label>
        <input
          type="text"
          //   value={valueString}
          onChange={(e) => {
            setQueryString(e.tartget.value);
          }}
        />
        <button onClick={() => setQueryString()}>Clear</button>
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
      </form>
    </>
  );
}

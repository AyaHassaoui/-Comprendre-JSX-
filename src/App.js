import FilterList from './FilterList';

function App() {
  const users = ['Alice', 'Bob', 'Charlie', 'Dave'];

  return (
    <div>
      <h1>TP JSX et Composition</h1>

      {/* Liste normale */}
      <h2>Liste complète</h2>
      <ul>
        {users.map((u) => (
          <li key={u}>{u}</li>
        ))}
      </ul>

      {/* Liste filtrée par Render Props */}
      <h2>Liste filtrée (contient "a")</h2>
      <FilterList
        items={users}
        filterFn={(name) => name.toLowerCase().includes('a')}
      >
        {(filtered) => (
          <ul>
            {filtered.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
        )}
      </FilterList>
    </div>
  );
}

export default App;

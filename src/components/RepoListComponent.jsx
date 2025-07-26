export default function RepoListComponent({ repos }) {
  return (
    <div className="repos-list-wrapper">
      <ul className="repos-list">
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

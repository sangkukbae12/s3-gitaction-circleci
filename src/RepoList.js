import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { octokit} from "./client";

function RepoList() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    octokit.request('GET /orgs/:org/repos', {
      org: 'octokit'
    })
      .then(({ data }) => setRepos(data));
  }, [])

  return (
    <div className="repo-list-container">
      <h1>Repositories</h1>
      <ul>
        {repos.map(repo => (
          <li key={repo.id} className="repo-list-item">
            <Link to={`/repo/${repo.owner.login}/${repo.name}`}>{repo.full_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepoList;
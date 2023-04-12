import React from 'react';
import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

const fetchRepos = async () =>{
    const accesToken = process.env.ACCESS_TOKEN;
    const url = 'https://api.github.com/users/apardor/repos'
    const res = await fetch(url, {
        next:{
            revalidate:60,
        },
        headers:{
            Authorization: `Bearer ${accesToken}`,
        },
    });
    const repos = await res.json();
    return repos; 
}

const ReposPage = async () => {
    const repos = await fetchRepos();
        
  return (
  <div>
        <h2>Repositories</h2>
        <ul>
            {repos?.map((repo:any) => (
                <li key={repo.id}>
                    <Link href={`/code/repos/${repo.name}`}>
                    <span>hello there</span>

                        <h3>{repo.name}</h3>
                        <p>{repo.description}</p>
                        <div>
                            <span>
                                <FaStar /> {repo.stargazers_count}
                            </span>
                            <span>
                                <FaCodeBranch /> {repo.forks_count}
                            </span>
                            <span>
                                <FaEye /> {repo.watchers_count}
                            </span>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    </div>

)
  
}

export default ReposPage



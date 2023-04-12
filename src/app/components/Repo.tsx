import React from 'react';
import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

const fetchRepo = async(name:string)=>{
    const accesToken = process.env.ACCESS_TOKEN;
    const url = `https://api.github.com/repos/apardor/${name}`
    const res = await fetch(url, {
        next: {
            revalidate: 60,
          },
        headers:{
            Authorization: `Bearer ${accesToken}`,
        },
    });
    const repo = await res.json();
    return repo; 
}

const Repo = async ({name}:any) => {
    const repo = await fetchRepo(name);

  return <>
    <h2> {repo.name} </h2>
    <h2> {repo.description} </h2>
    <div>
        <div>
            <FaStar />
            <span>{repo.stargazers_count}</span>
        </div>
        <div>
            <FaCodeBranch />
            <span>{repo.forks_count}</span>
        </div>
        <div>
            <FaEye />
            <span>{repo.watchers_count}</span>
        </div>
    </div>
  </>
  
}

export default Repo
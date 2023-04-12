import Link from 'next/link'
import React from 'react'

const fetchRepoContents = async(name:string)=>{

    await new Promise ((resolve)=> setTimeout(resolve, 3000))
    const accesToken = process.env.ACCESS_TOKEN;
    const url = `https://api.github.com/repos/apardor/${name}/contents`
    const res = await fetch(url, {
        next: {
            revalidate: 60,
          },
        headers:{
            Authorization: `Bearer ${accesToken}`,
        },
    });
    const contents = await res.json();
    return contents; 
}

const RepoDirs = async ({name}:any) => {
    const contents = await fetchRepoContents(name);
    const dirs = contents.filter((content:any) => content.type === 'dir')


  return (<>
    <h3>Directories</h3>
    <ul>
        {dirs.map((dir:any) =>(
            <li key={dir.path}>
                <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
            </li>
        ))}
    </ul>
    </>
    )
}

export default RepoDirs
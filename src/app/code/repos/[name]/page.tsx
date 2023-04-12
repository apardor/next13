import React from 'react'
import Repo from '@/app/components/Repo'
import Link from 'next/link'
import RepoDirs from '@/app/components/RepoDirs'
import { Suspense } from 'react'

const RepoPage = ({params: {name}}:any) => {
  return (
    <div>
        <Link href='/code/repos'>Back to repositories</Link>
        <Suspense fallback={<div>Loading repo...</div>}>
            <Repo name={name}/>
        </Suspense>
        <Suspense fallback={<div>Loading Directories...</div>}>
            <RepoDirs name={name} />
        </Suspense>
    </div>
    )
}

export default RepoPage
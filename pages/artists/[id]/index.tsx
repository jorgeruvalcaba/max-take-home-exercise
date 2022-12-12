import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'

import { Layout } from '../../../components/Layout'
import { Button } from '../../../components/Button'

export default function ArtistsDetail() {
  const router = useRouter()
  const artistID = router.query.id

  return (
    <Layout>
      <Link href="/">
        <Button>
          <ChevronLeftIcon className="h-5 w-5 mr-1" aria-hidden="true" />
          Back to Search
        </Button>
      </Link>

      <div className="mt-16 w-full flex flex-col items-center">
        <h5>Artist {artistID} Details Page</h5>
        <main className="flex w-3/5 p-4 mb-14 rounded-lg border-2 border-white"></main>
      </div>
    </Layout>
  )
}

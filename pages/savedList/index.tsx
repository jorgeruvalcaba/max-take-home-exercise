import Link from 'next/link'
import { Button } from '../../components/Button'
import { Layout } from '../../components/Layout'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'

export default function SavedList() {
  return (
    <Layout showTitle={false} title="My List">
      <div className="flex flex-row justify-between">
        <Link href="/">
          <Button>
            <ChevronLeftIcon className="h-5 w-5 mr-1" aria-hidden="true" />
            Back to Search
          </Button>
        </Link>
        <div />
      </div>
    </Layout>
  )
}

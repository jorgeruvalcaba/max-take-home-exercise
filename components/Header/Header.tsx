import Head from 'next/head'

import { DEFAULT_APP_TITLE } from '../../constants'

type HeaderProps = {
  title?: string
}

export const Header = ({ title = DEFAULT_APP_TITLE }: HeaderProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content="MAX Take home project" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
)

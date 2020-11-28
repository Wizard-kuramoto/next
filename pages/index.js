import Head from 'next/head'
import { useAuth } from '../lib/auth'

export default function Home() {
  const auth = useAuth()
  return <div>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>{auth?.user?.email}</h1>
    <button onClick={e => auth.signinWithGithub()}>Sign in</button>
    {auth?.user && <button onClick={e => auth.signout()}>Sign Out</button>}
  </div>
}

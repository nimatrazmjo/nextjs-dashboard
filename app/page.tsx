import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { sql } from '@vercel/postgres';
import Link from 'next/link';

console.log({POSTGRES_URL: process.env.POSTGRES_URL, POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING}, "process.env.POSTGRES_URL_NON_POOLING");

export default async function Page({params}: {params: {user: string}}) {

  const { rows }= await sql`SELECT * FROM users WHERE username = ${params.user}`;
  return (
    <main className="flex min-h-screen flex-col p-6">
      <h1 className="text-3xl font-bold">Welcome to Acme!</h1>
      <p className="text-lg">This is a demo app for <a href="https://vercel.com">Vercel</a> and <a href="https://nextjs.org">Next.js</a>.</p>
      <p className="text-lg">You can find the full source code on </p>

      {rows.length > 0 ? (
        <div className="flex flex-col mt-6">
          <h2 className="text-xl font-bold">Users</h2>
          <ul className="flex flex-col mt-2">
            {rows.map((row) => (
              <li key={row.id} className="flex items-center">
                <Link href={`/user/${row.username}`}>
                  <a className="text-blue-500 hover:underline">{row.username}</a>
                </Link>
                <ArrowRightIcon className="w-4 h-4 text-gray-500" />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mt-6 text-lg">No users found.</p>
      )}
    </main>
  );
}

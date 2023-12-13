import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { sql } from '@vercel/postgres';
import Link from 'next/link';

export default async function Page({params}: {params: {user: string}}) {

  const { rows }= await sql`SELECT * FROM users`;
  return (
    <main className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent">
      <h1 className="text-3xl font-bold">Welcome to Acme!</h1>
      <p className="text-lg">This is a demo app for <a href="https://vercel.com">Vercel</a> and <a href="https://nextjs.org">Next.js</a>.</p>
      <p className="text-lg">You can find the full source code on </p>
      {/* <AcmeLogo /> */}
      {rows.length > 0 ? (
        <div className="flex flex-col mt-6">
          <h2 className="text-xl font-bold">Users</h2>
          <ul className="flex flex-col mt-2">
            {rows.length}
            {rows.map((row) => (
              <li key={row.id} className="flex items-center">
                <Link href={`/user/${row.username}`}>
                  {row.username}
                </Link>
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

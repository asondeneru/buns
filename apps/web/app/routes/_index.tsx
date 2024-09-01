import { type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export const loader = async () => {
  // fetch data from remote
  const name = 'John';
  const test = process.env.TEST;
  return { name, test };
};

export default function Index() {
  const { name, test } = useLoaderData<typeof loader>();
  return (
    <>
      <main className="p-24">
        Hello, {name}! by {test}
      </main>
    </>
  );
}

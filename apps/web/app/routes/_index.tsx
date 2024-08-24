import { json, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export const loader = async () => {
  // fetch data from remote
  const name = 'John';
  return json({ name });
};

export default function Index() {
  const { name } = useLoaderData<typeof loader>();
  return (
    <>
      <main className="p-24">Hello, {name}!</main>
    </>
  );
}

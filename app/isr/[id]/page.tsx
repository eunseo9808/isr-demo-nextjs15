export const revalidate = 10;
export const dynamicParams = true;

export async function generateStaticParams() {
  return [];
}

export default async function ISRPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main>
      <h1>Post with id {id}</h1>
      <h2>using NextJS 15.0.2 (react: 19.0.0-rc-02c0e824-20241028)</h2>
      <div>
        When constantly refreshing the page, this number should be cached for 10
        seconds and then revalidate in the following refresh:
      </div>
      <div>
        <strong>{Math.random()}</strong>
      </div>
      <div>in NextJS 15 this does not work as expected</div>
    </main>
  );
}

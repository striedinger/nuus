import Head from 'next/head'
import Error from 'next/error';
import Stories from 'components/stories';

const Story = props => {
  const { stories, errorCode } = props;
  if (errorCode) return <Error statusCode={errorCode} />;
  return (
    <React.Fragment>
      <Head>
        <title>Story</title>
        <meta name="description" content="News stories" />
      </Head>
      <Stories stories={stories} />
    </React.Fragment>
  );
};

export async function getServerSideProps({ params, res }) {
  const { id } = params;
  const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;
  const response = await fetch(`${DOMAIN}/api/story/${id}`);
  res.statusCode = response.status;
  if (!response.ok) return { props: { errorCode: response.status } };
  const json = await response.json();
  const stories = json.results;
  return { props: { stories } };
};

export default Story;

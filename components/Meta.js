import Head from "next/head";

const Meta = ({ title, description }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/icon.png" type="image/png" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "In Chicago - Events and Things To Do All Year",
  description:
    "Your ultimate guide to Chicago for tourists and locals alike. Discover superb restaurants, amazing bars, great things to do and cool events in Chicago.",
};

export default Meta;

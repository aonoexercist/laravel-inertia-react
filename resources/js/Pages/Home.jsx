import Layout from "../Layouts/layout";

function Home({ name }) {
  return (
      <div>
          <h1>Welcome Home {name}</h1>
      </div>
  );
}

Home.layout = page => <Layout children={page} />

export default Home;

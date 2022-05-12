import RepoResults from "../components/repos/RepoResults";
import RepoSearch from "../components/repos/RepoSearch";
import Layout from "../components/layout";
import styled from "styled-components";

const Home = () => {
  return (
    <Layout>
      <HomeWrapper>
        <RepoSearch />
        <RepoResults />
      </HomeWrapper>
    </Layout>
  );
};

const HomeWrapper = styled.div`
display: flex;
flex-direction: column;
`;

export default Home;

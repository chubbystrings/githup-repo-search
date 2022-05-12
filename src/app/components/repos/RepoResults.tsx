import { useContext } from "react";
import RepoItem from "./RepoItem";
import Loader from "../layout/Loader";
import GithubContext from "../../context/github/githubContext";
import styled from "styled-components";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      duration: 1,
    },
  },
  hidden: {
    y: -20,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const RepoResults = () => {
  const { loading, searchedRepos, isResult } = useContext(GithubContext);

  return <>
  {
    loading && <Loader />
  }
  {
    !loading && isResult === false  && ( <h2 style={{ textAlign: 'center', marginTop: '50px', fontSize: '30px'}}>Oops No Result</h2>)
  }

  {
    !loading && isResult === true && (
      <ItemWrapper
        className=""
        variants={variants}
        initial="hidden"
        animate="show"
      >
        {searchedRepos.map((repo, index) => (
          <motion.div variants={item}>
            <RepoItem key={repo.id} repo={repo} index={index} />
          </motion.div>
        ))}
      </ItemWrapper>
    )
  }
  </> 
};

const ItemWrapper = styled(motion.div)`
  height: 580px;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 20px 5px 5px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-column-gap: 6px;
  grid-row-gap: 6px;
  column-gap: 20px;
  row-gap: 20px;
  grid-auto-rows: 300px;
  @media screen and (max-width: 325px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

export default RepoResults;

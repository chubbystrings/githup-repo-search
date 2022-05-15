import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { VscIssues } from "react-icons/vsc";
import { BiGitRepoForked } from "react-icons/bi";
import { AiFillStar, AiFillEye } from "react-icons/ai";

interface Props {
  repo: any;
  index: number;
}

const RepoItem = ({ repo, index }: Props) => {
  return (
    <UserCard className="card">
      <div className="avatar--wrapper">
        <img src={repo.owner.avatar_url} alt="avatar" />
      </div>
      <div className="repo--info">
        <small>{repo.name} </small>
      </div>
      <div className="stargazers--wrapper">
        <div className="icon--wrapper">
          <div className="text-sm" style={{ color: "rgba(255, 99, 132)" }}>
            <BiGitRepoForked className="text-sm" />
          </div>
          <div className="text-sm">{repo.forks_count}</div>
        </div>
        <div className="icon--wrapper">
          <div className="text-sm" style={{ color: "rgba(75, 192, 192)" }}>
            <AiFillStar className="text-sm" />
          </div>
          <div className=" text-sm">{repo.stargazers_count}</div>
        </div>
        <div className="icon--wrapper">
          <div className="text-sm" style={{ color: "rgba(54, 162, 235)" }}>
            <AiFillEye className="text-sm" />
          </div>
          <div className="text-sm">{repo.watchers_count}</div>
        </div>
        <div className="icon--wrapper">
          <div className="text-sm" style={{ color: "rgba(255, 206, 86)" }}>
            <VscIssues className="text-sm" />
          </div>
          <div className="text-sm">{repo.open_issues_count}</div>
        </div>
      </div>
      <div className="view--profile">
        <NavLink
          to={`/repos/${repo.owner.login}/${repo.name}`}
          className="text-base-content text-opacity-40"
        >
          View
        </NavLink>
      </div>
    </UserCard>
  );
};

const UserCard = styled(motion.div)`
  width: 100%;
  height: 300px;

  /* bounding box */

  background: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: 5px;
  padding: 10px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 0.5s ease-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  & .stargazers--wrapper {
    position: absolute;
    left: 50%;
    bottom: 50px;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;

    & .icon--wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media screen and (max-width: 250px) {
      display: none;
      flex-direction: column;
      gap: 2px;
      align-items: center;
      justify-content: center;
      top: -40px;
      transform: translateX(0);
      left: 5px;
    }
  }

  & .repo--info {
    display: flex;
    flex-direction: column;
    width: 100%;
    small {
      color: black;
      font-family: "Sofia Pro";
      font-style: normal;
      color: #364354;
      text-align: center;
      font-size: 17px;
      overflow-wrap: break-word;
      white-space: initial;
    }
  }

  & a,
  small {
    color: black;
    font-family: "Sofia Pro";
    font-style: normal;
    color: #364354;
  }

  & a {
    padding: 10px;
    border-radius: 10px;
    font-size: 14px;
  }

  & a:hover {
    transition: all 0.5s ease-out;
    background-color: rgb(55 65 81 / 1);
    color: #fff;
  }

  & .avatar--wrapper {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    top: 5px;

    & img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    & small {
      text-align: center;
    }

    @media screen and (max-width: 250px) {
      width: 50px;
      height: 50px;
    }
  }

  & .view--profile {
    color: black;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 425px) {
    padding: 2px;
  }
`;
export default RepoItem;

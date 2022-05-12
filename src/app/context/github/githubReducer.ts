const githubReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SEARCH_REPOS":
      return {
        ...state,
        searchedRepos: action.payload,
        loading: false,
        isResult: action.payload.length > 0,
      };
    case "REPO_INFO":
      return {
        ...state,
        repoInfo: action.payload,
        loading: false,
      };
    case "RESET_IS_RESULT":
      return {
        ...state,
        isResult: null,
      }
    default:
      return state;
  }
};

export default githubReducer;

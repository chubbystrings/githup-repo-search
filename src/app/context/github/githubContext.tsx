import { createContext, ReactNode, useReducer } from "react";
import githubApi from "../../api/githubApi";
import githubReducer from "./githubReducer";

interface Props {
    children: ReactNode;
}

interface Github {
    loading: boolean;
    searchedRepos: Record<string, any>[]
    repoInfo: Record<string, any>;
    isResult: boolean | null;
    searchRepos: (tex: string) => void;
    getRepo:  (name: string, owner: string) => void
}


const GithubContext = createContext({} as Github);

export const GithubProvider = ({children}:Props) => {
    const initialState = {
        loading: false,
        searchedRepos: [],
        repoInfo: {},
        isResult: null,
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    const getRepo = async (name: string, owner: string) => {
        setLoading();
        
        const {data} = await githubApi.get(`/repos/${owner}/${name}`);



        dispatch({
            type: "REPO_INFO",
            payload: data
        })
    }

    const searchRepos = async (text: string) => {
        resetIsResult()
        setLoading();
        const params = new URLSearchParams({
            q: text,
            sort: "created",
            per_page: "30",
        })
        const {data} = await githubApi.get(`/search/repositories?q=${params}`);
        console.log(data)

        const items = data.items;

        dispatch({
            type: "SEARCH_REPOS",
            payload: items
        })
    }

    
    // get search results
  

    // set loading to true
    const setLoading = () => dispatch({type: "SET_LOADING"});
    const resetIsResult = () => dispatch({ type: "RESET_IS_RESULT"})


    return (
        <GithubContext.Provider value={{
            ...state,
            searchRepos,
            getRepo,
            
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext;
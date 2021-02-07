import logo from './logo.svg';
import './App.css';
import {useAsyncFn} from "react-use";
import {useEffect} from "react";

function App() {

    const [state, fetchPosts] = useAsyncFn(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        return result
    }, []);

    useEffect(()=>{fetchPosts()},[])

  return (
        <div className="App">
            {state &&
            (state.loading
                ? <h1>Loading</h1>
                : state.value && (
                    <div data-testId="posts-block">
                        <h1>Post:</h1>
                        {state?.value.map(post =>
                            <article key={post.id} data-testId={`post-${post.id}`}>
                            <h2 data-testId="post-title">{post.title}</h2>
                            <p  data-testId="post-body">{post.body}</p>
                        </article>)}
                    </div>
                ))
            }
        </div>
    );
}

export default App;

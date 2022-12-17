import { useGetAllPostQuery, useGetPostQuery, useGetPostsByLimitQuery, useDeletePostMutation } from "./services/post";

function App() {
    // const responseInfo = useGetAllPostQuery();

    // const responseInfo = useGetPostQuery(1);

    // const responseInfo = useGetPostsByLimitQuery(2);

    const [deletePost, responseInfo] = useDeletePostMutation();

    console.log(responseInfo);
    console.log(responseInfo.isSuccess);

    if (responseInfo.isLoading) {
        return <div>Loading...</div>;
    }

    if (responseInfo.isError) {
        return <div>{responseInfo.error.error}</div>;
    }

    return (
        <>
            {/* 
                INFO : GET ALL POSTS  
            */}
            {/* <div>
                {responseInfo.data.map((post, index) => {
                    return (
                        <div key={index}>
                            <h3>
                                {post.id} {post.title}
                            </h3>
                            <p>{post.body}</p>
                            <hr />
                        </div>
                    );
                })}
            </div> */}

            {/* 
                INFO : GET SINGLE POST
            */}
            {/* <div>
                <h2>
                    {responseInfo.data.id} {responseInfo.data.title}
                </h2>
                <p>{responseInfo.data.body}</p>
            </div> */}

            {/* 
                INFO : GET LIMIT POSTS  
            */}
            {/* <div>
                {responseInfo.data.map((post, index) => {
                    return (
                        <div key={index}>
                            <h3>
                                {post.id} {post.title}
                            </h3>
                            <p>{post.body}</p>
                            <hr />
                        </div>
                    );
                })}
            </div> */}

            {/* 
                INFO : DELETE POST  
            */}

            <button onClick={() => deletePost(2)}>Delete</button>
        </>
    );
}

export default App;

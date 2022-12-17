import { useGetAllPostQuery, useGetPostQuery } from "./services/post";

function App() {
    // const responseInfo = useGetAllPostQuery();

    const responseInfo = useGetPostQuery(1);

    console.log(responseInfo);
    console.log(responseInfo.data);

    if (responseInfo.isLoading) {
        return <div>Loading...</div>;
    }

    if (responseInfo.isError) {
        return <div>{responseInfo.error.error}</div>;
    }

    return (
        <>
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

            <div>
                <h2>
                    {responseInfo.data.id} {responseInfo.data.title}
                </h2>
                <p>{responseInfo.data.body}</p>
            </div>
        </>
    );
}

export default App;

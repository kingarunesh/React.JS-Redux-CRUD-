import { useGetAllPostQuery } from "./services/post";

function App() {
    const responseInfo = useGetAllPostQuery();

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
            <div>
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
            </div>
        </>
    );
}

export default App;

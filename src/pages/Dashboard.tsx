import { useLoaderData } from "react-router-dom"
const Dashboard = () => {
    const { userName } = useLoaderData() as { userName: string };
    return (
        <div>
            {userName ? (
                <div>
                    <h1>Dashboard</h1>
                    <p>{userName as string}</p>
                </div>
            ) : (
                <div>
                    <h1>Loading...</h1>
                </div>
            )
            }
        </div>
    )
}

export default Dashboard
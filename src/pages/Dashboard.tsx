import { ReactNode } from "react"
import { useLoaderData } from "react-router-dom"
const Dashboard = () => {
    const data = useLoaderData();
    return (
        <div>
            {data ? (
                <div>
                    <h1>Dashboard</h1>
                    <p>{data as ReactNode}</p>
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
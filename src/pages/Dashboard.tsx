import { useLoaderData } from "react-router-dom"
import Intro from "../components/Intro";
const Dashboard = () => {
    const { userName } = useLoaderData() as { userName: string };
    return (
        <>
            {userName ? (
                <div>
                    <h1>Dashboard</h1>
                    <p>{userName as string}</p>
                </div>
            ) : (
                <Intro />
            )
            }
        </>
    )
}

export default Dashboard
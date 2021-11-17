import Layout from "../components/Layout";
import Login from "../components/Login";

export default function Index() {
    return (
        <>
            <Layout 
                animateHeader={true}
                animateFooter={true}
            >
                <Login/>
            </Layout>
        </>
    )
}

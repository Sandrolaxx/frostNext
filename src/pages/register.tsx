import Layout from "../components/Layout";
import Register from "../components/Register";

export default function Index() {
    return (
        <>
            <Layout 
                animateHeader={true}
                animateFooter={true}
            >
                <Register />
            </Layout>
        </>
    )
}

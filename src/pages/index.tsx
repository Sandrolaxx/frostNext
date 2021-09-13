import Home from "../components/Home";
import Layout from "../components/Layout";

export default function Index() {
    return (
        <>
            <Layout 
                animateHeader={true}
                animateFooter={true}
            >
                <Home />
            </Layout>
        </>
    )
}

import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
    children: any;
    animateHeader?: boolean; 
    animateFooter?: boolean; 
}

export default function Layout(props: LayoutProps) {
    return (
        <div className="h-screen flex flex-col">
            <Header animate={props.animateHeader ?? false} />
            {props.children}
            <Footer animate={props.animateFooter ?? false} />
        </div>
    );
}
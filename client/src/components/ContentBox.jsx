import About from './About.jsx'
import Contact from './Contact.jsx'

export default function ContentBox(props) {
    const {content} = props;
    if (content === "about") {
        return(
            <About/>
        );
    } else if (content === "projects") {
        return (
            <>
                Projects page / component coming soon
            </>
        );
    } else if (content === "contact") {
        return (
            <Contact/>
        )
    } else return null;
}
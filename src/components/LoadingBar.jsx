export default function LoadingBar(props){
    const {string, percent} = props;
    return(
        <>
            <p>This is the LoadingBar .jsx Component</p>
            <p>string: {string}</p>
            <p>percent: {percent}</p>
        </>
    );
}
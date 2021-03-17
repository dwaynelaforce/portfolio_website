export default function LoadingBar(props){
    const {string, percent} = props;
    return(
        <>
            <p>[{string}] | {percent} %</p>
        </>
    );
}
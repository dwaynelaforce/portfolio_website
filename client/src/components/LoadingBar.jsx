export default function LoadingBar(props){
    const {string, percent} = props;
    return(
        <span>[{string}] | {percent} %</span>
    );
}
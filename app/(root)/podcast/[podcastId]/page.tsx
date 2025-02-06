const Podcast = ({params}: {params: {podcasrId: string}}) => {
    return ( 
        <div>
            Podcast {params.podcasrId}
        </div>
     );
}
 
export default Podcast;
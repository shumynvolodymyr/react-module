import './PostDetails.css'

export default function PostDetails({location:{state}}) {

    return (
        <div className={'post-info'}>
            {
                JSON.stringify(state)
            }
        </div>
    );
}

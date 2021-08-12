export default function Comment({comment:{id, name}}) {
    return (
        <li>
            {id}. {name}
        </li>
    );
}
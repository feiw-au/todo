
type ItemProps = {
    id: number,
    title: string,
    category: string,
    onDelete: (id: number) => void;
}

export default function Item({ id, title, category, onDelete }: ItemProps)  {
    return (
        <>
            <div>
                <h2>{title}</h2>
                <p>{category}</p>
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </>
    );
}
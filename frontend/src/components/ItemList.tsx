import Item from "./Item";
import { ToDoItems } from "../App"

type ItemGoalListProps = {
    items: ToDoItems[];
    onDeleteItem: (id: number) => void;

}
export default function ItemList({items, onDeleteItem}: ItemGoalListProps) {
    return (
        <>
            <ul>
                {items.map((i) => (
                    <li key={i.id}>
                        <Item id={i.id} title={i.title} category={i.category} onDelete={onDeleteItem} />
                    </li>
                ))}
            </ul>
        </>
    )
}
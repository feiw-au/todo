import { useRef } from "react";

type NewItemProps = {
    addNewItem: (item: string, category: string) => void;
}

export default function NewItem({addNewItem}: NewItemProps) {
    // type HTMLInputElement: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes
    const item = useRef<HTMLInputElement>(null);
    const category = useRef<HTMLInputElement>(null);

    function handleSubmit(){
        event?.preventDefault();

        const enterNewItem = item.current!.value;
        const enterNewCategoty = category.current!.value;

        addNewItem(enterNewItem, enterNewCategoty);
    }

    return <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="item">New Item: </label>
            <input id="item" type="text" ref={item} required />
        </p>
        <p>
            <label htmlFor="category">Category: </label>
            <input id="category" type="text" ref={category} />
        </p>
        <p>
            <button>Add Item</button>
        </p>
        
        
    </form>
}
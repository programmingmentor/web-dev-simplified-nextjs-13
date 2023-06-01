'use client';

type TodoItemProps = {
    id: string,
    title: string,
    complete: boolean,
    toggleTodo: (id: string, complete: boolean) => void
}

export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {

    return <li className="flex gap-1 items-center">
        <input type="checkbox" id={id} className="cursor-pointer peer"
            defaultChecked={complete}
            onChange={ev => toggleTodo(id, ev.target.checked)} />
        <label htmlFor={id} className="peer-checked:line-through cursor-pointer
        peer-checked:text-slate-500">
            {title}
        </label>
    </li>
}

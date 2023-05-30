import Link from "next/link"
import { prisma } from "@/db"


export default async function Home() {
  // await prisma.todo.create({ data:{title: 'test', complete: false} })
  const todos = await prisma.todo.findMany()
  console.log(todos)
  return (
    <>
    <header  className="flex justify-between items-center mb-4">
      <h1 className="text-2xl">Todos</h1>
      <Link className="border border-x-slate-300 text-slate-300 px2 py1 rounded
     hover:bg-s late-700 focus-within:bg-slate-700 outline-none"
     href='/new'>New</Link>
    </header>
      <ul className="pl-4">
        {todos.map(todo => (
           <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  )
}

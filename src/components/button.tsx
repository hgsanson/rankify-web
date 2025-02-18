interface ButtonProps {
  text?: string
}

export function Button({ text }: ButtonProps) {
  return (
    <button className="w-full px-5 h-12 bg-gray-500 text-blue rounded-xl cursor-pointer hover:bg-gray-600">
      {text || "Click me"}
    </button>
  )
}
export default function Button({ children, onClick, disabled, className }) {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-md bg-linear-to-br from-purple-700 to-red-700 p-2 font-bold text-white ring-1 ring-transparent transition-all hover:ring-purple-700 active:scale-90 ${className} `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

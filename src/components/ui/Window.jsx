export default function Window({ children, title = 'bash' }) {
  return (
    <div className="w-[90%] max-w-4xl mx-auto my-8 bg-card rounded-xl shadow-lg border border-border">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <div></div>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}

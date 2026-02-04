import Sidebar from "../components/Sidebar"
import LogoApp from "../assets/emboxlogo.png"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar />

      <main className="flex-1 bg-zinc-900 p-8 overflow-auto relative">
        {children}

        {/* MARCA DEL SISTEMA – eMBOX */}
        <div className="absolute bottom-4 right-6 opacity-40">
          <img
            src={LogoApp}
            alt="eMBOX"
            className="w-24"
          />
        </div>
      </main>
    </div>
  )
}

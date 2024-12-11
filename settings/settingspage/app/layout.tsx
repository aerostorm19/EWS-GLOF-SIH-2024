import SettingsPage from './settings/page'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black">
      {/* Your sidebar and other layout components */}
      <main className="flex-1">
        <SettingsPage />
      </main>
    </div>
  )
}


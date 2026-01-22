import { ReactNode } from 'react';
import { Header } from './Header';
import './AppShell.css';

interface AppShellProps {
  editor: ReactNode;
  preview: ReactNode;
}

export function AppShell({ editor, preview }: AppShellProps) {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <aside className="editor-panel">
          {editor}
        </aside>
        <section className="preview-panel">
          {preview}
        </section>
      </main>
    </div>
  );
}

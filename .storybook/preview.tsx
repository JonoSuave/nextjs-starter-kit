import type { Preview } from '@storybook/react'
import { ThemeProvider } from '../src/components/theme-provider'
import '../src/app/globals.css'

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: { width: '375px', height: '667px' }
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1440px', height: '800px' }
        }
      }
    }
  },
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="system">
        <div className="container mx-auto p-4">
          <header className="mb-6 flex items-center justify-between p-4 border-b">
            <h1 className="text-xl font-semibold">Storybook Demo</h1>
            <button 
              onClick={() => document.documentElement.classList.toggle('dark')}
              className="px-4 py-2 rounded-lg bg-muted hover:bg-accent"
            >
              Toggle Theme
            </button>
          </header>
          <Story />
        </div>
      </ThemeProvider>
    )
  ]
}

export default preview 
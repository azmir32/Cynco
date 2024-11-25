import { defineConfig } from 'vite';
import { vitePlugin as remix } from '@remix-run/dev';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    port: 3000,
    host: true,
    fs: {
      allow: ['..']
    }
  },
  plugins: [
    remix({
      ignoredRouteFiles: ['**/.*'],
      serverModuleFormat: 'esm',
      appDirectory: 'app',
      future: {
        v3_fetcherPersist: true,
        v3_lazyRouteDiscovery: true,
        v3_relativeSplatPath: true,
        v3_singleFetch: true,
        v3_throwAbortReason: true
      }
    }),
    tsconfigPaths()
  ],
  // Add optimizeDeps for better handling of dependencies
  optimizeDeps: {
    include: [
      'lucide-react',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-slot',
      'class-variance-authority',
      'clsx',
      'tailwind-merge'
    ]
  }
});
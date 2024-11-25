// vite.config.ts
import { defineConfig } from "file:///E:/Remix%20project/beginning/node_modules/vite/dist/node/index.js";
import { vitePlugin as remix } from "file:///E:/Remix%20project/beginning/node_modules/@remix-run/dev/dist/index.js";
import tsconfigPaths from "file:///E:/Remix%20project/beginning/node_modules/vite-tsconfig-paths/dist/index.js";
var vite_config_default = defineConfig({
  server: {
    port: 3e3,
    host: true,
    fs: {
      allow: [".."]
    }
  },
  plugins: [
    remix({
      ignoredRouteFiles: ["**/.*"],
      serverModuleFormat: "esm",
      appDirectory: "app",
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
      "lucide-react",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-slot",
      "class-variance-authority",
      "clsx",
      "tailwind-merge"
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxSZW1peCBwcm9qZWN0XFxcXGJlZ2lubmluZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcUmVtaXggcHJvamVjdFxcXFxiZWdpbm5pbmdcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L1JlbWl4JTIwcHJvamVjdC9iZWdpbm5pbmcvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IHZpdGVQbHVnaW4gYXMgcmVtaXggfSBmcm9tICdAcmVtaXgtcnVuL2Rldic7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogMzAwMCxcbiAgICBob3N0OiB0cnVlLFxuICAgIGZzOiB7XG4gICAgICBhbGxvdzogWycuLiddXG4gICAgfVxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgcmVtaXgoe1xuICAgICAgaWdub3JlZFJvdXRlRmlsZXM6IFsnKiovLionXSxcbiAgICAgIHNlcnZlck1vZHVsZUZvcm1hdDogJ2VzbScsXG4gICAgICBhcHBEaXJlY3Rvcnk6ICdhcHAnLFxuICAgICAgZnV0dXJlOiB7XG4gICAgICAgIHYzX2ZldGNoZXJQZXJzaXN0OiB0cnVlLFxuICAgICAgICB2M19sYXp5Um91dGVEaXNjb3Zlcnk6IHRydWUsXG4gICAgICAgIHYzX3JlbGF0aXZlU3BsYXRQYXRoOiB0cnVlLFxuICAgICAgICB2M19zaW5nbGVGZXRjaDogdHJ1ZSxcbiAgICAgICAgdjNfdGhyb3dBYm9ydFJlYXNvbjogdHJ1ZVxuICAgICAgfVxuICAgIH0pLFxuICAgIHRzY29uZmlnUGF0aHMoKVxuICBdLFxuICAvLyBBZGQgb3B0aW1pemVEZXBzIGZvciBiZXR0ZXIgaGFuZGxpbmcgb2YgZGVwZW5kZW5jaWVzXG4gIG9wdGltaXplRGVwczoge1xuICAgIGluY2x1ZGU6IFtcbiAgICAgICdsdWNpZGUtcmVhY3QnLFxuICAgICAgJ0ByYWRpeC11aS9yZWFjdC1kcm9wZG93bi1tZW51JyxcbiAgICAgICdAcmFkaXgtdWkvcmVhY3Qtc2xvdCcsXG4gICAgICAnY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5JyxcbiAgICAgICdjbHN4JyxcbiAgICAgICd0YWlsd2luZC1tZXJnZSdcbiAgICBdXG4gIH1cbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1EsU0FBUyxvQkFBb0I7QUFDclMsU0FBUyxjQUFjLGFBQWE7QUFDcEMsT0FBTyxtQkFBbUI7QUFFMUIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sSUFBSTtBQUFBLE1BQ0YsT0FBTyxDQUFDLElBQUk7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLE1BQ0osbUJBQW1CLENBQUMsT0FBTztBQUFBLE1BQzNCLG9CQUFvQjtBQUFBLE1BQ3BCLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxRQUNOLG1CQUFtQjtBQUFBLFFBQ25CLHVCQUF1QjtBQUFBLFFBQ3ZCLHNCQUFzQjtBQUFBLFFBQ3RCLGdCQUFnQjtBQUFBLFFBQ2hCLHFCQUFxQjtBQUFBLE1BQ3ZCO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxjQUFjO0FBQUEsRUFDaEI7QUFBQTtBQUFBLEVBRUEsY0FBYztBQUFBLElBQ1osU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

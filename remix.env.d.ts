Copy/// <reference types="@remix-run/dev" />
/// <reference types="vite/client" />

declare module "*.css?url" {
  const url: string;
  export default url;
}
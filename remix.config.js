/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    tailwind: true,
    serverModuleFormat: 'cjs',
    future: {
      v2_errorBoundary: true,
      v2_meta: true,
      v2_routeConvention: true,
      v2_normalizeFormMethod: true,
      unstable_cssModules: true,
    },
    serverDependenciesToBundle: [/^.*\.css$/],
  };
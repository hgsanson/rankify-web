import { defineConfig } from 'orval'

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3333'

export default defineConfig({
  api: {
    input: `${API_BASE_URL}/docs/json`,
    output: {
      target: './src/http/api.ts',
      client: 'fetch',
      httpClient: 'fetch',
      clean: true,
      baseUrl: API_BASE_URL,

      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },
      },
    },
  },
})

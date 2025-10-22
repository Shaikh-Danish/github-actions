import { vi } from 'vitest';

// Mock URL and URLSearchParams for jsdom compatibility
Object.defineProperty(global, 'URL', {
  value: URL,
  writable: true,
});

Object.defineProperty(global, 'URLSearchParams', {
  value: URLSearchParams,
  writable: true,
});

// Mock fetch if not available
if (!global.fetch) {
  global.fetch = vi.fn();
}

// Mock window.location
Object.defineProperty(window, 'location', {
  value: {
    href: 'http://localhost:3000',
    origin: 'http://localhost:3000',
    protocol: 'http:',
    host: 'localhost:3000',
    hostname: 'localhost',
    port: '3000',
    pathname: '/',
    search: '',
    hash: '',
  },
  writable: true,
});

// Type definitions for Netlify Identity Widget
declare global {
  interface Window {
    netlifyIdentity?: {
      on: (event: string, callback: (user?: any) => void) => void;
      open: () => void;
      close: () => void;
      currentUser: () => any;
      logout: () => void;
      refresh: () => Promise<any>;
      gotrue: any;
      store: any;
    };
  }
}

export {};

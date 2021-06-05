import App from './routes/app.svelte';

const app = new App({ target: document.body });

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}

export default app;

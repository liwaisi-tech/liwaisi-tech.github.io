// EmailJS Configuration
// Get your credentials from https://www.emailjs.com/

const getEnv = (key: string): string => {
  return (window as any).__ENV__?.[key] || import.meta.env[key] || '';
};

export const EMAIL_CONFIG = {
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'mBadBYIPkw_V_R3uD',
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_r5tbhde',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_fnho5ln',
  RECIPIENT_EMAIL: 'liwaisitech@gmail.com'
};

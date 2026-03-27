export interface EmailBlock {
  id: string;
  label: string;
  media: string;
  content: string;
}

export interface EmailBlockCategory {
  category: string;
  blocks: EmailBlock[];
}

export const EMAIL_BLOCKS: EmailBlockCategory[] = [
  {
    category: 'Layout',
    blocks: [
      {
        id: 'email-wrapper',
        label: 'Contenedor',
        media: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>`,
        content: `<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 0;"><tr><td align="center"><table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;"><tr><td style="padding:40px;"><p style="margin:0;color:#374151;font-size:15px;line-height:24px;">Edita este contenido...</p></td></tr></table></td></tr></table>`,
      },
      {
        id: 'two-columns',
        label: '2 Columnas',
        media: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="9" height="16" rx="1"/><rect x="13" y="4" width="9" height="16" rx="1"/></svg>`,
        content: `<table width="600" cellpadding="0" cellspacing="0" style="margin:0 auto;"><tr><td width="50%" style="padding:16px;vertical-align:top;"><p style="margin:0;color:#374151;font-size:14px;">Columna izquierda</p></td><td width="50%" style="padding:16px;vertical-align:top;"><p style="margin:0;color:#374151;font-size:14px;">Columna derecha</p></td></tr></table>`,
      },
      {
        id: 'three-columns',
        label: '3 Columnas',
        media: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="5" height="16" rx="1"/><rect x="9.5" y="4" width="5" height="16" rx="1"/><rect x="17" y="4" width="5" height="16" rx="1"/></svg>`,
        content: `<table width="600" cellpadding="0" cellspacing="0" style="margin:0 auto;"><tr><td width="33%" style="padding:16px;vertical-align:top;"><p style="margin:0;color:#374151;font-size:14px;font-family:Arial,sans-serif;">Columna 1</p></td><td width="33%" style="padding:16px;vertical-align:top;"><p style="margin:0;color:#374151;font-size:14px;font-family:Arial,sans-serif;">Columna 2</p></td><td width="34%" style="padding:16px;vertical-align:top;"><p style="margin:0;color:#374151;font-size:14px;font-family:Arial,sans-serif;">Columna 3</p></td></tr></table>`,
      },
      {
        id: 'sidebar-left',
        label: 'Sidebar izq.',
        media: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="6" height="16" rx="1"/><rect x="10" y="4" width="12" height="16" rx="1"/></svg>`,
        content: `<table width="600" cellpadding="0" cellspacing="0" style="margin:0 auto;"><tr><td width="35%" style="padding:16px;vertical-align:top;background:#f9fafb;"><p style="margin:0;color:#374151;font-size:14px;font-family:Arial,sans-serif;">Sidebar</p></td><td width="65%" style="padding:16px;vertical-align:top;"><p style="margin:0;color:#374151;font-size:14px;font-family:Arial,sans-serif;">Contenido principal</p></td></tr></table>`,
      },
      {
        id: 'sidebar-right',
        label: 'Sidebar der.',
        media: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="12" height="16" rx="1"/><rect x="16" y="4" width="6" height="16" rx="1"/></svg>`,
        content: `<table width="600" cellpadding="0" cellspacing="0" style="margin:0 auto;"><tr><td width="65%" style="padding:16px;vertical-align:top;"><p style="margin:0;color:#374151;font-size:14px;font-family:Arial,sans-serif;">Contenido principal</p></td><td width="35%" style="padding:16px;vertical-align:top;background:#f9fafb;"><p style="margin:0;color:#374151;font-size:14px;font-family:Arial,sans-serif;">Sidebar</p></td></tr></table>`,
      },
      {
        id: 'full-width-banner',
        label: 'Banner full',
        media: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="10" rx="1"/><line x1="6" y1="12" x2="18" y2="12"/></svg>`,
        content: `<table width="100%" cellpadding="0" cellspacing="0" style="background:#1e1b4b;"><tr><td style="padding:48px 40px;text-align:center;"><h1 style="margin:0 0 12px;color:#ffffff;font-size:32px;font-weight:800;font-family:Arial,sans-serif;line-height:1.2;">{{headline}}</h1><p style="margin:0 0 24px;color:#a5b4fc;font-size:16px;font-family:Arial,sans-serif;">{{subheadline}}</p><table cellpadding="0" cellspacing="0" style="margin:0 auto;"><tr><td style="background:#6366f1;border-radius:6px;"><a href="{{ctaUrl}}" style="display:inline-block;padding:13px 32px;color:#ffffff;text-decoration:none;font-weight:600;font-size:15px;font-family:Arial,sans-serif;">{{ctaLabel}}</a></td></tr></table></td></tr></table>`,
      },
    ],
  },
  {
    category: 'Bloques',
    blocks: [
      {
        id: 'header-block',
        label: 'Header',
        media: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="7" rx="1"/><line x1="6" y1="6.5" x2="18" y2="6.5"/></svg>`,
        content: `<table width="100%" cellpadding="0" cellspacing="0"><tr><td style="background:#4f46e5;padding:28px 40px;text-align:center;"><h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;font-family:Arial,sans-serif;">{{appName}}</h1><p style="margin:8px 0 0;color:#c7d2fe;font-size:14px;font-family:Arial,sans-serif;">{{tagline}}</p></td></tr></table>`,
      },
      {
        id: 'header-logo',
        label: 'Header + logo',
        media: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="8" rx="1"/><circle cx="8" cy="7" r="2"/><line x1="12" y1="6" x2="20" y2="6"/><line x1="12" y1="8" x2="17" y2="8"/></svg>`,
        content: `<table width="100%" cellpadding="0" cellspacing="0"><tr><td style="background:#ffffff;padding:20px 40px;border-bottom:1px solid #e5e7eb;"><table width="100%" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle;"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40'%3E%3Crect width='120' height='40' fill='%234f46e5'/%3E%3Ctext x='60' y='26' font-family='Arial' font-size='13' font-weight='bold' fill='white' text-anchor='middle'%3ELOGO%3C/text%3E%3C/svg%3E" width="120" height="40" alt="Logo" style="display:block;" /></td><td style="vertical-align:middle;text-align:right;"><a href="#" style="color:#6b7280;text-decoration:none;font-size:13px;font-family:Arial,sans-serif;margin-left:20px;">Inicio</a><a href="#" style="color:#6b7280;text-decoration:none;font-size:13px;font-family:Arial,sans-serif;margin-left:20px;">Contacto</a></td></tr></table></td></tr></table>`,
      },
      {
        id: 'text-block',
        label: 'Texto',
        media: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="15" y2="18"/></svg>`,
        content: `<table width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:24px 40px;"><h2 style="margin:0 0 12px;color:#111827;font-size:20px;font-weight:600;font-family:Arial,sans-serif;">Hola, {{firstName}}</h2><p style="margin:0;color:#6b7280;font-size:15px;line-height:26px;font-family:Arial,sans-serif;">Escribe aquí el cuerpo del mensaje. Puedes editar este texto directamente haciendo doble clic.</p></td></tr></table>`,
      },
      {
        id: 'image-block',
        label: 'Imagen',
        media: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
        content: `<table width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:0;" align="center"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='300'%3E%3Crect width='600' height='300' fill='%23e4e4e7'/%3E%3Ctext x='300' y='155' font-family='Arial' font-size='16' fill='%2371717a' text-anchor='middle'%3EImagen 600x300%3C/text%3E%3C/svg%3E" width="600" alt="Imagen" style="display:block;max-width:100%;height:auto;" /></td></tr></table>`,
      },
      {
        id: 'image-text',
        label: 'Imagen + texto',
        media: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="5" width="8" height="14" rx="1"/><line x1="13" y1="8" x2="22" y2="8"/><line x1="13" y1="12" x2="22" y2="12"/><line x1="13" y1="16" x2="19" y2="16"/></svg>`,
        content: `<table width="600" cellpadding="0" cellspacing="0" style="margin:0 auto;"><tr><td width="45%" style="padding:24px 16px 24px 40px;vertical-align:middle;"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='180'%3E%3Crect width='240' height='180' fill='%23e4e4e7'/%3E%3Ctext x='120' y='95' font-family='Arial' font-size='14' fill='%2371717a' text-anchor='middle'%3EImagen%3C/text%3E%3C/svg%3E" width="240" alt="Imagen" style="display:block;max-width:100%;height:auto;border-radius:6px;" /></td><td width="55%" style="padding:24px 40px 24px 16px;vertical-align:middle;"><h3 style="margin:0 0 10px;color:#111827;font-size:18px;font-weight:600;font-family:Arial,sans-serif;">Título aquí</h3><p style="margin:0 0 16px;color:#6b7280;font-size:14px;line-height:22px;font-family:Arial,sans-serif;">Descripción breve del contenido que acompaña la imagen.</p><a href="#" style="color:#4f46e5;font-size:14px;font-family:Arial,sans-serif;text-decoration:none;font-weight:600;">Leer más →</a></td></tr></table>`,
      },
      {
        id: 'button-block',
        label: 'Botón',
        media: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="8" width="18" height="8" rx="4"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,
        content: `<table width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:24px 40px;" align="center"><table cellpadding="0" cellspacing="0"><tr><td style="background:#4f46e5;border-radius:6px;"><a href="{{ctaUrl}}" style="display:inline-block;padding:13px 32px;color:#ffffff;text-decoration:none;font-weight:600;font-size:15px;font-family:Arial,sans-serif;">{{ctaLabel}}</a></td></tr></table></td></tr></table>`,
      },
      {
        id: 'two-buttons',
        label: '2 Botones',
        media: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="8" width="9" height="8" rx="3"/><rect x="13" y="8" width="9" height="8" rx="3"/></svg>`,
        content: `<table width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:24px 40px;" align="center"><table cellpadding="0" cellspacing="0"><tr><td style="background:#4f46e5;border-radius:6px;margin-right:12px;"><a href="#" style="display:inline-block;padding:12px 28px;color:#ffffff;text-decoration:none;font-weight:600;font-size:14px;font-family:Arial,sans-serif;">Primario</a></td><td style="width:12px;"></td><td style="background:#ffffff;border-radius:6px;border:2px solid #4f46e5;"><a href="#" style="display:inline-block;padding:10px 28px;color:#4f46e5;text-decoration:none;font-weight:600;font-size:14px;font-family:Arial,sans-serif;">Secundario</a></td></tr></table></td></tr></table>`,
      },
      {
        id: 'alert-block',
        label: 'Alerta',
        media: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
        content: `<table width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:16px 40px;"><table width="100%" cellpadding="0" cellspacing="0" style="background:#fef3c7;border-left:4px solid #f59e0b;border-radius:4px;"><tr><td style="padding:16px 20px;"><p style="margin:0;color:#92400e;font-size:14px;font-weight:600;font-family:Arial,sans-serif;">⚠️ Aviso importante</p><p style="margin:6px 0 0;color:#78350f;font-size:13px;line-height:20px;font-family:Arial,sans-serif;">Escribe aquí el mensaje de alerta o aviso para el usuario.</p></td></tr></table></td></tr></table>`,
      },
      {
        id: 'success-block',
        label: 'Éxito',
        media: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>`,
        content: `<table width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:16px 40px;"><table width="100%" cellpadding="0" cellspacing="0" style="background:#d1fae5;border-left:4px solid #10b981;border-radius:4px;"><tr><td style="padding:16px 20px;"><p style="margin:0;color:#065f46;font-size:14px;font-weight:600;font-family:Arial,sans-serif;">✅ Operación exitosa</p><p style="margin:6px 0 0;color:#047857;font-size:13px;line-height:20px;font-family:Arial,sans-serif;">Tu acción se completó correctamente.</p></td></tr></table></td></tr></table>`,
      },
      {
        id: 'stats-block',
        label: 'Estadísticas',
        media: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
        content: `<table width="600" cellpadding="0" cellspacing="0" style="margin:0 auto;background:#f9fafb;"><tr><td style="padding:32px 40px;"><p style="margin:0 0 24px;color:#111827;font-size:18px;font-weight:600;font-family:Arial,sans-serif;text-align:center;">Resumen del período</p><table width="100%" cellpadding="0" cellspacing="0"><tr><td width="33%" style="text-align:center;padding:0 8px;"><p style="margin:0;color:#4f46e5;font-size:32px;font-weight:800;font-family:Arial,sans-serif;">1,204</p><p style="margin:4px 0 0;color:#6b7280;font-size:13px;font-family:Arial,sans-serif;">Usuarios activos</p></td><td width="33%" style="text-align:center;padding:0 8px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;"><p style="margin:0;color:#10b981;font-size:32px;font-weight:800;font-family:Arial,sans-serif;">98%</p><p style="margin:4px 0 0;color:#6b7280;font-size:13px;font-family:Arial,sans-serif;">Satisfacción</p></td><td width="34%" style="text-align:center;padding:0 8px;"><p style="margin:0;color:#f59e0b;font-size:32px;font-weight:800;font-family:Arial,sans-serif;">$4.2k</p><p style="margin:4px 0 0;color:#6b7280;font-size:13px;font-family:Arial,sans-serif;">Ingresos</p></td></tr></table></td></tr></table>`,
      },
      {
        id: 'testimonial-block',
        label: 'Testimonio',
        media: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
        content: `<table width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:24px 40px;"><table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f3ff;border-radius:8px;"><tr><td style="padding:28px 32px;"><p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:27px;font-family:Georgia,serif;font-style:italic;">"Este producto cambió completamente la forma en que trabajamos. No puedo imaginar volver a la forma anterior."</p><table cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle;"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Ccircle cx='24' cy='24' r='24' fill='%23c7d2fe'/%3E%3Ctext x='24' y='29' font-family='Arial' font-size='14' font-weight='bold' fill='%234f46e5' text-anchor='middle'%3EJD%3C/text%3E%3C/svg%3E" width="48" height="48" alt="Avatar" style="display:block;border-radius:50%;" /></td><td style="padding-left:12px;vertical-align:middle;"><p style="margin:0;color:#111827;font-size:14px;font-weight:600;font-family:Arial,sans-serif;">Juan Díaz</p><p style="margin:2px 0 0;color:#6b7280;font-size:13px;font-family:Arial,sans-serif;">CEO, Empresa XYZ</p></td></tr></table></td></tr></table></td></tr></table>`,
      },
      {
        id: 'list-block',
        label: 'Lista',
        media: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/><circle cx="4" cy="6" r="1.5" fill="currentColor"/><circle cx="4" cy="12" r="1.5" fill="currentColor"/><circle cx="4" cy="18" r="1.5" fill="currentColor"/></svg>`,
        content: `<table width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:24px 40px;"><h3 style="margin:0 0 16px;color:#111827;font-size:18px;font-weight:600;font-family:Arial,sans-serif;">Lo que incluye</h3><table width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:8px 0;border-bottom:1px solid #f3f4f6;"><span style="color:#10b981;font-size:16px;">✓</span><span style="color:#374151;font-size:14px;font-family:Arial,sans-serif;margin-left:10px;">Característica número uno</span></td></tr><tr><td style="padding:8px 0;border-bottom:1px solid #f3f4f6;"><span style="color:#10b981;font-size:16px;">✓</span><span style="color:#374151;font-size:14px;font-family:Arial,sans-serif;margin-left:10px;">Característica número dos</span></td></tr><tr><td style="padding:8px 0;border-bottom:1px solid #f3f4f6;"><span style="color:#10b981;font-size:16px;">✓</span><span style="color:#374151;font-size:14px;font-family:Arial,sans-serif;margin-left:10px;">Característica número tres</span></td></tr><tr><td style="padding:8px 0;"><span style="color:#10b981;font-size:16px;">✓</span><span style="color:#374151;font-size:14px;font-family:Arial,sans-serif;margin-left:10px;">Característica número cuatro</span></td></tr></table></td></tr></table>`,
      },
      {
        id: 'divider-block',
        label: 'Divisor',
        media: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="3" y1="12" x2="21" y2="12"/></svg>`,
        content: `<table width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:16px 40px;"><hr style="border:none;border-top:1px solid #e5e7eb;margin:0;" /></td></tr></table>`,
      },
      {
        id: 'spacer-block',
        label: 'Espaciador',
        media: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="3" x2="12" y2="21"/><line x1="6" y1="3" x2="18" y2="3"/><line x1="6" y1="21" x2="18" y2="21"/></svg>`,
        content: `<table width="100%" cellpadding="0" cellspacing="0"><tr><td style="height:32px;line-height:32px;font-size:32px;">&nbsp;</td></tr></table>`,
      },
      {
        id: 'social-block',
        label: 'Redes sociales',
        media: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
        content: `<table width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:24px 40px;" align="center"><p style="margin:0 0 16px;color:#6b7280;font-size:13px;font-family:Arial,sans-serif;">Síguenos en nuestras redes</p><table cellpadding="0" cellspacing="0"><tr><td style="padding:0 6px;"><a href="#" style="display:inline-block;background:#1d9bf0;color:#ffffff;text-decoration:none;font-size:12px;font-weight:600;font-family:Arial,sans-serif;padding:8px 16px;border-radius:4px;">Twitter</a></td><td style="padding:0 6px;"><a href="#" style="display:inline-block;background:#0a66c2;color:#ffffff;text-decoration:none;font-size:12px;font-weight:600;font-family:Arial,sans-serif;padding:8px 16px;border-radius:4px;">LinkedIn</a></td><td style="padding:0 6px;"><a href="#" style="display:inline-block;background:#e1306c;color:#ffffff;text-decoration:none;font-size:12px;font-weight:600;font-family:Arial,sans-serif;padding:8px 16px;border-radius:4px;">Instagram</a></td></tr></table></td></tr></table>`,
      },
      {
        id: 'code-block',
        label: 'Código HTML',
        media: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
        content: `<table width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:16px 40px;background:#f8fafc;border-left:4px solid #4f46e5;font-family:monospace;font-size:13px;color:#374151;">// Tu código HTML aquí</td></tr></table>`,
      },
      {
        id: 'footer-block',
        label: 'Footer',
        media: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="14" width="20" height="7" rx="1"/><line x1="6" y1="17.5" x2="18" y2="17.5"/></svg>`,
        content: `<table width="100%" cellpadding="0" cellspacing="0"><tr><td style="background:#f9fafb;padding:24px 40px;border-top:1px solid #e5e7eb;text-align:center;"><p style="margin:0 0 8px;color:#6b7280;font-size:13px;font-family:Arial,sans-serif;">© {{year}} {{company}}. Todos los derechos reservados.</p><p style="margin:0;font-size:12px;font-family:Arial,sans-serif;"><a href="{{unsubscribeUrl}}" style="color:#9ca3af;text-decoration:none;">Cancelar suscripción</a> · <a href="#" style="color:#9ca3af;text-decoration:none;">Política de privacidad</a></p></td></tr></table>`,
      },
      {
        id: 'footer-full',
        label: 'Footer completo',
        media: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="12" width="20" height="9" rx="1"/><line x1="6" y1="15" x2="10" y2="15"/><line x1="6" y1="17" x2="9" y2="17"/><line x1="14" y1="15" x2="18" y2="15"/><line x1="14" y1="17" x2="17" y2="17"/></svg>`,
        content: `<table width="100%" cellpadding="0" cellspacing="0" style="background:#111827;"><tr><td style="padding:32px 40px;"><table width="100%" cellpadding="0" cellspacing="0"><tr><td width="50%" style="vertical-align:top;padding-right:20px;"><p style="margin:0 0 8px;color:#ffffff;font-size:16px;font-weight:700;font-family:Arial,sans-serif;">{{company}}</p><p style="margin:0;color:#9ca3af;font-size:13px;line-height:21px;font-family:Arial,sans-serif;">{{tagline}}</p></td><td width="25%" style="vertical-align:top;"><p style="margin:0 0 12px;color:#ffffff;font-size:13px;font-weight:600;font-family:Arial,sans-serif;text-transform:uppercase;letter-spacing:0.05em;">Producto</p><p style="margin:0 0 6px;"><a href="#" style="color:#9ca3af;text-decoration:none;font-size:13px;font-family:Arial,sans-serif;">Características</a></p><p style="margin:0 0 6px;"><a href="#" style="color:#9ca3af;text-decoration:none;font-size:13px;font-family:Arial,sans-serif;">Precios</a></p><p style="margin:0;"><a href="#" style="color:#9ca3af;text-decoration:none;font-size:13px;font-family:Arial,sans-serif;">Documentación</a></p></td><td width="25%" style="vertical-align:top;"><p style="margin:0 0 12px;color:#ffffff;font-size:13px;font-weight:600;font-family:Arial,sans-serif;text-transform:uppercase;letter-spacing:0.05em;">Legal</p><p style="margin:0 0 6px;"><a href="#" style="color:#9ca3af;text-decoration:none;font-size:13px;font-family:Arial,sans-serif;">Privacidad</a></p><p style="margin:0 0 6px;"><a href="#" style="color:#9ca3af;text-decoration:none;font-size:13px;font-family:Arial,sans-serif;">Términos</a></p><p style="margin:0;"><a href="#" style="color:#9ca3af;text-decoration:none;font-size:13px;font-family:Arial,sans-serif;">Cancelar suscripción</a></p></td></tr></table><hr style="border:none;border-top:1px solid #374151;margin:24px 0;" /><p style="margin:0;color:#6b7280;font-size:12px;font-family:Arial,sans-serif;text-align:center;">© {{year}} {{company}}. Todos los derechos reservados.</p></td></tr></table>`,
      },
    ],
  },
];

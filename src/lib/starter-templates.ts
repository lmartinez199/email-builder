export interface StarterTemplate {
  id: string;
  label: string;
  description: string;
  category: string;
  subject: string;
  variables: string[];
  htmlContent: string;
}

export const STARTER_TEMPLATES: StarterTemplate[] = [
  {
    id: 'blank',
    label: 'En blanco',
    description: 'Estructura mínima de email',
    category: 'general',
    subject: '',
    variables: [],
    htmlContent: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Email</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">
        <tr><td style="padding:40px;">
          <p style="margin:0;color:#374151;font-size:15px;line-height:1.6;">Contenido del email aquí.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
  },
  {
    id: 'welcome',
    label: 'Bienvenida',
    description: 'Email de bienvenida para nuevos usuarios',
    category: 'transactional',
    subject: '¡Bienvenido a {{appName}}, {{name}}!',
    variables: ['name', 'appName', 'loginUrl'],
    htmlContent: `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8" /><title>Bienvenida</title></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
        <tr><td style="background:#4f46e5;padding:32px 40px;text-align:center;">
          <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">{{appName}}</h1>
        </td></tr>
        <tr><td style="padding:40px;">
          <h2 style="margin:0 0 16px;color:#111827;font-size:20px;">¡Hola, {{name}}!</h2>
          <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.6;">Tu cuenta ha sido creada exitosamente. Ya puedes acceder a todas las funcionalidades.</p>
          <table cellpadding="0" cellspacing="0">
            <tr><td style="background:#4f46e5;border-radius:6px;">
              <a href="{{loginUrl}}" style="display:inline-block;padding:12px 28px;color:#ffffff;text-decoration:none;font-weight:600;font-size:15px;">Iniciar sesión</a>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="background:#f9fafb;padding:24px 40px;border-top:1px solid #e5e7eb;text-align:center;">
          <p style="margin:0;color:#9ca3af;font-size:12px;">© {{appName}}. Todos los derechos reservados.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
  },
  {
    id: 'reset-password',
    label: 'Recuperar contraseña',
    description: 'Email para restablecer la contraseña',
    category: 'transactional',
    subject: 'Restablecer tu contraseña en {{appName}}',
    variables: ['name', 'appName', 'resetUrl', 'expiresIn'],
    htmlContent: `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8" /><title>Recuperar contraseña</title></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
        <tr><td style="background:#111827;padding:28px 40px;text-align:center;">
          <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">{{appName}}</h1>
        </td></tr>
        <tr><td style="padding:32px 40px 0;text-align:center;">
          <div style="display:inline-block;background:#fef3c7;border-radius:50%;width:56px;height:56px;line-height:56px;font-size:28px;">🔒</div>
        </td></tr>
        <tr><td style="padding:24px 40px 40px;text-align:center;">
          <h2 style="margin:0 0 12px;color:#111827;font-size:20px;">Restablecer contraseña</h2>
          <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.6;">Hola <strong>{{name}}</strong>, recibimos una solicitud para restablecer tu contraseña.</p>
          <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
            <tr><td style="background:#ef4444;border-radius:6px;">
              <a href="{{resetUrl}}" style="display:inline-block;padding:12px 32px;color:#ffffff;text-decoration:none;font-weight:600;font-size:15px;">Restablecer contraseña</a>
            </td></tr>
          </table>
          <table cellpadding="0" cellspacing="0" width="100%" style="margin-top:24px;">
            <tr><td style="background:#fef3c7;border-radius:6px;padding:12px 16px;">
              <p style="margin:0;color:#92400e;font-size:13px;">⚠️ Este enlace expira en <strong>{{expiresIn}}</strong>.</p>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="background:#f9fafb;padding:24px 40px;border-top:1px solid #e5e7eb;text-align:center;">
          <p style="margin:0;color:#9ca3af;font-size:12px;">© {{appName}}.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
  },
  {
    id: 'newsletter',
    label: 'Newsletter',
    description: 'Newsletter mensual con contenido y CTA',
    category: 'marketing',
    subject: '{{month}} — Novedades de {{appName}}',
    variables: ['appName', 'month', 'headline', 'body', 'ctaLabel', 'ctaUrl'],
    htmlContent: `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8" /><title>Newsletter</title></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">
        <tr><td style="background:#0f172a;padding:24px 40px;text-align:center;">
          <p style="margin:0 0 4px;color:#94a3b8;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;">{{month}}</p>
          <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">{{appName}}</h1>
        </td></tr>
        <tr><td style="padding:40px;">
          <h2 style="margin:0 0 16px;color:#0f172a;font-size:22px;line-height:1.3;">{{headline}}</h2>
          <p style="margin:0 0 28px;color:#475569;font-size:15px;line-height:1.7;">{{body}}</p>
          <table cellpadding="0" cellspacing="0">
            <tr><td style="background:#0f172a;border-radius:6px;">
              <a href="{{ctaUrl}}" style="display:inline-block;padding:12px 28px;color:#ffffff;text-decoration:none;font-weight:600;font-size:14px;">{{ctaLabel}}</a>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="background:#f8fafc;padding:20px 40px;border-top:1px solid #e2e8f0;text-align:center;">
          <p style="margin:0;color:#94a3b8;font-size:11px;">© {{appName}} · <a href="#" style="color:#94a3b8;">Cancelar suscripción</a></p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
  },
  {
    id: 'notification',
    label: 'Notificación',
    description: 'Notificación genérica con acción',
    category: 'notification',
    subject: '{{title}} — {{appName}}',
    variables: ['name', 'appName', 'title', 'message', 'actionLabel', 'actionUrl'],
    htmlContent: `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8" /><title>Notificación</title></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
        <tr><td style="padding:28px 40px;border-bottom:1px solid #e5e7eb;">
          <h1 style="margin:0;color:#111827;font-size:18px;font-weight:700;">{{appName}}</h1>
        </td></tr>
        <tr><td style="padding:32px 40px;">
          <p style="margin:0 0 4px;color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;font-weight:600;">Notificación</p>
          <h2 style="margin:0 0 16px;color:#111827;font-size:22px;font-weight:700;">{{title}}</h2>
          <p style="margin:0 0 28px;color:#374151;font-size:15px;line-height:1.7;">{{message}}</p>
          <table cellpadding="0" cellspacing="0">
            <tr><td style="background:#111827;border-radius:6px;">
              <a href="{{actionUrl}}" style="display:inline-block;padding:11px 24px;color:#ffffff;text-decoration:none;font-weight:600;font-size:14px;">{{actionLabel}}</a>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="background:#f9fafb;padding:20px 40px;border-top:1px solid #e5e7eb;">
          <p style="margin:0;color:#9ca3af;font-size:12px;">Este email fue enviado a <strong>{{name}}</strong> · © {{appName}}</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
  },
];

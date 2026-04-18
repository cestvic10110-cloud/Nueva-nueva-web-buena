import type { Metadata } from 'next'
import Link from 'next/link'
import {
  LegalLayout, LegalH2, LegalH3, LegalP, LegalUl, LegalLi,
  LegalDivider, LegalHighlight,
} from '@/components/legal/LegalLayout'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Política de cookies de Cestería Vicent, S.L. Qué cookies usamos, para qué y cómo desactivarlas.',
  robots: { index: false },
}

export default function CookiesPage() {
  return (
    <LegalLayout
      title="Política de Cookies"
      subtitle="Transparencia · Cookies y rastreo"
      lastUpdated="Junio 2025"
    >

      <LegalP>
        Cestería Vicent, S.L. informa acerca del uso de las cookies en su página web.
      </LegalP>

      <LegalH2>¿Qué son las cookies?</LegalH2>
      <LegalP>
        Una cookie es un pequeño archivo de texto que se guarda en su navegador cuando visita casi
        cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando
        vuelva a navegar por esa página. Las cookies suelen almacenar información de carácter
        técnico, preferencias personales, personalización de contenidos, estadísticas de uso,
        enlaces a redes sociales, acceso a cuentas de usuario, etc.
      </LegalP>

      <LegalDivider />

      <LegalH2>Tipos de cookies que utiliza esta página web</LegalH2>

      <LegalH3>Cookies propias</LegalH3>
      <LegalUl>
        <LegalLi>
          <strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a
          través de una página web y la utilización de las diferentes opciones o servicios que en
          ella existan. Por ejemplo, identificar la sesión o recordar si el usuario ha aceptado el
          aviso de cookies para no volver a mostrárselo de nuevo.
        </LegalLi>
      </LegalUl>

      <LegalH3>Cookies de terceros</LegalH3>
      <LegalUl>
        <LegalLi>
          <strong>Cookies de análisis (Vercel Analytics):</strong> Son aquellas que nos permiten
          cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la
          utilización que hacen los usuarios del servicio ofertado.
        </LegalLi>
      </LegalUl>

      <LegalDivider />

      <LegalH2>Desactivación o eliminación de cookies</LegalH2>
      <LegalP>
        En cualquier momento podrá ejercer su derecho de desactivación o eliminación de cookies de
        este sitio web. Estas acciones se realizan de forma diferente en función del navegador que
        esté usando:
      </LegalP>
      <LegalUl>
        <LegalLi>
          <a
            href="https://support.google.com/chrome/answer/95647"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-gold"
            style={{ color: 'var(--color-text-primary)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
          >
            Configuración de cookies para Google Chrome
          </a>
        </LegalLi>
        <LegalLi>
          <a
            href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-gold"
            style={{ color: 'var(--color-text-primary)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
          >
            Configuración de cookies para Apple Safari
          </a>
        </LegalLi>
        <LegalLi>
          <a
            href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-gold"
            style={{ color: 'var(--color-text-primary)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
          >
            Configuración de cookies para Mozilla Firefox
          </a>
        </LegalLi>
      </LegalUl>

      <LegalDivider />

      <LegalH2>Aceptación de la política de cookies</LegalH2>
      <LegalHighlight>
        Cestería Vicent, S.L. asume que usted acepta el uso de cookies si continúa navegando,
        previa información a través del correspondiente aviso, de acuerdo a la legislación vigente.
      </LegalHighlight>

      <LegalDivider />

      <div className="flex flex-wrap gap-4">
        <Link
          href="/privacidad"
          className="font-sans text-[0.65rem] tracking-[0.12em] uppercase transition-colors duration-200 hover:text-gold"
          style={{ color: 'var(--color-text-dim)' }}
        >
          Política de Privacidad →
        </Link>
        <Link
          href="/aviso-legal"
          className="font-sans text-[0.65rem] tracking-[0.12em] uppercase transition-colors duration-200 hover:text-gold"
          style={{ color: 'var(--color-text-dim)' }}
        >
          Aviso Legal →
        </Link>
      </div>

    </LegalLayout>
  )
}

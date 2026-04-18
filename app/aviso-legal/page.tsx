import type { Metadata } from 'next'
import {
  LegalLayout, LegalH2, LegalP, LegalUl, LegalLi,
  LegalDivider, LegalHighlight,
} from '@/components/legal/LegalLayout'

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Aviso legal de Cestería Vicent, S.L. Datos identificativos, propiedad intelectual y condiciones de uso del sitio web.',
  robots: { index: false },
}

export default function AvisoLegalPage() {
  return (
    <LegalLayout
      title="Aviso Legal"
      subtitle="Información legal · Cestería Vicent"
      lastUpdated="Junio 2025"
    >

      <LegalHighlight>
        En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002,
        de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico,
        a continuación se reflejan los siguientes datos.
      </LegalHighlight>

      <LegalH2>1. Datos identificativos</LegalH2>
      <LegalUl>
        <LegalLi><strong>Titular:</strong> Cestería Vicent, S.L.</LegalLi>
        <LegalLi><strong>NIF:</strong> B46301503</LegalLi>
        <LegalLi><strong>Domicilio Social:</strong> C/ Leonardo Carreres, 24, Valencia</LegalLi>
        <LegalLi><strong>Correo Electrónico:</strong> cesteriavicent@cesteriavicent.es</LegalLi>
      </LegalUl>

      <LegalDivider />

      <LegalH2>2. Usuarios</LegalH2>
      <LegalP>
        El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho
        acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.
      </LegalP>

      <LegalDivider />

      <LegalH2>3. Propiedad intelectual e industrial</LegalH2>
      <LegalP>
        Cestería Vicent, S.L. por sí o como cesionaria, es titular de todos los derechos de
        propiedad intelectual e industrial de su página web, así como de los elementos contenidos
        en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos;
        marcas o logotipos, combinaciones de colores, estructura y diseño, etc.).
      </LegalP>
      <LegalP>
        Todos los derechos reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo
        segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción,
        la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de
        la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier
        soporte y por cualquier medio técnico, sin la autorización de Cestería Vicent, S.L.
      </LegalP>

      <LegalDivider />

      <LegalH2>4. Exclusión de garantías y responsabilidad</LegalH2>
      <LegalP>
        Cestería Vicent, S.L. no se hace responsable, en ningún caso, de los daños y perjuicios de
        cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en
        los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas
        maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas
        tecnológicas necesarias para evitarlo.
      </LegalP>

      <LegalDivider />

      <LegalH2>5. Modificaciones</LegalH2>
      <LegalP>
        Cestería Vicent, S.L. se reserva el derecho de efectuar sin previo aviso las modificaciones
        que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los
        contenidos y servicios que se presten a través de la misma como la forma en la que éstos
        aparezcan presentados o localizados en su portal.
      </LegalP>

      <LegalDivider />

      <LegalH2>6. Legislación aplicable y jurisdicción</LegalH2>
      <LegalP>
        La relación entre Cestería Vicent, S.L. y el USUARIO se regirá por la normativa española
        vigente y cualquier controversia se someterá a los Juzgados y tribunales competentes.
      </LegalP>

    </LegalLayout>
  )
}

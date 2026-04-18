import type { Metadata } from 'next'
import {
  LegalLayout, LegalH2, LegalP, LegalUl, LegalLi,
  LegalDivider, LegalHighlight,
} from '@/components/legal/LegalLayout'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de Cestería Vicent, S.L. Responsable del tratamiento, finalidad, legitimación y derechos ARCO.',
  robots: { index: false },
}

export default function PrivacidadPage() {
  return (
    <LegalLayout
      title="Política de Privacidad"
      subtitle="Protección de datos · RGPD"
      lastUpdated="Junio 2025"
    >

      <LegalHighlight>
        De acuerdo con lo establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del
        Consejo, de 27 de abril de 2016 (RGPD), y la Ley Orgánica 3/2018, de 5 de diciembre, de
        Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), se informa
        que los datos personales recabados a través de esta web serán tratados por Cestería Vicent,
        S.L.
      </LegalHighlight>

      <LegalH2>1. Responsable del tratamiento</LegalH2>
      <LegalUl>
        <LegalLi><strong>Responsable:</strong> Cestería Vicent, S.L.</LegalLi>
        <LegalLi><strong>NIF:</strong> B46301503</LegalLi>
        <LegalLi><strong>Dirección:</strong> C/ Leonardo Carreres, 24, Valencia</LegalLi>
        <LegalLi><strong>Email:</strong> cesteriavicent@cesteriavicent.es</LegalLi>
      </LegalUl>

      <LegalDivider />

      <LegalH2>2. Finalidad del tratamiento</LegalH2>
      <LegalP>
        Los datos personales facilitados a través del sitio web serán tratados con las siguientes
        finalidades:
      </LegalP>
      <LegalUl>
        <LegalLi>
          Atender a las consultas, solicitudes o peticiones realizadas por los usuarios a través
          de los formularios de contacto o correo electrónico.
        </LegalLi>
        <LegalLi>
          Gestionar las relaciones comerciales y el envío de presupuestos o información sobre
          nuestros productos.
        </LegalLi>
        <LegalLi>
          Cumplir con las obligaciones legales derivadas de las relaciones comerciales establecidas.
        </LegalLi>
      </LegalUl>

      <LegalDivider />

      <LegalH2>3. Conservación de los datos</LegalH2>
      <LegalP>
        Los datos proporcionados se conservarán mientras se mantenga la relación comercial, no se
        solicite su supresión por el interesado, o durante los años necesarios para cumplir con las
        obligaciones legales.
      </LegalP>

      <LegalDivider />

      <LegalH2>4. Legitimación del tratamiento</LegalH2>
      <LegalP>
        La base legal para el tratamiento de los datos es el consentimiento del usuario prestado
        mediante la aceptación de la presente política, así como, en su caso, la ejecución de un
        contrato o medidas precontractuales cuando se solicite información comercial o presupuestos.
      </LegalP>

      <LegalDivider />

      <LegalH2>5. Destinatarios</LegalH2>
      <LegalP>
        Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal o
        sea estrictamente necesario para la prestación de un servicio (como asesorías fiscales o
        proveedores de hosting), los cuales estarán sujetos a sus correspondientes contratos de
        encargo de tratamiento.
      </LegalP>

      <LegalDivider />

      <LegalH2>6. Derechos de los interesados</LegalH2>
      <LegalP>
        Como interesado, usted tiene derecho a obtener confirmación sobre si en Cestería Vicent,
        S.L. estamos tratando sus datos personales, así como a:
      </LegalP>
      <LegalUl>
        <LegalLi>Acceder a sus datos personales.</LegalLi>
        <LegalLi>Solicitar la rectificación de los datos inexactos.</LegalLi>
        <LegalLi>Solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios.</LegalLi>
        <LegalLi>Solicitar la limitación del tratamiento.</LegalLi>
        <LegalLi>Oponerse al tratamiento.</LegalLi>
        <LegalLi>Solicitar la portabilidad de los datos.</LegalLi>
      </LegalUl>
      <LegalHighlight>
        Puede ejercer estos derechos enviando un correo electrónico a{' '}
        <strong>cesteriavicent@cesteriavicent.es</strong>, adjuntando una copia de su DNI o
        documento de identidad. Asimismo, tiene derecho a presentar una reclamación ante la Agencia
        Española de Protección de Datos (AEPD).
      </LegalHighlight>

    </LegalLayout>
  )
}

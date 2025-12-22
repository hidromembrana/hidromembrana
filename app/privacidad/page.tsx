import { PageHeader } from "@/components/page-header"

export const metadata = {
    title: "Políticas de Privacidad | Hidromembrana",
    description: "Política de privacidad y protección de datos personales de Hidromembrana.",
}

export default function PrivacidadPage() {
    return (
        <div className="bg-background min-h-screen">
            <PageHeader
                title="Políticas de Privacidad"
                description="Cómo protegemos y utilizamos sus datos."
            />

            <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 max-w-4xl">
                <div className="prose prose-blue max-w-none dark:prose-invert">
                    <p className="lead">
                        Hidromembrana valora su privacidad y se compromete a proteger los datos personales de sus clientes y usuarios, en cumplimiento con la Ley N° 19.628 sobre Protección de la Vida Privada.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">1. Información Recolectada</h2>
                    <p>
                        A través de nuestros formularios de "Contacto" y "Cotizador", recolectamos la siguiente información necesaria para la gestión comercial:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li><strong>Datos de Identificación:</strong> Nombre completo, correo electrónico y número de teléfono.</li>
                        <li><strong>Datos Corporativos (Opcional):</strong> Nombre de la empresa o razón social.</li>
                        <li><strong>Datos del Proyecto:</strong> Ubicación geográfica de la obra y detalles técnicos (medidas, tipo de geomembrana, requerimientos de instalación).</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4">2. Uso de la Información</h2>
                    <p>
                        Los datos proporcionados serán utilizados exclusivamente para los siguientes fines:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Procesar su solicitud de cotización y verificar la factibilidad técnica del proyecto.</li>
                        <li>Contactar al usuario para entregar precios, resolver dudas técnicas o coordinar visitas a terreno.</li>
                        <li>Gestión administrativa interna (emisión de órdenes de compra o facturas si se concreta el servicio).</li>
                    </ul>
                    <p className="mt-4 font-medium">
                        Hidromembrana declara explícitamente que no vende, arrienda ni cede sus bases de datos a terceros con fines publicitarios.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">3. Comunicación vía WhatsApp y Canales Digitales</h2>
                    <p>
                        Al proporcionar su número telefónico en nuestros formularios, el usuario acepta expresamente y autoriza a Hidromembrana a contactarlo a través de llamadas telefónicas o mensajería instantánea (WhatsApp) con el fin de agilizar el proceso de cotización, envío de fichas técnicas o coordinación logística.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">4. Seguridad de los Datos</h2>
                    <p>
                        Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la alteración. Sin embargo, el usuario reconoce que ninguna transmisión de datos por Internet es 100% invulnerable.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">5. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)</h2>
                    <p>
                        El usuario es dueño de su información y tiene derecho a:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Saber qué datos tenemos sobre él.</li>
                        <li>Solicitar la corrección de datos erróneos.</li>
                        <li>Solicitar la eliminación de sus datos de nuestros registros.</li>
                    </ul>
                    <p className="mt-4">
                        Para ejercer cualquiera de estos derechos, el usuario debe enviar una solicitud por escrito al correo electrónico: <a href="mailto:contacto@hidromembrana.cl" className="text-brand-blue hover:underline">contacto@hidromembrana.cl</a>. Su solicitud será procesada en un plazo razonable conforme a la ley.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">6. Uso de Cookies</h2>
                    <p>
                        Este sitio web puede utilizar cookies y tecnologías de rastreo sencillas para mejorar la experiencia de navegación y obtener estadísticas anónimas de uso (por ejemplo, Google Analytics). El usuario puede configurar su navegador para rechazar estas cookies, aunque esto podría afectar la funcionalidad de ciertos formularios.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">7. Cambios a la Política de Privacidad</h2>
                    <p>
                        Hidromembrana se reserva el derecho de modificar esta política para adaptarla a novedades legislativas o prácticas comerciales. Se recomienda al usuario revisar esta página periódicamente.
                    </p>
                </div>
            </div>
        </div>
    )
}

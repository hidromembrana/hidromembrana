import { PageHeader } from "@/components/page-header"

export const metadata = {
    title: "Términos y Condiciones | Hidromembrana",
    description: "Términos y condiciones de uso del sitio web y servicios de Hidromembrana.",
}

export default function TerminosPage() {
    return (
        <div className="bg-background min-h-screen">
            <PageHeader
                title="Términos y Condiciones"
                description="Regulaciones de uso, cotización y servicios."
            />

            <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 max-w-4xl">
                <div className="prose prose-blue max-w-none dark:prose-invert">
                    <p className="text-sm text-muted-foreground mb-8">Última actualización: Diciembre 2025</p>

                    <p className="lead">
                        Bienvenido al sitio web de Hidromembrana. A continuación, se detallan los términos y condiciones (en adelante, los "Términos") que regulan el uso de nuestro catálogo digital y servicios de cotización. Al acceder, navegar y utilizar este sitio web, usted acepta estar sujeto a las siguientes disposiciones.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">1. Objeto y Naturaleza del Sitio</h2>
                    <p>
                        El sitio web de Hidromembrana tiene una finalidad estrictamente informativa y comercial. Funciona como un catálogo digital para la exhibición de productos (geomembranas, geotextiles) y servicios (instalación, termofusión), permitiendo a los usuarios generar solicitudes de cotización. Importante: Este sitio web no realiza ventas directas ni transacciones monetarias en línea. El envío de formularios o solicitudes no constituye una compraventa perfeccionada, sino una intención de compra sujeta a confirmación comercial.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">2. Especificaciones de Productos y Servicios</h2>
                    <p>
                        Hidromembrana realiza sus mejores esfuerzos para que la información técnica (espesores en mm, dimensiones de rollos, materialidad HDPE/PVC, fichas técnicas) sea exacta. Sin embargo:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Las imágenes son referenciales y podrían no representar exactamente el producto final o la marca específica disponible en stock al momento de la compra.</li>
                        <li>La disponibilidad de productos (stock) está sujeta a confirmación por parte de nuestro equipo de ventas una vez recibida la solicitud.</li>
                        <li>Los servicios de instalación y termofusión están sujetos a factibilidad técnica dependiendo de las condiciones del terreno y la ubicación de la faena.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4">3. Proceso de Cotización</h2>
                    <p>
                        El usuario podrá utilizar los formularios de "Cotizador" o "Contacto" para solicitar precios. El proceso opera de la siguiente manera:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>El usuario envía sus requerimientos (tipo de material, m², ubicación del proyecto).</li>
                        <li>Hidromembrana recibe la solicitud y verifica stock y factibilidad.</li>
                        <li>Un ejecutivo comercial contactará al usuario vía correo electrónico o teléfono/WhatsApp para entregar una oferta formal.</li>
                        <li>La relación contractual de compraventa o prestación de servicios solo se entenderá perfeccionada una vez que el cliente acepte formalmente la cotización enviada por el ejecutivo y se proceda a la facturación y pago según los medios acordados de forma privada.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4">4. Precios</h2>
                    <p>
                        Los precios mostrados en el sitio (si los hubiere) o entregados vía cotización son valores netos (sin IVA), a menos que se indique expresamente lo contrario. Los precios están sujetos a variación por condiciones de mercado, costos de materias primas o tipo de cambio, y solo se congelan una vez emitida y vigente la cotización formal.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">5. Despachos y Ejecución de Servicios</h2>
                    <p>
                        Dado que nuestros productos y servicios están orientados a proyectos de infraestructura, minería y agricultura:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li><strong>Tiempos:</strong> Los plazos de entrega e instalación se acordarán caso a caso con el cliente, dependiendo de la ubicación geográfica (Región Metropolitana, Ovalle o resto de Chile) y la magnitud del proyecto.</li>
                        <li><strong>Costos de Envío:</strong> Los costos de flete no están incluidos automáticamente y se calcularán en base al volumen de carga y destino.</li>
                        <li><strong>Recepción en Obra:</strong> Es responsabilidad del cliente asegurar las condiciones de acceso para la descarga de materiales o el ingreso de maquinaria de termofusión.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4">6. Propiedad Intelectual</h2>
                    <p>
                        Todo el contenido alojado o puesto a disposición en este sitio, como textos, gráficos, logotipos, iconos de botones, imágenes y fichas técnicas, es propiedad de Hidromembrana o de sus proveedores de contenido, y está protegido por las leyes de propiedad intelectual chilenas e internacionales. Queda prohibido el uso indebido, copia o reproducción de la marca sin autorización escrita.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">7. Limitación de Responsabilidad</h2>
                    <p>
                        Hidromembrana no garantiza que el sitio web esté libre de errores, virus o interrupciones. No nos hacemos responsables por daños directos o indirectos que puedan derivarse del uso de la información contenida en este sitio web o de la imposibilidad de uso del mismo.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">8. Legislación Aplicable y Jurisdicción</h2>
                    <p>
                        Estos Términos y Condiciones se rigen e interpretan de acuerdo con las leyes de la República de Chile. Para cualquier controversia que pueda surgir en relación con la validez, interpretación o cumplimiento de estos términos, las partes se someten a la jurisdicción de los Tribunales Ordinarios de Justicia de la comuna de Ovalle o de la Región Metropolitana, según determine Hidromembrana en función de su domicilio comercial principal.
                    </p>
                </div>
            </div>
        </div>
    )
}

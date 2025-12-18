import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "¿Realizan servicios de instalación en todo el país?",
        answer: "Sí, contamos con equipos móviles para realizar instalaciones de geomembranas y geotextiles en todo el territorio nacional.",
    },
    {
        question: "¿Qué tipos de geomembranas ofrecen?",
        answer: "Nos especializamos en geomembranas de HDPE (Polietileno de Alta Densidad), disponibles tanto en certificación Norma GM13 como en calidad Nominal, en espesores de 0.5mm a 2.5mm.",
    },
    {
        question: "¿Venden insumos de soldadura?",
        answer: "Sí, suministramos soldadura de aporte HDPE de alta calidad, ideal para los procesos de termofusión y reparaciones.",
    },
    {
        question: "¿Cómo puedo solicitar una cotización?",
        answer: "Puede solicitar una cotización a través de nuestro formulario de contacto en la web, enviándonos un correo o contactándonos directamente por WhatsApp.",
    },
]

export function FaqSection() {
    return (
        <section className="bg-background py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl space-y-6">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                            Preguntas Frecuentes
                        </h2>
                        <p className="text-muted-foreground">
                            Respuestas a las consultas más comunes de nuestros clientes.
                        </p>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left font-medium">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

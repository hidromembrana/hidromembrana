export type ProductCategory = "geomembrana" | "geotextil" | "insumos" | "servicios";



export interface Product {
    id: string;
    title: string;
    description: string;
    category: ProductCategory;
    href: string;
    imagePlaceholder?: string;
    images?: string[];
    features?: string[];
}

export const PRODUCTS: Product[] = [
    {
        id: "geomembrana-hdpe",
        title: "Geomembrana HDPE",
        description: "Lámina de Polietileno de Alta Densidad (HDPE). Disponible en versiones certificada GRI-GM13 y Nominal (Estándar). Máxima resistencia química y mecánica para proyectos de ingeniería hidráulica, minería y medio ambiente.",
        category: "geomembrana",
        href: "/productos/geomembrana-hdpe",
        imagePlaceholder: "GM",
        images: [
            "/geomembrana-hdpe-3.webp",
            "/geomembrana-hdpe-2.webp",
            "/geomembrana-hdpe.webp"
        ],
        features: [
            "Norma GRI-GM13 (Opción Certificada)",
            "Calidad Nominal (Opción Económica)",
            "Espesores: 0.5mm - 2.5mm",
            "Alta resistencia UV y química",
            "Garantía de durabilidad"
        ]
    },
    {
        id: "geotextil",
        title: "Geotextil",
        description: "Soluciones textiles integrales para separación, filtración, drenaje y refuerzo de suelos en obras civiles.",
        category: "geotextil",
        href: "/productos/geotextil",
        imagePlaceholder: "GT",
        images: ["/geotextil-no-tejido.webp", "/geotextil-no-tejido-2.webp"],
        features: ["Disponible en No Tejido", "Costo-eficiente", "Separación y filtración", "Protección de geomembranas"]
    },
    {
        id: "soldadura-hdpe",
        title: "Soldadura de Aporte HDPE",
        description: "Cordones de soldadura y material de aporte para termofusión de geomembranas HDPE.",
        category: "insumos",
        href: "/productos/soldadura-hdpe",
        imagePlaceholder: "S",
        images: ["/soldadura-de-aporte-hdpe.webp"],
        features: ["Compatibilidad 100% HDPE", "Para extrusoras y cuñas", "Alta pureza", "Diferentes diámetros"]
    },
    {
        id: "servicio-instalacion-reparacion",
        title: "Instalación o Reparación",
        description: "Servicio completo de instalación certificada y reparación de sistemas de impermeabilización.",
        category: "servicios",
        href: "/servicios",
        imagePlaceholder: "IR",
        features: ["Soldadura por termofusión", "Detección y reparación de fugas", "Personal certificado", "Pruebas de calidad en terreno"]
    }
];

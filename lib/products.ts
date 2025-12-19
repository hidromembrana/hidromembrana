export type ProductCategory = "geomembrana" | "geotextil" | "insumos" | "servicios";

export interface Product {
    id: string;
    title: string;
    description: string;
    category: ProductCategory;
    href: string;
    imagePlaceholder?: string;
    features?: string[];
}

export const PRODUCTS: Product[] = [
    {
        id: "geomembrana-hdpe-gm13",
        title: "Geomembrana HDPE (Norma GM13)",
        description: "Lámina de Polietileno de Alta Densidad certificada bajo norma GRIGM13. Máxima durabilidad y resistencia química para grandes proyectos y minería.",
        category: "geomembrana",
        href: "/productos/geomembrana-hdpe-gm13",
        imagePlaceholder: "GM",
        features: ["Certificación GRI-GM13", "Espesores: 0.5mm - 2.5mm", "Garantía extendida", "Resistencia UV superior"]
    },
    {
        id: "geomembrana-hdpe-nominal",
        title: "Geomembrana HDPE (Nominal)",
        description: "Lámina de Polietileno de Alta Densidad de calidad estándar. Solución eficiente y económica para proyectos de impermeabilización general.",
        category: "geomembrana",
        href: "/productos/geomembrana-hdpe-nominal",
        imagePlaceholder: "GN",
        features: ["Costo-eficiente", "Impermeabilización confiable", "Espesores estándar", "Alta resistencia mecánica"]
    },
    {
        id: "geotextil",
        title: "Geotextil",
        description: "Soluciones textiles integrales para separación, filtración, drenaje y refuerzo de suelos en obras civiles.",
        category: "geotextil",
        href: "/productos/geotextil",
        imagePlaceholder: "GT",
        features: ["Disponible en No Tejido", "Costo-eficiente"]
    },
    {
        id: "soldadura-hdpe",
        title: " Soldadura de Aporte HDPE",
        description: "Cordones de soldadura y material de aporte para termofusión de geomembranas HDPE.",
        category: "insumos",
        href: "/productos/soldadura-hdpe",
        imagePlaceholder: "S",
        features: ["Compatibilidad 100% HDPE", "Para extrusoras y cuñas", "Alta pureza", "Diferentes diámetros"]
    },
    {
        id: "servicio-instalacion-reparacion",
        title: "Instalación y Reparación",
        description: "Servicio completo de instalación certificada y reparación de sistemas de impermeabilización.",
        category: "servicios",
        href: "/servicios",
        imagePlaceholder: "IR",
        features: ["Soldadura por termofusión", "Detección y reparación de fugas", "Personal certificado", "Pruebas de calidad en terreno"]
    }
];

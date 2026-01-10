export const IS_UNDER_CONSTRUCTION = process.env.IS_UNDER_CONSTRUCTION === 'true';

export const CONTACT_INFO = {
    whatsapp: {
        number: "+56 9 9813 1298",
        raw: "56998131298",
        message: "Hola! Me gustaría cotizar...",
        get url() {
            return `https://wa.me/${this.raw}?text=${encodeURIComponent(this.message)}`;
        }
    },
    email: "contacto@hidromembrana.cl",
    address: "Ovalle, Chile"
};

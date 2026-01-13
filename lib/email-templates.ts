
export const generateContactEmail = (data: any) => {
  return `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="color: #004e98;">📩 Nuevo Mensaje de Contacto</h2>
      <p>Has recibido un nuevo mensaje desde el formulario de contacto:</p>
      <ul>
        <li><strong>Nombre:</strong> ${data.name}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Teléfono:</strong> ${data.phone || 'No indicado'}</li>
      </ul>
      <p><strong>Mensaje:</strong></p>
      <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #004e98;">
        ${data.message.replace(/\n/g, '<br>')}
      </div>
    </div>
  `;
};

export const generateLeadEmail = (data: any) => {
  return `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="color: #2e7d32;">🚀 Nuevo Lead Capturado</h2>
      <p>Un usuario ha iniciado el proceso de cotización o dejado sus datos:</p>
      <ul>
        <li><strong>Nombre/Empresa:</strong> ${data.name}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Teléfono:</strong> ${data.phone || 'No indicado'}</li>
      </ul>
      <p><em>Este lead proviene del diálogo de captura inicial.</em></p>
    </div>
  `;
};

export const generateQuotationEmail = (data: any) => {
  const { customer, items } = data;

  const translations: Record<string, string> = {
    length: 'Largo',
    width: 'Ancho',
    height: 'Altura',
    anchorage: 'Anclaje',
    slope: 'Talud',
    squareMeters: 'Metros Cuadrados',
    diameter: 'Diámetro',
    format: 'Formato',
    hasMaterial: '¿Tiene Material?',
    materialType: 'Tipo de Material',
    yes: 'Sí, solo instalación',
    no: 'No, necesito materiales',
    'geomembrana-hdpe': 'Geomembrana HDPE',
    'geotextil': 'Geotextil',
    '10kg': 'Rollo 10 Kg',
    '15kg': 'Rollo 15 Kg',
    '4mm': '4 mm',
    '5mm': '5 mm',
    '6mm': '6 mm',
    'calculationMode': 'Cálculo',
    'dimensions': 'Dimensiones',
    'total': 'M² Totales',
    'thickness': 'Espesor'
  };

  const itemsHtml = items.map((item: any) => {
    const configEntries = Object.entries(item.config || {}).map(([k, v]) => {
      const key = translations[k] || k;
      const value = translations[v as string] || v;
      return `${key}: ${value}`;
    });

    return `
    <tr style="border-bottom: 1px solid #eee;">
      <td style="padding: 10px;">${item.productName}</td>
      <td style="padding: 10px;">${item.quantity}</td>
      <td style="padding: 10px; font-size: 0.9em; color: #666;">
        ${configEntries.join(', ')}
      </td>
    </tr>
  `}).join('');

  return `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="color: #ff6f00;">💰 Nueva Solicitud de Cotización</h2>
      
      <h3>Datos del Cliente</h3>
      <ul>
        <li><strong>Nombre:</strong> ${customer.name}</li>
        <li><strong>Empresa:</strong> ${customer.company || 'No Indicado'}</li>
        <li><strong>Email:</strong> ${customer.email}</li>
        <li><strong>Teléfono:</strong> ${customer.phone}</li>
        <li><strong>Ubicación:</strong> ${customer.location}</li>
      </ul>

      <h3>Detalles del Proyecto</h3>
      <p>${customer.details || 'Sin detalles adicionales'}</p>

      <h3>Productos Solicitados</h3>
      <table style="width: 100%; border-collapse: collapse; text-align: left;">
        <thead>
          <tr style="background-color: #f5f5f5;">
            <th style="padding: 10px;">Producto</th>
            <th style="padding: 10px;">Cantidad</th>
            <th style="padding: 10px;">Configuración</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHtml}
        </tbody>
      </table>
    </div>
  `;
};

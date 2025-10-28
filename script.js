// Proyecto de Aula Data Structure
const courseData = {
    topics: [
        {
            id: 1,
            title: "La Transformación Digital",
            description: "Innovación empresarial, gestión de producción, marketing, RRHH",
            icon: "fas fa-digital-tachograph",
            color: "#28a745",
            status: "completed"
        },
        {
            id: 2,
            title: "Caso de Estudio",
            description: "Metodologías de análisis, evaluación económica",
            icon: "fas fa-chart-line",
            color: "#ffc107",
            status: "completed"
        },
        {
            id: 3,
            title: "El Gobierno y la Gestión de las TIC",
            description: "Gobierno corporativo, marcos de referencia, normativas ISO",
            icon: "fas fa-cogs",
            color: "#007bff",
            status: "completed"
        },
        {
            id: 4,
            title: "El Gobierno Corporativo de las TIC",
            description: "Norma ISO 38500, principios de gobierno, implementación y mejores prácticas",
            icon: "fas fa-building",
            color: "#6f42c1",
            status: "completed"
        },
        {
            id: 5,
            title: "COBIT",
            description: "Objetivos de Control para la Información y Tecnologías Relacionadas",
            icon: "fas fa-shield-alt",
            color: "#fd7e14",
            status: "pending"
        },
        {
            id: 6,
            title: "ITIL",
            description: "La Biblioteca de Infraestructura de Tecnologías de la Información",
            icon: "fas fa-book",
            color: "#dc3545",
            status: "pending"
        },
        {
            id: 7,
            title: "Sistema de Gestión de Servicios",
            description: "Por desarrollar según avance del curso",
            icon: "fas fa-server",
            color: "#795548",
            status: "pending"
        },
        {
            id: 8,
            title: "Gestión de Activos de Software",
            description: "Por desarrollar según avance del curso",
            icon: "fas fa-laptop-code",
            color: "#343a40",
            status: "pending"
        },
        {
            id: 9,
            title: "Gestión de la Continuidad del Negocio",
            description: "Por desarrollar según avance del curso",
            icon: "fas fa-sync-alt",
            color: "#6c757d",
            status: "pending"
        }
    ]
};

// Nueva estructura de contenido del proyecto
const projectContent = {
    conceptosClave: {
            title: "Conceptos Clave",
        description: "Los conceptos más relevantes de cada tema del curso",
        icon: "fas fa-lightbulb",
        color: "#28a745",
            items: [
            {
                tema: "Tema 1: La Transformación Digital",
                conceptos: [
                "I+D+i: Investigación, Desarrollo e innovación",
                "SCM: Supply Chain Management (Gestión de cadena de suministro)",
                "CRM: Customer Relationship Management (Gestión de relaciones con clientes)",
                "ERP: Enterprise Resource Planning (Planificación de recursos empresariales)",
                "Logística inversa: Gestión de productos de desecho y devoluciones"
            ]
        },
            {
                tema: "Tema 2: Caso de Estudio",
                conceptos: [
                "EVS: Estudio de Viabilidad de Sistemas",
                "ROI: Return on Investment (Retorno de inversión)",
                "VAN: Valor Actual Neto",
                "TIR: Tasa Interna de Retorno",
                "Val IT: Metodología de evaluación (Estrategia, Arquitectura, Valor, Entrega)",
                "Análisis de Riesgos: Probabilidad, Impacto, Mitigación"
            ]
        },
            {
                tema: "Tema 3: El Gobierno y la Gestión de las TIC",
                conceptos: [
                    "Gobierno de las TI: Alineamiento estratégico con la organización",
                    "Diferencias entre Gobierno (estratégico) y Gestión (táctico) de las TSI",
                    "Marcos de referencia: COBIT 2019, ITIL 4, Val IT",
                    "Normativas ISO: ISO 38500, ISO 20000, ISO 27001",
                    "Certificaciones AENOR: UNE 71599 para gobierno corporativo"
                ]
            },
            {
                tema: "Tema 4: El Gobierno Corporativo de las TIC",
                conceptos: [
                    "ISO/IEC 38500:2008: Norma internacional para el buen gobierno corporativo",
                    "Los 6 Principios: Responsabilidad, Estrategia, Adquisición, Rendimiento, Conformidad, Factor Humano",
                    "Funciones de Gobierno: Evaluación, Dirección, Monitorización",
                    "Beneficios económicos: 20% superior según estudios del MIT (Peter Weill)",
                    "Distinción entre gobierno y gestión de las TIC"
                    ]
                }
            ]
        },
    casosEstudio: {
        title: "Casos de Estudio",
        description: "Casos de estudio detallados de cada tema del curso",
        icon: "fas fa-flask",
        color: "#ffc107",
            items: [
                {
                tema: "Tema 1: La Transformación Digital",
                casos: [
                    {
                        titulo: "Amazon: De librería online a ecosistema global",
                        descripcion: "Amazon comenzó como una librería online en 1994 y se transformó en el ecosistema global más grande del mundo.",
                        desarrollo: "La transformación incluyó: 1) Expansión de productos más allá de libros, 2) Desarrollo de AWS (Amazon Web Services), 3) Implementación de logística avanzada con centros de distribución, 4) Creación de servicios digitales como Prime Video y Alexa, 5) Adquisición estratégica de empresas como Whole Foods. Esta transformación digital le permitió a Amazon generar ingresos de más de $470 mil millones en 2021.",
                        lecciones: "La clave del éxito fue la visión a largo plazo, la inversión continua en tecnología y la capacidad de adaptarse a las necesidades cambiantes del mercado."
                    },
                    {
                        titulo: "Netflix: De alquiler de DVDs a streaming global",
                        descripcion: "Netflix revolucionó la industria del entretenimiento transformándose de un servicio de alquiler de DVDs a la plataforma de streaming líder mundial.",
                        desarrollo: "La transformación incluyó: 1) Transición del modelo físico al digital, 2) Desarrollo de algoritmos de recomendación personalizados, 3) Producción de contenido original (Netflix Originals), 4) Expansión global a más de 190 países, 5) Inversión en tecnología de streaming de alta calidad. Netflix pasó de tener 1 millón de suscriptores en 2002 a más de 220 millones en 2022.",
                        lecciones: "La anticipación de tendencias tecnológicas y la inversión en contenido propio fueron factores clave para el éxito de la transformación."
                    }
                ]
            },
            {
                tema: "Tema 2: Caso de Estudio",
                casos: [
                    {
                        titulo: "Botanas del Valle: Implementación de ERP",
                        descripcion: "PYME del sector alimentario que enfrentaba problemas en recolección, producción, distribución y cobros.",
                        desarrollo: "Situación inicial: La empresa tenía procesos manuales que generaban ineficiencias. Problemas identificados: 1) Falta de control en la recolección de materias primas, 2) Producción sin planificación adecuada, 3) Distribución desorganizada, 4) Cobros tardíos. Solución implementada: ERP integrado que incluyó módulos de: 1) Gestión de proveedores y compras, 2) Planificación de producción, 3) Control de inventarios, 4) Gestión de ventas y facturación, 5) Reportes gerenciales. Resultados: Incremento del 25% en la eficiencia operativa y reducción del 30% en tiempos de procesamiento.",
                        lecciones: "La implementación exitosa requirió análisis detallado de procesos, capacitación del personal y gestión del cambio organizacional."
                    }
                ]
            },
            {
                tema: "Tema 3: El Gobierno y la Gestión de las TIC",
                casos: [
                    {
                        titulo: "Bancolombia: Implementación de COBIT para auditoría y control",
                        descripcion: "El banco más grande de Colombia implementó COBIT para mejorar su gobierno de TI y cumplir con regulaciones financieras.",
                        desarrollo: "Contexto: Bancolombia necesitaba fortalecer su gobierno de TI para cumplir con regulaciones del sector financiero. Implementación: 1) Evaluación del estado actual usando COBIT 2019, 2) Identificación de los 5 dominios más críticos (EDM, APO, BAI, DSS, MEA), 3) Selección de 15 objetivos de control prioritarios, 4) Desarrollo de políticas y procedimientos, 5) Capacitación de equipos técnicos y gerenciales. Resultados: Mejora del 40% en tiempos de auditoría, reducción del 25% en riesgos operacionales, y certificación ISO 27001.",
                        lecciones: "La implementación de marcos de gobierno requiere compromiso de la alta dirección y recursos dedicados para la capacitación continua."
                    }
                ]
            },
            {
                tema: "Tema 4: El Gobierno Corporativo de las TIC",
                casos: [
                    {
                        titulo: "Empresa Manufacturera: Implementación de ISO 38500",
                        descripcion: "Empresa manufacturera mediana que implementó ISO 38500 para mejorar su gobierno corporativo de TIC.",
                        desarrollo: "Situación inicial: La empresa tenía inversiones dispersas en TIC sin una estrategia clara. Implementación: 1) Evaluación del estado actual del gobierno de TIC, 2) Aplicación de los 6 principios de ISO 38500: Responsabilidad (matriz RACI), Estrategia (plan estratégico de TIC), Adquisición (proceso de evaluación de proveedores), Rendimiento (dashboard de KPIs), Conformidad (auditorías regulares), Factor Humano (programas de capacitación), 3) Establecimiento de procesos de evaluación, dirección y monitorización. Resultados: Incremento del 20% en ROI de inversiones TIC, reducción del 35% en riesgos tecnológicos, y mejora en la satisfacción de usuarios internos.",
                        lecciones: "La implementación exitosa requiere alineación con objetivos de negocio y participación activa de todas las áreas de la organización."
                    }
                    ]
                }
            ]
        },
    autoevaluacion: {
        title: "Autoevaluación",
        description: "Tests de preguntas para evaluar el conocimiento de cada tema",
        icon: "fas fa-clipboard-check",
        color: "#007bff",
            items: [
                {
                tema: "Tema 1: La Transformación Digital",
                preguntas: [
                    {
                        pregunta: "¿Qué significa I+D+i?",
                        opciones: [
                            "Investigación, Desarrollo e innovación",
                            "Información, Datos e inteligencia",
                            "Integración, Desarrollo e innovación",
                            "Investigación, Datos e innovación"
                        ],
                        respuesta: 0,
                        explicacion: "I+D+i se refiere a Investigación, Desarrollo e innovación, representando el proceso completo de generación de conocimiento y su aplicación práctica."
                    },
                    {
                        pregunta: "¿Cuál es la diferencia principal entre ERP y CRM?",
                        opciones: [
                            "ERP gestiona recursos internos, CRM gestiona relaciones con clientes",
                            "ERP es para grandes empresas, CRM para pequeñas",
                            "ERP es más caro que CRM",
                            "No hay diferencia, son lo mismo"
                        ],
                        respuesta: 0,
                        explicacion: "ERP (Enterprise Resource Planning) gestiona todos los recursos internos de la empresa, mientras que CRM (Customer Relationship Management) se enfoca específicamente en las relaciones con clientes."
                    },
                    {
                        pregunta: "¿Qué es la logística inversa?",
                        opciones: [
                            "Gestión del flujo de productos desde el punto de consumo hasta el origen",
                            "Logística que funciona en sentido contrario",
                            "Sistema de devoluciones únicamente",
                            "Gestión de inventarios al revés"
                        ],
                        respuesta: 0,
                        explicacion: "La logística inversa es el proceso de gestión del flujo de productos desde el punto de consumo hasta el punto de origen para recuperar valor o disponer adecuadamente."
                    },
                    {
                        pregunta: "¿Cuál es el objetivo principal de la transformación digital?",
                        opciones: [
                            "Mejorar la eficiencia operativa y crear nuevas oportunidades de negocio",
                            "Reducir costos únicamente",
                            "Implementar tecnología por moda",
                            "Reemplazar completamente a los empleados"
                        ],
                        respuesta: 0,
                        explicacion: "La transformación digital busca mejorar la eficiencia operativa, optimizar procesos y crear nuevas oportunidades de negocio mediante el uso estratégico de la tecnología."
                    },
                    {
                        pregunta: "¿Qué caracteriza a las tecnologías emergentes?",
                        opciones: [
                            "Son nuevas tecnologías con potencial de impacto significativo",
                            "Son tecnologías obsoletas",
                            "Son tecnologías muy costosas",
                            "Son tecnologías solo para grandes empresas"
                        ],
                        respuesta: 0,
                        explicacion: "Las tecnologías emergentes son aquellas que están en desarrollo o en las primeras etapas de adopción y tienen el potencial de generar un impacto significativo en la sociedad o la industria."
                    }
                ]
            },
            {
                tema: "Tema 2: Caso de Estudio",
                preguntas: [
                    {
                        pregunta: "¿Qué significa EVS?",
                        opciones: [
                            "Estudio de Viabilidad de Sistemas",
                            "Evaluación de Valor de Sistemas",
                            "Estudio de Ventas de Sistemas",
                            "Evaluación de Versión de Sistemas"
                        ],
                        respuesta: 0,
                        explicacion: "EVS significa Estudio de Viabilidad de Sistemas, una metodología estructurada para evaluar la factibilidad técnica, económica y operativa de proyectos de sistemas de información."
                    },
                    {
                        pregunta: "¿Cuál es la fórmula del ROI?",
                        opciones: [
                            "ROI = (Beneficio Neto / Costo de Inversión) × 100",
                            "ROI = Costo de Inversión / Beneficio Neto",
                            "ROI = Beneficio Neto × Costo de Inversión",
                            "ROI = Beneficio Neto - Costo de Inversión"
                        ],
                        respuesta: 0,
                        explicacion: "La fórmula correcta del ROI es: ROI = (Beneficio Neto / Costo de Inversión) × 100, donde el Beneficio Neto son los ingresos generados menos los costos operativos."
                    },
                    {
                        pregunta: "¿Qué significa TIR?",
                        opciones: [
                            "Tasa Interna de Retorno",
                            "Tiempo Interno de Retorno",
                            "Tasa de Inversión de Retorno",
                            "Tiempo de Inversión de Retorno"
                        ],
                        respuesta: 0,
                        explicacion: "TIR significa Tasa Interna de Retorno, que es la tasa de descuento que hace que el VAN de un proyecto sea igual a cero, representando la rentabilidad esperada de la inversión."
                    },
                    {
                        pregunta: "¿Cuál es el objetivo principal del EVS?",
                        opciones: [
                            "Evaluar la viabilidad técnica, económica y operativa de un proyecto",
                            "Calcular únicamente el costo del proyecto",
                            "Seleccionar el mejor proveedor",
                            "Implementar el sistema directamente"
                        ],
                        respuesta: 0,
                        explicacion: "El Estudio de Viabilidad de Sistemas (EVS) tiene como objetivo principal evaluar la factibilidad técnica, económica y operativa de un proyecto antes de su implementación."
                    },
                    {
                        pregunta: "¿Qué incluye el análisis de riesgos en un proyecto?",
                        opciones: [
                            "Identificación, evaluación y planificación de mitigación de riesgos",
                            "Solo la identificación de riesgos",
                            "Únicamente el cálculo de probabilidades",
                            "Solo la evaluación del impacto"
                        ],
                        respuesta: 0,
                        explicacion: "El análisis de riesgos incluye la identificación de riesgos potenciales, la evaluación de su probabilidad e impacto, y la planificación de estrategias de mitigación."
                    }
                ]
            },
            {
                tema: "Tema 3: El Gobierno y la Gestión de las TIC",
                preguntas: [
                    {
                        pregunta: "¿Cuál es la diferencia principal entre Gobierno y Gestión de las TIC?",
                        opciones: [
                            "Gobierno es estratégico, Gestión es táctico",
                            "Gobierno es táctico, Gestión es estratégico",
                            "No hay diferencia",
                            "Gobierno es más importante que Gestión"
                        ],
                        respuesta: 0,
                        explicacion: "El Gobierno de las TIC es estratégico (largo plazo, decisiones de alto nivel), mientras que la Gestión es táctico (corto y medio plazo, implementación diaria)."
                    },
                    {
                        pregunta: "¿Cuántos dominios tiene COBIT 2019?",
                        opciones: [
                            "5 dominios",
                            "4 dominios",
                            "6 dominios",
                            "3 dominios"
                        ],
                        respuesta: 0,
                        explicacion: "COBIT 2019 tiene 5 dominios principales: EDM (Evaluate, Direct, Monitor), APO (Align, Plan, Organize), BAI (Build, Acquire, Implement), DSS (Deliver, Service, Support), y MEA (Monitor, Evaluate, Assess)."
                    },
                    {
                        pregunta: "¿Cuántas prácticas tiene ITIL 4?",
                        opciones: [
                            "34 prácticas",
                            "26 prácticas",
                            "40 prácticas",
                            "30 prácticas"
                        ],
                        respuesta: 0,
                        explicacion: "ITIL 4 tiene 34 prácticas para la gestión del ciclo de vida de servicios de TI, organizadas en 4 dimensiones del modelo de servicio."
                    },
                    {
                        pregunta: "¿Qué es Val IT?",
                        opciones: [
                            "Marco para gestionar el valor de las inversiones en TI",
                            "Sistema de gestión de inventarios",
                            "Herramienta de desarrollo de software",
                            "Metodología de testing"
                        ],
                        respuesta: 0,
                        explicacion: "Val IT es un marco de referencia desarrollado por ISACA para ayudar a las organizaciones a gestionar el valor de sus inversiones en tecnología de la información."
                    },
                    {
                        pregunta: "¿Cuál es la diferencia entre Balanced Scorecard y otros marcos de medición?",
                        opciones: [
                            "Considera múltiples perspectivas: financiera, cliente, procesos internos y aprendizaje",
                            "Solo mide indicadores financieros",
                            "Se enfoca únicamente en procesos internos",
                            "Mide solo la satisfacción del cliente"
                        ],
                        respuesta: 0,
                        explicacion: "El Balanced Scorecard se diferencia por considerar cuatro perspectivas equilibradas: financiera, del cliente, de procesos internos y de aprendizaje y crecimiento."
                    }
                ]
            },
            {
                tema: "Tema 4: El Gobierno Corporativo de las TIC",
                preguntas: [
                    {
                        pregunta: "¿De qué año data la norma ISO/IEC 38500?",
                        opciones: [
                            "2008",
                            "2006",
                            "2009",
                            "2007"
                        ],
                        respuesta: 0,
                        explicacion: "La norma ISO/IEC 38500 fue publicada en junio de 2008, basada en una norma australiana precursora."
                    },
                    {
                        pregunta: "¿Cuántos principios tiene la norma ISO 38500?",
                        opciones: [
                            "6 principios",
                            "5 principios",
                            "7 principios",
                            "4 principios"
                        ],
                        respuesta: 0,
                        explicacion: "La norma ISO 38500 se basa en 6 principios: Responsabilidad, Estrategia, Adquisición, Rendimiento, Conformidad y Factor Humano."
                    },
                    {
                        pregunta: "Según Peter Weill del MIT, ¿qué beneficio económico reporta una buena gobernanza de las TIC?",
                        opciones: [
                            "20% superior",
                            "25% superior",
                            "15% superior",
                            "30% superior"
                        ],
                        respuesta: 0,
                        explicacion: "Peter Weill del MIT asegura que una buena gobernanza de las TIC reporta beneficios económicos directos de un 20% superior a organizaciones con gobernanza poco efectiva."
                    },
                    {
                        pregunta: "¿Cuáles son las tres funciones principales del gobierno de las TIC según ISO 38500?",
                        opciones: [
                            "Evaluación, Dirección y Monitorización",
                            "Planificación, Ejecución y Control",
                            "Análisis, Diseño e Implementación",
                            "Estrategia, Táctica y Operación"
                        ],
                        respuesta: 0,
                        explicacion: "Las tres funciones principales del gobierno de las TIC según ISO 38500 son: Evaluación (analizar el uso actual y futuro), Dirección (establecer políticas y estrategias) y Monitorización (supervisar el cumplimiento)."
                    },
                    {
                        pregunta: "¿Qué principio de ISO 38500 se refiere a la alineación de las TIC con los objetivos estratégicos?",
                        opciones: [
                            "Principio de Estrategia",
                            "Principio de Responsabilidad",
                            "Principio de Rendimiento",
                            "Principio de Conformidad"
                        ],
                        respuesta: 0,
                        explicacion: "El Principio de Estrategia establece que la estrategia de las TIC debe estar alineada con la estrategia de negocio de la organización para asegurar que las inversiones en TIC contribuyan a los objetivos corporativos."
                    }
                ]
            }
        ]
    }
};

// Variables globales para el estado de la aplicación
let currentSection = 'conceptosClave';
let currentTest = null;
let testResults = {};
let currentQuestion = 0;

// DOM Elements
let currentTab = 'overview';
let currentTopic = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadTopics();
    updateProgress();
});

function initializeApp() {
    // Set initial tab
    showTab('overview');
}

function setupEventListeners() {
    // Navigation tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            showTab(tabName);
        });
    });

    // Modal functionality removed - topics now open in separate pages
}

function showTab(tabName) {
    // Update navigation
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

    // Update content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');

    currentTab = tabName;
}

function loadTopics() {
    const topicsGrid = document.getElementById('topicsGrid');
    topicsGrid.innerHTML = '';

    courseData.topics.forEach(topic => {
        const topicCard = createTopicCard(topic);
        topicsGrid.appendChild(topicCard);
    });
}

function createTopicCard(topic) {
    const card = document.createElement('div');
    card.className = `topic-card ${topic.status}`;
    card.onclick = () => openTopicModal(topic.id);

    card.innerHTML = `
        <div class="topic-header">
            <div class="topic-icon" style="background-color: ${topic.color}">
                <i class="${topic.icon}"></i>
            </div>
            <div>
                <div class="topic-title">${topic.title}</div>
            </div>
        </div>
        <div class="topic-description">${topic.description}</div>
        <div class="topic-status">
            <span class="status-badge ${topic.status}">${getStatusText(topic.status)}</span>
        </div>
    `;

    return card;
}

// Funciones eliminadas - ahora se manejan a través del modal

function generateSectionHTML(content) {
    switch (content.title) {
        case 'Conceptos Clave':
            return generateConceptosHTML(content);
        case 'Casos de Estudio':
            return generateCasosHTML(content);
        case 'Autoevaluación':
            return generateAutoevaluacionHTML(content);
        default:
            return '<p>Contenido no disponible</p>';
    }
}

function generateConceptosHTML(content) {
    return content.items.map(item => `
        <div class="concepto-tema">
            <h3>${item.tema}</h3>
            <ul class="conceptos-list">
                ${item.conceptos.map(concepto => `
                    <li><i class="fas fa-check-circle"></i> ${concepto}</li>
                `).join('')}
            </ul>
        </div>
    `).join('');
}

function generateCasosHTML(content) {
    return content.items.map(item => `
        <div class="caso-tema">
            <h3>${item.tema}</h3>
            <div class="casos-grid">
                ${item.casos.map(caso => `
                    <div class="caso-card">
                        <h4>${caso.titulo}</h4>
                        <p class="caso-descripcion">${caso.descripcion}</p>
                        <div class="caso-desarrollo">
                            <h5>Desarrollo:</h5>
                            <p>${caso.desarrollo}</p>
                        </div>
                        <div class="caso-lecciones">
                            <h5>Lecciones aprendidas:</h5>
                            <p>${caso.lecciones}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function generateAutoevaluacionHTML(content) {
    return `
        <div class="autoevaluacion-container">
            <div class="test-selector">
                <h3>Selecciona un tema para evaluar:</h3>
                <div class="test-buttons">
                    ${content.items.map((item, index) => `
                        <button class="test-btn" onclick="startTest(${index})">
                            <i class="fas fa-play"></i>
                            ${item.tema}
                        </button>
                    `).join('')}
                </div>
            </div>
            <div id="test-container" style="display: none;">
                <div class="test-header">
                    <h3 id="test-title"></h3>
                    <div class="test-progress">
                        <span id="question-counter"></span>
                        <div class="progress-bar">
                            <div id="progress-fill"></div>
                        </div>
                    </div>
                </div>
                <div id="question-container"></div>
                <div id="test-results" style="display: none;"></div>
            </div>
        </div>
    `;
}

function startTest(temaIndex) {
    const tema = projectContent.autoevaluacion.items[temaIndex];
    currentTest = tema;
    currentQuestion = 0;
    testResults = { correctas: 0, total: tema.preguntas.length };
    
    document.getElementById('test-container').style.display = 'block';
    document.getElementById('test-title').textContent = tema.tema;
    
    showQuestion();
}

function showQuestion() {
    const pregunta = currentTest.preguntas[currentQuestion];
    const container = document.getElementById('question-container');
    
    container.innerHTML = `
        <div class="question-card">
            <h4>Pregunta ${currentQuestion + 1}</h4>
            <p class="question-text">${pregunta.pregunta}</p>
            <div class="options-container">
                ${pregunta.opciones.map((opcion, index) => `
                    <button class="option-btn" onclick="selectAnswer(${index})">
                        ${opcion}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
    
    updateProgress();
}

function selectAnswer(selectedIndex) {
    const pregunta = currentTest.preguntas[currentQuestion];
    const isCorrect = selectedIndex === pregunta.respuesta;
    
    if (isCorrect) {
        testResults.correctas++;
    }
    
    // Mostrar explicación
    const container = document.getElementById('question-container');
    container.innerHTML = `
        <div class="question-card">
            <h4>Pregunta ${currentQuestion + 1}</h4>
            <p class="question-text">${pregunta.pregunta}</p>
            <div class="answer-explanation ${isCorrect ? 'correct' : 'incorrect'}">
                <h5>${isCorrect ? '✓ Correcto' : '✗ Incorrecto'}</h5>
                <p><strong>Respuesta correcta:</strong> ${pregunta.opciones[pregunta.respuesta]}</p>
                <p><strong>Explicación:</strong> ${pregunta.explicacion}</p>
            </div>
            <button class="next-btn" onclick="nextQuestion()">
                ${currentQuestion < currentTest.preguntas.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}
            </button>
        </div>
    `;
}

function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < currentTest.preguntas.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const percentage = Math.round((testResults.correctas / testResults.total) * 100);
    const container = document.getElementById('test-results');
    
    container.innerHTML = `
        <div class="results-card">
            <h3>Resultados del Test</h3>
            <div class="score-display">
                <div class="score-circle ${percentage >= 70 ? 'good' : percentage >= 50 ? 'average' : 'poor'}">
                    <span class="score-percentage">${percentage}%</span>
                </div>
                <p class="score-text">${testResults.correctas} de ${testResults.total} preguntas correctas</p>
            </div>
            <div class="score-message">
                ${percentage >= 70 ? 
                    '<p class="success">¡Excelente! Has demostrado un buen dominio del tema.</p>' :
                    percentage >= 50 ?
                    '<p class="warning">Bien, pero puedes mejorar. Te recomendamos repasar el contenido.</p>' :
                    '<p class="error">Necesitas estudiar más este tema. Revisa los conceptos clave.</p>'
                }
            </div>
            <div class="test-actions">
                <button class="retry-btn" onclick="retryTest()">
                    <i class="fas fa-redo"></i> Repetir Test
                </button>
                <button class="back-btn" onclick="backToTestSelector()">
                    <i class="fas fa-arrow-left"></i> Volver a Tests
                </button>
            </div>
        </div>
    `;
    
    container.style.display = 'block';
    document.getElementById('question-container').style.display = 'none';
}

// Funciones para manejar los cards principales y el modal
function openSection(sectionName) {
    const content = projectContent[sectionName];
    if (!content) return;
    
    // Configurar el modal
    document.getElementById('modalTitle').textContent = content.title;
    document.getElementById('modalBody').innerHTML = `
        <div class="section-header">
            <i class="${content.icon}"></i>
            <h2>${content.title}</h2>
            <p>${content.description}</p>
        </div>
        <div class="section-body">
            ${generateSectionHTML(content)}
        </div>
    `;
    
    // Mostrar el modal
    document.getElementById('sectionModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeSectionModal() {
    document.getElementById('sectionModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('sectionModal');
    if (event.target === modal) {
        closeSectionModal();
    }
}

// Cerrar modal con tecla Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeSectionModal();
    }
});

// Funciones para manejar los botones del test
function retryTest() {
    if (!currentTest) return;
    
    // Encontrar el índice del tema actual
    const temaIndex = projectContent.autoevaluacion.items.findIndex(item => item.tema === currentTest.tema);
    
    // Reiniciar el test
    startTest(temaIndex);
}

function backToTestSelector() {
    // Ocultar el contenedor del test
    document.getElementById('test-container').style.display = 'none';
    
    // Mostrar el selector de tests
    const testSelector = document.querySelector('.test-selector');
    if (testSelector) {
        testSelector.style.display = 'block';
    }
    
    // Limpiar variables
    currentTest = null;
    currentQuestion = 0;
    testResults = {};
}

function getStatusText(status) {
    const statusTexts = {
        completed: 'Completado',
        'in-progress': 'En Progreso',
        pending: 'Pendiente'
    };
    return statusTexts[status] || 'Desconocido';
}

function openTopicModal(topicId) {
    const topic = courseData.topics.find(t => t.id === topicId);
    
    if (!topic) {
        alert('Tema no encontrado.');
        return;
    }
    
    if (topic.status === 'completed') {
        // Redirigir a la página individual del tema
        window.location.href = `Tema${topicId}/tema${topicId}.html`;
    } else {
        alert('Contenido no disponible aún. Este tema se desarrollará en futuras clases.');
    }
}

// Modal functions removed - topics now open in separate pages

function updateProgress() {
    const completedTopics = courseData.topics.filter(topic => topic.status === 'completed').length;
    const totalTopics = courseData.topics.length;
    const progressPercentage = Math.round((completedTopics / totalTopics) * 100);
    
    document.getElementById('progressFill').style.width = `${progressPercentage}%`;
    document.getElementById('progressText').textContent = `Progreso: ${completedTopics}/${totalTopics} semanas (${progressPercentage}%)`;
    
    // Update progress stats
    document.querySelector('.stat-card:nth-child(1) .stat-number').textContent = `${completedTopics}/${totalTopics}`;
    document.querySelector('.stat-card:nth-child(2) .stat-number').textContent = `3/3`;
    document.querySelector('.stat-card:nth-child(3) .stat-number').textContent = `${progressPercentage}%`;
}

// Global functions available

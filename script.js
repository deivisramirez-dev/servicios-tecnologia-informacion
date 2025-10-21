// Proyecto de Aula Data Structure
const courseData = {
    topics: [
        {
            id: 1,
            title: "La Transformación Digital",
            description: "Innovación empresarial, gestión de producción, marketing, RRHH",
            icon: "fas fa-digital-tachograph",
            color: "#28a745",
            status: "completed",
            cards: {
                concepts: { completed: true, title: "Conceptos Clave" },
                examples: { completed: true, title: "Ejemplos Prácticos" },
                activities: { completed: true, title: "Actividades" },
                resources: { completed: true, title: "Recursos" }
            }
        },
        {
            id: 2,
            title: "Caso de Estudio",
            description: "Metodologías de análisis, evaluación económica",
            icon: "fas fa-chart-line",
            color: "#ffc107",
            status: "completed",
            cards: {
                concepts: { completed: true, title: "Conceptos Clave" },
                examples: { completed: true, title: "Ejemplos Prácticos" },
                activities: { completed: true, title: "Actividades" },
                resources: { completed: true, title: "Recursos" }
            }
        },
        {
            id: 3,
            title: "El Gobierno y la Gestión de las TIC",
            description: "Gobierno corporativo, marcos de referencia, normativas ISO",
            icon: "fas fa-cogs",
            color: "#007bff",
            status: "completed",
            cards: {
                concepts: { completed: true, title: "Conceptos Clave" },
                examples: { completed: true, title: "Ejemplos Prácticos" },
                activities: { completed: true, title: "Actividades" },
                resources: { completed: true, title: "Recursos" }
            }
        },
        {
            id: 4,
            title: "El Gobierno Corporativo de las TIC",
            description: "Por desarrollar según avance del curso",
            icon: "fas fa-building",
            color: "#6f42c1",
            status: "pending",
            cards: {
                concepts: { completed: false, title: "Conceptos Clave" },
                examples: { completed: false, title: "Ejemplos Prácticos" },
                activities: { completed: false, title: "Actividades" },
                resources: { completed: false, title: "Recursos" }
            }
        },
        {
            id: 5,
            title: "COBIT",
            description: "Objetivos de Control para la Información y Tecnologías Relacionadas",
            icon: "fas fa-shield-alt",
            color: "#fd7e14",
            status: "pending",
            cards: {
                concepts: { completed: false, title: "Conceptos Clave" },
                examples: { completed: false, title: "Ejemplos Prácticos" },
                activities: { completed: false, title: "Actividades" },
                resources: { completed: false, title: "Recursos" }
            }
        },
        {
            id: 6,
            title: "ITIL",
            description: "La Biblioteca de Infraestructura de Tecnologías de la Información",
            icon: "fas fa-book",
            color: "#dc3545",
            status: "pending",
            cards: {
                concepts: { completed: false, title: "Conceptos Clave" },
                examples: { completed: false, title: "Ejemplos Prácticos" },
                activities: { completed: false, title: "Actividades" },
                resources: { completed: false, title: "Recursos" }
            }
        },
        {
            id: 7,
            title: "Sistema de Gestión de Servicios",
            description: "Por desarrollar según avance del curso",
            icon: "fas fa-server",
            color: "#795548",
            status: "pending",
            cards: {
                concepts: { completed: false, title: "Conceptos Clave" },
                examples: { completed: false, title: "Ejemplos Prácticos" },
                activities: { completed: false, title: "Actividades" },
                resources: { completed: false, title: "Recursos" }
            }
        },
        {
            id: 8,
            title: "Gestión de Activos de Software",
            description: "Por desarrollar según avance del curso",
            icon: "fas fa-laptop-code",
            color: "#343a40",
            status: "pending",
            cards: {
                concepts: { completed: false, title: "Conceptos Clave" },
                examples: { completed: false, title: "Ejemplos Prácticos" },
                activities: { completed: false, title: "Actividades" },
                resources: { completed: false, title: "Recursos" }
            }
        },
        {
            id: 9,
            title: "Gestión de la Continuidad del Negocio",
            description: "Por desarrollar según avance del curso",
            icon: "fas fa-sync-alt",
            color: "#6c757d",
            status: "pending",
            cards: {
                concepts: { completed: false, title: "Conceptos Clave" },
                examples: { completed: false, title: "Ejemplos Prácticos" },
                activities: { completed: false, title: "Actividades" },
                resources: { completed: false, title: "Recursos" }
            }
        }
    ]
};

// Topic content based on txt files
const topicContent = {
    1: {
        title: "La Transformación Digital",
        concepts: {
            title: "Conceptos Clave",
            items: [
                "I+D+i: Investigación, Desarrollo e innovación",
                "Clasificación de tecnologías: Básicas, Emergentes, Clave",
                "SCM: Supply Chain Management (Gestión de cadena de suministro)",
                "CRM: Customer Relationship Management (Gestión de relaciones con clientes)",
                "ERP: Enterprise Resource Planning (Planificación de recursos empresariales)",
                "Logística inversa: Gestión de productos de desecho y devoluciones"
            ]
        },
        examples: {
            title: "Ejemplos Prácticos",
            items: [
                {
                    title: "Casos Globales",
                    examples: [
                        "Amazon: De librería online a ecosistema global",
                        "Netflix: De alquiler de DVDs a streaming global",
                        "Tesla: Automóviles eléctricos y autónomos",
                        "Spotify: Música digital y personalizada"
                    ]
                },
                {
                    title: "Casos Colombianos",
                    examples: [
                        "Rappi: Entrega de comida y productos",
                        "MercadoLibre: E-commerce en Latinoamérica",
                        "Bancolombia: Banca digital",
                        "Éxito: Retail digital"
                    ]
                }
            ]
        },
        activities: {
            title: "Actividades de Refuerzo",
            items: [
                {
                    title: "Identificación de Oportunidades (15 min)",
                    objective: "Identificar oportunidades de transformación digital",
                    instructions: [
                        "Piensa en una empresa local que conozcas",
                        "Identifica 2 procesos que podrían mejorarse con tecnología",
                        "Propón una solución tecnológica específica",
                        "Explica los beneficios esperados"
                    ]
                },
                {
                    title: "Análisis de Cadena de Suministro (20 min)",
                    objective: "Comprender la complejidad de la gestión de producción",
                    instructions: [
                        "Elige un producto que uses frecuentemente",
                        "Identifica todos los actores en su cadena de suministro",
                        "Describe los procesos de cada actor",
                        "Identifica posibles mejoras con tecnología"
                    ]
                }
            ]
        },
        resources: {
            title: "Recursos Adicionales",
            items: [
                {
                    title: "Videos Recomendados",
                    items: [
                        "¿Qué es la Transformación Digital?",
                        "Casos de Éxito en Transformación Digital",
                        "ERP vs CRM: Diferencias"
                    ]
                },
                {
                    title: "Artículos de Interés",
                    items: [
                        "La Transformación Digital en Colombia",
                        "Casos de Éxito en Latinoamérica",
                        "Tendencias en Tecnología Empresarial"
                    ]
                },
                {
                    title: "Herramientas Online",
                    items: [
                        "Simulador de ERP",
                        "Calculadora de ROI",
                        "Plantillas de Análisis"
                    ]
                }
            ]
        }
    },
    2: {
        title: "Caso de Estudio",
        concepts: {
            title: "Conceptos Clave",
            items: [
                "EVS: Estudio de Viabilidad de Sistemas",
                "ROI: Return on Investment (Retorno de inversión)",
                "VAN: Valor Actual Neto",
                "TIR: Tasa Interna de Retorno",
                "Val IT: Metodología de evaluación (Estrategia, Arquitectura, Valor, Entrega)",
                "Análisis de Riesgos: Probabilidad, Impacto, Mitigación"
            ]
        },
        examples: {
            title: "Ejemplos Prácticos",
            items: [
                {
                    title: "Caso Principal: Botanas del Valle",
                    examples: [
                        "Sector: Alimentario",
                        "Productos: Botanas a base de maíz y frijol",
                        "Tamaño: PYME",
                        "Problemas: Recolección, producción, distribución, cobros",
                        "Objetivos: Buscar ventajas competitivas, Incrementar rentabilidad económica"
                    ]
                },
                {
                    title: "Otros Casos de Análisis",
                    examples: [
                        "Implantación de ERP en PYME: Empresa manufacturera",
                        "Migración a la nube: Empresa de servicios",
                        "Implementación de CRM: Empresa de ventas",
                        "Sistema de gestión documental: Oficina de abogados"
                    ]
                }
            ]
        },
        activities: {
            title: "Actividades de Refuerzo",
            items: [
                {
                    title: "Análisis de Situación Actual (20 min)",
                    objective: "Aplicar metodología de análisis a un caso real",
                    instructions: [
                        "Elige una empresa que conozcas",
                        "Identifica 3 problemas en su gestión",
                        "Propón una solución tecnológica",
                        "Estima costos y beneficios básicos"
                    ]
                },
                {
                    title: "Identificación de Riesgos (25 min)",
                    objective: "Desarrollar habilidades de análisis de riesgos",
                    instructions: [
                        "Lista 5 riesgos en un proyecto de TI",
                        "Clasifica cada riesgo por probabilidad e impacto",
                        "Propón una estrategia de mitigación para cada uno",
                        "Prioriza los riesgos más críticos"
                    ]
                }
            ]
        },
        resources: {
            title: "Recursos Adicionales",
            items: [
                {
                    title: "Videos Recomendados",
                    items: [
                        "¿Qué es un Estudio de Viabilidad?",
                        "Cómo Calcular ROI en Proyectos de TI",
                        "Gestión de Riesgos en Proyectos"
                    ]
                },
                {
                    title: "Herramientas Online",
                    items: [
                        "Calculadora de ROI",
                        "Plantillas de Análisis de Riesgos",
                        "Simulador de Proyectos"
                    ]
                }
            ]
        }
    },
    3: {
        title: "El Gobierno y la Gestión de las TIC",
        concepts: {
            title: "Conceptos Clave",
            items: [
                "Gobierno de las TI: Alineamiento estratégico con la organización",
                "Diferencias entre Gobierno (estratégico) y Gestión (táctico) de las TSI",
                "Marcos de referencia: Estructuras para procesos y metodologías",
                "Normativas ISO: ISO 38500, ISO 20000, ISO 27001",
                "Certificaciones AENOR: UNE 71599 para gobierno corporativo",
                "Responsabilidad actual y futura en la gestión de TI",
                "Gobernanza Corporativa: Sistema de reglas y procesos de dirección",
                "Alineación Estratégica: Sincronización entre TI y estrategia de negocio",
                "Gestión del Valor de TI: Maximización del valor aportado por las TI",
                "COBIT 2019: 5 dominios, 40 objetivos de control",
                "ITIL 4: 34 prácticas de gestión de servicios",
                "Val IT: Marco para gestionar valor de inversiones en TI"
            ]
        },
        examples: {
            title: "Ejemplos Prácticos",
            items: [
                {
                    title: "Casos de Gobierno Corporativo",
                    examples: [
                        "Bancolombia: Implementación de COBIT para auditoría y control",
                        "Petrobras: Gobierno de TI en sector energético con ISO 38500",
                        "Bancos: Implementación de ISO 27001 para seguridad de información",
                        "Empresas manufactureras: Certificación ISO 20000 para servicios",
                        "Organizaciones públicas: Cumplimiento de normativas gubernamentales",
                        "PYMEs: Adopción de marcos de referencia adaptados y escalables"
                    ]
                },
                {
                    title: "Marcos de Referencia Aplicados",
                    examples: [
                        "COBIT 2019: 5 dominios, 40 objetivos de control para auditoría",
                        "ITIL 4: 34 prácticas para gestión del ciclo de vida de servicios",
                        "ISO 38500: 6 principios y 3 funciones para gobierno corporativo",
                        "Val IT: Gestión de portafolio y valor de inversiones en TI",
                        "Balanced Scorecard: Métricas desde 4 perspectivas (financiera, cliente, procesos, aprendizaje)"
                    ]
                },
                {
                    title: "Roles y Responsabilidades",
                    examples: [
                        "CIO (Chief Information Officer): Estrategia de TI y alineación con negocio",
                        "CTO (Chief Technology Officer): Arquitectura tecnológica e innovación",
                        "IT Governance Board: Decisiones estratégicas y aprobación de inversiones",
                        "IT Service Manager: Gestión operativa de servicios de TI",
                        "Security Officer: Gestión de riesgos y seguridad de la información"
                    ]
                },
                {
                    title: "Casos de Éxito en Latinoamérica",
                    examples: [
                        "Bancolombia: Transformación digital con gobierno de TI robusto",
                        "Petrobras: Gestión de riesgos y compliance en sector energético",
                        "Gobiernos locales: Implementación de marcos de referencia",
                        "PYMEs: Adopción de mejores prácticas con recursos limitados",
                        "Universidades: Gobierno de TI en instituciones educativas"
                    ]
                }
            ]
        },
        activities: {
            title: "Actividades de Refuerzo",
            items: [
                {
                    title: "Análisis de Marcos de Referencia (25 min)",
                    objective: "Comprender la aplicación de marcos en organizaciones",
                    instructions: [
                        "Selecciona una organización que conozcas",
                        "Identifica qué marco de referencia podría aplicar",
                        "Explica los beneficios de su implementación",
                        "Propón un plan de adopción básico"
                    ]
                },
                {
                    title: "Estudio de Normativas ISO (30 min)",
                    objective: "Analizar la importancia de las certificaciones",
                    instructions: [
                        "Investiga las diferencias entre ISO 20000 e ISO 27001",
                        "Identifica qué tipo de organización necesita cada norma",
                        "Estima los costos y beneficios de la certificación",
                        "Propón una estrategia de implementación"
                    ]
                },
                {
                    title: "Diseño de Gobierno de TI (35 min)",
                    objective: "Aplicar conceptos de gobierno corporativo",
                    instructions: [
                        "Define la estructura de gobierno para una PYME",
                        "Identifica roles y responsabilidades clave",
                        "Establece procesos de evaluación y monitoreo",
                        "Diseña indicadores de desempeño básicos"
                    ]
                },
                {
                    title: "Análisis de Roles y Responsabilidades (30 min)",
                    objective: "Comprender la estructura organizacional de TI",
                    instructions: [
                        "Identifica los roles clave en una organización de TI",
                        "Define las responsabilidades del CIO vs CTO",
                        "Diseña un IT Governance Board para una empresa mediana",
                        "Establece canales de comunicación entre roles"
                    ]
                },
                {
                    title: "Diseño de Métricas y KPIs (40 min)",
                    objective: "Desarrollar indicadores de desempeño de TI",
                    instructions: [
                        "Selecciona 5 KPIs clave para evaluar el desempeño de TI",
                        "Define métricas de valor de negocio (ROI, TCO)",
                        "Diseña un Balanced Scorecard para TI",
                        "Establece procesos de medición y reporte"
                    ]
                },
                {
                    title: "Análisis de Riesgos en TI (35 min)",
                    objective: "Identificar y gestionar riesgos de TI",
                    instructions: [
                        "Identifica 10 riesgos principales en proyectos de TI",
                        "Clasifica riesgos por probabilidad e impacto",
                        "Propón estrategias de mitigación para cada riesgo",
                        "Diseña un plan de contingencia básico"
                    ]
                },
                {
                    title: "Caso de Estudio: Implementación de COBIT (45 min)",
                    objective: "Aplicar COBIT en un caso real",
                    instructions: [
                        "Selecciona una organización para implementar COBIT",
                        "Identifica los 5 dominios más relevantes",
                        "Selecciona 10 objetivos de control prioritarios",
                        "Diseña un plan de implementación por fases"
                    ]
                }
            ]
        },
        resources: {
            title: "Recursos Adicionales",
            items: [
                {
                    title: "Videos Recomendados",
                    items: [
                        "¿Qué es el Gobierno de las TI? - Conceptos fundamentales",
                        "ISO 38500: Gobierno Corporativo de TI - Implementación práctica",
                        "COBIT 2019: Guía completa de implementación",
                        "ITIL 4: Gestión del ciclo de vida de servicios",
                        "Marcos de Referencia: COBIT vs ITIL vs ISO 38500",
                        "Certificaciones ISO para Organizaciones: Beneficios y costos",
                        "Balanced Scorecard para TI: Métricas y KPIs",
                        "Risk Management en TI: Identificación y mitigación"
                    ]
                },
                {
                    title: "Artículos de Interés",
                    items: [
                        "Gobierno Corporativo en Latinoamérica: Tendencias y casos",
                        "Beneficios de las Certificaciones ISO: ROI y valor de negocio",
                        "Alineación Estratégica de las TI: Mejores prácticas",
                        "Marcos de Referencia: COBIT vs ITIL vs Val IT",
                        "Roles y Responsabilidades en Gobierno de TI",
                        "Métricas y KPIs para evaluar el desempeño de TI",
                        "Tendencias Globales en Gobierno de TI 2024",
                        "Casos de Éxito y Fracaso en Implementación de Marcos"
                    ]
                },
                {
                    title: "Herramientas Online",
                    items: [
                        "Calculadora de ROI para Certificaciones ISO",
                        "Plantillas de Gobierno de TI (COBIT, ITIL, ISO)",
                        "Simulador de Marcos de Referencia",
                        "Guías de Implementación ISO 38500, 20000, 27001",
                        "Generador de Balanced Scorecard para TI",
                        "Matriz de Riesgos para Proyectos de TI",
                        "Templates de IT Governance Board",
                        "Calculadora de TCO (Total Cost of Ownership)"
                    ]
                },
                {
                    title: "Normativas y Estándares",
                    items: [
                        "ISO 38500: Gobierno Corporativo de TI",
                        "ISO 20000: Gestión de Servicios de TI",
                        "ISO 27001: Seguridad de la Información",
                        "ISO 12207: Procesos del ciclo de vida del software",
                        "UNE 71599: Gobierno de TIC (AENOR)",
                        "COBIT 2019: Control Objectives for Information Technology",
                        "ITIL 4: Information Technology Infrastructure Library",
                        "Val IT: Value of IT Investments"
                    ]
                },
                {
                    title: "Certificaciones Profesionales",
                    items: [
                        "CISA: Certified Information Systems Auditor",
                        "CISM: Certified Information Security Manager",
                        "CGEIT: Certified in the Governance of Enterprise IT",
                        "ITIL Foundation: Gestión de Servicios de TI",
                        "ISO 27001 Lead Auditor: Auditoría de Seguridad",
                        "COBIT Foundation: Gobierno de TI",
                        "CISSP: Certified Information Systems Security Professional",
                        "PMP: Project Management Professional"
                    ]
                },
                {
                    title: "Libros Recomendados",
                    items: [
                        "IT Governance: How Top Performers Manage IT Decision Rights - Weill & Ross",
                        "The IT Value Network: From IT Investment to Stakeholder Value - Murphy",
                        "COBIT 5 Implementation Guide - ISACA",
                        "ITIL 4 Essentials: Your Essential Guide for the ITIL 4 Foundation Exam",
                        "Balanced Scorecard for IT: Creating Value Through IT Governance",
                        "Risk Management in IT: A Practical Guide",
                        "Digital Transformation: A Framework for IT Governance",
                        "IT Strategy: Best Practices for IT Governance"
                    ]
                },
                {
                    title: "Organizaciones y Estándares",
                    items: [
                        "ISACA: Information Systems Audit and Control Association",
                        "ITIL: Information Technology Infrastructure Library",
                        "ISO: International Organization for Standardization",
                        "AENOR: Asociación Española de Normalización",
                        "NIST: National Institute of Standards and Technology",
                        "COBIT: Control Objectives for Information and Related Technology",
                        "Val IT: Value of IT Investments Framework",
                        "TOGAF: The Open Group Architecture Framework"
                    ]
                }
            ]
        }
    }
};

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

    const completedCards = Object.values(topic.cards).filter(card => card.completed).length;
    const totalCards = Object.keys(topic.cards).length;

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
        <div class="topic-cards">
            ${Object.entries(topic.cards).map(([key, card]) => `
                <div class="card-type ${card.completed ? 'completed' : 'pending'}">
                    <i class="fas fa-${getCardIcon(key)}"></i>
                    ${card.title}
                </div>
            `).join('')}
        </div>
        <div class="topic-status">
            <span>Cards: ${completedCards}/${totalCards}</span>
            <span class="status-badge ${topic.status}">${getStatusText(topic.status)}</span>
        </div>
    `;

    return card;
}

function getCardIcon(cardType) {
    const icons = {
        concepts: 'lightbulb',
        examples: 'flask',
        activities: 'tasks',
        resources: 'link'
    };
    return icons[cardType] || 'file';
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
    const content = topicContent[topicId];

    if (!content) {
        alert('Contenido no disponible aún. Este tema se desarrollará en futuras clases.');
        return;
    }

    // Redirect to topic page instead of opening modal
    window.location.href = `Tema${topicId}/tema${topicId}.html`;
}

// Modal functions removed - topics now open in separate pages

function updateProgress() {
    const completedTopics = courseData.topics.filter(topic => topic.status === 'completed').length;
    const totalTopics = courseData.topics.length;
    const progressPercentage = Math.round((completedTopics / totalTopics) * 100);
    
    document.getElementById('progressFill').style.width = `${progressPercentage}%`;
    document.getElementById('progressText').textContent = `Progreso: ${completedTopics}/${totalTopics} semanas (${progressPercentage}%)`;
    
    // Update progress stats
    const completedCards = courseData.topics.reduce((total, topic) => {
        return total + Object.values(topic.cards).filter(card => card.completed).length;
    }, 0);
    
    const totalCards = courseData.topics.length * 4; // 4 cards per topic
    
    document.querySelector('.stat-card:nth-child(1) .stat-number').textContent = `${completedTopics}/${totalTopics}`;
    document.querySelector('.stat-card:nth-child(2) .stat-number').textContent = `${completedCards}/${totalCards}`;
    document.querySelector('.stat-card:nth-child(3) .stat-number').textContent = `${progressPercentage}%`;
}

// Global functions available

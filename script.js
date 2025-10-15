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
            description: "Por desarrollar según avance del curso",
            icon: "fas fa-cogs",
            color: "#007bff",
            status: "pending",
            cards: {
                concepts: { completed: false, title: "Conceptos Clave" },
                examples: { completed: false, title: "Ejemplos Prácticos" },
                activities: { completed: false, title: "Actividades" },
                resources: { completed: false, title: "Recursos" }
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

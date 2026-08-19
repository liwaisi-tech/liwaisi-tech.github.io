/**
 * Liwaisi Tech — Landing Page JS con Renderizado Dinámico desde src/assets/texts.ts
 * Cero dependencias externas. Control de tema, menú móvil, modal de casos y envío a EmailJS.
 */

// Fuente única de verdad centralizada (sincronizada con assets/texts.ts)
var textsData = {
  es: {
    seo: {
      title: 'Liwaisi Tech | Tecnología Práctica para el Comercio Rural · Soki AI',
      description: 'Empodera tu negocio rural con Soki by Liwaisi, el asistente comercial automático en WhatsApp para control de caja, registro de ventas y cuentas fiadas en Casanare.',
      keywords: 'Liwaisi Tech, Soki AI, tecnologia rural, asistente comercial WhatsApp, registro de ventas, control de caja, Casanare, Aguazul, Mani',
      ogTitle: 'Liwaisi Tech | Empodera tu Negocio Rural con Tecnología Práctica',
      ogDescription: 'Conoce Soki by Liwaisi: asistente comercial automático en WhatsApp. Piloto cerrado para comerciantes rurales.'
    },
    a11y: {
      brandLinkAria: 'Ir al inicio de Liwaisi Tech',
      brandLogoAlt: 'Logo oficial de Liwaisi Tech',
      navDesktopAria: 'Navegación principal',
      navMobileAria: 'Menú móvil',
      menuToggleOpenAria: 'Abrir menú de navegación',
      modalCloseAria: 'Cerrar ventana emergente',
      socialFacebookAria: 'Seguir a Liwaisi en Facebook',
      socialGithubAria: 'Ver repositorios de Liwaisi en GitHub',
      socialInstagramAria: 'Seguir a Liwaisi en Instagram',
      socialLinkedinAria: 'Conectar con Liwaisi en LinkedIn',
      heroImageAlt: 'Soki by Liwaisi - Asistente comercial con inteligencia artificial en WhatsApp'
    },
    navbar: {
      brand: 'LIWAISI TECH',
      home: 'Inicio',
      product: 'Producto (Soki)',
      impact: 'Impacto',
      pilot: 'Únete al Piloto',
      themeLight: 'Modo Claro',
      themeDark: 'Modo Oscuro'
    },
    hero: {
      title: 'Empodera tu Negocio con Tecnología Práctica.',
      subtitle: 'Conoce "Soki AI by Liwaisi", tu asistente comercial automático en WhatsApp. (Actualmente en fase de piloto cerrado para comerciantes de Casanare).',
      cta: 'POSTULA TU NEGOCIO AL PILOTO.',
      imageDesktop: '/assets/images/hero-desktop.webp',
      imageMobile: '/assets/images/hero-mobile.webp'
    },
    features: {
      title: 'Con Soki IA podrás:',
      card1: 'Registrar las Ventas y Fiados.',
      card2: 'Hacer Control de Caja Diario.',
      card3: 'Análisis de Rentabilidad.',
      card4: 'Hablar con SOKI por WhatsApp.'
    },
    impact: {
      title: 'Impacto en el Territorio',
      btnCaseStudy: 'Ver Caso de Éxito',
      cases: {
        case1: {
          title: 'Cafetería La Casaba (Casanare)',
          image: '/assets/images/cafeteria-la-casaba-desktop.webp',
          alt: 'Cafetería La Casaba en Casanare utilizando Soki AI',
          description: 'Negocio de café y alimentos en Casanare que implementó Soki AI para optimizar su administración diaria sin cuadernos ni pérdidas de información.',
          points: [
            'Registro ágil de ventas diarias y control de cuentas fiadas en tiempo real.',
            'Cierre de caja diario automático con balance claro de entradas y salidas.',
            'Gestión 100% asistida a través de WhatsApp sin instalar programas complejos.'
          ]
        },
        case2: {
          title: 'Bootcamp Huertics',
          image: '/assets/images/cafe-aguazul.webp',
          alt: 'Bootcamp Huertics Cali Colombia',
          description: 'Bootcamp ejecutado en la institucion Nuevo Latir en Disrito de Aguablanca Cali Colombia.',
          points: [
            'Bootcamp ejecutado en asociacion con empresa Rincon Verde, OMLATAM y LIWAISI.',
            'Este Programa se ejecuto durante 1 semana entregando conocimiento en tecnología, habilidades de liderazgo e innovación aplicable y resiliente',
            'Ademas de la instalación de uns sistema de monitoreo automatizado de riego para la huerta del colegio bajo el cuidado de los estudiantes del programa LectuHuerta.'
          ]
        },
        case3: {
          title: 'Talleres y charlas en colegios de Maní (Casanare)',
          image: '/assets/images/bootcamp-huertics.webp',
          alt: 'Sesión de formación técnica y Bootcamp Huertics en Maní',
          description: 'Llevamos 2 años con nuestros talleres y mentorías brindando apoyo y/o co-creando con jóvenes y comunidades.',
          points: [
            'Hemos llegado a 3 instituciones educativas rurales con charlas y talleres sobre uso de la IA.',
            'Impactamos a más de 300 estudiantes con talleres y bootcamp en el uso tecnologías, habilidades de liderazgo e innovación aplicable y resilientes en zonas rurales de Mani Casanare.',
            'Brindamos apoyo constante a 3 emprendimientos, a través de más de 100 horas de mentorías personalizadas para que adapten y usen herramientas tecnológicas que potencian sus modelos de negocio.'
          ]
        }
      }
    },
    capture: {
      title: 'Postula tu negocio al Piloto de Soki.',
      description: 'Los cupos son limitados. Déjanos tus datos y evaluaremos si tu negocio cumple con los requisitos técnicos para esta fase.',
      nameLabel: 'Nombre Completo *',
      namePlaceholder: 'Ej. Carlos Mendoza',
      emailLabel: 'Correo Electrónico *',
      emailPlaceholder: 'Ej. carlos.mendoza@gmail.com',
      businessTypeLabel: 'Tipo de Negocio *',
      businessTypePlaceholder: 'Ej. Tienda de Abarrotes, Ferretería, Cafetería',
      municipalityLabel: 'Municipio *',
      municipalityPlaceholder: 'Ej. Maní, Aguazul, Yopal',
      whatsappLabel: 'Número de WhatsApp *',
      whatsappPlaceholder: 'Ej. 314 227 3180',
      submitButton: 'SOLICITAR ACCESO ANTICIPADO',
      submittingButton: 'ENVIANDO SOLICITUD...',
      requiredValidation: 'Por favor completa todos los campos requeridos.',
      feedbackSuccessTitle: '¡Postulación enviada con éxito!',
      feedbackSuccessDesc: 'Hemos recibido los datos de tu negocio. Evaluaremos los requisitos técnicos y te contactaremos a tu correo electrónico.',
      feedbackErrorTitle: 'No se pudo enviar la postulación',
      feedbackErrorDesc: 'Ocurrió un error al procesar el envío. Por favor escríbenos directamente a liwaisitech@gmail.com'
    },
    footer: {
      companyName: 'LIWAISI TECNOLOGIA RURAL SOSTENIBLE S.A.S.',
      nit: 'NIT: 902076671',
      address: 'Dirección: Vereda el Guineo, Finca Los Guarataros. Aguazul Casanare',
      privacyLink: 'Política de Privacidad Soki AI',
      termsLink: 'Términos de Servicio Soki AI',
      follow: 'Sigue a Liwaisi',
      contact: 'Contacto',
      email: 'liwaisitech@gmail.com',
      legal: '© 2026 Todos los derechos reservados | Políticas de Privacidad.',
      claim: 'Liwaisi Innova, Conecta y Transforma.',
      copyright: '© 2026 Liwaisi Tecnología Rural Sostenible S.A.S. Todos los derechos reservados.'
    }
  }
};

function getNestedValue(obj, path) {
  return path.split('.').reduce(function (acc, part) {
    return acc && acc[part] !== undefined ? acc[part] : undefined;
  }, obj);
}

function renderAllDynamicTexts(lang) {
  lang = lang || 'es';
  var t = textsData[lang] || textsData.es;

  document.querySelectorAll('[data-text]').forEach(function (el) {
    var key = el.getAttribute('data-text');
    var val = getNestedValue(t, key);
    if (val !== undefined) {
      el.textContent = val;
    }
  });

  document.querySelectorAll('[data-placeholder]').forEach(function (el) {
    var key = el.getAttribute('data-placeholder');
    var val = getNestedValue(t, key);
    if (val !== undefined) {
      el.setAttribute('placeholder', val);
    }
  });

  document.querySelectorAll('[data-alt]').forEach(function (el) {
    var key = el.getAttribute('data-alt');
    var val = getNestedValue(t, key);
    if (val !== undefined) {
      el.setAttribute('alt', val);
    }
  });

  document.querySelectorAll('[data-aria-label]').forEach(function (el) {
    var key = el.getAttribute('data-aria-label');
    var val = getNestedValue(t, key);
    if (val !== undefined) {
      el.setAttribute('aria-label', val);
    }
  });
}

function initApp() {
  renderAllDynamicTexts('es');

  // 1. Alternancia de Modo Claro / Oscuro (Manual de Marca V3.3)
  var themeToggleBtn = document.getElementById('themeToggleBtn');
  var themeIcon = document.getElementById('themeIcon');
  var themeLabel = document.getElementById('themeLabel');
  
  var savedTheme = localStorage.getItem('liwaisi_theme') || 'dark';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      var currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('liwaisi_theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    if (theme === 'light') {
      if (themeIcon) themeIcon.textContent = '🌙';
      if (themeLabel) themeLabel.textContent = textsData.es.navbar.themeDark;
    } else {
      if (themeIcon) themeIcon.textContent = '☀️';
      if (themeLabel) themeLabel.textContent = textsData.es.navbar.themeLight;
    }
  }

  // 2. Menú Hamburguesa Móvil
  var menuToggleBtn = document.getElementById('menuToggleBtn');
  var mobileNavMenu = document.getElementById('mobileNavMenu');
  var mobileNavLinks = document.querySelectorAll('.mobile-nav-menu .nav-link');

  if (menuToggleBtn && mobileNavMenu) {
    menuToggleBtn.addEventListener('click', function () {
      var isExpanded = menuToggleBtn.getAttribute('aria-expanded') === 'true';
      menuToggleBtn.setAttribute('aria-expanded', String(!isExpanded));
      mobileNavMenu.classList.toggle('open');
    });

    mobileNavLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNavMenu.classList.remove('open');
        menuToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Modal Ventana Emergente: Casos de Éxito
  var caseModal = document.getElementById('caseModal');
  var modalCloseBtn = document.getElementById('modalCloseBtn');
  var modalImage = document.getElementById('modalImage');
  var modalTitle = document.getElementById('modalTitle');
  var modalDescription = document.getElementById('modalDescription');
  var modalPoints = document.getElementById('modalPoints');

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.btn-case-study');
    if (btn) {
      e.preventDefault();
      var caseId = btn.getAttribute('data-case');
      var data = textsData.es.impact.cases[caseId];

      if (data && caseModal) {
        if (modalImage) {
          modalImage.src = data.image;
          modalImage.alt = data.alt;
        }
        if (modalTitle) modalTitle.textContent = data.title;
        if (modalDescription) modalDescription.textContent = data.description;
        
        if (modalPoints) {
          modalPoints.innerHTML = '';
          data.points.forEach(function (pt) {
            var li = document.createElement('li');
            li.textContent = pt;
            modalPoints.appendChild(li);
          });
        }

        caseModal.classList.add('active');
        if (typeof caseModal.showModal === 'function') {
          try { caseModal.showModal(); } catch (err) {}
        }
        document.body.style.overflow = 'hidden';
      }
    }
  });

  function closeModal() {
    if (caseModal) {
      caseModal.classList.remove('active');
      if (typeof caseModal.close === 'function') {
        try { caseModal.close(); } catch (err) {}
      }
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeModal();
    });
  }

  if (caseModal) {
    caseModal.addEventListener('click', function (e) {
      if (e.target === caseModal || e.target.classList.contains('modal-backdrop')) {
        closeModal();
      }
    });

    caseModal.addEventListener('cancel', function () {
      closeModal();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && caseModal && (caseModal.classList.contains('active') || caseModal.hasAttribute('open'))) {
      closeModal();
    }
  });

  // 4. Manejador del Formulario de Captación (Envío vía EmailJS)
  var pilotForm = document.getElementById('sokiPilotForm');
  var formFeedback = document.getElementById('formFeedback');
  var submitBtn = document.getElementById('submitBtn');

  if (pilotForm) {
    pilotForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var nombre = document.getElementById('nombreInput') ? document.getElementById('nombreInput').value.trim() : '';
      var email = document.getElementById('emailInput') ? document.getElementById('emailInput').value.trim() : '';
      var tipoNegocio = document.getElementById('tipoNegocioInput') ? document.getElementById('tipoNegocioInput').value.trim() : '';
      var municipio = document.getElementById('municipioInput') ? document.getElementById('municipioInput').value.trim() : '';
      var whatsapp = document.getElementById('whatsappInput') ? document.getElementById('whatsappInput').value.trim() : '';

      if (!nombre || !email || !tipoNegocio || !municipio || !whatsapp) {
        alert(textsData.es.capture.requiredValidation);
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        var btnText = submitBtn.querySelector('span');
        if (btnText) btnText.textContent = textsData.es.capture.submittingButton;
      }

      var emailData = {
        service_id: 'service_r5tbhde',
        template_id: 'template_fnho5ln',
        user_id: 'mBadBYIPkw_V_R3uD',
        template_params: {
          from_name: nombre,
          from_email: email,
          reply_to: email,
          company: tipoNegocio,
          area: municipio,
          phone: whatsapp,
          to_email: textsData.es.footer.email,
          comment: 'Postulación recibida desde la Landing Page para el Piloto Cerrado de Soki by Liwaisi en Casanare.'
        }
      };

      fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
      })
      .then(function (response) {
        if (response.ok) {
          if (formFeedback) {
            formFeedback.textContent = '';
            var strong = document.createElement('strong');
            strong.textContent = textsData.es.capture.feedbackSuccessTitle;
            formFeedback.appendChild(strong);
            formFeedback.appendChild(document.createElement('br'));
            formFeedback.appendChild(document.createTextNode(textsData.es.capture.feedbackSuccessDesc + ' (' + email + ').'));
            formFeedback.style.backgroundColor = 'rgba(46, 204, 113, 0.15)';
            formFeedback.style.borderColor = 'var(--color-action)';
            formFeedback.classList.add('active');
          }
          pilotForm.reset();
        } else {
          throw new Error('Error en el servicio de correo');
        }
      })
      .catch(function (error) {
        console.error('Error al enviar postulación con EmailJS:', error);
        if (formFeedback) {
          formFeedback.textContent = '';
          var strongErr = document.createElement('strong');
          strongErr.textContent = textsData.es.capture.feedbackErrorTitle;
          formFeedback.appendChild(strongErr);
          formFeedback.appendChild(document.createElement('br'));
          formFeedback.appendChild(document.createTextNode(textsData.es.capture.feedbackErrorDesc));
          formFeedback.style.backgroundColor = 'rgba(231, 76, 60, 0.15)';
          formFeedback.style.borderColor = '#e74c3c';
          formFeedback.classList.add('active');
        }
      })
      .finally(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
          var btnText = submitBtn.querySelector('span');
          if (btnText) btnText.textContent = textsData.es.capture.submitButton;
        }
      });
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}


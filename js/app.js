/**
 * Liwaisi Tech — Landing Page JS con Renderizado Dinámico
 * Importa directamente los textos desde la única fuente de verdad: /assets/texts.ts
 */
import { texts } from '/assets/texts.ts';

var textsData = texts;

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
          var isMobile = window.innerWidth <= 768;
          var selectedImage = (isMobile && data.imageMobile) ? data.imageMobile : (data.imageDesktop || data.image);
          modalImage.src = selectedImage;
          modalImage.alt = data.alt || '';
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


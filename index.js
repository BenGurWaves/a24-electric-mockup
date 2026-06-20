document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initUploadPortal();
  initEmailCopy();
});

/* --- Minimalist Percentage Preloader --- */
function initPreloader() {
  const loader = document.getElementById('preloader');
  const statusEl = document.getElementById('load-status');
  const fillEl = document.getElementById('load-fill');
  
  if (!loader || !statusEl || !fillEl) return;
  
  let progress = 0;
  const duration = 1000; // Snappy visual introduction
  const startTime = performance.now();

  function updateLoader(timestamp) {
    const elapsed = timestamp - startTime;
    const currentProgress = Math.min(elapsed / duration, 1);
    
    // Ease-out cubic
    const ease = 1 - Math.pow(1 - currentProgress, 3);
    progress = Math.floor(ease * 100);
    
    statusEl.textContent = `LOADING // ${progress}%`;
    fillEl.style.width = `${currentProgress * 100}%`;

    if (currentProgress < 1) {
      requestAnimationFrame(updateLoader);
    } else {
      setTimeout(() => {
        loader.classList.add('fade-out');
        document.body.classList.remove('loading-state');
      }, 150);
    }
  }

  requestAnimationFrame(updateLoader);
}

/* --- Drag & Drop Estimate Upload Portal --- */
function initUploadPortal() {
  const dropzone = document.getElementById('upload-dropzone');
  const fileInput = document.getElementById('upload-file-input');
  const clickArea = document.getElementById('upload-click-area');
  const previewContainer = document.getElementById('upload-preview-container');
  const previewImg = document.getElementById('upload-preview-img');
  const clearBtn = document.getElementById('upload-clear-btn');
  const callbackCard = document.getElementById('callback-card');

  if (!dropzone || !fileInput || !clickArea || !previewContainer || !previewImg || !clearBtn || !callbackCard) return;

  // Click trigger select
  clickArea.addEventListener('click', () => {
    fileInput.click();
  });

  // Drag over states
  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('drag-over');
  });

  dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('drag-over');
  });

  // Drag Drop
  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('drag-over');
    if (e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  });

  // Input select change
  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  });

  // Clear loaded file
  clearBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    fileInput.value = '';
    previewImg.src = '';
    dropzone.classList.remove('loaded');
    callbackCard.classList.remove('reveal');
  });

  function handleFile(file) {
    if (!file.type.startsWith('image/')) {
      alert('Error: Loaded file must be an image.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      previewImg.src = event.target.result;
      dropzone.classList.add('loaded');
      
      // Clean slide reveal
      setTimeout(() => {
        callbackCard.classList.add('reveal');
      }, 100);
    };
    reader.readAsDataURL(file);
  }
}

/* --- Click to Copy Email --- */
function initEmailCopy() {
  const emailBtn = document.getElementById('email-btn');
  if (!emailBtn) return;

  emailBtn.addEventListener('click', () => {
    const email = emailBtn.getAttribute('data-email');
    const hint = emailBtn.querySelector('.copy-hint');
    
    navigator.clipboard.writeText(email).then(() => {
      if (hint) {
        const originalText = hint.textContent;
        hint.textContent = 'COPIED TO CLIPBOARD';
        hint.style.color = '#c67b54';
        hint.style.borderColor = '#c67b54';
        
        setTimeout(() => {
          hint.textContent = originalText;
          hint.style.color = '';
          hint.style.borderColor = '';
        }, 1500);
      }
    });
  });
}

function createHideCss() {
  const htmlStyleElement = document.createElement('style');
  const styles = [
    '.Modal-wrapper{display:none !important;}',
    'html{overflow:initial !important;}',
  ];
  htmlStyleElement.innerHTML = styles.join('');
  document.head.appendChild(htmlStyleElement);
  return htmlStyleElement;
}

function removeLoginModal() {
  function tryAndRemove() {
    let element = document.querySelector('.signFlowModal');
    if (element) {
      for (let child of element.children) {
        if (child.classList.contains('Modal-closeButton')) {
          child.click();
          return true;
        }
      }
    }
    return false;
  }
  
  return new Promise((resolve) => {
    const timer = setInterval(() => {
      if (tryAndRemove()) {
        clearInterval(timer);
        resolve();
      }
    }, 200);
  });
}

async function run() {
  const htmlStyleElement = createHideCss();
  await removeLoginModal();
  htmlStyleElement.remove();
}

run();

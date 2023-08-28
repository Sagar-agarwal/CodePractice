const secretMsgSection = document.querySelector('.section-secret-msg') as HTMLElement;

document.querySelector('form').addEventListener('submit', (e) => {
  const input = document.querySelector('#secret-msg') as HTMLInputElement;
  const msg = input.value;

  hideElement(secretMsgSection);

  const codedMsg = encryptMsg(msg);
  const secretURL = generateURL(codedMsg);

  const shareMsgSection = document.querySelector('.section-share-msg') as HTMLElement;
  showElement(shareMsgSection);

  const shareInput = document.querySelector('#share-msg') as HTMLInputElement;
  shareInput.value = secretURL;
  shareInput.select();

  e.preventDefault();
});

const copyContent = async (eleID: string) => {
  const input = document.getElementById(eleID) as HTMLInputElement;
  await navigator.clipboard.writeText(input.value);
};

const hideElement = (ele: HTMLElement): void => {
  ele.classList.add('hide');
};

const showElement = (ele: HTMLElement): void => {
  ele.classList.remove('hide');
};

const encryptMsg = (msg: string): string => {
  return btoa(msg);
};

const decryptMsg = (msg: string): string => {
  return atob(msg);
};
const generateURL = (encryptedMsg: string): string => {
  // let url = baseURL + encryptedMsg;
  let url = `${window.location.origin}#${encryptedMsg}`;
  return url;
};

const init = (): void => {
  const { hash } = window.location;
  console.log(hash);
  if (hash) {
    const decryptedMsg = decryptMsg(hash.replace('#', ''));
    const displayMsgSection = document.querySelector('.section-display-msg') as HTMLElement;
    showElement(displayMsgSection);
    hideElement(secretMsgSection);

    const output = document.querySelector('.display-msg-text') as HTMLLIElement;
    output.innerText = decryptedMsg;
  }
  const reloadBtn = document.querySelector('.reload-btn') as HTMLButtonElement;
  reloadBtn.addEventListener('click', (e): void => {
    window.location.hash = '';
    window.location.href = window.location.origin;
    window.location.reload();
  });
};

init();

/* COOKIES */
const cookieStorage = {
    getItem: (item) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({...acc, [key.trim()]: value }), {});
        return cookies[item];
    },
    setItem: (item, value) => {
        document.cookie = `${item}=${value};`
    }
}

const storageType = cookieStorage;
const consentPropertyName = 'main_trim_cookies_consent';
const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
    const consentPopup = document.querySelector('.cookies_popup');
    const acceptBtn = document.querySelector('.cookies_popup-btn');
    acceptBtn.addEventListener('click', () => {
        saveToStorage(storageType);
        consentPopup.classList.add('hidden');
    });

    if (shouldShowPopup(storageType)) {
        setTimeout(() => {
            consentPopup.classList.remove('hidden');
        }, 2000);
    }
};
/* END ---- COOKIES */
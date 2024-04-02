interface UserInfo {
    avatar: HTMLImageElement;
    welcomeMessage: HTMLElement;
    motivationalMessage: HTMLElement;
    location: HTMLElement;
}

const userInfo: UserInfo = {
    avatar: document.getElementById('user-avatar') as HTMLImageElement,
    welcomeMessage: document.getElementById('welcome-message'),
    motivationalMessage: document.getElementById('motivational-message'),
    location: document.getElementById('location')
};

const userData = {
    name: "Usuário",
    avatarSrc: "user-avatar.jpg",
    location: "Local"
};

userInfo.avatar.src = userData.avatarSrc;
userInfo.welcomeMessage.textContent = `Olá, ${userData.name}!`;
userInfo.motivationalMessage.textContent = '"Frase motivacional pelo retorno."';
userInfo.location.textContent = `Localidade: ${userData.location}`;

function navigateToFeature(featureNumber: number) {
    alert(`Navegando para Acesso Rápido ${featureNumber}...`);
}


const signUpBtn = document.getElementById('signUp')
const signInBtn = document.getElementById('signIn')
const appPage = document.getElementById('app-page')

signUp.onclick = () => {
    appPage.classList.add('right-panel-active')
    console.log('ell')

}

signInBtn.addEventListener('click', function () {
    appPage.classList.remove('right-panel-active')
})
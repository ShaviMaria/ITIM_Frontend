const useLanguage = (lan: string) => {
    if(lan === 'auto'){
        lan = window.navigator.language.slice(0, 2)
    }
    switch(lan) {
        case 'es':
            return language.spanish
        case 'en':
            return language.english
        default:
            return language.english
    } 
}

const language = {
    english: {
        signInTitle: "Sign In to ITIM"
    },
    spanish: {
        signInTitle: "Inicia Sesión en ITIM"
    }
}

export default useLanguage
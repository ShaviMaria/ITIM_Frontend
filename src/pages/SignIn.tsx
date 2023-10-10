import '../css/SignIn.css'
import useLanguage from '../hooks/useLanguage'

const SignIn = () => {
    document.title = "ITIM | Sign In"
    const language = useLanguage('auto')

    return (
        <main className='sign-up-main-container'>
            <section className='sign-up-header-container'>
                <picture>
                    <div className='logo-icon-container'>
                        <img src='https://cdn-icons-png.flaticon.com/512/2111/2111125.png' alt='Logo icon'/>
                    </div>
                </picture>
                <h1>{language.signInTitle}</h1>
            </section>
        </main>
    )
}

export default SignIn
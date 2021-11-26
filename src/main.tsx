import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import globalEs from './translations/es/global.json'
import globalEn from './translations/en/global.json'

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'es',
    resources: {
        es: {
            global: globalEs
        },
        en: {
            global: globalEn
        }
    }
})

ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

// Clé publique Web3Forms : elle peut rester dans le code sans risque
const WEB3FORMS_KEY = '494ef3fd-c4cf-4056-a0b0-fe807471c194'

type Status = 'idle' | 'sending' | 'success' | 'error'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio — nouveau message de ${formData.name}`,
          from_name: 'Portfolio Thomas Coelho',
          ...formData,
        }),
      })
      const result = await response.json()

      if (result.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Contact</h2>

      <div className="contact__grid">
        <div className="contact__info">
          <p className="contact__text">
            N'hésitez pas à me contacter pour toute opportunité d'alternance ou question.
          </p>
          <ul className="contact__links">
            <li>
              <a href="mailto:thomas.coelho@epitech.eu">
                <FaEnvelope /> thomas.coelho@epitech.eu
              </a>
            </li>
            <li>
              <a href="https://github.com/tomawks" target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              
                <a href="https://www.linkedin.com/in/thomas-coelho-017740253/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          {status === 'success' ? (
            <p className="contact__success">Merci pour votre message, je reviens vers vous rapidement !</p>
          ) : (
            <>
              <div className="contact__field">
                <label htmlFor="name">Nom</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              {status === 'error' && (
                <p className="contact__error">
                  L'envoi a échoué. Réessayez ou écrivez-moi directement à thomas.coelho@epitech.eu.
                </p>
              )}
              <button type="submit" className="contact__submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Envoi…' : 'Envoyer'}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
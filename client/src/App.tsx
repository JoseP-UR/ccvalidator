import { useState } from 'react'
import axios from 'axios'
import './App.css'

type FormMessage = {
  message: string
  type: string | null
}

function App() {
  const [formMessage, setFormMessage] = useState<FormMessage>({ message: '', type: null })
  const [cardNumber, setCardNumber] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.currentTarget))

    axios.post('/api/card', formData).then((response) => {
      const isValid = response.data.isValid
      if (isValid) {
        setFormMessage({
          message: 'Your card is valid',
          type: 'success'
        })
      } else {
        setFormMessage({
          message: 'Your card is invalid',
          type: 'error'
        })
      }
    })
  }

  const handleCardMask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const CARD_REGULAR_EXPRESSION = /(\d{4})(\d{1,4})(\d{1,4})(\d{1,4})/
    let cardNumber = e.target.value
    let cardNumberMasked = cardNumber.replace(/\D/g, '')
    if (cardNumberMasked.length > 16) {
      cardNumberMasked = cardNumberMasked.slice(0, 16)
    }
    cardNumberMasked = cardNumberMasked.replace(CARD_REGULAR_EXPRESSION, '$1-$2-$3-$4')
    setCardNumber(cardNumberMasked)
  }

  return (
    <main id="app">
      <h1>Card Validator</h1>

      <form onSubmit={handleSubmit} className={formMessage.type || ''}>
        {formMessage.message && <h2 className={`form-message ${formMessage.type || ''}`}>{formMessage.message}</h2>}

        <div className="form-field">
          <label htmlFor="card_number">Card number</label>
          <input type="text" name="card_number" placeholder="" value={cardNumber} onChange={handleCardMask} />
        </div>

        <button>Submit</button>
      </form>
    </main>
  )
}

export default App

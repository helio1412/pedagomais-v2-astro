import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, X } from 'lucide-react'

interface Notification {
  id: number
  name: string
  city: string
  state: string
  timeAgo: string
}

const names = [
  'Ana Silva', 'Maria Santos', 'Juliana Costa', 'Carla Oliveira', 'Fernanda Lima',
  'Patricia Souza', 'Camila Rodrigues', 'Beatriz Alves', 'Roberta Martins', 'Luciana Pereira',
  'Amanda Ferreira', 'Gabriela Ribeiro', 'Renata Barbosa', 'Mariana Gomes', 'Vanessa Cardoso',
  'Tatiana Dias', 'Priscila Araújo', 'Daniela Rocha', 'Aline Mendes', 'Cristina Nunes'
]

const cities = [
  { city: 'São Paulo', state: 'SP' },
  { city: 'Rio de Janeiro', state: 'RJ' },
  { city: 'Belo Horizonte', state: 'MG' },
  { city: 'Brasília', state: 'DF' },
  { city: 'Salvador', state: 'BA' },
  { city: 'Fortaleza', state: 'CE' },
  { city: 'Curitiba', state: 'PR' },
  { city: 'Recife', state: 'PE' },
  { city: 'Porto Alegre', state: 'RS' },
  { city: 'Manaus', state: 'AM' },
  { city: 'Belém', state: 'PA' },
  { city: 'Goiânia', state: 'GO' },
  { city: 'Campinas', state: 'SP' },
  { city: 'São Luís', state: 'MA' },
  { city: 'Natal', state: 'RN' },
  { city: 'Maceió', state: 'AL' },
  { city: 'João Pessoa', state: 'PB' },
  { city: 'Florianópolis', state: 'SC' },
  { city: 'Vitória', state: 'ES' },
  { city: 'Aracaju', state: 'SE' }
]

const timeOptions = [
  'há 2 minutos', 'há 5 minutos', 'há 8 minutos', 'há 12 minutos',
  'há 15 minutos', 'há 18 minutos', 'há 23 minutos', 'há 28 minutos',
  'há 35 minutos', 'há 42 minutos', 'há 48 minutos', 'há 55 minutos'
]

const getRandomNotification = (id: number): Notification => {
  const name = names[Math.floor(Math.random() * names.length)]
  const location = cities[Math.floor(Math.random() * cities.length)]
  const timeAgo = timeOptions[Math.floor(Math.random() * timeOptions.length)]
  
  return {
    id,
    name,
    city: location.city,
    state: location.state,
    timeAgo
  }
}

export default function SalesNotification() {
  const [notification, setNotification] = useState<Notification | null>(null)

  useEffect(() => {
    const timeouts: number[] = []

    // Primeira notificação: após 20 segundos
    timeouts.push(setTimeout(() => {
      setNotification(getRandomNotification(1))
      
      // Remove após 5 segundos
      timeouts.push(setTimeout(() => {
        setNotification(null)
      }, 5000))
    }, 20000))

    // Segunda notificação: após 1 minuto
    timeouts.push(setTimeout(() => {
      setNotification(getRandomNotification(2))
      
      // Remove após 5 segundos
      timeouts.push(setTimeout(() => {
        setNotification(null)
      }, 5000))
    }, 60000))

    // Terceira notificação: após 3 minutos
    timeouts.push(setTimeout(() => {
      setNotification(getRandomNotification(3))
      
      // Remove após 5 segundos
      timeouts.push(setTimeout(() => {
        setNotification(null)
      }, 5000))
    }, 180000))

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout))
    }
  }, [])

  const handleClose = () => {
    setNotification(null)
  }

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          key={notification.id}
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -400, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="fixed bottom-4 left-4 z-50 max-w-[calc(100vw-2rem)] md:max-w-sm"
        >
          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-3 md:p-4 flex items-start gap-3">
            {/* Ícone de sucesso */}
            <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>

            {/* Conteúdo */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 mb-0.5">
                {notification.name}
              </p>
              <p className="text-xs text-gray-600 mb-1">
                de {notification.city}/{notification.state}
              </p>
              <p className="text-xs text-green-600 font-medium">
                Acabou de garantir sua vaga
              </p>
            </div>

            {/* Botão fechar */}
            <button
              onClick={handleClose}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Fechar notificação"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

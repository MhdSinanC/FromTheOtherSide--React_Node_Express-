import { useEffect, useState } from "react"
import './Read.css'

export default function SightingsPage() {


  const [cards, setCards] = useState([])
  const [error, setError] = useState(null)
  const [expandedIndex, setExpandedIndex] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL



  useEffect(() => {
    async function fetchSightings() {
      try {
        const res = await fetch(`${API_URL}/api`)
        const data = await res.json()
        setCards(data)
      } catch (err) {
        console.error(err)
        setError("Failed to load sightings")
      }
    }

    fetchSightings()
  }, [])


  function formatDateTime(isoString) {
    const date = new Date(isoString)

    const datePart = date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })

    const timePart = date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit'
    })

    return `${datePart} at ${timePart}`
  }




  if (error) return <p className="error-text">{error}</p>

  return (
    <main className="sightings">
      <h1 className="page-title">Sightings</h1>

      <div className="sighting-cards-container">
        {cards.map((card, i) => {

          return (
            <article key={i} className={`sighting-card ${expandedIndex === i ? 'expanded' : ''}`}>

              <p className="sighting-date">{formatDateTime(card.timeStamp)}, {card.location}</p>

              <h3 className="sighting-title">{card.title}</h3>

              <div className="sighting-description-wrapper">
                <p className="sighting-description">{card.text}</p>
              </div>

              <button className="read-more-btn"
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}>
                {expandedIndex === i ? "Show less" : "Read in full"}
              </button>

            </article>
          )
        })}
      </div>
    </main>
  )
}

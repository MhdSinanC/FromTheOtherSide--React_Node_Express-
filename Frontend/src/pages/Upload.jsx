import { useState } from 'react'
import './Upload.css'

export default function Upload() {


    const [formData, setFormData] = useState({
        title: '',
        text: '',
        timeStamp: '',
        location: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => (
            { ...prev, [name]: value }
        ))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)

        try {

            const res = await fetch(`/api`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (!res.ok) {
                throw new Error('Failed to save');
            }

            setFormData({
                title: '',
                text: '',
                timeStamp: '',
                location: ''
            })

        }
        catch (e) {
            console.error(e);
        }


    }

    return (
        <main className="form-container" aria-labelledby="form-title">
            <h1 className="form-title">Add Sighting</h1>
            <form className="sightings-form" onSubmit={handleSubmit}>
                {/* <!-- Title Field --> */}
                <label htmlFor="title">Title:</label>
                <input
                    id='title'
                    type="text"
                    name="title"
                    value={formData.title}
                    placeholder="A ghostly encounter"
                    onChange={handleChange}
                    required />

                {/* <!-- Textarea Field --> */}
                <label htmlFor="text">Details:</label>
                <textarea
                    id='text'
                    name="text" rows="5"
                    value={formData.text}
                    placeholder="I was trying to get to sleep when..."
                    onChange={handleChange}
                    minLength={200}
                    required />

                {/* <!-- Time/Date Field --> */}
                <label htmlFor="timeStamp">Time/Date:</label>
                <input
                    id='timeStamp'
                    type="datetime-local"
                    name="timeStamp"
                    value={formData.timeStamp}
                    onChange={handleChange}
                    required />

                {/* <!-- Location Field --> */}
                <label htmlFor="location" className="lab-location">Location:</label>
                <input
                    id='location'
                    type="text"
                    name="location"
                    value={formData.location}
                    placeholder="London, UK"
                    className="input-location"
                    onChange={handleChange}
                    required />

                {/* <!-- Submit Button --> */}
                <button type="submit" className="submit-btn">submit</button>
                {/* <div className="form-message">
                    <p className="form-message-text">All sightings will be published on our <Link to={'/read'}>sightings</Link> page.</p>
                </div> */}
            </form>
        </main>
    )
}

import React from 'react'
import { useState } from 'react'

const Feedback = () => {
  const [score, setScore] = useState('7')
  const [comment, setComment] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(Number(score) <= 5 && comment.length <= 10){
      alert('Please provide a coomment why the experience was poor')
    }
    console.log({score,comment})
    setComment('')
    setScore('10')
  }
  return (
    <form
      action=""
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "500px",
      }}
      onSubmit={handleSubmit}
    >
      <fieldset>
        <h2>Feedback form</h2>
        <div className="Field" style={{ margin: "auto", width: "400px" }}>
          <label htmlFor="">Score</label>
          <input
            onChange={(e) => setScore(e.target.value)}
            style={{ width: "90%" }}
            type="range"
            name=""
            max="10"
            value={score}
            min="0"
            id=""
          />
        </div>
        <div className="Field">
          <label htmlFor="">Comment:</label>
          <textarea
            name=""
            id=""
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}

export default Feedback
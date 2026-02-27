'use client'
import React from 'react'

const JoinUs = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="w-full flex justify-center items-start">
        <div className="w-full max-w-4xl mx-auto">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSeyA3oAXkHCvv2RcREH-bXo9kj6FR-E1Z_k1JYnMvoM_l6G3Q/viewform?embedded=true" 
            width="100%" 
            height="2800"
            style={{ 
              border: 'none',
              display: 'block',
            }}
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0}
            className="w-full"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default JoinUs
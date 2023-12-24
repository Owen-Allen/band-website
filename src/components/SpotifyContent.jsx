import React from 'react'



export default function SpotifyContent() {
    async function getProfile() {
        // let accessToken = localStorage.getItem('access_token');
        const accessToken = "BQAKMG5XhpXr6S3Dgm2kgVeNjIOaivmnJdhoxFbmHkYU6-QhiivIyaBHfmKWT-hW20BMrXMny3DZVIbx0vwc6WOsi-mnNWDSJC3KRINu5JocUeIKuMQ"
        const response = await fetch('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: 'Bearer ' + ""
          }
        });
      
        const data = await response.json();
        console.log(data)
    }

    getProfile()
  
    return (
    <div>SpotifyContent</div>
  )
}

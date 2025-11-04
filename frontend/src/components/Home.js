import React from 'react'
import './Home.css'
import instagram from '../assets/instagram logo.jpeg'
import youtube from '../assets/Youtube bild.png'
import discord from '../assets/discord-logo.jpg'
import twitch from '../assets/Twitch-logo.png'

function Home() {
  return (
    <>
      <div className='socialMedia'>
        <a className='instagram' href='https://www.instagram.com/lp.estragon/' >
          <img className='socialmediaLogo' src={instagram} alt=''/> Instagram
        </a>
        <a className='youtube' href='https://www.youtube.com/@Lp.estragon'>
          <img className='socialmediaLogo' src={youtube} alt=''/> YouTube
        </a>
        <a className='twitch' href='https://www.twitch.tv/lp_estragon'>
          <img className='socialmediaLogo' src={twitch} alt=''/>Twitch
        </a>
        <a className='discord' href='https://discord.com/invite/96DVSvfVtQ'>
          <img className='socialmediaLogo' src={discord} alt=''/>Discord
        </a>
      </div>

      <p className='introductiontext'>
        Hallo zusammen,
        es freut mich, dass ich euch auf dem Weg begleiten kann, den ich mir selbst als Aufgabe gestellt habe: meine eigene Webseite hier vorzustellen, während ich zeitgleich meinem Hobby als Content Creator nachgehe.
        Solltet ihr einige Verbesserungsvorschläge haben, würde ich mich sehr freuen, wenn ihr mir diese entweder unter den YouTube-Kommentaren oder auf meinem Discord-Server mitteilt.
        Ich bedanke mich ganz herzlich bei meiner Community, die mich tatkräftig unterstützt.

        <br></br>
      </p>
      <br></br>
      <br></br>

      <h3 className='information'>Informationen über die Webseite</h3>
      <br></br>
      <p className='informationtext'>
        Die Webseite wird an einigen Stellen noch verbessert, und ich werde die Informationen hier festhalten, um euch auf dem Laufenden zu halten.
        <br></br>
        <br></br>
        <li>Auf der Seite "Calendar View" soll eine Übersicht dargestellt werden, damit ihr die Streams nicht verpasst.</li>
        <br></br>
        <li>Die Registrierung wird bearbeitet, damit sich der User registrieren und anschließend anmelden kann.</li>
        <br></br>
        <li>Das Login wird fertiggestellt, damit sich der User anmelden und im Forum aktiv sein kann.</li>
        <br></br>
        <li>Das Forum muss noch an einigen Stellen überarbeitet werden.</li>
        <br></br>
        <li>Auf der Login-Seite soll es möglich sein, ein neues Passwort an die eingegebene E-Mail zu generieren, wenn das Passwort vergessen wurde.</li>
        <br></br>
        <li>Die Checkbox "Remember me" im Login soll sich die E-Mail merken können.</li>
        <br></br>
      </p>
    </>    
  )
}

export default Home

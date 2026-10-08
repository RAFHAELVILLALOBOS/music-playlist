import './style.css'
import metallicaArt from "./assets/metallica_transparent.png";


function App() {
  return (
    <section className="MUSIC">

  
      <header>
        <p>←</p>
       <p>🎵SPOTI B</p>
        <p>☰</p>
      </header>
      

      <h1>METALLICA ALBUM</h1>
      <p className="center"></p>


     <div className="cover">
       <img className="art" src={metallicaArt} alt="album cover" />
    </div>

      <section className="list">

        <div className="track">
          <div>
            <h2>Enter Sandman</h2>
            <p>Metallica</p>
          </div>
          <p className="icons">✪ ⊘ ☰</p>
        </div>

        <div className="track">
          <div>
            <h2>Nothing Else Matters</h2>
            <p>Metallica</p>
          </div>
          <p className="icons">✪ ⊘ ☰</p>
        </div>

        <div className="track">
          <div>
            <h2>The Unforgiven</h2>
            <p>Metallica</p>
          </div>
          <p className="icons">✪ ⊘ ☰</p>
        </div>

        <div className="track">
          <div>
            <h2>Master of Puppets</h2>
            <p>Metallica</p>
          </div>
          <p className="icons">✪ ⊘ ☰</p>
        </div>

        <div className="track">
          <div>
            <h2>Seek and Destroy</h2>
            <p>Metallica</p>
          </div>
          <p className="icons">✪ ⊘ ☰</p>
        </div>

        <div className="track">
          <div>
            <h2>Creeping Death</h2>
            <p>Metallica</p>
          </div>
          <p className="icons">✪ ⊘ ☰</p>
        </div>

        <div className="track">
         <div>
           <h2>For Whom the Bell Tolls</h2>
           <p>Metallica</p>
          </div>
          <p className="icons">✪ ⊘ ☰</p>
        </div>

      </section>
    </section>
  )
}

export default App
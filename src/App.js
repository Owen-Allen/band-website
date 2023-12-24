// import logo from './logo.svg';
import './App.css';


import Nav from './components/Nav'

function App() {
  return (
    <div className="w-full h-screen">
      <Nav />

      <div className="flex flex-row items-center p-24 bg-slate-800 w-full">
        <iframe style={{ "border-radius": "12px" }} src="https://open.spotify.com/embed/track/7ECgRM93tHyy94wb5hJWsV?utm_source=generator" width="50%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>

      <div className="flex p-24 flex-row items-center bg-slate-900 w-full">
        <img className="ml-auto w-1/2" src="/SSFUNPIC.jpg" />
      </div>
    </div >




  );
}

export default App;

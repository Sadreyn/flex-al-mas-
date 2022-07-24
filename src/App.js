import './App.css';

function App() {
  return (
    <div className='main-container'>
      <div className='container'>
        <header>
          <h1>FLEX ÇALIŞMALARI</h1>
        </header>
        <nav>
          <h3>Burası Nav-Bar olacak</h3>
        </nav>
        <section>
          <article className='a1'> Article-1
            <div className="boxes-1">
              <div className="box1-1">Box1-1</div>
              <div className="box1-2">Box1-2</div>
              <div className="box1-3">Box1-3</div>
              <div className="box1-4">Box1-4</div>
              <div className="box1-5">Box1-5</div>
            </div>
          </article>
          <article className='a2'>Article-2
            <div className='boxes-2'>
              <div className="box2-1">box2-1</div>
              <div className="box2-2">box2-2</div>
              <div className="box2-3">box2-3</div>
              <div className="box2-4">box2-4</div>
              <div className="box2-5">box2-5</div>
            </div>
          </article>
        </section>
        <aside>
          <div className="resim">Resimler olacak</div>
        </aside>
        <footer>
          <h4>Footer</h4>
        </footer>


      </div>
    </div>
  );
}

export default App;

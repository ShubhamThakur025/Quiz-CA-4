export default function Result(props) {

  return (
    <div>
      <div className='top-section'>
        <h1 className='title'>FINAL RESULTS!</h1>
        <p className='sub-title'>1 out of 5 are correct - (20%)</p>
      </div>
      <button id="playBtn" onClick={() => props.handleClick()}>Play Again!</button>
      <footer>
        <div>Developed & Designed by:</div>
        <div id="creator-name">Shubham Thakur</div>
      </footer>
    </div>
  );
}

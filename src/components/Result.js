export default function Result(props) {
  
  //to calculate the percentage
  const percentage = (props.score / 5) * 100;
  return (
    <div>
      <div className='top-section'>
        <h1 className='title'>FINAL RESULTS!</h1>
        <p className='sub-title'>{props.score} out of 5 are correct - ({percentage}%)</p>
      </div>
      <button id="playBtn" onClick={() => props.handleClick()}>Play Again!</button>
      <footer>
        <div>Developed & Designed by:</div>
        <div id="creator-name">Shubham Thakur</div>
      </footer>
    </div>
  );
}

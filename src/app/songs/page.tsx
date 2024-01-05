function songs() {
  const song = [
    {
      chord: ['G', 'Em'],
      lyric: ['I found the love', 'for me'],
      melody: ['D', 'E', 'G', 'G', 'B', 'A', 'G', 'B'],
    },
  ]
  return (
    <div>
      <h1 className="font-bold text-lg text-center mt-6">Perfect</h1>

      <div className="m-10">
        {/* <p>
          I found a love
          <span>G</span>for me<span>Em</span>
        </p> */}
        {song.map((each) => (
          <div>
            <div id="melody">{each.melody}</div>
            {each.lyric.map((subeach, index) => (
              <span>
                <span key={index}>
                  {subeach} <span id="chord">{each.chord[index]}</span>
                </span>
              </span>
            ))}
          </div>
        ))}
        {/* 
        <p>
          Darling just dive<span>C</span>right in, And follow my lead
          <span>D</span>
        </p>
        <p>
          Well I found a girl<span>G</span>, beautiful<span>Em</span>and sweet
        </p>
        <p>
          I never knew<span>C</span> you were the someone Waiting for me
          <span>D</span>
        </p> */}
      </div>
    </div>
  )
}
export default songs

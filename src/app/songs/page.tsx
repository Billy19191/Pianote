function songs() {
  interface Song {
    chord: string[]
    lyric: string[]
    melody: string[]
  }
  const song: Song[] = [
    {
      chord: [' ', ' ', ' ', 'G', ' ', 'Em'],
      lyric: ['I', 'found', 'the', 'love', 'for', 'me'],
      melody: ['D', 'E', 'G', 'G', 'BAG', 'B'],
    },
    {
      chord: [' ', ' ', ' ', 'C', ' ', ' ', '', ' ', ' ', ' G'],
      lyric: [
        'Dar',
        'ling',
        'just',
        'dive',
        'right',
        'in',
        'and',
        'follow',
        'my',
        'lead',
      ],
      melody: ['A', 'B', 'B', 'B', 'G', 'G', 'G', 'A', 'B', 'A'],
    },
  ]

  return (
    <div>
      <h1 className="font-bold text-lg text-center mt-6">Perfect</h1>

      <div className="m-10">
        {song.map((each, songIndex) => (
          <div key={songIndex}>
            {each.melody.map((eachMelody, indexMelody) => {
              // Create the whitespace using a for loop
              const lengthMelody = eachMelody.length
              let nextLengthMelody
              if (indexMelody === each.melody.length - 1) {
                nextLengthMelody = 0
              } else {
                nextLengthMelody =
                  each.melody[indexMelody + 1].length == 1
                    ? 1
                    : each.melody[indexMelody + 1].length + 1
              }
              // console.log(lengthMelody)
              // console.log(nextLengthMelody)
              const whitespace = Array(
                each.lyric[indexMelody].length -
                  lengthMelody +
                  2 -
                  nextLengthMelody
              )
                .fill('\u00A0')
                .join('')
              console.log(whitespace, whitespace.length)
              return (
                <span key={indexMelody}>
                  <span>{eachMelody}</span>
                  {whitespace} &nbsp;
                </span>
              )
            })}
            <br />
            {each.lyric.map((subeach, index) => (
              <span key={index}>
                {subeach} <span id="chord">{each.chord[index]}</span>
              </span>
            ))}
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  )
}

export default songs

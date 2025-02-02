import React, {useEffect, useState} from 'react'
import "../../App.css"
import { Link } from 'react-router-dom';
import { staticLinks } from '../../config/routingsLinks';

const langs = [
  '010000010111', '100100101011', '011010110101', '110010101010', '101111111111', '111111100010',
  '010010101011', '100100101010', '001000000001', '110010101110', '001010101001', '110000000110',
  '011010101001', '100110111110', '010101010101', '110010101110', '100000011111',

];

const Char = ({ value, x, y, speed }) => {
    const [yPos, setYPos] = useState(y);

    useEffect(() => {
        const interval = setInterval(() => {
            setYPos(yPos => {
                const newYPos = yPos > window.innerHeight ? 0 : yPos + speed;
                return newYPos;
            });
        }, 100);
        return () => clearInterval(interval);
    }, [speed]);

    const flick = Math.random() * 100;
    const char = flick < 10 ? 0 : value;

    return (
      <span
        style={{ position: "absolute", left: x, top: yPos, color: "#0000FF	" }}
      >
        {char}
      </span>
    );
};

const Stream = ({ text, x }) => {
    const [chars, setChars] = useState([]);

    useEffect(() => {
        const y = Math.floor(Math.random() * text.length);
        const speed = Math.floor(Math.random() * 1) + 4;
        const charArray = [];

        for (let i = text.length - 1; i >= 0; i--) {
            charArray.push({ value: text[i], y: (y + text.length - i) * 20, speed });
        }

        setChars(charArray);
    }, [text]);

    return (
        <>
            {chars.map((char, index) => (
                <Char key={index} value={char.value} x={x} y={char.y} speed={char.speed} />
            ))}
        </>
    );
};

const MatrixRain = () => {
    const [streams, setStreams] = useState([]);
    const createStreams = () => {
        const streamArray = [];

        for (let i = 0; i < window.innerWidth; i += 20) {
            streamArray.push({ text: langs[Math.floor(Math.random() * langs.length)], x: i });
        }

        setStreams(streamArray);
    };
    useEffect(() => {


        createStreams();
    }, []);

    const reset = () => {
        createStreams();
    };

    return (
        <div style={{ background: 'rgba(0, 0, 0, 0.4)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
            {streams.map((stream, index) => (
                <Stream key={index} text={stream.text} x={stream.x} />
            ))}
        </div>
    );
};

const MainPage = () => {

  return (
    <div>

      <div class="matrix-text">
        <div style={{ fontSize: "120px", fontWeight: "bold" }}>
          <Link class="text_matrix" to={staticLinks.planet}>
            Matrix
          </Link>
        </div>
      </div>
      <MatrixRain></MatrixRain>
    </div>
  );
}

export default MainPage
import styles from './Oscilloscope.module.css';

const WIDTH = 400;
const HEIGHT = 240;
const DIVS_X = 10;
const DIVS_Y = 8;
const CENTER_Y = HEIGHT / 2;

/** Builds an SVG polyline path for a sine wave sampled every few pixels. */
function sinePath(amplitude: number, periods: number, phase = 0): string {
  const points: string[] = [];
  for (let x = 0; x <= WIDTH; x += 4) {
    const y = CENTER_Y - amplitude * Math.sin((x / WIDTH) * periods * 2 * Math.PI + phase);
    points.push(`${x === 0 ? 'M' : 'L'}${x} ${y.toFixed(1)}`);
  }
  return points.join(' ');
}

// An inverting amplifier: a small input (CH1) and its amplified, inverted output (CH2).
const INPUT_PATH = sinePath(14, 2.5);
const OUTPUT_PATH = sinePath(78, 2.5, Math.PI);

const gridX = Array.from({ length: DIVS_X - 1 }, (_, i) => ((i + 1) * WIDTH) / DIVS_X);
const gridY = Array.from({ length: DIVS_Y - 1 }, (_, i) => ((i + 1) * HEIGHT) / DIVS_Y);

/** Decorative oscilloscope screen shown in the home hero. */
export function Oscilloscope() {
  return (
    <figure className={styles.scope} aria-hidden="true">
      <div className={styles.topBar}>
        <span className={styles.brand}>EA2 · DSO</span>
        <span className={styles.status}>
          <span className={styles.led} />
          RUN
        </span>
      </div>

      <div className={styles.screen}>
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className={styles.svg}>
          {gridX.map((x) => (
            <line key={`x${x}`} x1={x} y1={0} x2={x} y2={HEIGHT} className={styles.grid} />
          ))}
          {gridY.map((y) => (
            <line key={`y${y}`} x1={0} y1={y} x2={WIDTH} y2={y} className={styles.grid} />
          ))}
          <line x1={WIDTH / 2} y1={0} x2={WIDTH / 2} y2={HEIGHT} className={styles.axis} />
          <line x1={0} y1={CENTER_Y} x2={WIDTH} y2={CENTER_Y} className={styles.axis} />

          <path d={OUTPUT_PATH} className={`${styles.trace} ${styles.ch2}`} pathLength={1} />
          <path d={INPUT_PATH} className={`${styles.trace} ${styles.ch1}`} pathLength={1} />
        </svg>
      </div>

      <figcaption className={styles.readout}>
        <span className={styles.ch1Label}>CH1 V<sub>in</sub> 100 mV/div</span>
        <span className={styles.ch2Label}>CH2 V<sub>out</sub> 1 V/div</span>
        <span>A<sub>v</sub> = −10 · f = 1 kHz</span>
      </figcaption>
    </figure>
  );
}

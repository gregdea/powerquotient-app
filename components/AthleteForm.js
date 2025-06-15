import React, { useState } from 'react';

export default function AthleteForm() {
  const [data, setData] = useState({
    name: '',
    broadJump: '',
    cmj: '',
    medBall: '',
    pain: false
  });
  const [score, setScore] = useState(null);

  const calculatePQ = () => {
    const powerScore =
      Number(data.broadJump) * 0.4 +
      Number(data.cmj) * 0.3 +
      Number(data.medBall) * 0.3;
    setScore(Math.round(powerScore));
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <label>Name: <input value={data.name} onChange={e => setData({ ...data, name: e.target.value })} /></label><br />
      <label>Broad Jump (cm): <input type="number" value={data.broadJump} onChange={e => setData({ ...data, broadJump: e.target.value })} /></label><br />
      <label>CMJ (cm): <input type="number" value={data.cmj} onChange={e => setData({ ...data, cmj: e.target.value })} /></label><br />
      <label>Med Ball Toss (m): <input type="number" value={data.medBall} onChange={e => setData({ ...data, medBall: e.target.value })} /></label><br />
      <label>
        <input type="checkbox" checked={data.pain} onChange={e => setData({ ...data, pain: e.target.checked })} />
        Reported pain or injury?
      </label><br />
      <button onClick={calculatePQ}>Calculate Power Quotient</button>

      {score !== null && (
        <div style={{ marginTop: '1rem' }}>
          <strong>PQ Score: {score}</strong> {data.pain && <span title="Test done with pain or injury">⚕️*</span>}
        </div>
      )}
    </div>
  );
}

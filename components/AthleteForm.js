import React, { useState } from 'react';

export default function AthleteForm({ onAdd }) {
  const [data, setData] = useState({
    name: '', height: '', weight: '', country: '', sport: '', level: '',
    broadJump: '', cmj: '', medBall: '', pain: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const rawScore = Number(data.broadJump) * 0.4 + Number(data.cmj) * 0.3 + Number(data.medBall) * 0.3 * 100;
    const score = Math.min(100, Math.round(rawScore / 2));
    onAdd({ ...data, score });
    setData({ ...data, name: '', broadJump: '', cmj: '', medBall: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
      <input placeholder="Name" value={data.name} onChange={e => setData({ ...data, name: e.target.value })} /><br />
      <input placeholder="Height (cm)" value={data.height} onChange={e => setData({ ...data, height: e.target.value })} /><br />
      <input placeholder="Weight (kg)" value={data.weight} onChange={e => setData({ ...data, weight: e.target.value })} /><br />
      <input placeholder="Country" value={data.country} onChange={e => setData({ ...data, country: e.target.value })} /><br />
      <input placeholder="Sport" value={data.sport} onChange={e => setData({ ...data, sport: e.target.value })} /><br />
      <select value={data.level} onChange={e => setData({ ...data, level: e.target.value })}>
        <option value="">Level</option>
        <option>Junior</option><option>Semi-Pro</option><option>Pro</option><option>Elite</option>
      </select><br />
      <input placeholder="Broad Jump (cm)" value={data.broadJump} onChange={e => setData({ ...data, broadJump: e.target.value })} /><br />
      <input placeholder="CMJ (cm)" value={data.cmj} onChange={e => setData({ ...data, cmj: e.target.value })} /><br />
      <input placeholder="Med Ball Toss (m)" value={data.medBall} onChange={e => setData({ ...data, medBall: e.target.value })} /><br />
      <label><input type="checkbox" checked={data.pain} onChange={e => setData({ ...data, pain: e.target.checked })} /> Pain/Injury?</label><br />
      <button type="submit">Add Athlete</button>
    </form>
  );
}

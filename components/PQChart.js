import React from 'react';

export default function PQChart({ athletes }) {
  const data = athletes.map((ath, idx) => ({
    name: ath.name || `Athlete ${idx + 1}`,
    score: ath.score,
    pain: ath.pain
  }));

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Team PQ Scores</h2>
      <ul>
        {data.map((ath, i) => (
          <li key={i}>
            {ath.name}: {ath.score} {ath.pain && '⚕️'}
          </li>
        ))}
      </ul>
    </div>
  );
}

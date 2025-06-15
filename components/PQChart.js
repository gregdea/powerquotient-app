import React from 'react';

export default function PQChart({ athletes }) {
  if (athletes.length === 0) return null;

  const mean = Math.round(athletes.reduce((sum, a) => sum + a.score, 0) / athletes.length);
  const median = [...athletes.map(a => a.score)].sort((a, b) => a - b)[Math.floor(athletes.length / 2)];

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>Squad Results</h3>
      <ul>
        {athletes.map((a, i) => (
          <li key={i}>
            {a.name}: {a.score} {a.pain ? '⚕️*' : ''}
          </li>
        ))}
      </ul>
      <p><strong>Mean:</strong> {mean} | <strong>Median:</strong> {median}</p>
    </div>
  );
}

import React from 'react';

export default function ExportButtons({ athletes }) {
  const exportCSV = () => {
    const headers = Object.keys(athletes[0]).join(',');
    const rows = athletes.map(a => Object.values(a).join(',')).join('\n');
    const blob = new Blob([headers + '\n' + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'squad_data.csv';
    a.click();
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <button onClick={exportCSV}>Export as CSV</button>
    </div>
  );
}

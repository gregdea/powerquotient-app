import React from 'react';

export default function ExportButtons({ athletes }) {
  const downloadCSV = () => {
    const rows = [
      ['Name', 'Score', 'Pain', 'Timestamp'],
      ...athletes.map(a => [a.name, a.score, a.pain ? 'Yes' : 'No', a.timestamp])
    ];
    const csvContent = rows.map(e => e.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'power_quotient_export.csv';
    link.click();
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>Export Options</h3>
      <button onClick={downloadCSV}>Download CSV</button>
    </div>
  );
}

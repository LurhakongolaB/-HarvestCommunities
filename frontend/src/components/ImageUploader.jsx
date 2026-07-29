import { useState } from 'react';

export default function ImageUploader({ files, setFiles }) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = (e) => { e.preventDefault(); setIsDragging(false); };
  const handleDrop = (e) => {
    e.preventDefault(); setIsDragging(false);
    setFiles([...files, ...Array.from(e.dataTransfer.files)]);
  };
  const handleFileSelect = (e) => { setFiles([...files, ...Array.from(e.target.files)]); };
  const removeFile = (index) => { setFiles(files.filter((_, i) => i !== index)); };

  return (
    <div>
      <div onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}
        style={{ border: `2px dashed ${isDragging ? '#16a34a' : '#d1d5db'}`, borderRadius: '8px', padding: '30px', textAlign: 'center', background: isDragging ? '#f0fdf4' : '#f9fafb', cursor: 'pointer' }}>
        <input type="file" multiple accept="image/*" onChange={handleFileSelect} style={{ display: 'none' }} id="fileInput" />
        <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
          <div style={{ fontSize: '32px', marginBottom: '10px' }}>📁</div>
          <p style={{ margin: 0, fontWeight: '600' }}>{isDragging ? 'Drop images here...' : 'Drag & drop images or click to browse'}</p>
        </label>
      </div>
      {files.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '10px', marginTop: '15px' }}>
          {files.map((file, index) => (
            <div key={index} style={{ position: 'relative', borderRadius: '6px', overflow: 'hidden', border: '1px solid #ddd' }}>
              <img src={URL.createObjectURL(file)} alt="preview" style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
              <button onClick={() => removeFile(index)} style={{ position: 'absolute', top: '2px', right: '2px', background: 'red', color: 'white', border: 'none', borderRadius: '50%', width: '20px', height: '20px', cursor: 'pointer' }}>×</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

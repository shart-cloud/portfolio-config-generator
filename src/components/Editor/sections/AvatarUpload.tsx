import { useRef, useState, DragEvent } from 'react';
import { usePortfolioStore } from '../../../store/portfolioStore';
import './AvatarUpload.css';

export function AvatarUpload() {
  const { avatarPreviewUrl, setAvatar } = usePortfolioStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileSelect = (file: File) => {
    if (file.type.startsWith('image/')) {
      setAvatar(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleRemove = () => {
    setAvatar(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="editor-section">
      <h3 className="section-heading">Avatar</h3>
      <div className="section-fields">
        <div
          className={`avatar-dropzone ${isDragging ? 'dragging' : ''} ${avatarPreviewUrl ? 'has-image' : ''}`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
        >
          {avatarPreviewUrl ? (
            <div className="avatar-preview-container">
              <img src={avatarPreviewUrl} alt="Avatar preview" className="avatar-preview-img" />
              <button
                type="button"
                className="avatar-remove"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove();
                }}
              >
                &times;
              </button>
            </div>
          ) : (
            <div className="avatar-placeholder">
              <span className="avatar-icon">+</span>
              <span className="avatar-text">Drop image or click to upload</span>
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleInputChange}
            className="avatar-input"
          />
        </div>
      </div>
    </div>
  );
}

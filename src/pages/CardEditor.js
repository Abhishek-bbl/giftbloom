import React, { useState } from 'react';
import '../styles/CardEditor.css';
import { FiUpload, FiX, FiCheck, FiArrowLeft, FiShoppingCart } from 'react-icons/fi';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const cardTemplates = [
  { id: 1, name: 'Classic Pink', bg: '#FFF0F5', accent: '#E8709A', pattern: 'hearts', occasion: 'Birthday' },
  { id: 2, name: 'Golden Elegance', bg: '#FFFBF0', accent: '#BA7517', pattern: 'stars', occasion: 'Wedding' },
  { id: 3, name: 'Ivory Romance', bg: '#FFFDF5', accent: '#D4527F', pattern: 'roses', occasion: 'Anniversary' },
  { id: 4, name: 'Sky Blue', bg: '#EFF6FF', accent: '#185FA5', pattern: 'minimal', occasion: 'Corporate' },
  { id: 5, name: 'Forest Green', bg: '#F0FFF5', accent: '#3B6D11', pattern: 'floral', occasion: 'Festival' },
  { id: 6, name: 'Midnight Dark', bg: '#F5F5F5', accent: '#2C2C2A', pattern: 'minimal', occasion: 'General' },
];

const patternContent = {
  hearts: '♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥',
  stars: '★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★',
  roses: '❀ ✾ ❀ ✾ ❀ ✾ ❀ ✾ ❀ ✾ ❀ ✾ ❀ ✾ ❀ ✾ ❀ ✾ ❀ ✾ ❀ ✾ ❀ ✾ ❀ ✾ ❀ ✾',
  floral: '✿ ❀ ✿ ❀ ✿ ❀ ✿ ❀ ✿ ❀ ✿ ❀ ✿ ❀ ✿ ❀ ✿ ❀ ✿ ❀ ✿ ❀ ✿ ❀ ✿ ❀ ✿ ❀',
  minimal: '— — — — — — — — — — — — — — — — — — — — — — — — — — — — — —',
};

function CardPreview({ template, title, recipientName, message, senderName, photo, size = 'large' }) {
  const isSmall = size === 'small';
  return (
    <div
      className={`card-preview-box ${size}`}
      style={{ backgroundColor: template.bg, border: `2px solid ${template.accent}33`, borderRadius: isSmall ? '8px' : '16px', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}
    >
      {/* Pattern */}
      <div style={{ position: 'absolute', inset: 0, fontSize: isSmall ? '14px' : '22px', lineHeight: 2, padding: '8px', opacity: 0.06, overflow: 'hidden', wordBreak: 'break-all', pointerEvents: 'none', color: template.accent }}>
        {patternContent[template.pattern]}
      </div>
      {/* Top bar */}
      <div style={{ height: isSmall ? '4px' : '7px', backgroundColor: template.accent, flexShrink: 0 }} />
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, padding: isSmall ? '10px 12px' : '24px 28px', display: 'flex', flexDirection: 'column', gap: isSmall ? '6px' : '12px', flex: 1 }}>
        {/* Photo */}
        {photo && (
          <div style={{ width: '100%', height: isSmall ? '55px' : '160px', borderRadius: isSmall ? '4px' : '8px', overflow: 'hidden', border: `2px solid ${template.accent}22`, flexShrink: 0 }}>
            <img src={photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}
        {/* Title */}
        <p style={{ fontSize: isSmall ? '11px' : '20px', fontWeight: '700', color: template.accent, fontFamily: 'Playfair Display, serif', margin: 0 }}>
          {title || (isSmall ? 'Card Title' : 'Your Card Title')}
        </p>
        {/* Recipient */}
        <p style={{ fontSize: isSmall ? '9px' : '14px', fontWeight: '600', color: recipientName ? template.accent : template.accent + '55', fontFamily: 'Playfair Display, serif', margin: 0, fontStyle: recipientName ? 'normal' : 'italic' }}>
          {recipientName ? `Dear ${recipientName},` : 'Recipient name...'}
        </p>
        {/* Message */}
        <p style={{ fontSize: isSmall ? '8px' : '13px', color: message ? '#444' : '#ccc', fontStyle: 'italic', lineHeight: 1.6, fontFamily: 'Playfair Display, serif', margin: 0, paddingLeft: isSmall ? '5px' : '10px', borderLeft: `2px solid ${message ? template.accent : template.accent + '33'}`, flex: 1 }}>
          {message ? `"${message}"` : 'Your message will appear here...'}
        </p>
        {/* Sender */}
        <p style={{ fontSize: isSmall ? '8px' : '12px', fontWeight: '600', color: senderName ? template.accent : template.accent + '55', fontFamily: 'Playfair Display, serif', margin: 0, textAlign: 'right', fontStyle: senderName ? 'normal' : 'italic' }}>
          {senderName ? `With love, ${senderName} ✦` : '— Your name...'}
        </p>
      </div>
      {/* Bottom bar */}
      <div style={{ height: isSmall ? '3px' : '5px', backgroundColor: template.accent, opacity: 0.5, flexShrink: 0 }} />
    </div>
  );
}

function CardEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  const [selectedTemplate, setSelectedTemplate] = useState(cardTemplates[0]);
  const [title, setTitle] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [photo, setPhoto] = useState(null);
  const [ownTemplate, setOwnTemplate] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setPhoto(reader.result);
    reader.readAsDataURL(file);
  };

  const handleOwnTemplateUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setOwnTemplate(reader.result);
    reader.readAsDataURL(file);
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('giftbloom_cart') || '[]');
    const item = { ...product, quantity: 1, recipientName, senderName, message, title, photo, ownTemplate, selectedTemplate, cartId: Date.now() };
    cart.push(item);
    localStorage.setItem('giftbloom_cart', JSON.stringify(cart));
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  const handleBuyNow = () => {
    const cart = JSON.parse(localStorage.getItem('giftbloom_cart') || '[]');
    const item = { ...product, quantity: 1, recipientName, senderName, message, title, photo, ownTemplate, selectedTemplate, cartId: Date.now() };
    cart.push(item);
    localStorage.setItem('giftbloom_cart', JSON.stringify(cart));
    const isLoggedIn = localStorage.getItem('giftbloom_user');
    navigate(isLoggedIn ? '/delivery' : '/login?redirect=delivery');
  };

  return (
    <div className="card-editor-page">

      {/* Header */}
      <div className="card-editor-header">
        <button className="back-btn-detail" onClick={() => navigate(-1)}>
          <FiArrowLeft /> Back
        </button>
        <div>
          <p className="section-label">GREETING CARD EDITOR</p>
          <h1>Design Your Card</h1>
          <p className="card-editor-sub">Personalize every detail — what you see is what gets printed</p>
        </div>
      </div>

      <div className="card-editor-body">

        {/* Left — Controls */}
        <div className="card-editor-controls">

          {/* Step 1 — Template */}
          <div className="editor-section">
            <h3>1. Choose a Template</h3>

            <div className="template-picker">
              {cardTemplates.map(t => (
                <div
                  key={t.id}
                  className={`template-pick ${selectedTemplate.id === t.id && !ownTemplate ? 'active' : ''}`}
                  onClick={() => { setSelectedTemplate(t); setOwnTemplate(null); }}
                >
                  <CardPreview template={t} title="Title" recipientName="Sarah" message="Your message" senderName="Rahul" size="small" />
                  <p>{t.name}</p>
                  {selectedTemplate.id === t.id && !ownTemplate && <FiCheck className="template-picked" />}
                </div>
              ))}
            </div>

            {/* Upload Own Template */}
            <div className="own-template-section">
              <p className="own-template-label">Or upload your own design</p>
              {ownTemplate ? (
                <div className="own-template-preview">
                  <img src={ownTemplate} alt="Own template" />
                  <button onClick={() => setOwnTemplate(null)} className="remove-own-template">
                    <FiX /> Remove
                  </button>
                </div>
              ) : (
                <label className="own-template-upload">
                  <input type="file" accept="image/*" onChange={handleOwnTemplateUpload} hidden />
                  <FiUpload /> Upload Your Design (PNG/JPG)
                </label>
              )}
              <p className="own-template-hint">We'll print your uploaded design exactly as-is</p>
            </div>
          </div>

          {/* Step 2 — Content */}
          <div className="editor-section">
            <h3>2. Add Your Content</h3>

            <div className="editor-field">
              <label>Card Title</label>
              <input type="text" placeholder="e.g. Happy Birthday!, With Love, Thank You!" value={title} onChange={e => setTitle(e.target.value)} className="editor-input" maxLength={40} />
            </div>

            <div className="editor-field">
              <label>Recipient's Name <span className="req">*</span></label>
              <input type="text" placeholder="Who is this card for?" value={recipientName} onChange={e => setRecipientName(e.target.value)} className="editor-input" maxLength={30} />
            </div>

            <div className="editor-field">
              <label>Your Message</label>
              <textarea placeholder="Write your heartfelt message..." value={message} onChange={e => setMessage(e.target.value)} className="editor-textarea" maxLength={200} />
              <p className="editor-hint">{message.length}/200 characters</p>
            </div>

            <div className="editor-field">
              <label>Your Name <span className="req">*</span></label>
              <input type="text" placeholder="Your name" value={senderName} onChange={e => setSenderName(e.target.value)} className="editor-input" maxLength={30} />
            </div>
          </div>

          {/* Step 3 — Photo */}
          <div className="editor-section">
            <h3>3. Add a Photo <span className="opt-label">(Optional)</span></h3>
            <p className="editor-section-sub">Your photo will appear in the card's photo zone</p>
            {photo ? (
              <div className="editor-photo-preview">
                <img src={photo} alt="uploaded" />
                <button onClick={() => setPhoto(null)} className="remove-photo-btn"><FiX /> Remove</button>
              </div>
            ) : (
              <label className="editor-photo-upload">
                <input type="file" accept="image/*" onChange={handlePhotoUpload} hidden />
                <FiUpload className="upload-icon" />
                <p>Click to upload a photo</p>
                <span>PNG or JPG, up to 10MB</span>
              </label>
            )}
          </div>

          {/* Price & Actions */}
          <div className="editor-section">
            <div className="editor-price-row">
              <span>Card Price</span>
              <span className="editor-price">₹{product?.price || 149}</span>
            </div>
            <div className="editor-actions">
              <button className="btn-add-to-cart" onClick={handleAddToCart}>
                {addedToCart ? <><FiCheck /> Added!</> : <><FiShoppingCart /> Add to Cart</>}
              </button>
              <button className="btn-buy-now" onClick={handleBuyNow}>
                Buy Now →
              </button>
            </div>
          </div>

        </div>

        {/* Right — Live Preview */}
        <div className="card-editor-preview">
          <p className="preview-label">Live Preview</p>
          <p className="preview-note">This is exactly how your card will be printed</p>

          {ownTemplate ? (
            <div className="own-template-live-preview">
              <img src={ownTemplate} alt="Your design" />
              <div className="own-template-overlay">
                {recipientName && <p className="overlay-recipient">To: {recipientName}</p>}
                {message && <p className="overlay-message">"{message}"</p>}
                {senderName && <p className="overlay-sender">— {senderName}</p>}
              </div>
            </div>
          ) : (
            <CardPreview
              template={selectedTemplate}
              title={title}
              recipientName={recipientName}
              message={message}
              senderName={senderName}
              photo={photo}
              size="large"
            />
          )}

          <div className="preview-print-note">
            <p>📄 Printed on 350gsm premium matte paper</p>
            <p>📦 Delivered in a protective envelope</p>
            <p>✅ Free delivery on all cards</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CardEditor;
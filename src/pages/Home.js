import React from 'react';
import '../styles/Home.css';
import { FiGift, FiTruck, FiBell, FiCreditCard, FiArrowRight } from 'react-icons/fi';
import { FiHeart, FiHome, FiStar, FiBriefcase, FiAward, FiSun, FiUsers, FiPackage } from 'react-icons/fi';
const products = [
  {
    name: 'Luxury Chocolate Hamper',
    price: '₹999',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&q=80',
  },
  {
    name: 'Custom Photo Frame',
    price: '₹599',
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&q=80',
  },
  {
    name: 'Aromatherapy Gift Set',
    price: '₹1,299',
    tag: 'Trending',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80',
  },
  {
    name: 'Personalized Jewellery Box',
    price: '₹849',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80',
  },
];

const occasions = [
  { icon: <FiStar />, label: 'Birthday' },
  { icon: <FiHeart />, label: 'Wedding' },
  { icon: <FiHeart />, label: "Valentine's" },
  { icon: <FiAward />, label: 'Graduation' },
  { icon: <FiHome />, label: 'Housewarming' },
  { icon: <FiSun />, label: 'Festival' },
  { icon: <FiUsers />, label: 'Baby Shower' },
  { icon: <FiBriefcase />, label: 'Corporate' },
];

const features = [
  { icon: <FiGift />, title: 'Fully Customizable', desc: 'Design your gift from scratch or choose from our curated templates.' },
  { icon: <FiTruck />, title: 'Reliable Delivery', desc: 'On-time delivery tracked at every step, right to their doorstep.' },
  { icon: <FiBell />, title: 'Smart Reminders', desc: 'Never miss an occasion — we remind you before every special date.' },
  { icon: <FiCreditCard />, title: 'Secure Payments', desc: 'Multiple payment options with 100% secure checkout.' },
];

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-tagline">Thoughtfully Curated Gifts</p>
          <h1>Give the gift of <span>a memory</span></h1>
          <p className="hero-sub">Personalized hampers, custom cards, and meaningful gifts — delivered to your loved ones with care.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Explore Gifts <FiArrowRight style={{marginLeft: '8px'}} /></button>
            <button className="btn-secondary">Customize Yours</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-illustration">
            <svg width="100%" viewBox="0 0 680 520" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FFF0F5"/>
                  <stop offset="100%" stopColor="#FFF8F0"/>
                </linearGradient>
                <linearGradient id="giftTop" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F9D0DE"/>
                  <stop offset="100%" stopColor="#F4B8CC"/>
                </linearGradient>
                <linearGradient id="giftBox" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF"/>
                  <stop offset="100%" stopColor="#FFF0F5"/>
                </linearGradient>
                <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FDDBB8"/>
                  <stop offset="100%" stopColor="#F9C99A"/>
                </linearGradient>
                <linearGradient id="dressGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F4B8CC"/>
                  <stop offset="100%" stopColor="#E8A0B4"/>
                </linearGradient>
                <linearGradient id="ribbonV" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#E8709A"/>
                  <stop offset="100%" stopColor="#D4527F"/>
                </linearGradient>
              </defs>

              <rect x="20" y="20" width="640" height="480" rx="28" fill="url(#bgGrad)"/>

              <circle cx="580" cy="80" r="55" fill="#F9D0DE" opacity="0.35"/>
              <circle cx="100" cy="400" r="70" fill="#FFE4C4" opacity="0.3"/>
              <circle cx="560" cy="400" r="45" fill="#F9D0DE" opacity="0.25"/>
              <circle cx="140" cy="120" r="35" fill="#FFE4C4" opacity="0.28"/>

              <g fill="#E8A0B4" opacity="0.7">
                <polygon points="110,180 113,188 121,188 115,193 117,201 110,196 103,201 105,193 99,188 107,188" transform="scale(0.6) translate(90,220)"/>
                <polygon points="110,180 113,188 121,188 115,193 117,201 110,196 103,201 105,193 99,188 107,188" transform="scale(0.4) translate(1050,280)"/>
                <polygon points="110,180 113,188 121,188 115,193 117,201 110,196 103,201 105,193 99,188 107,188" transform="scale(0.5) translate(660,720)"/>
              </g>

              <g opacity="0.5">
                <path d="M530,140 C530,137 534,133 538,137 C542,133 546,137 546,140 C546,145 538,152 538,152 C538,152 530,145 530,140Z" fill="#E8709A"/>
                <path d="M108,300 C108,297 112,293 116,297 C120,293 124,297 124,300 C124,305 116,312 116,312 C116,312 108,305 108,300Z" fill="#F9C99A" opacity="0.7"/>
                <path d="M555,310 C555,308 558,304 561,308 C564,304 567,308 567,310 C567,314 561,320 561,320 C561,320 555,314 555,310Z" fill="#E8709A" opacity="0.5"/>
              </g>

              <ellipse cx="340" cy="420" rx="75" ry="30" fill="#E8A0B4" opacity="0.2"/>
              <path d="M295,300 Q310,380 280,440 L400,440 Q370,380 385,300 Q362,320 340,318 Q318,320 295,300Z" fill="url(#dressGrad)"/>

              <path d="M300,310 Q260,340 245,370" stroke="#FDDBB8" strokeWidth="22" strokeLinecap="round" fill="none"/>
              <path d="M380,310 Q420,340 435,370" stroke="#FDDBB8" strokeWidth="22" strokeLinecap="round" fill="none"/>

              <ellipse cx="245" cy="373" rx="18" ry="14" fill="#FDDBB8"/>
              <ellipse cx="435" cy="373" rx="18" ry="14" fill="#FDDBB8"/>

              <rect x="238" y="330" width="204" height="42" rx="8" fill="url(#giftTop)"/>
              <rect x="248" y="370" width="184" height="120" rx="6" fill="url(#giftBox)" stroke="#F4B8CC" strokeWidth="1"/>
              <rect x="328" y="370" width="24" height="120" fill="url(#ribbonV)" opacity="0.7"/>
              <rect x="238" y="346" width="204" height="18" rx="4" fill="url(#ribbonV)" opacity="0.75"/>
              <rect x="328" y="330" width="24" height="42" fill="#D4527F" opacity="0.6"/>
              <ellipse cx="340" cy="333" rx="14" ry="10" fill="#E8709A"/>
              <ellipse cx="316" cy="326" rx="18" ry="11" fill="#E8709A" transform="rotate(-20,316,326)"/>
              <ellipse cx="364" cy="326" rx="18" ry="11" fill="#E8709A" transform="rotate(20,364,326)"/>
              <circle cx="340" cy="333" r="8" fill="#D4527F"/>
              <rect x="258" y="378" width="60" height="8" rx="4" fill="white" opacity="0.45"/>
              <rect x="258" y="390" width="40" height="5" rx="2.5" fill="white" opacity="0.3"/>

              <rect x="328" y="268" width="24" height="38" rx="10" fill="#FDDBB8"/>
              <ellipse cx="340" cy="240" rx="52" ry="56" fill="url(#skinGrad)"/>

              <path d="M292,225 Q295,170 340,168 Q385,170 388,225 Q375,195 340,192 Q305,195 292,225Z" fill="#6B3F2A"/>
              <path d="M292,225 Q285,250 290,270 Q295,215 310,210Z" fill="#6B3F2A"/>
              <path d="M388,225 Q395,250 390,270 Q385,215 370,210Z" fill="#6B3F2A"/>

              <path d="M316,238 Q322,232 328,238" stroke="#6B3F2A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M352,238 Q358,232 364,238" stroke="#6B3F2A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

              <ellipse cx="307" cy="252" rx="14" ry="9" fill="#F4A0B5" opacity="0.45"/>
              <ellipse cx="373" cy="252" rx="14" ry="9" fill="#F4A0B5" opacity="0.45"/>

              <path d="M322,262 Q340,276 358,262" stroke="#D4527F" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <ellipse cx="340" cy="253" rx="5" ry="3.5" fill="#F0B090" opacity="0.6"/>

              <circle cx="290" cy="250" r="5" fill="#E8709A" opacity="0.8"/>
              <circle cx="390" cy="250" r="5" fill="#E8709A" opacity="0.8"/>

              <rect x="480" y="48" width="154" height="36" rx="18" fill="white" stroke="#F4B8CC" strokeWidth="1"/>
              <circle cx="500" cy="66" r="8" fill="#F9D0DE"/>
              <path d="M496,66 C496,64 498,62 500,64 C502,62 504,64 504,66 C504,68.5 500,71 500,71 C500,71 496,68.5 496,66Z" fill="#E8709A"/>
              <text x="514" y="71" fontFamily="Georgia, serif" fontSize="12" fill="#C06080" fontStyle="italic">Curated with love</text>

              <rect x="38" y="400" width="220" height="68" rx="16" fill="white" stroke="#F4B8CC" strokeWidth="0.5"/>
              <circle cx="66" cy="422" r="14" fill="#F9D0DE"/>
              <circle cx="66" cy="416" r="7" fill="#FDDBB8"/>
              <ellipse cx="66" cy="430" rx="9" ry="6" fill="#E8A0B4"/>
              <text x="88" y="418" fontFamily="Georgia, serif" fontSize="11.5" fontWeight="bold" fill="#2a2a2a">Priya just received her gift</text>
              <text x="88" y="434" fontFamily="Arial, sans-serif" fontSize="10.5" fill="#888">"I cried happy tears! Thank you!"</text>
              <text x="88" y="454" fontFamily="Arial, sans-serif" fontSize="10" fill="#bbb">2 mins ago</text>
              <circle cx="240" cy="412" r="5" fill="#4CAF88"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Occasion Filters */}
      <section className="occasions">
        <p className="section-label">SHOP BY OCCASION</p>
        <h2>What are you celebrating?</h2>
        <div className="occasion-grid">
          {occasions.map((item, index) => (
            <div className="occasion-card" key={index}>
              <span className="occasion-icon">{item.icon}</span>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Section */}
      <section className="trending">
        <p className="section-label">TRENDING NOW</p>
        <h2>Most Loved Gifts</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-img">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <span className="product-tag">{product.tag}</span>
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <button className="btn-primary small">Customize</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Giftbloom */}
      <section className="why-us">
        <p className="section-label">WHY GIFTBLOOM</p>
        <h2>Gifting, reimagined</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>Giftbloom</h3>
            <p>Making every occasion unforgettable.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/explore">Explore</a>
            <a href="/customize">Customize</a>
          </div>
          <div className="footer-links">
            <h4>Support</h4>
            <a href="/">FAQs</a>
            <a href="/">Contact Us</a>
            <a href="/">Track Order</a>
          </div>
          <div className="footer-links">
            <h4>Legal</h4>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Service</a>
            <a href="/">Refund Policy</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Giftbloom. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default Home;
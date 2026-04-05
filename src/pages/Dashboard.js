import React, { useState } from 'react';
import '../styles/Dashboard.css';
import { FiPackage, FiHeart, FiMapPin, FiBell, FiUser, FiGift, FiChevronRight, FiCheck, FiClock } from 'react-icons/fi';

const orders = [
  { id: 'GB104521', date: '28 Mar 2026', status: 'Delivered', item: 'Luxury Chocolate Hamper', price: 999, to: 'Sarah M.' },
  { id: 'GB098342', date: '15 Mar 2026', status: 'In Transit', item: 'Custom Photo Frame', price: 599, to: 'Rahul K.' },
  { id: 'GB087231', date: '02 Mar 2026', status: 'Delivered', item: 'Aromatherapy Gift Set', price: 1299, to: 'Priya S.' },
];

const wishlist = [
  { id: 1, name: 'Premium Skincare Hamper', price: 1599, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&q=80' },
  { id: 2, name: 'Wedding Gift Hamper', price: 2499, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=200&q=80' },
  { id: 3, name: 'Gourmet Tea Collection', price: 749, image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=200&q=80' },
];

const reminders = [
  { id: 1, name: "Sarah's Birthday", date: 'July 15', daysLeft: 106, timing: '1 week before' },
  { id: 2, name: 'Wedding Anniversary', date: 'Aug 22', daysLeft: 144, timing: '3 days before' },
  { id: 3, name: "Mom's Birthday", date: 'Oct 05', daysLeft: 188, timing: 'Both' },
];

const savedAddresses = [
  { id: 1, tag: 'Home', name: 'Abhishek B', address: '12A, Sunshine Apartments, MG Road', city: 'Bangalore', pincode: '560034' },
  { id: 2, tag: 'Office', name: 'Abhishek B', address: '4th Floor, Tech Park, Whitefield', city: 'Bangalore', pincode: '560066' },
];

const tabs = [
  { id: 'orders', label: 'My Orders', icon: <FiPackage /> },
  { id: 'wishlist', label: 'Wishlist', icon: <FiHeart /> },
  { id: 'reminders', label: 'Reminders', icon: <FiBell /> },
  { id: 'addresses', label: 'Addresses', icon: <FiMapPin /> },
  { id: 'profile', label: 'Profile', icon: <FiUser /> },
];

function Dashboard() {
  const [activeTab, setActiveTab] = useState('orders');

  const statusColor = {
    'Delivered': '#3B6D11',
    'In Transit': '#185FA5',
    'Processing': '#BA7517',
  };

  const statusBg = {
    'Delivered': '#EAF3DE',
    'In Transit': '#E6F1FB',
    'Processing': '#FFFBF0',
  };

  return (
    <div className="dashboard-page">

      {/* Header */}
      <div className="dashboard-header">
        <div className="dashboard-user">
          <div className="dashboard-avatar">A</div>
          <div>
            <h1>Welcome back, Abhishek! 👋</h1>
            <p>abhishek@email.com • Member since March 2026</p>
          </div>
        </div>
        <div className="dashboard-stats">
          <div className="stat-card">
            <p className="stat-number">{orders.length}</p>
            <p className="stat-label">Orders</p>
          </div>
          <div className="stat-card">
            <p className="stat-number">{wishlist.length}</p>
            <p className="stat-label">Wishlist</p>
          </div>
          <div className="stat-card">
            <p className="stat-number">{reminders.length}</p>
            <p className="stat-label">Reminders</p>
          </div>
        </div>
      </div>

      <div className="dashboard-body">

        {/* Sidebar */}
        <div className="dashboard-sidebar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`sidebar-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span>{tab.label}</span>
              <FiChevronRight className="tab-arrow" />
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="dashboard-content">

          {/* ===== ORDERS ===== */}
          {activeTab === 'orders' && (
            <div>
              <h2>My Orders</h2>
              <p className="content-sub">Track and manage your gift orders</p>
              <div className="orders-list">
                {orders.map(order => (
                  <div key={order.id} className="order-card">
                    <div className="order-card-left">
                      <div className="order-icon">🎁</div>
                      <div className="order-info">
                        <p className="order-name">{order.item}</p>
                        <p className="order-meta">To: {order.to} • {order.date}</p>
                        <p className="order-id">Order ID: {order.id}</p>
                      </div>
                    </div>
                    <div className="order-card-right">
                      <span
                        className="order-status"
                        style={{ color: statusColor[order.status], backgroundColor: statusBg[order.status] }}
                      >
                        {order.status === 'Delivered' ? <FiCheck /> : <FiClock />}
                        {order.status}
                      </span>
                      <p className="order-price">₹{order.price}</p>
                      <button className="btn-order-action">View Details</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== WISHLIST ===== */}
          {activeTab === 'wishlist' && (
            <div>
              <h2>My Wishlist</h2>
              <p className="content-sub">Gifts you've saved for later</p>
              <div className="wishlist-grid">
                {wishlist.map(item => (
                  <div key={item.id} className="wishlist-card">
                    <div className="wishlist-img">
                      <img src={item.image} alt={item.name} />
                      <button className="wishlist-remove">✕</button>
                    </div>
                    <div className="wishlist-info">
                      <p className="wishlist-name">{item.name}</p>
                      <p className="wishlist-price">₹{item.price.toLocaleString()}</p>
                      <button className="btn-wishlist-order">Customize & Order</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== REMINDERS ===== */}
          {activeTab === 'reminders' && (
            <div>
              <h2>Smart Reminders</h2>
              <p className="content-sub">Never miss a special occasion again</p>
              <div className="reminders-list">
                {reminders.map(r => (
                  <div key={r.id} className="reminder-card">
                    <div className="reminder-card-left">
                      <div className="reminder-bell-icon">
                        <FiBell />
                      </div>
                      <div>
                        <p className="reminder-name">{r.name}</p>
                        <p className="reminder-date">{r.date} • Remind {r.timing}</p>
                      </div>
                    </div>
                    <div className="reminder-card-right">
                      <div className="days-left-badge">
                        <p className="days-number">{r.daysLeft}</p>
                        <p className="days-label">days left</p>
                      </div>
                      <button className="btn-reminder-gift">
                        <FiGift /> Send Gift
                      </button>
                    </div>
                  </div>
                ))}
                <button className="btn-add-reminder">
                  + Add New Reminder
                </button>
              </div>
            </div>
          )}

          {/* ===== ADDRESSES ===== */}
          {activeTab === 'addresses' && (
            <div>
              <h2>Saved Addresses</h2>
              <p className="content-sub">Manage your delivery addresses</p>
              <div className="addresses-list">
                {savedAddresses.map(addr => (
                  <div key={addr.id} className="address-card-dash">
                    <div className="address-card-dash-left">
                      <span className="address-tag-dash">{addr.tag}</span>
                      <div>
                        <p className="address-name-dash">{addr.name}</p>
                        <p className="address-text">{addr.address}</p>
                        <p className="address-text">{addr.city} — {addr.pincode}</p>
                      </div>
                    </div>
                    <div className="address-actions">
                      <button className="btn-address-edit">Edit</button>
                      <button className="btn-address-delete">Delete</button>
                    </div>
                  </div>
                ))}
                <button className="btn-add-address-dash">
                  + Add New Address
                </button>
              </div>
            </div>
          )}

          {/* ===== PROFILE ===== */}
          {activeTab === 'profile' && (
            <div>
              <h2>My Profile</h2>
              <p className="content-sub">Manage your personal information</p>
              <div className="profile-form">
                <div className="profile-avatar-section">
                  <div className="profile-avatar-large">A</div>
                  <button className="btn-change-photo">Change Photo</button>
                </div>
                <div className="profile-fields">
                  <div className="profile-field-row">
                    <div className="profile-field">
                      <label>Full Name</label>
                      <input type="text" defaultValue="Abhishek B" className="profile-input" />
                    </div>
                    <div className="profile-field">
                      <label>Email Address</label>
                      <input type="email" defaultValue="abhishek@email.com" className="profile-input" />
                    </div>
                  </div>
                  <div className="profile-field-row">
                    <div className="profile-field">
                      <label>Phone Number</label>
                      <input type="tel" defaultValue="9876543210" className="profile-input" />
                    </div>
                    <div className="profile-field">
                      <label>Date of Birth</label>
                      <input type="date" className="profile-input" />
                    </div>
                  </div>
                  <button className="btn-save-profile">Save Changes</button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
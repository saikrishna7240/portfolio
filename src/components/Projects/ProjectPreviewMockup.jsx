import React from 'react';
import { 
  Users, 
  DollarSign, 
  Calendar, 
  FileCheck, 
  ShoppingCart, 
  Percent, 
  Cloud, 
  Eye, 
  Hand, 
  Activity, 
  Home, 
  Filter, 
  MapPin, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import './Projects.css';

export default function ProjectPreviewMockup({ project }) {
  const { id } = project;

  if (id === 'payroll-management') {
    return (
      <div className="mockup-frame payroll-mockup">
        {/* Mockup Header */}
        <div className="mockup-topbar">
          <div className="mockup-tab-group">
            <span className="mockup-tab active">Overview</span>
            <span className="mockup-tab">Employees (148)</span>
            <span className="mockup-tab">Payroll Runs</span>
            <span className="mockup-tab">Reports</span>
          </div>
          <div className="mockup-status-badge">
            <span className="dot-mini" />
            <span>DB: PostgreSQL (Connected)</span>
          </div>
        </div>

        {/* Mockup Content */}
        <div className="mockup-body">
          <div className="mockup-stat-row">
            <div className="mockup-stat-tile">
              <span className="tile-title">Total Payroll Disbursed</span>
              <span className="tile-value">$124,500.00</span>
              <span className="tile-badge text-lime">● Automated Run Complete</span>
            </div>
            <div className="mockup-stat-tile">
              <span className="tile-title">Staff On Shift</span>
              <span className="tile-value">136 / 148</span>
              <span className="tile-badge">91.8% Attendance</span>
            </div>
            <div className="mockup-stat-tile">
              <span className="tile-title">Tax Withholdings</span>
              <span className="tile-value">$28,635.00</span>
              <span className="tile-badge">Formula: Tier-4 Compliant</span>
            </div>
          </div>

          <div className="mockup-table-preview">
            <div className="table-header-row">
              <span>STAFF ID</span>
              <span>NAME</span>
              <span>ROLE</span>
              <span>HOURS</span>
              <span>NET PAY</span>
              <span>STATUS</span>
            </div>
            <div className="table-data-row">
              <span className="mono-sub">EMP-0941</span>
              <span className="font-strong">Sarah Jenkins</span>
              <span>Senior Engineer</span>
              <span>168 hrs</span>
              <span className="text-lime font-mono">$8,450.00</span>
              <span className="pill-paid">Approved</span>
            </div>
            <div className="table-data-row">
              <span className="mono-sub">EMP-0942</span>
              <span className="font-strong">Marcus Vance</span>
              <span>Product Lead</span>
              <span>160 hrs</span>
              <span className="text-lime font-mono">$9,200.00</span>
              <span className="pill-paid">Approved</span>
            </div>
            <div className="table-data-row">
              <span className="mono-sub">EMP-0943</span>
              <span className="font-strong">Elena Rostova</span>
              <span>UI Architect</span>
              <span>172 hrs</span>
              <span className="text-lime font-mono">$8,120.00</span>
              <span className="pill-pending">Processing</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'shopping-bill-calculator') {
    return (
      <div className="mockup-frame pos-mockup">
        {/* Mockup Header */}
        <div className="mockup-topbar">
          <div className="mockup-tab-group">
            <span className="mockup-tab active">POS Terminal #03</span>
            <span className="mockup-tab">Product Catalog</span>
            <span className="mockup-tab">Discounts & Tiers</span>
          </div>
          <div className="mockup-status-badge">
            <Cloud size={12} className="text-lime" />
            <span>Firebase Sync: Live</span>
          </div>
        </div>

        {/* Mockup Content */}
        <div className="mockup-body pos-body-split">
          <div className="pos-cart-list">
            <div className="pos-cart-item">
              <div className="item-info">
                <span className="item-name">Mechanical Core Keyboard</span>
                <span className="item-sku">SKU: MC-892 • Qty: 1</span>
              </div>
              <span className="item-price font-mono">$185.00</span>
            </div>
            <div className="pos-cart-item">
              <div className="item-info">
                <span className="item-name">Studio Monitor 4K UHD</span>
                <span className="item-sku">SKU: MON-402 • Qty: 1</span>
              </div>
              <span className="item-price font-mono">$620.00</span>
            </div>
            <div className="pos-cart-item">
              <div className="item-info">
                <span className="item-name">Precision USB-C Cable (2m)</span>
                <span className="item-sku">SKU: CAB-014 • Qty: 2</span>
              </div>
              <span className="item-price font-mono">$37.50</span>
            </div>
          </div>

          <div className="pos-summary-card">
            <div className="summary-line">
              <span>Cart Subtotal</span>
              <span className="font-mono">$842.50</span>
            </div>
            <div className="summary-line">
              <span>Tax (State Tier 8.5%)</span>
              <span className="font-mono">$71.61</span>
            </div>
            <div className="summary-line discount-line">
              <span>Coupon (SUMMER24 -15%)</span>
              <span className="font-mono text-lime">-$126.38</span>
            </div>
            <div className="summary-total-line">
              <span>Net Payable</span>
              <span className="total-amount font-mono text-lime">$787.73</span>
            </div>
            <div className="pos-action-bar">
              <span className="pos-btn-mock">PRINT RECEIPT</span>
              <span className="pos-btn-mock primary">COMPLETE TRANSACTION</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'signbridge-ai') {
    return (
      <div className="mockup-frame vision-mockup">
        {/* Mockup Header */}
        <div className="mockup-topbar">
          <div className="mockup-tab-group">
            <span className="mockup-tab active">Camera Stream #01</span>
            <span className="mockup-tab">Landmark Mesh</span>
            <span className="mockup-tab">Neural Inference Log</span>
          </div>
          <div className="mockup-status-badge">
            <Activity size={12} className="text-lime" />
            <span>FPS: 60 • Latency: 84ms</span>
          </div>
        </div>

        {/* Mockup Content */}
        <div className="mockup-body vision-body-split">
          <div className="camera-feed-sim">
            {/* Hand Landmark Overlay Visual */}
            <div className="landmark-hud">
              <div className="hud-corner top-left" />
              <div className="hud-corner top-right" />
              <div className="hud-corner bottom-left" />
              <div className="hud-corner bottom-right" />
              
              <svg className="hand-mesh-svg" viewBox="0 0 200 200">
                {/* Simulated Hand skeleton bones */}
                <line x1="100" y1="160" x2="60" y2="120" stroke="rgba(16, 245, 155, 0.4)" strokeWidth="1.5" />
                <line x1="60" y1="120" x2="40" y2="80" stroke="rgba(16, 245, 155, 0.4)" strokeWidth="1.5" />
                <line x1="40" y1="80" x2="35" y2="50" stroke="rgba(16, 245, 155, 0.6)" strokeWidth="1.5" />
                
                <line x1="100" y1="160" x2="85" y2="100" stroke="rgba(16, 245, 155, 0.4)" strokeWidth="1.5" />
                <line x1="85" y1="100" x2="80" y2="60" stroke="rgba(16, 245, 155, 0.4)" strokeWidth="1.5" />
                <line x1="80" y1="60" x2="75" y2="35" stroke="rgba(16, 245, 155, 0.6)" strokeWidth="1.5" />

                <line x1="100" y1="160" x2="110" y2="95" stroke="rgba(16, 245, 155, 0.4)" strokeWidth="1.5" />
                <line x1="110" y1="95" x2="115" y2="55" stroke="rgba(16, 245, 155, 0.4)" strokeWidth="1.5" />
                <line x1="115" y1="55" x2="118" y2="30" stroke="rgba(16, 245, 155, 0.6)" strokeWidth="1.5" />

                <line x1="100" y1="160" x2="135" y2="105" stroke="rgba(16, 245, 155, 0.4)" strokeWidth="1.5" />
                <line x1="135" y1="105" x2="145" y2="70" stroke="rgba(16, 245, 155, 0.4)" strokeWidth="1.5" />
                <line x1="145" y1="70" x2="150" y2="45" stroke="rgba(16, 245, 155, 0.6)" strokeWidth="1.5" />

                {/* Simulated Nodes */}
                <circle cx="100" cy="160" r="4" fill="#10f59b" />
                <circle cx="60" cy="120" r="3" fill="#ffffff" />
                <circle cx="40" cy="80" r="3" fill="#ffffff" />
                <circle cx="35" cy="50" r="3" fill="#10f59b" />
                <circle cx="85" cy="100" r="3" fill="#ffffff" />
                <circle cx="80" cy="60" r="3" fill="#ffffff" />
                <circle cx="75" cy="35" r="3" fill="#10f59b" />
                <circle cx="110" cy="95" r="3" fill="#ffffff" />
                <circle cx="115" cy="55" r="3" fill="#ffffff" />
                <circle cx="118" cy="30" r="3" fill="#10f59b" />
                <circle cx="135" cy="105" r="3" fill="#ffffff" />
                <circle cx="145" cy="70" r="3" fill="#ffffff" />
                <circle cx="150" cy="45" r="3" fill="#10f59b" />
              </svg>

              <div className="landmark-tag">
                <span>HAND_LANDMARKS_DETECTED [21/21]</span>
              </div>
            </div>
          </div>

          <div className="vision-output-card">
            <span className="vision-label">CLASSIFICATION RESULT</span>
            <div className="vision-translation">
              <span className="quote-mark">“</span>
              <span className="translated-text">Thank you for your assistance.</span>
              <span className="quote-mark">”</span>
            </div>
            <div className="confidence-meter">
              <div className="meter-label">
                <span>Model Confidence</span>
                <span className="text-lime font-mono">98.4%</span>
              </div>
              <div className="meter-bar">
                <div className="meter-fill" style={{ width: '98.4%' }} />
              </div>
            </div>
            <div className="vision-feature-pills">
              <span>TTS Audio Synthesizer: Active</span>
              <span>Continuous Sentence Builder</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Real Estate Platform
  return (
    <div className="mockup-frame realestate-mockup">
      {/* Mockup Header */}
      <div className="mockup-topbar">
        <div className="mockup-tab-group">
          <span className="mockup-tab active">All Properties</span>
          <span className="mockup-tab">Penthouse Suites</span>
          <span className="mockup-tab">Architectural Living</span>
        </div>
        <div className="mockup-status-badge">
          <Filter size={12} className="text-lime" />
          <span>Active Filters: 4 Applied</span>
        </div>
      </div>

      {/* Mockup Content */}
      <div className="mockup-body realestate-body">
        <div className="property-showcase-card">
          <div className="property-visual-area">
            <div className="property-tag-badge">FEATURED ARCHITECTURE</div>
            <div className="property-price-tag font-mono">$1,850,000</div>
          </div>

          <div className="property-details-row">
            <div className="property-main-meta">
              <span className="property-title">The Kōen Brutalist Residence</span>
              <span className="property-location">
                <MapPin size={12} className="text-lime" />
                District 7 • Central Green Corridor
              </span>
            </div>

            <div className="property-specs">
              <div className="spec-item">
                <span className="spec-val">4</span>
                <span className="spec-lbl">BEDROOMS</span>
              </div>
              <div className="spec-item">
                <span className="spec-val">3.5</span>
                <span className="spec-lbl">BATHS</span>
              </div>
              <div className="spec-item">
                <span className="spec-val">3,420</span>
                <span className="spec-lbl">SQ FT</span>
              </div>
            </div>
          </div>

          <div className="property-filter-pills">
            <span className="filter-pill active">Minimalist Interior</span>
            <span className="filter-pill active">Zero Carbon Standard</span>
            <span className="filter-pill active">Private Courtyard</span>
            <span className="filter-pill active">Smart Automation</span>
          </div>
        </div>
      </div>
    </div>
  );
}

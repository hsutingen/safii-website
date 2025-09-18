import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: 'general',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 這裡可以處理表單提交邏輯
    console.log('Form submitted:', formData);
    alert('感謝您的訊息！我們會盡快回覆您。');
  };

  const contactInfo = [
    {
      icon: '📧',
      title: '一般諮詢',
      description: '產品使用問題、功能建議',
      contact: 'hello@safii.com'
    },
    {
      icon: '🤝',
      title: '合作夥伴',
      description: '企業合作、技術整合',
      contact: 'partnership@safii.com'
    },
    {
      icon: '📈',
      title: '投資人關係',
      description: '投資洽談、財務資訊',
      contact: 'investor@safii.com'
    },
    {
      icon: '📰',
      title: '媒體聯絡',
      description: '採訪邀約、新聞發布',
      contact: 'media@safii.com'
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: '📘',
      url: '#',
      description: '追蹤最新消息與安全資訊'
    },
    {
      name: 'Instagram',
      icon: '📷',
      url: '#',
      description: '日常安全小貼士分享'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: '#',
      description: '企業合作與職業發展'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: '#',
      description: '即時動態與產品更新'
    }
  ];

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1 className="page-title">聯繫我們</h1>
          <p className="page-subtitle">
            有任何問題或建議？我們很樂意聽到您的聲音
          </p>
        </div>
      </div>

      <section className="contact-info-section">
        <div className="container">
          <h2 className="section-title">聯絡方式</h2>
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="info-icon">{info.icon}</div>
                <h3 className="info-title">{info.title}</h3>
                <p className="info-description">{info.description}</p>
                <a href={`mailto:${info.contact}`} className="info-contact">
                  {info.contact}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="form-content">
            <div className="form-intro">
              <h2>發送訊息給我們</h2>
              <p>
                填寫下方表單，我們的團隊會在 24 小時內回覆您。
                對於緊急事項，請直接撥打客服電話。
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h4>客服電話</h4>
                    <p>0800-123-456</p>
                    <span className="contact-note">週一至週五 9:00-18:00</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4>公司地址</h4>
                    <p>台北市信義區信義路五段 7 號</p>
                    <span className="contact-note">台北 101 大樓</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">⏰</div>
                  <div>
                    <h4>營業時間</h4>
                    <p>週一至週五 9:00-18:00</p>
                    <span className="contact-note">國定假日休息</span>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">姓名 *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="請輸入您的姓名"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">電子郵件 *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">公司/組織</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="請輸入您的公司或組織名稱（選填）"
                />
              </div>

              <div className="form-group">
                <label htmlFor="type">聯繫類型</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="general">一般諮詢</option>
                  <option value="partnership">合作提案</option>
                  <option value="investment">投資洽談</option>
                  <option value="media">媒體採訪</option>
                  <option value="support">技術支援</option>
                  <option value="feedback">意見回饋</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">訊息內容 *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="請詳細描述您的需求或問題..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                發送訊息
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M2 2l12 6-12 6V8.5l8.5-1.5L2 5.5V2z"/>
                </svg>
              </button>

              <p className="form-note">
                * 為必填欄位。提交表單即表示您同意我們的
                <a href="#privacy">隱私政策</a>。
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="social-section">
        <div className="container">
          <h2 className="section-title">追蹤我們</h2>
          <p className="section-subtitle">
            在社群媒體上關注我們，獲得最新資訊與安全小貼士
          </p>
          
          <div className="social-grid">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.url} className="social-card" target="_blank" rel="noopener noreferrer">
                <div className="social-icon">{social.icon}</div>
                <h3 className="social-name">{social.name}</h3>
                <p className="social-description">{social.description}</p>
                <div className="social-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M6.5 3l4.5 4.5-4.5 4.5-1-1 3.5-3.5L5.5 4l1-1z"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">常見問題</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>SAFII 是免費使用的嗎？</h4>
              <p>是的，SAFII 的基本功能完全免費。我們相信每個人都有享受安全的權利。</p>
            </div>
            <div className="faq-item">
              <h4>我的個人資料會被保護嗎？</h4>
              <p>絕對會。我們採用最高等級的加密技術，並且不會將您的資料分享給第三方。</p>
            </div>
            <div className="faq-item">
              <h4>如何加入女性互助社群？</h4>
              <p>下載 APP 並完成註冊後，即可自動加入您所在地區的女性互助網絡。</p>
            </div>
            <div className="faq-item">
              <h4>緊急求助功能如何運作？</h4>
              <p>按下緊急按鈕後，系統會立即發送您的位置給緊急聯絡人和附近的互助成員。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
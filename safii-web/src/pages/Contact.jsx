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
    // 生成 mailto 鏈接
    const subject = `SAFII 聯繫 - ${formData.type === 'general' ? '一般諮詢' : 
                    formData.type === 'partnership' ? '合作提案' : 
                    formData.type === 'investment' ? '投資洽談' : 
                    formData.type === 'media' ? '媒體採訪' : 
                    formData.type === 'support' ? '技術支援' : '意見回饋'}`;
    const body = `姓名：${formData.name}\n電子郵件：${formData.email}\n${formData.company ? `公司/組織：${formData.company}\n` : ''}\n訊息內容：\n${formData.message}`;
    const mailtoLink = `mailto:safiihsu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: '💌',
      title: '聯繫我們',
      description: '任何問題、建議或合作提案，歡迎來信',
      contact: 'safiihsu@gmail.com'
    }
  ];

  // 移除社群媒體連結，因為目前只有email聯絡方式

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
              <h2>與我們聯繫</h2>
              <p>
                SAFII 目前正在開發中，我們很樂意聽到您的想法和建議。
                填寫下方表單或直接寄信到 safiihsu@gmail.com 與我們聯繫。
              </p>
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


      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">關於 SAFII</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>SAFII 目前的開發狀況如何？</h4>
              <p>SAFII 目前正在積極開發中，我們致力於打造最好的安全守護系統。</p>
            </div>
            <div className="faq-item">
              <h4>什麼是「適度追蹤」？</h4>
              <p>這是我們的核心功能，讓您自控追蹤時長，只在需要時分享位置，兼顧安全與隱私。</p>
            </div>
            <div className="faq-item">
              <h4>如何參與 SAFII 的開發或測試？</h4>
              <p>歡迎透過 safiihsu@gmail.com 與我們聯繫，我們很樂意聽到您的想法和建議。</p>
            </div>
            <div className="faq-item">
              <h4>SAFII 的核心理念是什麼？</h4>
              <p>Safe for Every 'I' - 為每個獨立個體提供隱私友善的安全守護，讓安全不再靠運氣。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
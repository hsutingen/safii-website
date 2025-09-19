import { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: '一定要開鏡頭嗎？',
      answer: '不用。可先語音後開鏡頭，或全程語音。我們重視您的隱私選擇權，提供彈性的互助方式。'
    },
    {
      id: 2,
      question: '視訊會錄影嗎？',
      answer: '不會。除非主動同意，否則不留存影像與語音。我們採用端到端加密保護您的隱私。'
    },
    {
      id: 3,
      question: '為什麼不長期分享位置？',
      answer: '按時回覆＝無危險→不外送位置；未回覆＝疑似危險→自動通報，兼顧隱私與安全。只在需要時分享，不把安心建在長期曝露上。'
    },
    {
      id: 4,
      question: '監視器資料一定準嗎？',
      answer: '會持續更新，但環境仍可能變化；請搭配個人警覺與現場判斷。我們提供參考資訊，但安全判斷仍需結合實際情況。'
    },
    {
      id: 5,
      question: '適度追蹤如何運作？',
      answer: '事先設定追蹤時長與回報頻率（如30分鐘／每5-10分回報）。按時回覆代表安全，未按時回覆系統會自動通報您的位置給緊急聯絡人。'
    },
    {
      id: 6,
      question: 'AI 假電話聽起來自然嗎？',
      answer: 'AI 會生成自然對話，讓您能流暢地假裝通話。內建多種情境與身份（同事、家人、管理員等），可延遲來電或設定特定劇本。'
    },
    {
      id: 7,
      question: '一鍵通報會送到哪裡？',
      answer: '可設定通報群組，包括親友、校園或企業安管人員。長按啟動防誤觸，會即時發送您的定位和情境文字，無需通話或敘述地址。'
    },
    {
      id: 8,
      question: '如何保護個人隱私？',
      answer: '我們採用最小必要共享原則，只在疑似危險時分享位置。視訊預設不錄影、傳輸採用標準加密協議，並有匿名回報與違規處理機制。'
    },
    {
      id: 9,
      question: '女性互助如何運作？',
      answer: '一鍵建立視訊房，系統會優先媒合距離近且可即時支援的守護者。可選擇匿名模式，在不安但尚未發生事故的黃金時間獲得陪伴。'
    },
    {
      id: 10,
      question: '安全路徑準確嗎？',
      answer: '基於監視器分佈、明暗度等資料分析，會標紅提醒相對風險路段，並標示便利商店、警局等安全據點。資料持續更新，但請搭配現場判斷。'
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="faq-page">
      <div className="faq-hero">
        <div className="container">
          <h1 className="page-title">常見問答</h1>
          <p className="page-subtitle">
            關於 SAFII 服務的詳細說明
          </p>
        </div>
      </div>

      <section className="faq-content">
        <div className="container">
          <div className="faq-intro">
            <h2>我們來解答您的疑問</h2>
            <p>以下是用戶最常詢問的問題。如果您有其他疑問，歡迎隨時聯繫我們。</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <div 
                key={faq.id} 
                className={`faq-item ${openFAQ === faq.id ? 'open' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={openFAQ === faq.id}
                >
                  <span>{faq.question}</span>
                  <svg 
                    className="faq-icon"
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none"
                  >
                    <path 
                      d="M6 9l6 6 6-6" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-contact">
            <div className="contact-card">
              <h3>還有其他問題？</h3>
              <p>我們很樂意為您解答任何關於 SAFII 的疑問</p>
              <div className="contact-actions">
                <a href="/contact" className="btn btn-primary">聯繫我們</a>
                <a href="/download" className="btn btn-outline">立即體驗</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
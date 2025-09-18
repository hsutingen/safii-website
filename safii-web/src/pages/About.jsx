import './About.css';

function About() {
  const teamMembers = [
    {
      name: '許庭恩',
      role: '創辦人 & CEO',
      description: '前科技業產品經理，致力於用科技解決女性安全問題',
      avatar: '👩‍💼'
    },
    {
      name: '陳志明',
      role: 'CTO',
      description: '資深軟體工程師，專精於移動應用開發與AI技術',
      avatar: '👨‍💻'
    },
    {
      name: '王美華',
      role: '產品總監',
      description: 'UX設計專家，專注於創造直觀易用的安全產品體驗',
      avatar: '👩‍🎨'
    },
    {
      name: '張大衛',
      role: '安全專家',
      description: '前警界資深人士，提供專業的安全策略建議',
      avatar: '👨‍🔒'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: '公司成立',
      description: 'SAFII 團隊正式成立，開始產品研發'
    },
    {
      year: '2023',
      title: '首輪融資',
      description: '完成種子輪融資，獲得天使投資人支持'
    },
    {
      year: '2024',
      title: 'App 上線',
      description: 'SAFII App 正式上架，開始服務用戶'
    },
    {
      year: '2024',
      title: '用戶突破',
      description: '用戶數突破 50,000，建立穩固的安全社群'
    }
  ];

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1 className="page-title">關於我們</h1>
          <p className="page-subtitle">
            用科技守護每一個獨立的妳
          </p>
        </div>
      </div>

      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>我們的使命</h2>
              <div className="brand-concept">
                <h3>Safe for Every 'I' Individually</h3>
                <p className="concept-explanation">
                  SAFII 不僅是「Safe」與「AI」的結合，更代表著為每一個獨立個體（'I'）提供安全守護的理念。
                  我們相信每一位女性都有權在任何時候、任何地方感到安全與自由。
                </p>
              </div>
              <p className="mission-description">
                SAFII 致力於透過創新科技與社群力量，為女性創造更安全的生活環境。
                我們不只是提供一個應用程式，而是建立一個完整的安全生態系統，
                讓科技成為每位女性最可靠的安全夥伴。
              </p>
            </div>
            <div className="mission-visual">
              <div className="mission-image-placeholder">
                <div className="placeholder-icon">🛡️</div>
                <span className="placeholder-text">品牌理念圖</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2 className="section-title">核心價值</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🔒</div>
              <h3>隱私至上</h3>
              <p>保護用戶隱私是我們的首要原則，所有數據都採用最高等級的加密保護。</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>社群互助</h3>
              <p>相信女性間的互助力量，建立溫暖而強大的安全守護網絡。</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>快速響應</h3>
              <p>在緊急時刻提供最快速的響應，讓求助在關鍵時刻發揮最大效用。</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>持續創新</h3>
              <p>不斷研發新技術，持續改善產品體驗，為用戶提供最好的安全解決方案。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2 className="section-title">團隊成員</h2>
          <p className="section-subtitle">
            由來自不同領域的專業人士組成，共同為女性安全而努力
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-avatar">
                  <span>{member.avatar}</span>
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title">發展歷程</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{milestone.year}</span>
                  <h3 className="timeline-title">{milestone.title}</h3>
                  <p className="timeline-description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>加入我們的使命</h2>
            <p>如果您對我們的理念感興趣，歡迎與我們聯繫</p>
            <div className="cta-actions">
              <a href="/contact" className="btn btn-primary">聯繫我們</a>
              <a href="/download" className="btn btn-outline">下載 APP</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
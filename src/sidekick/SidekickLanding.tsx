import { ArrowDown, ChevronRight, MessageCircle, Mic, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { agents, approvalCards, features, projects, workflow } from './content';
import './sidekick.css';

const media = '/sidekick/media';

function ProductPhone({
  screen,
  alt,
  className = '',
  priority = false,
}: {
  screen: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={`product-phone ${className}`} data-product-ui>
      <img
        data-product-screenshot
        src={`${media}/app/${screen}.webp`}
        alt={alt}
        width="1170"
        height="2532"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </figure>
  );
}

function SidekickMark() {
  return (
    <a className="brand" href="/sidekick/" aria-label="사이드킥 홈">
      <img src={`${media}/app/icon.png`} alt="" width="36" height="36" />
      <span>Sidekick</span>
    </a>
  );
}

function InputProof() {
  return (
    <div className="input-proof">
      <ProductPhone screen="02" alt="음성과 채팅으로 새 업무를 맡기는 실제 사이드킥 앱 화면" />
      <div className="input-proof-copy">
        <span className="proof-label">실제 사이드킥 앱 화면</span>
        <h2>앱 안에서 바로<br />새 업무를 맡기세요</h2>
        <p>요청을 말하거나 입력하면 목표와 조건을 정리해 프로젝트로 이어갑니다.</p>
        <blockquote>유튜브 채널을 키우고 다음 영상까지 만들어줘</blockquote>
        <div className="input-mode-copy" aria-label="지원하는 업무 입력 방식">
          <span data-input-mode><Mic aria-hidden="true" /> 음성</span>
          <span data-input-mode><MessageCircle aria-hidden="true" /> 채팅</span>
        </div>
      </div>
    </div>
  );
}

const workflowProofs = [
  { screen: '03', alt: '업무를 역할별로 나누어 맡기는 실제 사이드킥 앱 화면' },
  { screen: '01', alt: '진행 중인 프로젝트와 AI 직원 상태를 확인하는 실제 사이드킥 앱 화면' },
  { screen: '05', alt: '요약과 근거, 다음 행동을 정리한 실제 사이드킥 결과 카드 화면' },
] as const;

function WorkflowScreen({ active }: { active: number }) {
  return (
    <div className="workflow-screen">
      {workflow.map((item, index) => (
        <article
          className={`workflow-panel ${active === index ? 'is-active' : ''}`}
          data-workflow-panel
          key={item.key}
        >
          <div className="workflow-proof">
            <ProductPhone screen={workflowProofs[index].screen} alt={workflowProofs[index].alt} />
            <div className="proof-caption">
              <span>실제 앱 화면 · {String(index + 1).padStart(2, '0')}</span>
              <strong>{item.label}</strong>
              <p>{item.body}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function ProjectCase({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const Icon = project.icon;
  return (
    <section
      className={`project-case project-case--${project.key}`}
      data-project-case
      data-extra-scene={project.key}
      style={{ '--case-accent': project.accent } as React.CSSProperties}
    >
      <div className="case-copy">
        <span className="case-pill"><Icon aria-hidden="true" /> {project.label}</span>
        <p>{project.eyebrow}</p>
        <h2>{project.title.split('\n').map((line) => <span key={line}>{line}</span>)}</h2>
        <small>{project.description}</small>
      </div>
      <div className="case-stage">
        <div className="case-plane case-plane--left" aria-hidden="true"><Icon /></div>
        <ProductPhone
          screen={String(index + 1).padStart(2, '0')}
          alt={`${project.label} 프로젝트를 보여주는 실제 사이드킥 앱 화면`}
        />
        <div className="case-plane case-plane--right" aria-hidden="true"><Icon /></div>
      </div>
    </section>
  );
}

function SidekickLanding() {
  const [activeWorkflow, setActiveWorkflow] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const videos = Array.from(document.querySelectorAll<HTMLVideoElement>('video[data-decorative-media]'));
    const markers = Array.from(document.querySelectorAll<HTMLElement>('[data-workflow-marker]'));
    const portal = document.querySelector<HTMLElement>('.portal-pill');
    const portalScene = document.querySelector<HTMLElement>('[data-extra-scene="portal"]');
    const horizontal = document.querySelector<HTMLElement>('[data-horizontal-sequence="projects"]');
    const track = horizontal?.querySelector<HTMLElement>('.horizontal-track');

    let mediaObserver: IntersectionObserver | undefined;
    let workflowObserver: IntersectionObserver | undefined;
    let ticking = false;

    const setupMedia = () => {
      mediaObserver?.disconnect();
      videos.forEach((video) => video.pause());
      if (reducedMotion.matches) return;
      mediaObserver = new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) void video.play().catch(() => undefined);
          else video.pause();
        }),
        { rootMargin: '180px 0px', threshold: 0.01 },
      );
      videos.forEach((video) => mediaObserver?.observe(video));
    };

    const setupWorkflow = () => {
      workflowObserver?.disconnect();
      if (reducedMotion.matches) {
        setActiveWorkflow(0);
        return;
      }
      workflowObserver = new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveWorkflow(Number((entry.target as HTMLElement).dataset.workflowMarker));
        }),
        { rootMargin: '-42% 0px -42% 0px', threshold: 0 },
      );
      markers.forEach((marker) => workflowObserver?.observe(marker));
    };

    const updateScroll = () => {
      ticking = false;
      if (reducedMotion.matches) {
        portal?.style.setProperty('--portal-progress', '0');
        if (track) track.style.transform = 'none';
        return;
      }
      if (portal && portalScene) {
        const rect = portalScene.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height - window.innerHeight)));
        portal.style.setProperty('--portal-progress', String(progress));
      }
      if (horizontal && track && window.innerWidth > 760) {
        const rect = horizontal.getBoundingClientRect();
        const travel = Math.max(1, rect.height - window.innerHeight);
        const progress = Math.min(1, Math.max(0, -rect.top / travel));
        track.style.transform = `translate3d(${-progress * (track.scrollWidth - window.innerWidth)}px, 0, 0)`;
      } else if (track) {
        track.style.transform = 'none';
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateScroll);
    };

    const syncMotionPreference = () => {
      setupMedia();
      setupWorkflow();
      updateScroll();
    };

    syncMotionPreference();
    reducedMotion.addEventListener('change', syncMotionPreference);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      mediaObserver?.disconnect();
      workflowObserver?.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      reducedMotion.removeEventListener('change', syncMotionPreference);
    };
  }, []);

  return (
    <main className="extra-story">
      <section className="scene hero-scene" data-extra-scene="hero">
        <video data-decorative-media preload="none" muted playsInline loop poster={`${media}/extra-hero-poster.webp`} src={`${media}/extra-hero-motion.mp4`} aria-hidden="true" />
        <div className="hero-shade" />
        <nav className="hero-nav"><SidekickMark /><a href="#input">어떻게 일하나요</a></nav>
        <div className="hero-phone"><ProductPhone priority screen="02" alt="음성이나 채팅으로 새 업무를 맡기는 실제 사이드킥 앱 화면" /></div>
        <div className="hero-copy">
          <span className="eyebrow">사이드킥: AI 에이전트</span>
          <h1>일을 맡기면,<br />팀이 움직입니다.</h1>
          <p>앱 안에서 말하거나 입력하세요. 필요한 역할이 일을 나눠 맡고 결과까지 정리합니다.</p>
          <div className="hero-actions"><a href="#input">일하는 방식 보기 <ArrowDown aria-hidden="true" /></a><a href="/sidekick/support/">출시 소식 문의</a></div>
        </div>
      </section>

      <section className="scene input-scene" data-extra-scene="input" id="input">
        <InputProof />
        <div className="input-statement">
          <p>앱 안에서 말하거나 입력하세요</p>
          <h2>한마디가 <span>프로젝트</span>가 되고,<br />필요한 팀이 움직이기 시작합니다.</h2>
          <div><span>🎬 콘텐츠</span><span>📦 상품</span><span>🚀 출시</span><span>📊 운영</span></div>
        </div>
      </section>

      <section className="scene portal-scene" data-extra-scene="portal" aria-label="업무 요청이 프로젝트로 전환됩니다">
        <div className="portal-pill"><Sparkles aria-hidden="true" /><span>유튜브 채널을 키우고 다음 영상까지 만들어줘</span></div>
      </section>

      <div className="workflow-sequence" data-sticky-sequence="workflow">
        <div className="sequence-sticky">
          <div className="workflow-copy">
            <p>한 요청, 하나의 팀</p>
            <h2>필요한 팀이<br />일을 끝까지<br />처리합니다.</h2>
            <div className="workflow-nav-list">
              {workflow.map((item, index) => (
                <span className={activeWorkflow === index ? 'is-active' : ''} data-workflow-nav key={item.key}>
                  <i>{String(index + 1).padStart(2, '0')}</i><strong>{item.label}</strong>
                </span>
              ))}
            </div>
            <div className="workflow-active-copy">
              <strong>{workflow[activeWorkflow].title}</strong>
              <span>{workflow[activeWorkflow].body}</span>
            </div>
          </div>
          <WorkflowScreen active={activeWorkflow} />
        </div>
        {workflow.map((item, index) => (
          <section
            className="workflow-marker"
            data-extra-scene={item.key}
            data-workflow-marker={index}
            key={item.key}
            aria-label={item.label}
            style={{ '--workflow-index': index } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="horizontal-sequence" data-horizontal-sequence="projects">
        <div className="horizontal-sticky">
          <div className="horizontal-intro"><p>여러 일이 흩어지지 않도록</p><h2>프로젝트가<br />알아서 정리됩니다</h2></div>
          <div className="horizontal-track">
            {projects.map((project, index) => <ProjectCase project={project} index={index} key={project.key} />)}
          </div>
          <div className="project-dock" aria-hidden="true">{projects.map((project) => { const Icon = project.icon; return <span key={project.key}><Icon /></span>; })}</div>
        </div>
      </div>

      <section className="scene agents-scene" data-extra-scene="agents">
        <div className="agents-center"><p>업무마다 필요한 역할은 다르니까</p><h2>필요한 역할이<br />자동으로 모입니다.</h2><span>＋ AI 에이전트</span></div>
        <div className="agent-orbit" data-agent-orbit>
          {agents.map(({ label, icon: Icon }, index) => <div className={`orbit-agent orbit-agent--${index + 1}`} data-agent-role key={label}><Icon aria-hidden="true" /><span>{label}</span></div>)}
        </div>
      </section>

      <section className="scene approvals-scene" data-extra-scene="approvals">
        <div className="approvals-copy"><p>사장님 브리핑</p><h2>업무가 많아도.<br />확인은 적게.<br />승인할 것만 남깁니다.</h2><span>결정이 필요한 순간에만 알려드려요.</span><a href="#features">승인 흐름 보기 <ChevronRight aria-hidden="true" /></a></div>
        <div className="approval-phone"><ProductPhone screen="04" alt="중요한 외부 행동을 승인한 뒤 진행하는 실제 사이드킥 화면" /></div>
        <div className="approval-stack" data-approval-stack aria-label="사이드킥이 지키는 업무 원칙">
          {approvalCards.map((card, index) => (
            <article data-approval-card data-non-product-illustration key={card.label} style={{ '--stack-index': index } as React.CSSProperties}>
              <span>업무 원칙 {String(index + 1).padStart(2, '0')}</span>
              <strong>{card.label}</strong>
              <small>{card.detail}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="scene features-scene" data-extra-scene="features" id="features">
        <div className="features-heading"><p>한곳에서 이어지는 업무</p><h2>Sidekick에게<br />더 많은 일을 맡겨보세요</h2></div>
        <div className="feature-grid">
          {features.map(({ key, title, body, icon: Icon }) => (
            <article className={`feature-card feature-card--${key}`} data-feature-card key={key}>
              <span><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{body}</p>
              <Icon className="feature-symbol" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="scene final-scene" data-extra-scene="final">
        <video data-decorative-media preload="none" muted playsInline loop poster={`${media}/extra-final-poster.webp`} src={`${media}/extra-final-motion.mp4`} aria-hidden="true" />
        <div className="final-shade" />
        <div className="final-copy"><SidekickMark /><h2>말하면,<br />팀이 움직입니다.</h2><p>앱 안에서 다음 업무를 맡겨보세요.</p><a href="/sidekick/support/">출시 소식 문의 <ChevronRight aria-hidden="true" /></a></div>
        <div className="final-devices">
          <div className="final-phone" data-final-device><ProductPhone screen="01" alt="승인할 일과 AI 직원 상태를 모아 보여주는 실제 사이드킥 브리핑 화면" /></div>
          <div className="final-evidence" data-final-device>
            <ProductPhone screen="05" alt="요약과 근거, 다음 행동을 정리한 실제 사이드킥 결과 카드 화면" />
            <div className="final-evidence-copy"><span>실제 앱 화면</span><strong>결과는 읽기 좋은 카드로</strong><p>요약과 근거, 다음 행동을 이어서 확인합니다.</p></div>
          </div>
        </div>
        <footer><span>© 2026 Sidekick</span><div><a href="/sidekick/privacy/">개인정보처리방침</a><a href="/sidekick/terms/">이용약관</a><a href="/sidekick/support/">지원</a></div></footer>
      </section>
    </main>
  );
}

export default SidekickLanding;

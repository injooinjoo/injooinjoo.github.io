import {
  ArrowDown,
  Check,
  ChevronRight,
  CircleCheck,
  Mic,
  MoreHorizontal,
  Sparkles,
} from 'lucide-react';
import {
  agentRoles,
  launchSteps,
  requestOptions,
  sourcingSteps,
  youtubeSteps,
} from './content';
import './sidekick.css';

type Step = { label: string; detail: string; state?: string };

function PhoneFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="phone" role="group" aria-label={label}>
      <div className="phone__hardware">
        <span>9:41</span>
        <span className="phone__island" aria-hidden="true" />
        <span>5G ▰</span>
      </div>
      <div className="phone__screen">{children}</div>
      <span className="phone__home" aria-hidden="true" />
    </div>
  );
}

function AppHeader({ title, eyebrow }: { title: string; eyebrow?: string }) {
  return (
    <header className="app-header">
      <div>
        {eyebrow ? <p>{eyebrow}</p> : null}
        <strong>{title}</strong>
      </div>
      <MoreHorizontal size={20} strokeWidth={1.8} aria-hidden="true" />
    </header>
  );
}

function WorkflowList({ steps }: { steps: Step[] }) {
  return (
    <ol className="workflow-list">
      {steps.map((step, index) => (
        <li data-work-step key={step.label} className={step.state === '진행 중' ? 'is-current' : ''}>
          <span className="workflow-list__number">{String(index + 1).padStart(2, '0')}</span>
          <div>
            <strong>{step.label}</strong>
            <p>{step.detail}</p>
          </div>
          {step.state ? <span className="status-pill">{step.state}</span> : <ChevronRight size={16} />}
        </li>
      ))}
    </ol>
  );
}

function StoreButtons() {
  return (
    <div className="store-buttons" aria-label="앱 출시 상태">
      <span><b>App Store</b><small>출시 준비 중</small></span>
      <span><b>Google Play</b><small>출시 예정</small></span>
    </div>
  );
}

export default function SidekickLanding() {
  return (
    <div className="sidekick-site">
      <a className="skip-link" href="#sidekick-main">본문으로 바로가기</a>
      <nav className="site-nav" aria-label="사이드킥 소개">
        <a className="site-nav__brand" href="#hero"><span aria-hidden="true">S</span>사이드킥</a>
        <a className="site-nav__cta" href="#download">앱 보기</a>
      </nav>

      <main id="sidekick-main">
        <section id="hero" className="story story--hero" data-sidekick-section>
          <div className="story__copy story__copy--hero">
            <p className="eyebrow">사이드킥: AI 에이전트</p>
            <h1>일을 맡기면,<br />팀이 움직입니다.</h1>
            <p className="lede">해야 할 일을 말하세요. 필요한 AI 직원이 나눠 맡고, 진행 상황과 결과를 한곳에 정리합니다.</p>
            <StoreButtons />
          </div>

          <div className="hero-product">
            <PhoneFrame label="사이드킥에 업무를 입력하는 채팅 화면">
              <AppHeader title="새 업무 맡기기" eyebrow="오늘 무엇을 도와드릴까요?" />
              <div className="request-stack">
                {requestOptions.map((request, index) => (
                  <div
                    className={`request-option ${index === requestOptions.length - 1 ? 'is-selected' : ''}`}
                    data-request-option
                    data-selected={index === requestOptions.length - 1 ? 'true' : undefined}
                    key={request}
                  >
                    <span>{request}</span>
                    {index === requestOptions.length - 1 ? <Check size={16} aria-hidden="true" /> : null}
                  </div>
                ))}
              </div>
              <div className="composer"><span>무슨 일을 맡길까요?</span><Mic size={18} /></div>
            </PhoneFrame>
          </div>
          <a className="scroll-cue" href="#team"><ArrowDown size={20} /><span>어떻게 진행되는지 보기</span></a>
        </section>

        <section id="team" className="story story--team" data-sidekick-section>
          <div className="section-copy">
            <p className="section-number">01</p>
            <h2>목표를 이해하고,<br />필요한 팀을 구성합니다.</h2>
            <p>누가 무엇을 맡을지 사용자가 직접 조정하지 않아도 됩니다. Sidekick이 업무에 맞는 역할을 고릅니다.</p>
          </div>
          <div className="agent-board" aria-label="배정된 AI 직원">
            <p className="agent-board__request">유튜브 채널을 키우고<br />다음 영상까지 만들어줘</p>
            <div className="agent-board__grid">
              {agentRoles.map((agent, index) => (
                <article data-agent-role key={agent.name} className={index === 0 ? 'is-primary' : ''}>
                  <span className="agent-avatar">{agent.name.slice(0, 1)}</span>
                  <div><strong>{agent.name} · {agent.role}</strong><p>{agent.note}</p></div>
                  <small>{index === 0 ? '주 담당' : '함께 처리'}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="story story--workflow" data-sidekick-section data-case="youtube">
          <div className="workflow-sticky">
            <div className="section-copy section-copy--light">
              <p className="section-number">02 · 대표 프로젝트</p>
              <h2>한 번 맡긴 일이<br />끝까지 이어집니다.</h2>
              <p>채널 진단부터 배포 준비까지, 실제 진행 순서를 앱 안에서 확인합니다.</p>
            </div>
            <PhoneFrame label="유튜브 채널 성장 프로젝트 진행 화면">
              <AppHeader title="다음 영상 만들기" eyebrow="유튜브 채널 성장" />
              <div className="project-summary">
                <span className="status-pill status-pill--running">진행 중</span>
                <strong>5명의 AI 직원이 함께 처리 중</strong>
                <p>지금은 대본 초안을 작성하고 있어요.</p>
              </div>
              <WorkflowList steps={youtubeSteps} />
            </PhoneFrame>
          </div>
        </section>

        <section className="story story--complete" data-sidekick-section>
          <div className="section-copy">
            <p className="section-number">03</p>
            <h2>결과는 긴 기록이 아니라<br />읽기 쉬운 프로젝트가 됩니다.</h2>
            <p>무엇을 했는지, 무엇이 완성됐는지, 다음에는 무엇을 하면 되는지만 남깁니다.</p>
          </div>
          <article className="result-card">
            <div className="result-card__top"><CircleCheck size={22} /><span>완료된 프로젝트</span></div>
            <p className="result-card__label">유튜브 채널 성장</p>
            <h3>다음 영상 기획과 제작 준비를 마쳤어요</h3>
            <ul>
              <li>성장 가능성이 높은 주제 3개 선정</li>
              <li>12분 분량 대본과 장면 구성 완료</li>
              <li>제목·썸네일 문구·배포 일정 정리</li>
            </ul>
            <span className="mock-status" data-mock-status>결과 정리 완료 <CircleCheck size={16} aria-hidden="true" /></span>
          </article>
        </section>

        <section className="story story--case story--sourcing" data-sidekick-section data-case="sourcing">
          <div className="section-copy">
            <p className="section-number">04 · 다른 프로젝트</p>
            <h2>팔 만한 상품을 찾고,<br />숫자로 비교합니다.</h2>
            <p>검색 결과를 쌓아두는 대신, 실제로 검토할 후보와 판단 근거를 정리합니다.</p>
          </div>
          <div className="case-panel">
            <div className="case-panel__heading"><span>상품 소싱</span><small>후보 3개 선정</small></div>
            <WorkflowList steps={sourcingSteps} />
            <div className="margin-card"><span>예상 마진</span><strong>31–38%</strong><small>배송비·수수료 반영</small></div>
          </div>
        </section>

        <section className="story story--case story--launch" data-sidekick-section data-case="launch">
          <div className="section-copy">
            <p className="section-number">05 · 다른 프로젝트</p>
            <h2>신제품 아이디어를<br />출시 준비까지 연결합니다.</h2>
            <p>조사, 카피, 광고, 랜딩페이지가 따로 끊기지 않고 하나의 프로젝트로 이어집니다.</p>
          </div>
          <div className="launch-canvas">
            {launchSteps.map((step, index) => (
              <article data-work-step key={step.label}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step.label}</strong>
                <p>{step.detail}</p>
                {index < launchSteps.length - 1 ? <ChevronRight size={18} aria-hidden="true" /> : <Check size={18} aria-hidden="true" />}
              </article>
            ))}
          </div>
        </section>

        <section className="story story--overview" data-sidekick-section>
          <div className="section-copy section-copy--light">
            <p className="section-number">06</p>
            <h2>여러 일이 동시에 움직여도,<br />지금 필요한 것만 보입니다.</h2>
            <p>프로젝트 현황과 Sidekick의 선제 제안을 한 화면에서 확인합니다.</p>
          </div>
          <div className="overview-board">
            <div className="overview-board__header"><strong>프로젝트</strong><span>3개 진행 중</span></div>
            {[
              ['유튜브 채널 성장', '완료', '다음 영상 제작 준비 완료'],
              ['여름 상품 소싱', '확인 필요', '최종 후보 3개를 골라주세요'],
              ['신제품 런칭', '진행 중', '광고 카피를 작성하고 있어요'],
            ].map(([name, state, detail]) => (
              <article key={name}><div><strong>{name}</strong><p>{detail}</p></div><span>{state}</span></article>
            ))}
            <aside><Sparkles size={18} /><div><strong>Sidekick 제안</strong><p>유튜브 업로드 이틀 뒤 반응을 자동으로 정리해드릴까요?</p></div><span className="mock-status" data-mock-status>검토 대기</span></aside>
          </div>
          <div className="role-row" aria-label="사용자의 역할">
            {[
              ['지시', '원하는 결과를 말합니다.'],
              ['현황 확인', '필요할 때 진행 상황을 봅니다.'],
              ['승인', '중요한 행동만 직접 결정합니다.'],
            ].map(([title, detail], index) => (
              <article data-user-role key={title}><span>0{index + 1}</span><strong>{title}</strong><p>{detail}</p></article>
            ))}
          </div>
        </section>

        <section className="story story--bridge" data-sidekick-section>
          <div className="section-copy">
            <p className="section-number">07</p>
            <h2>모든 결과가<br />다시 앱으로 모입니다.</h2>
            <p>작업이 끝날 때마다 카드가 쌓이고, 프로젝트 목록이 되고, 언제든 다시 이어갈 수 있습니다.</p>
          </div>
          <div className="bridge-sequence" aria-label="결과에서 모바일 앱으로 이어지는 흐름">
            <article data-bridge-state><small>작업 결과</small><strong>다음 영상 제작 준비 완료</strong><span>결과 3개 · 다음 행동 2개</span></article>
            <ChevronRight aria-hidden="true" />
            <article data-bridge-state><small>완료 프로젝트 카드</small><strong>유튜브 채널 성장</strong><span>오늘 완료됨</span></article>
            <ChevronRight aria-hidden="true" />
            <article data-bridge-state><small>프로젝트 목록</small><strong>모든 일이 한곳에</strong><span>완료 · 진행 · 승인 대기</span></article>
            <ChevronRight aria-hidden="true" />
            <article data-bridge-state className="is-app"><span className="mini-app-mark">S</span><strong>Sidekick</strong><span>다음 일을 이어서 맡기세요</span></article>
          </div>
        </section>

        <section id="download" className="story story--final" data-sidekick-section>
          <div className="final-phone-wrap">
            <PhoneFrame label="음성으로 다음 업무를 맡기는 Sidekick 화면">
              <AppHeader title="사이드킥" eyebrow="모든 프로젝트" />
              <div className="mini-projects">
                <article><span className="dot dot--done" /><div><strong>유튜브 채널 성장</strong><p>오늘 완료됨</p></div><small>완료</small></article>
                <article><span className="dot dot--need" /><div><strong>여름 상품 소싱</strong><p>후보 확인이 필요해요</p></div><small>확인</small></article>
                <article><span className="dot dot--running" /><div><strong>신제품 런칭</strong><p>광고를 준비하고 있어요</p></div><small>진행</small></article>
              </div>
              <div className="voice-card"><Mic size={18} /><div><span className="voice-wave" aria-hidden="true" /><p>다음 신제품 런칭도 준비해줘.</p></div></div>
            </PhoneFrame>
          </div>
          <div className="final-copy">
            <p className="eyebrow">다음 업무도 바로 이어서</p>
            <h2>해야 할 일을 말하세요.<br />Sidekick이 프로젝트로 완성합니다.</h2>
            <StoreButtons />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <strong>사이드킥: AI 에이전트</strong>
        <div><a href="/sidekick/privacy/">개인정보처리방침</a><a href="/sidekick/terms/">이용약관</a><a href="/sidekick/support/">지원</a></div>
      </footer>
    </div>
  );
}

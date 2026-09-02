import './App.css'

const Icon = ({ children, size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
)

const icons = {
  wind: (
    <Icon>
      <path d="M4 9h9a3 3 0 1 0-3-3" />
      <path d="M3 14h13a3 3 0 1 1-3 3" />
      <path d="M5 19h5" />
    </Icon>
  ),
  drone: (
    <Icon>
      <path d="M9 12h6" />
      <path d="M12 9v6" />
      <path d="M7 9 4 6" />
      <path d="m17 9 3-3" />
      <path d="M7 15 4 18" />
      <path d="m17 15 3 3" />
      <circle cx="12" cy="12" r="2.2" />
      <path d="M2 6h4M18 6h4M2 18h4M18 18h4" />
    </Icon>
  ),
  building: (
    <Icon>
      <path d="M4 21V5l8-3 8 3v16" />
      <path d="M8 9h2M14 9h2M8 13h2M14 13h2M8 17h2M14 17h2" />
    </Icon>
  ),
  leaf: (
    <Icon>
      <path d="M20 4c-7.5 0-13 3.8-13 9.5 0 3.1 2.4 5.5 5.5 5.5C18.2 19 20 11.5 20 4Z" />
      <path d="M4 20c3.5-5.2 7.5-8.4 12-10.5" />
    </Icon>
  ),
  chart: (
    <Icon>
      <path d="M4 19V5M4 19h16" />
      <path d="m7 15 3-3 3 2 4-6" />
    </Icon>
  ),
  report: (
    <Icon>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v5h5M10 12h5M10 16h5" />
    </Icon>
  ),
  shield: (
    <Icon>
      <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6z" />
      <path d="m9 12 2 2 4-4" />
    </Icon>
  ),
  cloud: (
    <Icon>
      <path d="M7 18a4 4 0 0 1-.5-7.97A6 6 0 0 1 18 12a3 3 0 0 1-1 5.83" />
      <path d="M12 12v8M9 15l3-3 3 3" />
    </Icon>
  ),
  menu: (
    <Icon>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Icon>
  ),
  arrow: (
    <Icon size={18}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  ),
}

const solutions = [
  {
    icon: icons.wind,
    tag: 'EÓLICA',
    title: 'Inspeção interna com robô',
    text: 'Capture, organize e analise imagens do interior de torres eólicas com rastreabilidade completa por ativo, região e ordem de serviço.',
  },
  {
    icon: icons.drone,
    tag: 'DRONE',
    title: 'Inspeção aérea inteligente',
    text: 'Estruture inspeções externas com drones, centralizando imagens, marcações, evidências e dados técnicos em uma única plataforma.',
  },
  {
    icon: icons.building,
    tag: 'CIVIL & INDUSTRIAL',
    title: 'Estruturas sob controle',
    text: 'Gerencie inspeções de fachadas, estruturas, equipamentos e ativos industriais com histórico visual e relatórios profissionais.',
  },
  {
    icon: icons.leaf,
    tag: 'AGRO',
    title: 'Inteligência para o campo',
    text: 'Arquitetura preparada para transformar imagens aéreas em dados úteis para análise de lavoura, falhas, variabilidade e tomada de decisão.',
  },
]

const features = [
  ['Organização de inspeções', 'Centralize OS, ativos, clientes, regiões, fotos, observações e evidências técnicas.'],
  ['Análise visual', 'Marque danos, áreas críticas e ocorrências diretamente sobre as imagens da inspeção.'],
  ['Relatórios profissionais', 'Transforme os dados coletados em entregáveis padronizados, visuais e prontos para o cliente.'],
  ['Portal do cliente', 'Compartilhe uma visão controlada da inspeção com acesso individual e validade configurável.'],
  ['Rastreabilidade', 'Mantenha histórico de cada ativo, inspeção, usuário e etapa do processo.'],
  ['Escalabilidade', 'Estrutura preparada para cloud, automação e processamento distribuído conforme a operação cresce.'],
]

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="CodeZyren">
      
      <span className="brand-text">
        <strong>CODEZYREN</strong>
        <small>SISTEMAS DE INSPEÇÃO INTELIGENTE</small>
      </span>
    </a>
  )
}

function App() {
  const goTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main id="top">
      <div className="noise" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <div className="container nav">
          <Logo />

          <nav className="nav-links">
            <a href="#plataforma">Plataforma</a>
            <a href="#solucoes">Soluções</a>
            <a href="#processo">Processo</a>
            <a href="#tecnologia">Tecnologia</a>
          </nav>

          <button className="btn btn-small" onClick={() => goTo('#contato')}>
            Solicitar demonstração
          </button>
        </div>
      </header>

      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              Tecnologia aplicada à inspeção
            </div>

            <h1>
              Inspeção.<br />
              <span>Inteligência.</span><br />
              Decisão.
            </h1>

            <p className="hero-text">
              A CodeZyren transforma a operação de inspeção em um fluxo digital
              completo — da coleta em campo à análise técnica e entrega do relatório.
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => goTo('#plataforma')}>
                Conheça a plataforma {icons.arrow}
              </button>
              <button className="btn btn-secondary" onClick={() => goTo('#contato')}>
                Falar com a CodeZyren
              </button>
            </div>

            <div className="hero-meta">
              <div><strong>01</strong><span>Captura</span></div>
              <div><strong>02</strong><span>Análise</span></div>
              <div><strong>03</strong><span>Relatório</span></div>
              <div><strong>04</strong><span>Decisão</span></div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="scan-line" />

            <div className="visual-panel">
              <div className="panel-top">
                <span>CODEZYREN / INSPECTION CORE</span>
                <span className="panel-live">LIVE</span>
              </div>

              <div className="core">
                <div className="core-ring core-ring-1" />
                <div className="core-ring core-ring-2" />
                <div className="core-center">
                  <span>CZ</span>
                  <small>CORE</small>
                </div>

                <div className="node node-a">{icons.drone}<span>DRONE</span></div>
                <div className="node node-b">{icons.wind}<span>EÓLICA</span></div>
                <div className="node node-c">{icons.report}<span>RELATÓRIO</span></div>
                <div className="node node-d">{icons.chart}<span>ANÁLISE</span></div>
              </div>

              <div className="panel-stats">
                <div><span>STATUS</span><strong>OPERACIONAL</strong></div>
                <div><span>PROCESSO</span><strong>RASTREÁVEL</strong></div>
                <div><span>DADOS</span><strong>CENTRALIZADOS</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          <span>ROBÔ</span>
          <span>DRONE</span>
          <span>EÓLICA</span>
          <span>CIVIL</span>
          <span>INDUSTRIAL</span>
          <span>AGRO</span>
        </div>
      </section>

      <section id="plataforma" className="section platform">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-kicker">PLATAFORMA</span>
              <h2>Do campo ao relatório.<br />Tudo conectado.</h2>
            </div>
            <p>
              Uma camada digital para organizar a inspeção inteira, reduzir retrabalho,
              padronizar entregas e transformar imagens e dados em informação utilizável.
            </p>
          </div>

          <div className="dashboard-shell">
            <div className="dashboard-sidebar">
              <Logo />
              <div className="side-nav">
                <span className="active">Visão geral</span>
                <span>Inspeções</span>
                <span>Ativos</span>
                <span>Relatórios</span>
                <span>Clientes</span>
              </div>
              <div className="side-foot">
                <span>Sistema</span>
                <strong>ONLINE</strong>
              </div>
            </div>

            <div className="dashboard-main">
              <div className="dash-top">
                <div>
                  <small>OPERAÇÃO</small>
                  <h3>Centro de Inspeções</h3>
                </div>
                <div className="dash-pill">SET / 2026</div>
              </div>

              <div className="dash-cards">
                <div className="metric-card">
                  <span>INSPEÇÕES</span>
                  <strong>128</strong>
                  <small>+18% no período</small>
                </div>
                <div className="metric-card">
                  <span>ATIVOS</span>
                  <strong>42</strong>
                  <small>monitorados</small>
                </div>
                <div className="metric-card">
                  <span>EVIDÊNCIAS</span>
                  <strong>8.4k</strong>
                  <small>imagens catalogadas</small>
                </div>
              </div>

              <div className="dash-content">
                <div className="fake-chart">
                  <div className="chart-title">
                    <span>Performance operacional</span>
                    <small>Últimos 30 dias</small>
                  </div>
                  <div className="bars">
                    {[42, 64, 51, 79, 62, 86, 72, 91, 76, 95, 88, 100].map((h, i) => (
                      <i key={i} style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>

                <div className="inspection-card">
                  <div className="inspection-photo">
                    <div className="scan" />
                    <span>WTG-07 / BLADE A</span>
                  </div>
                  <div className="inspection-info">
                    <span>DETECÇÃO</span>
                    <strong>Ocorrência identificada</strong>
                    <p>Registro visual classificado e vinculado ao ativo.</p>
                    <div className="progress"><i /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solucoes" className="section solutions">
        <div className="container">
          <div className="section-heading compact">
            <div>
              <span className="section-kicker">SOLUÇÕES</span>
              <h2>Uma plataforma.<br />Múltiplos cenários.</h2>
            </div>
          </div>

          <div className="solution-grid">
            {solutions.map((item, index) => (
              <article className="solution-card" key={item.title}>
                <div className="solution-index">0{index + 1}</div>
                <div className="solution-icon">{item.icon}</div>
                <span className="solution-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="#contato">Explorar solução {icons.arrow}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="processo" className="section process">
        <div className="container">
          <div className="process-intro">
            <span className="section-kicker">FLUXO OPERACIONAL</span>
            <h2>A inspeção não termina<br />quando a imagem é capturada.</h2>
            <p>
              É depois da coleta que a CodeZyren organiza, conecta e transforma cada
              evidência em um processo técnico rastreável.
            </p>
          </div>

          <div className="process-line">
            {['Captura', 'Upload', 'Análise', 'Classificação', 'Relatório', 'Cliente'].map((step, index) => (
              <div className="process-step" key={step}>
                <div className="step-num">0{index + 1}</div>
                <div className="step-line" />
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tecnologia" className="section technology">
        <div className="container technology-grid">
          <div className="tech-copy">
            <span className="section-kicker">TECNOLOGIA</span>
            <h2>Infraestrutura preparada para crescer com a operação.</h2>
            <p>
              A CodeZyren foi pensada para sair do processo manual e evoluir para uma
              operação conectada, escalável e orientada por dados.
            </p>

            <div className="tech-badges">
              <span>{icons.cloud} Cloud ready</span>
              <span>{icons.shield} Controle de acesso</span>
              <span>{icons.chart} Dados estruturados</span>
              <span>{icons.report} Relatórios digitais</span>
            </div>
          </div>

          <div className="tech-terminal">
            <div className="terminal-head">
              <span className="terminal-dots"><i /><i /><i /></span>
              <span>codezyren-core</span>
              <span>v1.0</span>
            </div>
            <pre>
{`> initializing inspection workflow...
✓ asset identified
✓ media linked
✓ technical data validated
✓ occurrence classified
✓ report engine ready

STATUS: OPERATIONAL
TRACEABILITY: ENABLED
CLIENT ACCESS: CONTROLLED`}
            </pre>
          </div>
        </div>
      </section>

      <section className="section capabilities">
        <div className="container">
          <div className="section-heading compact">
            <div>
              <span className="section-kicker">CAPACIDADES</span>
              <h2>Menos arquivos soltos.<br />Mais controle operacional.</h2>
            </div>
          </div>

          <div className="feature-grid">
            {features.map(([title, text], index) => (
              <div className="feature" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <div className="cta-glow" />
            <div>
              <span className="section-kicker">CODEZYREN</span>
              <h2>Sua inspeção pode entregar muito mais.</h2>
              <p>
                Centralize dados, imagens, análise e relatórios em uma experiência
                profissional para sua equipe e para o seu cliente.
              </p>
            </div>

            <div className="cta-actions">
              <a className="btn btn-primary" href="https://wa.me/message/7A7DWITXHDLSF1">
                Entre em contato! {icons.arrow}
              </a>
              <span>CodeZyren, a solução que sua empresa merece!</span>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <Logo />
          <p>© 2026 CodeZyren. Sistemas de Inspeção Inteligente.</p>
          <a href="#top">Voltar ao topo ↑</a>
        </div>
      </footer>
    </main>
  )
}

export default App

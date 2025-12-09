const $ = (selector, context = document) => context.querySelector(selector);

// Greeting based on time of day
(function greet() {
  const hours = new Date().getHours();
  const heading = $('#about h1');
  if (!heading) return;
  const periods = [
    { max: 12, text: 'Good morning' },
    { max: 18, text: 'Good afternoon' },
  ];
  const period = periods.find((item) => hours < item.max)?.text || 'Good evening';
  heading.textContent = `${period}, I'm Abdulmajeed 👋`;
})();

// Theme toggle with persistence
(function theme() {
  const body = document.body;
  const toggle = $('#theme-toggle');
  if (!toggle) return;
  const saved = localStorage.getItem('theme');
  const mode = saved || 'dark';
  const apply = (nextMode) => {
    const isDark = nextMode === 'dark';
    body.classList.toggle('dark', isDark);
    body.classList.toggle('light', !isDark);
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  };
  apply(mode);
  toggle.addEventListener('click', () => {
    const nextMode = body.classList.contains('dark') ? 'light' : 'dark';
    apply(nextMode);
    localStorage.setItem('theme', nextMode);
  });
})();

// Dynamic project filtering and search
(function projectsModule() {
  const grid = $('#project-grid');
  const status = $('#projects-status');
  const emptyState = $('#project-empty');
  const searchInput = $('#project-search');
  const filterButtons = Array.from(document.querySelectorAll('.filter-btn'));
  if (!grid || !status || !searchInput || !filterButtons.length) return;

  const projectData = [
    {
      id: 'facelite',
      title: 'FaceLite',
      summary: 'Real-time messaging platform with presence indicators and themed chat rooms for study groups.',
      categories: ['web', 'ai'],
      date: '2024-02-12',
      image: `data:image/svg+xml;utf8,<?xml version='1.0' encoding='UTF-8'?><svg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%232563eb'/><stop offset='100%' stop-color='%2322d3ee'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23g)'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial' font-size='48' fill='white'>FaceLite</text></svg>`,
      imageAlt: 'Gradient card cover for FaceLite project',
    },
    {
      id: 'resumeiq',
      title: 'Resume Score Predictor',
      summary: 'An AI-powered tool that evaluates resumes by analyzing skills, education, experience, and more. It provides a predictive score to help candidates improve applications and recruiters screen effectively.',
      categories: ['ai', 'tools'],
      date: '2024-01-24',
      image: `data:image/svg+xml;utf8,<?xml version='1.0' encoding='UTF-8'?><svg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'><defs><linearGradient id='g2' x1='1' y1='0' x2='0' y2='1'><stop offset='0%' stop-color='%2360a5fa'/><stop offset='100%' stop-color='%23a78bfa'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23g2)'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial' font-size='40' fill='white'>ResumeIQ</text></svg>`,
      imageAlt: 'Gradient card cover for Resume Score Predictor project',
    },
    {
      id: 'mubarakbot',
      title: 'Ramadan/Eid Congrats Bot',
      summary: 'Automation bot that schedules personalised greetings, localises messages, and tracks engagement analytics.',
      categories: ['automation', 'tools'],
      date: '2023-04-16',
      image: `data:image/svg+xml;utf8,<?xml version='1.0' encoding='UTF-8'?><svg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'><defs><linearGradient id='g3' x1='0' y1='1' x2='1' y2='0'><stop offset='0%' stop-color='%23f59e0b'/><stop offset='100%' stop-color='%23ef4444'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23g3)'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial' font-size='40' fill='white'>MubarakBot</text></svg>`,
      imageAlt: 'Gradient card cover for MubarakBot project',
    },
  ];

  const readableCategory = (key) => {
    switch (key) {
      case 'web':
        return 'Web Apps';
      case 'ai':
        return 'AI';
      case 'tools':
        return 'Productivity';
      case 'automation':
        return 'Automation';
      default:
        return key;
    }
  };

  const renderProjects = (projects) => {
    grid.innerHTML = '';
    if (!projects.length) {
      emptyState.hidden = false;
      return;
    }
    emptyState.hidden = true;
    const fragment = document.createDocumentFragment();
    projects.forEach((project, index) => {
      const article = document.createElement('article');
      article.className = 'card fade-in';
      article.style.setProperty('--animation-delay', `${index * 70}ms`);
      article.dataset.category = project.categories.join(' ');

      const cover = document.createElement('img');
      cover.src = project.image;
      cover.alt = project.imageAlt;
      cover.loading = 'lazy';
      cover.decoding = 'async';
      article.appendChild(cover);

      const body = document.createElement('div');
      body.className = 'card-body';

      const title = document.createElement('h3');
      title.className = 'card-title';
      title.textContent = project.title;
      body.appendChild(title);

      const description = document.createElement('p');
      description.className = 'card-text';
      description.textContent = project.summary;
      body.appendChild(description);

      const meta = document.createElement('div');
      meta.className = 'card-meta';

      if (project.date) {
        const time = document.createElement('time');
        time.dateTime = project.date;
        const yearOnly = new Date(project.date).getFullYear();
        time.textContent = `Started ${yearOnly}`;
        meta.appendChild(time);
      }

      const categoryList = document.createElement('ul');
      categoryList.className = 'tag-list';
      project.categories.forEach((tag) => {
        const li = document.createElement('li');
        li.className = 'tag-chip';
        li.textContent = readableCategory(tag);
        categoryList.appendChild(li);
      });

      if (meta.childNodes.length) {
        body.appendChild(meta);
      }
      body.appendChild(categoryList);

      article.appendChild(body);
      fragment.appendChild(article);
    });
    grid.appendChild(fragment);
  };

  let activeFilter = localStorage.getItem('project-filter') || 'all';
  let searchTerm = '';

  const applyFilters = () => {
    const filtered = projectData.filter((project) => {
      const matchesFilter =
        activeFilter === 'all' ||
        project.categories.includes(activeFilter);
      const tagText = Array.isArray(project.tags) ? project.tags.join(' ') : '';
      const searchable = [project.title, project.summary, tagText].join(' ').toLowerCase();
      const matchesSearch = !searchTerm || searchable.includes(searchTerm);
      return matchesFilter && matchesSearch;
    });

    renderProjects(filtered);

    const filterMessage =
      activeFilter === 'all'
        ? 'All categories selected'
        : `Filtered by ${readableCategory(activeFilter)}`;

    const resultMessage = filtered.length
      ? `Showing ${filtered.length} project${filtered.length > 1 ? 's' : ''}.`
      : 'No projects match your filters.';

    status.textContent = `${filterMessage}. ${resultMessage}`;
  };

  const updateFilterButtons = () => {
    filterButtons.forEach((btn) => {
      const isActive = btn.dataset.filter === activeFilter;
      btn.setAttribute('aria-pressed', String(isActive));
    });
  };

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const { filter } = btn.dataset;
      if (!filter || filter === activeFilter) return;
      activeFilter = filter;
      localStorage.setItem('project-filter', activeFilter);
      updateFilterButtons();
      applyFilters();
    });
  });

  let searchTimeout;
  searchInput.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase();
    clearTimeout(searchTimeout);
    searchTimeout = window.setTimeout(() => {
      searchTerm = value.trim();
      applyFilters();
    }, 180);
  });

  if (filterButtons.some((btn) => btn.dataset.filter === activeFilter)) {
    updateFilterButtons();
  } else {
    activeFilter = 'all';
    updateFilterButtons();
  }

  searchTerm = searchInput.value.toLowerCase().trim();
  applyFilters();
})();

// GitHub feed with sorting, filtering, and persistence
(function githubFeed() {
  const section = document.querySelector('#github[data-github-user]');
  const list = $('#github-list');
  const status = $('#github-status');
  const errorEl = $('#github-error');
  const refreshBtn = $('#github-refresh');
  const sortSelect = $('#github-sort');
  const languageSelect = $('#github-language');
  const hideForksToggle = $('#github-hide-forks');
  const emptyState = $('#github-empty');
  const usernameLabel = $('#github-username-label');
  const headingText = $('#github-heading-text');
  const tokenAttr = section ? section.dataset.githubToken : '';
  const storedToken = localStorage.getItem('github-pat') || '';
  const authToken = (tokenAttr || storedToken).trim();
  if (
    !section ||
    !list ||
    !status ||
    !errorEl ||
    !refreshBtn ||
    !sortSelect ||
    !languageSelect ||
    !hideForksToggle ||
    !emptyState ||
    !usernameLabel ||
    !headingText
  ) {
    return;
  }

  const username = section.dataset.githubUser || 'octocat';
  const cacheKey = `github-feed-cache:${username}`;
  usernameLabel.textContent = `@${username}`;

  const preferencesKey = 'github-feed-preferences';
  const defaultPreferences = { sort: 'updated', language: 'all', hideForks: true };
  let preferences = { ...defaultPreferences };
  try {
    const stored = JSON.parse(localStorage.getItem(preferencesKey) || '{}');
    preferences = { ...defaultPreferences, ...stored };
  } catch (error) {
    console.warn('[githubFeed] Unable to parse saved preferences', error);
  }

  sortSelect.value = preferences.sort;
  hideForksToggle.checked = preferences.hideForks;

  let repos = [];
  let languages = new Set();

  const fallbackRepos = [
    {
      id: 'fallback-facelite',
      name: 'facelite',
      description: 'Lightweight real-time messaging app for study groups with presence indicators and themed rooms.',
      stars: 12,
      forks: 1,
      language: 'JavaScript',
      updated: '2024-04-18T12:00:00Z',
      url: 'https://github.com/AbdulmajeedALJ/facelite',
      fork: false,
    },
    {
      id: 'fallback-resumeiq',
      name: 'resume-score-predictor',
      description: 'AI-powered resume evaluator that scores skills, education, and experience with actionable tips.',
      stars: 9,
      forks: 0,
      language: 'TypeScript',
      updated: '2024-02-02T09:30:00Z',
      url: 'https://github.com/AbdulmajeedALJ/resume-score-predictor',
      fork: false,
    },
    {
      id: 'fallback-mubarakbot',
      name: 'ramadan-eid-congrats-bot',
      description: 'Automation bot that schedules localized greetings and tracks engagement analytics.',
      stars: 6,
      forks: 0,
      language: 'Python',
      updated: '2023-11-10T16:10:00Z',
      url: 'https://github.com/AbdulmajeedALJ/ramadan-eid-congrats-bot',
      fork: false,
    },
  ];

  const savePreferences = () => {
    localStorage.setItem(preferencesKey, JSON.stringify(preferences));
  };

  const loadCachedRepos = () => {
    try {
      const cached = JSON.parse(localStorage.getItem(cacheKey) || 'null');
      if (!cached || !Array.isArray(cached.repos) || !cached.repos.length) return null;
      return cached;
    } catch (error) {
      console.warn('[githubFeed] Unable to parse cached repos', error);
      return null;
    }
  };

  const saveCachedRepos = () => {
    try {
      const payload = { fetchedAt: new Date().toISOString(), repos };
      localStorage.setItem(cacheKey, JSON.stringify(payload));
    } catch (error) {
      console.warn('[githubFeed] Unable to save cached repos', error);
    }
  };

  const updateHeadingText = () => {
    headingText.textContent =
      preferences.sort === 'stars' ? 'Most starred GitHub repos' : 'My recent GitHub updates';
  };

  const setStatus = (message, isBusy = false) => {
    status.textContent = message;
    list.setAttribute('aria-busy', String(isBusy));
  };

  const showError = (message) => {
    errorEl.hidden = false;
    errorEl.textContent = message;
  };

  const clearError = () => {
    errorEl.hidden = true;
    errorEl.textContent = '';
  };

  const formatDate = (dateString) =>
    new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(
      new Date(dateString),
    );

  const renderLanguageOptions = () => {
    languageSelect.innerHTML = '<option value="all">All languages</option>';
    Array.from(languages)
      .sort()
      .forEach((lang) => {
        const option = document.createElement('option');
        option.value = lang;
        option.textContent = lang;
        languageSelect.appendChild(option);
      });
    if (![...languages, 'all'].includes(preferences.language)) {
      preferences.language = 'all';
      savePreferences();
    }
    languageSelect.value = preferences.language;
  };

  const renderRepos = (items) => {
    list.innerHTML = '';
    if (!items.length) {
      emptyState.hidden = false;
      return;
    }
    emptyState.hidden = true;
    const fragment = document.createDocumentFragment();
    items.forEach((repo, index) => {
      const card = document.createElement('article');
      card.className = 'card repo-card fade-in';
      card.style.setProperty('--animation-delay', `${index * 60}ms`);

      const header = document.createElement('div');
      header.className = 'repo-meta';
      const title = document.createElement('h3');
      title.className = 'card-title';
      title.textContent = repo.name;
      header.appendChild(title);

      const lang = document.createElement('span');
      lang.className = 'repo-chip';
      lang.textContent = repo.language || 'Other';
      header.appendChild(lang);

      const desc = document.createElement('p');
      desc.className = 'card-text';
      desc.textContent = repo.description || 'No description yet.';

      const meta = document.createElement('div');
      meta.className = 'repo-meta';
      const stars = document.createElement('span');
      stars.textContent = `★ ${repo.stars}`;
      const forks = document.createElement('span');
      forks.textContent = `🍴 ${repo.forks}`;
      const updated = document.createElement('span');
      updated.textContent = `Updated ${formatDate(repo.updated)}`;
      meta.append(stars, forks, updated);

      if (repo.fork) {
        const forkBadge = document.createElement('span');
        forkBadge.className = 'tag-chip';
        forkBadge.textContent = 'Forked';
        meta.appendChild(forkBadge);
      }

      const link = document.createElement('a');
      link.className = 'repo-link';
      link.href = repo.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'View on GitHub';

      card.append(header, desc, meta, link);
      fragment.appendChild(card);
    });
    list.appendChild(fragment);
  };

  const applyFilters = () => {
    const filtered = repos
      .filter((repo) => (preferences.hideForks ? !repo.fork : true))
      .filter((repo) => preferences.language === 'all' || repo.language === preferences.language)
      .sort((a, b) => {
        if (preferences.sort === 'stars') {
          return b.stars - a.stars;
        }
        return new Date(b.updated).getTime() - new Date(a.updated).getTime();
      })
      .slice(0, 12);

    renderRepos(filtered);

    const resultMessage = filtered.length
      ? `Showing ${filtered.length} repos (${preferences.sort === 'stars' ? 'most stars' : 'recently updated'}).`
      : 'No repositories match your filters.';
    setStatus(resultMessage, false);
  };

  const setLanguagesFromRepos = () => {
    languages = new Set(repos.map((repo) => repo.language).filter(Boolean));
    renderLanguageOptions();
  };

  const mapRepo = (repo) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    language: repo.language || 'Other',
    updated: repo.updated_at,
    url: repo.html_url,
    fork: repo.fork,
  });

  const fetchRepos = async (force = false) => {
    updateHeadingText();
    const cached = loadCachedRepos();
    if (repos.length && !force) {
      applyFilters();
      return;
    }

    if (cached && !repos.length) {
      repos = cached.repos;
      setLanguagesFromRepos();
      applyFilters();
      const cachedDate = cached.fetchedAt ? formatDate(cached.fetchedAt) : '';
      const cachedLabel = cachedDate && cachedDate !== 'Invalid Date' ? cachedDate : 'earlier';
      setStatus(`Showing saved GitHub data from ${cachedLabel} while refreshing…`, true);
    } else {
      setStatus(force ? 'Refreshing GitHub feed…' : 'Loading latest repositories from GitHub…', true);
    }
    clearError();
    emptyState.hidden = true;
    let timeoutId;
    try {
      const controller = new AbortController();
      timeoutId = window.setTimeout(() => controller.abort(), 7000);
      const headers = { Accept: 'application/vnd.github+json' };
      if (authToken) {
        headers.Authorization = `Bearer ${authToken}`;
      }
      const response = await fetch(
        `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=40`,
        {
          headers,
          cache: 'no-store',
          signal: controller.signal,
        },
      );
      if (!response.ok) {
        throw new Error(`GitHub responded with ${response.status}`);
      }
      const data = await response.json();
      repos = data.filter((repo) => !repo.archived).map(mapRepo);
      setLanguagesFromRepos();
      applyFilters();
      saveCachedRepos();
      setStatus('GitHub data loaded.', false);
    } catch (error) {
      console.error('[githubFeed]', error);
      if (repos.length) {
        showError('Unable to refresh GitHub right now. Showing your saved feed.');
        setStatus('Using saved GitHub data.', false);
        return;
      }
      repos = fallbackRepos;
      languages = new Set(fallbackRepos.map((repo) => repo.language));
      renderLanguageOptions();
      applyFilters();
      showError('Unable to reach GitHub right now. Showing curated highlights instead.');
      setStatus('Using fallback GitHub data.', false);
    } finally {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    }
  };

  refreshBtn.addEventListener('click', () => fetchRepos(true));
  hideForksToggle.addEventListener('change', () => {
    preferences.hideForks = hideForksToggle.checked;
    savePreferences();
    applyFilters();
  });
  sortSelect.addEventListener('change', () => {
    preferences.sort = sortSelect.value;
    savePreferences();
    updateHeadingText();
    applyFilters();
  });
  languageSelect.addEventListener('change', () => {
    preferences.language = languageSelect.value;
    savePreferences();
    applyFilters();
  });

  fetchRepos();
})();

// Fetch insight with graceful fallback
(function insightModule() {
  const container = $('#insight-content');
  const errorMessage = $('#insight-error');
  const refreshBtn = $('#insight-refresh');
  if (!container || !errorMessage || !refreshBtn) return;

  const endpoint = 'https://api.quotable.io/random?tags=technology|inspirational';
  const fallbackInsights = [
    {
      content: 'Design for accessibility first. It unlocks better UX for everyone and reduces rework later.',
      author: 'ChatGPT (edited)',
    },
    {
      content: 'Instrument your side projects like production apps. Observability habits scale with you.',
      author: 'ChatGPT (edited)',
    },
    {
      content: 'Document assumptions directly in the UI. It guides users and clarifies future maintenance.',
      author: 'ChatGPT (edited)',
    },
  ];
  let fallbackIndex = 0;

  const setLoading = (isLoading) => {
    refreshBtn.disabled = isLoading;
    refreshBtn.textContent = isLoading ? 'Loading…' : 'Load Another Insight';
    container.classList.toggle('loading', isLoading);
    if (isLoading) {
      container.replaceChildren();
      const para = document.createElement('p');
      para.className = 'muted';
      para.textContent = 'Loading an insight…';
      container.appendChild(para);
    }
  };

  const renderInsight = ({ content, author }, badge) => {
    container.replaceChildren();
    const quote = document.createElement('p');
    quote.className = 'insight-quote';
    quote.textContent = `“${content}”`;

    const cite = document.createElement('p');
    cite.className = 'insight-meta';
    cite.textContent = author || 'Unknown author';

    container.appendChild(quote);
    container.appendChild(cite);

    if (badge) {
      const badgeEl = document.createElement('span');
      badgeEl.className = 'insight-badge';
      badgeEl.textContent = badge;
      container.appendChild(badgeEl);
    }
  };

  const showError = (message) => {
    errorMessage.hidden = false;
    errorMessage.textContent = message;
  };

  const clearError = () => {
    errorMessage.hidden = true;
    errorMessage.textContent = '';
  };

  const loadInsight = async () => {
    setLoading(true);
    clearError();
    try {
      const response = await fetch(endpoint, { cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const data = await response.json();
      renderInsight({ content: data.content, author: data.author }, 'Live from Quotable');
    } catch (error) {
      const fallback = fallbackInsights[fallbackIndex % fallbackInsights.length];
      fallbackIndex += 1;
      renderInsight(fallback, 'Offline insight (AI edited)');
      showError('Unable to load a new insight right now. Showing a curated tip instead.');
      console.error('[insightModule]', error);
    } finally {
      setLoading(false);
    }
  };

  refreshBtn.addEventListener('click', loadInsight);
  loadInsight();
})();

// AI accessibility tips (generated with ChatGPT and refined)
(function aiCoachModule() {
  const tipBox = $('#ai-tip');
  const titleEl = $('#ai-tip-title');
  const textEl = $('#ai-tip-text');
  const metaEl = $('#ai-tip-meta');
  const nextBtn = $('#ai-tip-next');
  if (!tipBox || !titleEl || !textEl || !metaEl || !nextBtn) return;

  const tips = [
    {
      label: 'Keep focus visible',
      text: 'Every interactive element should show a strong focus outline. Test with only the keyboard to confirm the order makes sense.',
      meta: 'ChatGPT draft · refined with WCAG 2.2 checklist',
    },
    {
      label: 'Prefer real text over images',
      text: 'If you need stylised headings, use CSS instead of text baked into images. Screen readers will then read it properly and scaling stays crisp.',
      meta: 'ChatGPT draft · validated in Chrome DevTools',
    },
    {
      label: 'Explain context changes',
      text: 'When a control updates content on the page, announce it with ARIA live regions so screen reader users do not miss new information.',
      meta: 'ChatGPT draft · paired with live region demo above',
    },
    {
      label: 'Reduce motion respectfully',
      text: 'Support the prefers-reduced-motion media query to disable non-essential animations for users who get motion sickness.',
      meta: 'ChatGPT draft · implemented via CSS helpers',
    },
  ];

  let index = Number.parseInt(localStorage.getItem('ai-tip-index') || '', 10);
  if (!Number.isFinite(index) || index < 0 || index >= tips.length) {
    index = 0;
  }

  const renderTip = (nextIndex) => {
    const tip = tips[nextIndex];
    titleEl.textContent = tip.label;
    textEl.textContent = tip.text;
    metaEl.textContent = tip.meta;
    tipBox.classList.remove('fade-in');
    // Force reflow so the animation retriggers on subsequent clicks
    void tipBox.offsetWidth;
    tipBox.classList.add('fade-in');
    localStorage.setItem('ai-tip-index', String(nextIndex));
  };

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % tips.length;
    renderTip(index);
  });

  renderTip(index);
})();

// Enhanced form validation feedback (no backend submit)
(function contactForm() {
  const form = $('#contact-form');
  const status = $('#form-status');
  if (!form || !status) return;

  const fields = Array.from(form.querySelectorAll('input, textarea'));
  const nameField = form.elements.namedItem('name');
  const emailField = form.elements.namedItem('email');
  const messageField = form.elements.namedItem('message');

  const getFieldValue = (field) => {
    if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
      return field.value.trim();
    }
    return '';
  };

  const getFeedbackElement = (field) => $(`#${field.id}-feedback`);

  const updateFieldState = (field, message, isError) => {
    const feedback = getFeedbackElement(field);
    if (!feedback) return;
    feedback.textContent = message;
    feedback.style.color = isError ? '#ef4444' : 'var(--muted)';
    if (isError) {
      field.setAttribute('aria-invalid', 'true');
    } else {
      field.removeAttribute('aria-invalid');
    }
  };

  const validateField = (field) => {
    if (field.checkValidity()) {
      updateFieldState(field, '', false);
      return true;
    }
    updateFieldState(field, field.validationMessage, true);
    return false;
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const invalidFields = fields.filter((field) => !validateField(field));
    if (invalidFields.length) {
      invalidFields[0].focus();
      status.textContent = 'Please fix the highlighted fields.';
      status.style.color = '#ef4444';
      return;
    }
    const recipient = form.dataset.mailto || 'abdulmajeed.aljuhaymi@example.com';
    const nameValue = getFieldValue(nameField);
    const emailValue = getFieldValue(emailField);
    const messageValue = getFieldValue(messageField);
    const subject = encodeURIComponent(`Portfolio contact from ${nameValue || 'visitor'}`);
    const bodyLines = [
      `Name: ${nameValue || 'Not provided'}`,
      `Email: ${emailValue || 'Not provided'}`,
      '',
      messageValue || '(Message left blank)',
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));
    const mailtoHref = `mailto:${recipient}?subject=${subject}&body=${body}`;

    status.textContent = 'Opening your email app so you can review and send the message.';
    status.style.color = 'var(--primary)';
    const mailWindow = window.open(mailtoHref, '_blank', 'noopener,noreferrer');
    if (!mailWindow) {
      window.location.href = mailtoHref;
    }
    form.reset();
    fields.forEach((field) => updateFieldState(field, '', false));
  });

  form.addEventListener('input', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) return;
    validateField(target);
  });

  form.addEventListener('reset', () => {
    status.textContent = '';
    fields.forEach((field) => updateFieldState(field, '', false));
  });
})();

// Set current year in footer
(function year() {
  const el = $('#year');
  if (el) el.textContent = new Date().getFullYear();
})();

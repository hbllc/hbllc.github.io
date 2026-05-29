/* 李立川 · 个人主页 — 交互逻辑（无框架，深色双栏） */
(function () {
     'use strict';

     const $ = (s, c = document) => c.querySelector(s);
     const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

     /* ---- 左侧导航：滚动高亮 ---- */
     const links = $$('.nav-link');
     const sections = links
          .map(a => $(a.getAttribute('href')))
          .filter(Boolean);

     if (sections.length) {
          const spy = new IntersectionObserver(
               entries => {
                    entries.forEach(e => {
                         if (e.isIntersecting) {
                              const id = '#' + e.target.id;
                              links.forEach(a =>
                                   a.classList.toggle('active', a.getAttribute('href') === id)
                              );
                         }
                    });
               },
               { rootMargin: '-40% 0px -55% 0px' }
          );
          sections.forEach(s => spy.observe(s));
     }

     /* ---- 进入视口淡入 ---- */
     const revealer = new IntersectionObserver(
          (entries, obs) => {
               entries.forEach(e => {
                    if (e.isIntersecting) {
                         e.target.classList.add('in');
                         obs.unobserve(e.target);
                    }
               });
          },
          { rootMargin: '0px 0px -6% 0px', threshold: 0.05 }
     );
     $$('.reveal').forEach(el => revealer.observe(el));

     /* ---- 微信二维码弹窗 ---- */
     const modal = $('#qrModal');
     if (modal) {
          const open = () => modal.classList.add('open');
          const close = () => modal.classList.remove('open');
          const wechatBtn = $('#wechatBtn');
          if (wechatBtn) wechatBtn.addEventListener('click', open);
          $('#qrClose').addEventListener('click', close);
          modal.addEventListener('click', e => {
               if (e.target === modal) close();
          });
          document.addEventListener('keydown', e => {
               if (e.key === 'Escape') close();
          });
     }
})();

/* ============================================================
   李立川 · 个人品牌主页 — 交互脚本（纯原生，无依赖）
   仅保留必要、克制的微交互
   ============================================================ */
(function () {
     'use strict';

     /* 标记 JS 已运行——只有此时才允许 reveal 隐藏内容做淡入动画。
        若脚本未执行，内容默认完全可见，绝不会"丢失"。 */
     document.documentElement.classList.add('js');

     const $ = (sel, ctx = document) => ctx.querySelector(sel);
     const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

     /* ---- 顶部导航：滚动后加背景/描边 ---- */
     const nav = $('#nav');
     if (nav) {
          const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 12);
          window.addEventListener('scroll', onScroll, { passive: true });
          onScroll();
     }

     /* ---- 移动端菜单 ---- */
     const burger = $('#burger');
     const links = $('#navLinks');
     if (burger && links) {
          burger.addEventListener('click', () => {
               const open = links.classList.toggle('open');
               burger.setAttribute('aria-expanded', String(open));
               burger.innerHTML = open
                    ? '<i class="fas fa-xmark"></i>'
                    : '<i class="fas fa-bars"></i>';
          });
          $$('a', links).forEach(a =>
               a.addEventListener('click', () => {
                    links.classList.remove('open');
                    burger.setAttribute('aria-expanded', 'false');
                    burger.innerHTML = '<i class="fas fa-bars"></i>';
               })
          );
     }

     /* ---- 导航滚动高亮（scroll spy）---- */
     const navAnchors = $$('.nav-link');
     const targets = navAnchors
          .map(a => {
               const href = a.getAttribute('href') || '';
               if (!href.startsWith('#')) return null;
               try {
                    return $(href);
               } catch (_err) {
                    return null;
               }
          })
          .filter(Boolean);

     if (targets.length) {
          const spy = new IntersectionObserver(
               entries => {
                    entries.forEach(e => {
                         if (e.isIntersecting) {
                              const id = '#' + e.target.id;
                              navAnchors.forEach(a =>
                                   a.classList.toggle('active', a.getAttribute('href') === id)
                              );
                         }
                    });
               },
               { rootMargin: '-45% 0px -50% 0px' }
          );
          targets.forEach(t => spy.observe(t));
     }

     /* ---- 进入视口淡入 ---- */
     const revealEls = $$('.reveal');
     if (revealEls.length) {
          const io = new IntersectionObserver(
               (entries, obs) => {
                    entries.forEach(e => {
                         if (e.isIntersecting) {
                              e.target.classList.add('in');
                              obs.unobserve(e.target);
                         }
                    });
               },
               { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
          );
          revealEls.forEach(el => io.observe(el));
     }

     /* ---- 微信二维码弹窗 ---- */
     const modal = $('#qrModal');
     if (modal) {
          const openBtn = $('#wechatBtn');
          const closeBtn = $('#qrClose');
          let lastFocus = null;

          const open = () => {
               lastFocus = document.activeElement;
               modal.classList.add('open');
               closeBtn && closeBtn.focus();
          };
          const close = () => {
               modal.classList.remove('open');
               lastFocus && lastFocus.focus();
          };

          openBtn && openBtn.addEventListener('click', open);
          closeBtn && closeBtn.addEventListener('click', close);
          modal.addEventListener('click', e => {
               if (e.target === modal) close();
          });
          document.addEventListener('keydown', e => {
               if (e.key === 'Escape' && modal.classList.contains('open')) close();
          });
     }
})();

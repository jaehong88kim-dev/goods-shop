// Supabase 클라이언트 + 공통 인증 헬퍼 (ES 모듈)
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

const { SUPABASE_URL, SUPABASE_ANON_KEY } = window.APP_CONFIG;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 현재 로그인 세션 (없으면 null)
export async function getSession() {
  const { data } = await supabase.auth.getSession();
  return data.session;
}

// 로그인 필수 페이지 가드: 세션 없으면 로그인 페이지로 보냄
export async function requireLogin() {
  const session = await getSession();
  if (!session) {
    location.href = "auth.html";
    return null;
  }
  return session;
}

export async function logout() {
  await supabase.auth.signOut();
  location.href = "index.html";
}

// 상단 공통 헤더 렌더링 (로그인 상태 표시)
export async function renderHeader() {
  const el = document.getElementById("app-header");
  if (!el) return;
  const session = await getSession();
  const email = session?.user?.email;
  const isAdmin = email === window.APP_CONFIG.ADMIN_EMAIL;
  el.innerHTML = `
    <a class="brand" href="index.html">🛍️ 굿즈샵</a>
    <nav>
      ${session ? `<a href="history.html">내 결제내역</a>` : ""}
      ${isAdmin ? `<a href="admin.html">관리자</a>` : ""}
      ${
        session
          ? `<span class="who">${email}</span><button id="logout-btn" class="link-btn">로그아웃</button>`
          : `<a href="auth.html">로그인 / 회원가입</a>`
      }
    </nav>`;
  const btn = document.getElementById("logout-btn");
  if (btn) btn.addEventListener("click", logout);
}

export function formatKRW(n) {
  return Number(n).toLocaleString("ko-KR") + "원";
}

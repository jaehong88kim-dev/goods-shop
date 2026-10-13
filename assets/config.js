// 앱 공개 설정값 (이 값들은 공개돼도 안전한 것들입니다)
// - SUPABASE_ANON_KEY: 공개용(publishable) 키. 노출돼도 RLS가 데이터를 보호합니다.
// - TOSS_CLIENT_KEY: 토스 "테스트 클라이언트 키". 결제창 SDK용. (시크릿 키는 여기 두면 안 됨!)
window.APP_CONFIG = {
  SUPABASE_URL: "https://jgfwjplhdllbwiujagxk.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_mr9xBmO-0WEfSrV2qvlTBA_oyOJTgo0",

  // 토스 "테스트 클라이언트 키" (API 개별 연동, 문서용 테스트 키). 공개돼도 안전.
  TOSS_CLIENT_KEY: "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq",

  ADMIN_EMAIL: "admin@admin.com",
};

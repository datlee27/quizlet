/**
 * Migration Service
 * Đảm bảo dữ liệu lịch sử làm bài trước đây từ phiên bản HTML thuần được bảo toàn trọn vẹn.
 */
export const runDataMigration = (): void => {
  try {
    // 1. Migrate MLN111 từ version 1 cũ nếu có
    const old111 = localStorage.getItem('mln111_quizlet_progress');
    const v2Key111 = 'mln111_quizlet_progress_v2';
    if (old111 && !localStorage.getItem(v2Key111)) {
      localStorage.setItem(v2Key111, old111);
    }
  } catch (err) {
    console.error('Migration failed:', err);
  }
};

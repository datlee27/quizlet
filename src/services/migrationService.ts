/**
 * Migration Service
 * Đảm bảo dữ liệu lịch sử làm bài trước đây từ phiên bản HTML thuần được bảo toàn trọn vẹn.
 * Hỗ trợ quét và tự động chuyển đổi key localStorage v1 sang v2 cho toàn bộ 4 môn.
 */

interface MigrationReport {
  migratedCount: number;
  keysMigrated: string[];
  errors: string[];
}

export const migrationService = {
  /**
   * Chạy tiến trình kiểm tra và chuyển dữ liệu từ các phiên bản trước
   */
  async runDataMigration(): Promise<MigrationReport> {
    const report: MigrationReport = {
      migratedCount: 0,
      keysMigrated: [],
      errors: [],
    };

    if (typeof localStorage === 'undefined') {
      return report;
    }

    const subjects = ['mln111', 'mln122', 'aet', 'hod'];

    for (const code of subjects) {
      try {
        // 1. Migrate Subject Progress
        const oldProgressKey = `${code}_quizlet_progress`;
        const v2ProgressKey = `${code}_quizlet_progress_v2`;
        const oldProgressData = localStorage.getItem(oldProgressKey);
        const v2ProgressData = localStorage.getItem(v2ProgressKey);

        if (oldProgressData && !v2ProgressData) {
          // Validate valid JSON before copying
          JSON.parse(oldProgressData);
          localStorage.setItem(v2ProgressKey, oldProgressData);
          report.migratedCount++;
          report.keysMigrated.push(`${oldProgressKey} -> ${v2ProgressKey}`);
        }

        // 2. Migrate Mock Exam History
        const oldMockKey = `${code}_mock_exam_progress`;
        const v2MockKey = `${code}_mock_exam_progress_v2`;
        const oldMockData = localStorage.getItem(oldMockKey);
        const v2MockData = localStorage.getItem(v2MockKey);

        if (oldMockData && !v2MockData) {
          JSON.parse(oldMockData);
          localStorage.setItem(v2MockKey, oldMockData);
          report.migratedCount++;
          report.keysMigrated.push(`${oldMockKey} -> ${v2MockKey}`);
        }
      } catch (err: any) {
        const msg = `Lỗi migration cho môn ${code.toUpperCase()}: ${err?.message || err}`;
        console.error(msg);
        report.errors.push(msg);
      }
    }

    return report;
  },
};

// Backwards-compatible export
export const runDataMigration = () => {
  migrationService.runDataMigration();
};

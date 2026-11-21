# QUY TẮC BẮT BUỘC CHO AI CODE AGENT (DỰ ÁN MIGRATION REACT UI)

## 1. BỐI CẢNH & NGUYÊN TẮC SỐNG CÒN
- **Nhánh làm việc:** Đang ở nhánh `feat/migrate-react-ui`. TUYỆT ĐỐI KHÔNG chỉnh sửa hay đẩy code vào nhánh `main` (đang chạy GitHub Pages).
- **Nguồn UI/Design/Audio/Settings (`./_reference_ui`):** Chỉ dùng để tham khảo và tái sử dụng Design System (Chakra UI theme, màu sắc, font, hiệu ứng animation), hệ thống âm thanh (Sound Manager), và giao diện Setting. **CẤM** copy logic nghiệp vụ/luồng chơi của `_reference_ui` đè lên dự án chính.
- **Nguồn Logic & Luồng hoạt động (`./README.md` + code HTML/CSS/JS gốc):** Đây là "Single Source of Truth" về nghiệp vụ, cấu trúc dữ liệu, các vòng thi/tính năng và luồng người dùng.

## 2. KIẾN TRÚC BẮT BUỘC (CHUẨN BỊ SẴN CHO BACKEND SAU NÀY)
- **Tech Stack:** React + Vite + Chakra UI (đồng bộ phiên bản và cấu hình với `_reference_ui`).
- **Tách biệt hoàn toàn UI và Data/Logic (Service & Adapter Pattern):**
  - Toàn bộ thao tác đọc/ghi dữ liệu (`localStorage`, dữ liệu mẫu có sẵn) BẮT BUỘC đi qua thư mục `src/services/` (ví dụ: `quizService.js`, `gameStateService.js`, `settingsService.js`).
  - Các hàm trong `src/services/` phải viết dưới dạng **`async/await` (trả về Promise)** giống hệt như đang gọi REST API thật, bên trong mới xử lý `localStorage` và dữ liệu mock.
  - UI Components (`src/pages/`, `src/components/`) **KHÔNG ĐƯỢC** gọi trực tiếp `localStorage` (ngoại trừ `settingsService` cho âm thanh/cấu hình cá nhân). Sau này khi gắn Backend thật, chỉ cần sửa ruột các file trong `src/services/` mà không phải sửa UI.

## 3. QUY TRÌNH LÀM VIỆC & CHỐNG LAN MAN
- Làm việc tuần tự theo từng **Phase** trong `MIGRATION_PLAN.md`. Không nhảy cóc.
- Sau mỗi Phase, cập nhật trạng thái vào `MIGRATION_PLAN.md` để duy trì ngữ cảnh cho các phiên làm việc sau.
- Mọi giao diện mới (nếu dự án gốc có tính năng mà `_reference_ui` không có) phải dùng chung Chakra UI Theme, hiệu ứng, và phong cách thiết kế của `_reference_ui`.
# B0. SOURCE OF TRUTH (NGUỒN SỰ THẬT DUY NHẤT)

Tài liệu này quy định các file dữ liệu gốc mà hệ thống phải tuân thủ tuyệt đối trong quá trình xây dựng nội dung và tính năng. Mọi sự thay đổi về Logic hoặc Nội dung phải được cập nhật tại các file nguồn này trước khi phản ánh lên Website.

---

## 1. KHUNG NĂNG LỰC (COMPETENCY FRAMEWORK)

Hệ thống đánh giá năng lực (Assessment Engine) và Biểu đồ Radar phải được xây dựng dựa trên:
- **File nguồn:** [Competency_Framework.md](file:///Users/danghong/Documents/WebAI%20Builders/Input/Competency_Framework.md)
- **Quy tắc tuân thủ:**
    - Sử dụng đúng 11 năng lực chia thành 3 nhóm KSA (Knowledge, Skills, Attitudes).
    - Các mô tả hành vi cho 5 cấp độ (Novice -> Expert) phải trích xuất chính xác từ bảng tra cứu trong file nguồn.
    - **Cấu trúc dữ liệu trung gian:** Đã được chuyển hóa sang [competency_data.json](file:///Users/danghong/Documents/WebAI%20Builders/Requirements/competency_data.json) để phục vụ việc lập trình.

---

## 2. LỘ TRÌNH HỌC TẬP (COURSE SYLLABUS)

Cấu trúc các Unit, Lesson và Performance Task trong Learning Roadmap phải tuân thủ:
- **File nguồn:** [Syllabus WebAI Builders.md](file:///Users/danghong/Documents/WebAI%20Builders/Input/Syllabus%20WebAI%20Builders.md)
- **Quy tắc tuân thủ:**
    - **Unit 1 (Bán cho ai?):** Tập trung vào JTBD và Outcome-Driven Mindset.
    - **Unit 2 (Bán cái gì?):** Tập trung vào Portfolio và Value Proposition.
    - **Unit 3 (Bán như thế nào?):** Tập trung vào PRD, Sitemap và Google Antigravity.
    - **Performance Tasks:** Các bài nộp cuối mỗi Unit phải khớp chính xác với yêu cầu trong Syllabus để mở khóa Unit tiếp theo.

---

## 3. QUY TRÌNH CẬP NHẬT (UPDATE PROTOCOL)

1. **Bước 1:** Chỉnh sửa file tại thư mục `/Input`.
2. **Bước 2:** Cập nhật các file mô tả yêu cầu tương ứng tại `/Requirements` (A2_PRD, B2_Database_Schema).
3. **Bước 3:** Chạy lệnh re-generate hoặc cập nhật code để đồng bộ dữ liệu mới.

> **CẢNH BÁO:** Tuyệt đối không tự ý thay đổi tên Unit hoặc mô tả năng lực trong code mà không thông qua việc cập nhật file nguồn.

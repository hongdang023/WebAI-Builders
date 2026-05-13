# B2. DATABASE SCHEMA (SUPABASE DESIGN) - WEBAI BUILDERS

Kiến trúc dữ liệu tập trung vào việc lưu vết sự biến đổi của học viên từ lúc bắt đầu (Point A) trong Student Portrait đến khi hoàn thành sản phẩm (Point B) trong Showcase.

---

## 1. CẤU TRÚC CÁC BẢNG (TABLES)

### 1.1. Bảng `profiles` (Học viên)
Liên kết trực tiếp với `auth.users` của Supabase.
*   **id**: uuid (PK).
*   **full_name**: text.
*   **bio**: text.
*   **industry**: text (Ngành nghề kinh doanh).
*   **avatar_url**: text.
*   **current_level**: text (Ví dụ: Novice, Competent - dựa trên kết quả test mới nhất).

### 1.2. Bảng `competency_assessments` (Đánh giá năng lực)
Lưu kết quả của 11 năng lực KSA. Hỗ trợ cả bài test đầu khóa và các bài test làm lại (Retake).
*   **id**: uuid (PK).
*   **user_id**: uuid (FK) -> profiles.id.
*   **type**: text (Ví dụ: `initial_test`, `retake_test_01`, `post_course_test`).
*   **scores**: jsonb (Lưu điểm của 11 năng lực: `{"01": 3, "02": 2, ...}`).
*   **total_score**: integer.
*   **proficiency_level**: text (Novice/Advanced Beginner/etc.).
*   **created_at**: timestamp.

### 1.3. Bảng `course_progress` (Tiến độ học tập)
Theo dõi việc hoàn thành các Unit và Lesson trong Syllabus.
*   **id**: uuid (PK).
*   **user_id**: uuid (FK) -> profiles.id.
*   **unit_id**: text (unit_1, unit_2, unit_3).
*   **lesson_id**: text.
*   **is_completed**: boolean.
*   **artifact_url**: text (Link tới sản phẩm của bài học đó, ví dụ: file PRD).

### 1.4. Bảng `transformations` (Showcase Transformation)
Trái tim của hệ thống chứng thực kết quả Before & After.
*   **id**: uuid (PK).
*   **user_id**: uuid (FK) -> profiles.id.
*   **title**: text (Tên dự án).
*   **before_url**: text (Website cũ hoặc landing page nháp).
*   **before_screenshot**: text.
*   **after_url**: text (Website mới build).
*   **after_screenshot**: text.
*   **changelog**: jsonb (Mảng các thay đổi: `[{"title": "Mindset", "desc": "..."}, ...]`).
*   **status**: text (draft, pending_review, published).
*   **is_featured**: boolean.

### 1.5. Bảng `syllabus_content` (Quản trị nội dung)
Dùng để CMS cho giảng viên cập nhật nội dung bài học Syllabus.
*   **id**: uuid (PK).
*   **unit**: integer (1, 2, 3).
*   **title**: text.
*   **description**: text.
*   **video_url**: text.
*   **resources**: jsonb (Tài liệu đính kèm).

---

## 2. QUY TẮC BẢO MẬT & TOÀN VẸN (RLS & INTEGRITY)

1.  **Row Level Security (RLS)**:
    *   Học viên chỉ có quyền xem nội dung Syllabus và cập nhật `profiles`, `competency_assessments`, `transformations` của chính mình.
    *   Showcase được `published` mới hiển thị công khai (Public).
2.  **Data Sync**:
    *   Khi học viên submit bài test mới (Initial hoặc Retake), `profiles.current_level` sẽ tự động cập nhật thông qua Postgres Trigger.
3.  **Validation**:
    *   Chỉ cho phép nộp website "After" khi đã hoàn thành đủ 100% tiến độ học tập (Unit 3).

---

## 3. CHỈ MỤC (INDEXING)
*   Index `user_id` trên tất cả các bảng quan hệ để tối ưu tốc độ load Dashboard.
*   Index `status` và `is_featured` trên bảng `transformations` để filter Gallery nhanh.


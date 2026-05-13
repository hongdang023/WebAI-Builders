# B1. WEB ARCHITECTURE (NEXT.JS APP ROUTER) - WEBAI BUILDERS

Nền tảng được xây dựng tối ưu cho hành trình biến đổi năng lực của học viên, tập trung vào tính động và cá nhân hóa của Student Portrait.

---

## 1. CẤU TRÚC THƯ MỤC (DIRECTORY STRUCTURE)

```text
/app
├── (auth)/             # Login/Register (Khách ngoài chỉ thấy Landing Page)
├── (portrait)/         # Student Portrait (Competency Test & Results) - Điểm A
├── (syllabus)/         # Syllabus học tập (Unit 1, 2, 3) theo lộ trình
├── (framework)/        # Tài liệu chi tiết về Competency Framework
├── (admin)/            # Quản trị học viên, bài nộp và nội dung Syllabus
├── api/                # Xử lý Logic (Auth, Upload Image, Radar Chart generation)
└── components/         # UI System (Charcoal Black & Luxury Crimson)
```

---

## 2. CHIẾN LƯỢC HIỂN THỊ (RENDERING STRATEGY)

*   **Server-Side Rendering (SSR)**: 
    *   **Portrait/Syllabus**: Đảm bảo dữ liệu tiến độ và kết quả đánh giá luôn đồng bộ.
    *   Sử dụng **Middleware** để chặn truy cập vào Syllabus nếu học viên chưa hoàn thành bài test Điểm A.
*   **Client-side Interactivity**:
    *   **Assessment Widget**: Sử dụng Framer Motion cho hiệu ứng "1-câu-hỏi-1-màn-hình" và Canvas API cho Radar Chart.

---

## 3. QUẢN LÝ TRẠNG THÁI (STATE MANAGEMENT)

*   **Server State (React Query)**: Đồng bộ hóa trạng thái hoàn thành các Unit và Lesson với Supabase.
*   **Global UI State (Zustand)**: Quản lý trạng thái tạm thời của bài test năng lực (câu hỏi hiện tại, câu trả lời tạm thời) trước khi submit.
*   **Persistence**: Lưu link "Before" của học viên vào `sessionStorage` trong quá trình Student Portrait để tránh mất dữ liệu nếu reload trang.

---

## 4. TỐI ƯU HÓA TRẢI NGHIỆM (UX OPTIMIZATION)

*   **Frictionless Assessment**: Bài test năng lực được thiết kế tối giản, tập trung vào trải nghiệm mượt mà để học viên không cảm thấy bị "tra khảo".
*   **Outcome-focused Navigation**: Thanh điều hướng (Sidebar) trong Syllabus luôn hiển thị rõ "Bạn đang ở đâu" và "Còn bao xa nữa thì hoàn thành sản phẩm".


# B5. THE DESIGN LANGUAGE (BRAND & UI SYSTEM)

Tài liệu này là sự hợp nhất giữa **Linh hồn thương hiệu (Brand)** và **Hệ thống thực thi (UI System)**. Đây là nguồn sự thật duy nhất cho mọi quyết định về thẩm mỹ và tương tác của "The Learning Architect".

---

## 1. TRIẾT LÝ THIẾT KẾ (DESIGN PHILOSOPHY)

Giao diện là sự giao thoa giữa tính **Thẩm mỹ cao cấp** và **Thực chứng dữ liệu** theo tỷ lệ vàng:

- **🍎 30% Apple Aesthetics (The Editorial Look)**:
  - Tối giản, sang trọng, Typography tinh tế (`Inter`).
  - Sử dụng khoảng trắng (Whitespace) rộng rãi để tạo nhịp thở.
  - Chuyển động (Transitions) mượt mà, tinh tế nhưng không rườm rà.
- **🍊 70% YCombinator Functionality (The Evidence Look)**:
  - **Real Image First**: Tuyệt đối không dùng Stock/AI Illustration trừu tượng. Chỉ dùng ảnh thật của sản phẩm và con người.
  - **Data Transparency**: Mọi con số, chỉ số thực chứng được trình bày rõ ràng, minh bạch.
  - **Functional Density**: Thông tin dày đặc nhưng được sắp xếp khoa học, giúp người dùng ra quyết định nhanh (Outcome-focused).

**Keywords:** `Warm Apple Minimalism`, `Functional Density`, `Real-time Evidence`, `Human-centric`.

---

## 2. HỆ THỐNG MÀU SẮC & ÁNH SÁNG

| Loại màu              | Mã Hex    | Ứng dụng                                          |
| :-------------------- | :-------- | :------------------------------------------------ |
| **Nền chính (Light)** | `#F9F7F5` | Beige ấm, tạo cảm giác dễ chịu và khai sáng.      |
| **Nền nhấn (Soft)**   | `#EDE6DE` | Shadow Beige. Dùng để phân tách các Section.      |
| **Văn bản**           | `#1D1D1F` | Charcoal Black. Sắc nét, dễ đọc.                  |
| **Nhấn **             | `#8E3A3A` | Luxury Crimson. Sang trọng, trầm mặc.            |
| **Đường kẻ (Line)**   | `#E5E5E7` | Mảnh 0.5px. Phân tách không gian thay cho Shadow. |

---

## 3. HỆ THỐNG TYPOGRAPHY (TYPE SCALE)

Toàn bộ hệ thống sử dụng font **Inter** (Content) làm chủ đạo và **JetBrains Mono** cho các yếu tố kỹ thuật/badges. Quy tắc "Có lực nhưng tinh tế" được áp dụng thông qua bảng Type Scale sau:

| Role | Size (px) | Size (rem) | Line Height | Weight | Tracking | Class (Tailwind) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | 64px | 4rem | 1.1 | 800 | -0.02em | `text-display` |
| **Heading 1** | 48px | 3rem | 1.2 | 800 | -0.02em | `text-h1` |
| **Heading 2** | 36px | 2.25rem | 1.2 | 700 | -0.01em | `text-h2` |
| **Heading 3** | 24px | 1.5rem | 1.3 | 700 | -0.01em | `text-h3` |
| **Heading 4** | 20px | 1.25rem | 1.4 | 600 | 0 | `text-h4` |
| **Body Large** | 18px | 1.125rem | 1.75 | 500 | 0 | `text-body-lg` |
| **Body Base** | 16px | 1rem | 1.75 | 500 | 0 | `text-body` |
| **Small** | 14px | 0.875rem | 1.5 | 500 | 0.01em | `text-small` |
| **Label/Mono** | 12px | 0.75rem | 1.5 | 700 | 0.05em | `text-label` |

**Nguyên tắc bổ sung:**
- **Bilingual & Dual-color**: Heading chính tiếng Anh (Charcoal Black), Heading phụ tiếng Việt (Luxury Crimson).
- **Line Length**: Paragraph tuyệt đối không vượt quá `max-w-3xl` (khoảng 700px) để đảm bảo trải nghiệm đọc.
- **Messaging Principle**: "Bình dân học vụ" - Dùng từ ngữ đời thường, thuần Việt.

---

## 4. HỆ THỐNG KHOẢNG CÁCH (SPACING & LAYOUT)

Sử dụng hệ thống lưới 4px (Base 4) để đảm bảo sự cân bằng và nhịp điệu thị giác.

### 4.1. Spacing Scale
- **Tight**: `8px (2)`, `12px (3)` - Dùng cho các thành phần bên trong component nhỏ.
- **Base**: `16px (4)`, `24px (6)` - Dùng cho padding card, khoảng cách giữa các dòng nội dung.
- **Loose**: `32px (8)`, `48px (12)` - Dùng cho padding section nhỏ, khoảng cách giữa các khối lớn.
- **Section**: `64px (16)`, `96px (24)` - Dùng cho padding top/bottom của các section chính.

### 4.2. Button Styling Standards
Nút bấm là điểm chạm quan trọng, cần sự nhất quán về "lực":
- **Padding**: 
  - Medium (Standard): `px-6 py-3`
  - Large (Hero): `px-8 py-4`
- **Radius**: `full` (Rounded-full) để tạo sự thân thiện hoặc `12px` để đồng bộ với Card. Ưu tiên `full` cho Button hành động chính.
- **Interaction**: Màu **Luxury Crimson (#8E3A3A)**, lún xuống (scale-95) và đổ bóng nhẹ khi hover.

---

## 5. CHI TIẾT COMPONENTS (RESEARCH-BASED)

### 4.1. Navigation Bar (Apple Glassmorphism)

- **Hiệu ứng**: Blur nền (Backdrop-filter) trên tone màu Beige.
- **UI**: Tối giản kiểu YC (Logo + Link text) nhưng trải nghiệm mượt mà và nhiều white space kiểu Apple.
- **Tính năng**: Sticky ở trên cùng trang, tự động thu nhỏ khi cuộn.
- **Cấu trúc**: 2 Trụ cột chính (Lộ trình, Test năng lực).

### 4. COMPONENTS STANDARDS
- **Cards**: Border 0.5px, Radius 12px, Soft Shadow.
- **Benefits/Needs Box**: 
  - Background: Secondary (Beige).
  - Border: Dashed 1px.
  - Content: Left-aligned list with dots or checkmarks.

### 4.2. Outcome Card (YC Evidence x Apple Layout)

- **Visual**: Phẳng (Flat), viền mảnh, bo góc `12px` (Sắc bén).
- **Imagery**: **Real Image First**. Ưu tiên ảnh chân thực (người thật, môi trường làm việc thực tế). Không dùng ảnh stock, không dùng minh họa AI trừu tượng.
- **Data Overlay**: Hiển thị nhãn công cụ `[n8n]`, `[AI]` (Monospace font) và các chỉ số thực chứng nổi bật trên nền ảnh.

### 4.4. Standard Hero Section (The Premium Entry)

Đây là phần "mở đầu" của mỗi trang, cần tạo ấn tượng mạnh mẽ bằng sự tinh tế, không lạm dụng không gian:
- **Khung (Container)**: Khóa ở `max-w-4xl` cho nội dung chữ.
- **Padding**: `pt-16 pb-12` (Laptop) và `pt-12 pb-8` (Mobile).
- **Cấu trúc (Layout)**: Luôn căn giữa (`text-center`).
- **Thành phần (Components)**:
  1. **Tag/Badge**: Nằm trên cùng.
     - Style: `inline-flex`, `items-center`, `space-x-2`, `text-primary`, `font-mono`, `text-[9px]`, `font-bold`, `tracking-[0.1em]`, `uppercase`, `opacity-70`.
     - Icon: Sử dụng icon từ Lucide (size `w-3 h-3`).
  2. **Heading**: 
     - Style: `text-3xl md:text-5xl`, `font-extrabold`, `tracking-tighter`, `uppercase`.
     - Dual-color: Phần quan trọng nhất hoặc từ khóa chính dùng màu **Luxury Crimson (#8E3A3A)**.
  3. **Description**:
     - Style: `text-sm md:text-base`, `text-foreground/40`, `font-medium`, `max-w-xl`, `mx-auto`, `leading-relaxed`.
     - Constraint: Không bao giờ dàn trải hết chiều ngang.



### 4.6. Footer
- **External Links**: Hiển thị các liên kết mạng xã hội và kênh phân phối nội dung dài (Substack, Facebook profile) nhằm thúc đẩy sự kết nối chuyên sâu ngoài hệ thống.

### 4.7. Punchy Statements (Câu chốt/Quote)

Để tạo điểm nhấn cho các thông điệp quan trọng (Core Philosophy):
- **Layout**: Luôn căn giữa (`text-center`).
- **Typography**: 
  - Font: `Inter`, `font-bold` hoặc `font-extrabold`.
  - Size: `text-2xl` đến `text-4xl` tùy ngữ cảnh.
  - Line-height: `leading-tight` để các dòng gắn kết chặt chẽ.
- **Color Emphasis**: Luôn dùng **Luxury Crimson** cho các từ khóa quan trọng nhất trong câu để điều hướng sự chú ý.
- **Constraint**: Khóa chiều rộng ở `max-w-3xl` để đảm bảo nhịp đọc và không bị vỡ dòng vô duyên.
- **Selection**: Màu lựa chọn văn bản (Selection color) phải là màu thương hiệu để tăng tính sở hữu.

---

## 6. NGUYÊN TẮC HÌNH ẢNH & VISUAL RULES

1.  **Light-only Transition**: Website không có Dark mode. Sự thay đổi nhịp điệu chỉ diễn ra giữa Beige sáng và Beige đậm (Shadow Beige).
2.  **Human-Centric Visuals**: Luôn ưu tiên sự xuất hiện của yếu tố con người (Human touch) trong các ảnh showcase để xây dựng lòng tin.
3.  **Tactile Feedback**: Nút bấm sử dụng màu **Luxury Crimson (#8E3A3A)**, lún xuống khi click.

---

## 7. CHIẾN LƯỢC TRẢI NGHIỆM (UX STRATEGY)

- **Aha Moment**: Người dùng thấy ngay kết quả sản phẩm chạy được (Demo) trước khi phải đọc lý thuyết.
- **Trust Builder**: Sử dụng nhật ký nâng cấp (Build Logs) để chứng minh quá trình Fail-forward của người làm thực tế.

---

## 8. RESPONSIVE DESIGN & GRID SYSTEM (HIỂN THỊ ĐA THIẾT BỊ)

Để giao diện không bị "khó nhìn" hay "quá tải" trên các thiết bị lớn như Laptop/Desktop, toàn bộ hệ thống phải tuân thủ nghiêm ngặt các quy tắc **Responsive Web Design** (Thiết kế Web Đáp ứng):

1. **Optimal Line Length (Độ dài dòng tối ưu)**:
   - Mắt người dễ bị mỏi khi đọc một dòng chữ quá dài trên màn hình Laptop.
   - Các đoạn văn (Paragraph/Description) tuyệt đối không được dàn trải hết chiều ngang. Luôn khóa chiều rộng bằng `max-w-2xl` hoặc `max-w-3xl` (khoảng 60-80 ký tự/dòng).

2. **Grid Breakpoints (Điểm mù mốc lưới)**:
   - **Mobile (Mặc định)**: Dàn 1 cột (`grid-cols-1`).
   - **Tablet (`md` ~ 768px)**: Dàn 2 cột (`md:grid-cols-2`).
   - **Laptop/Desktop (`lg` ~ 1024px trở lên)**: Dàn 3 cột (`lg:grid-cols-3`).

3. **Fluid Typography (Typography thích ứng)**:
   - Kích thước chữ phải co giãn theo thiết bị (Sử dụng chuỗi class như `text-4xl md:text-5xl lg:text-6xl`).
   - Đảm bảo tiêu đề không bị vỡ dòng vô duyên trên Mobile, nhưng vẫn đủ "Lực" (Impact) trên màn hình Laptop rộng lớn.

4. **Max Container (Khóa khung hiển thị chính)**:
   - Mọi nội dung trang phải nằm trong một giới hạn khung (ví dụ: `max-w-7xl mx-auto`). Tuyệt đối không để Card hay hình ảnh bị kéo giãn méo mó trên các màn hình siêu rộng (Ultrawide screens).

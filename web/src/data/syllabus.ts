export interface Lesson {
  id: string;
  title: string;
  description: string;
}

export interface Unit {
  id: number;
  title: string;
  session: string;
  outcome: string;
  keyConcepts: string;
  lessons: Lesson[];
  performanceTask: string;
}

export const SYLLABUS_DATA: Unit[] = [
  {
    id: 1,
    title: "Bán cho ai?",
    session: "Buổi 1",
    outcome: "Phân tích (Analyze) được 03 \"Jobs\" khách hàng thuê bạn giải quyết để làm nền móng cho website.",
    keyConcepts: "JTBD, Outcome-Driven Mindset",
    lessons: [
      {
        id: "1.1",
        title: "Tư duy Outcome-Driven",
        description: "Outcome-Driven Mindset. Tập trung vào kết quả mong đợi thay vì tính năng."
      },
      {
        id: "1.2",
        title: "Phẫu thuật Jobs khách hàng (JTBD)",
        description: "Jobs-to-be-Done (JTBD). Thấu hiểu động lực sâu xa khiến khách hàng tìm đến bạn."
      }
    ],
    performanceTask: "Bản đồ giải mã Jobs của khách hàng (Xác định rõ lý do khách hàng truy cập web)."
  },
  {
    id: 2,
    title: "Bán cái gì?",
    session: "Buổi 2",
    outcome: "Thiết lập (Analyze) được Danh mục sản phẩm (Products Portfolio) tối ưu phù hợp với JTBD của khách hàng.",
    keyConcepts: "Value Proposition, Products Portfolio",
    lessons: [
      {
        id: "2.1",
        title: "Hiểu về Sản phẩm & Phễu giá trị",
        description: "Products & Products Portfolio. Thiết kế hành trình giá trị từ miễn phí đến cao cấp."
      },
      {
        id: "2.2",
        title: "Thiết kế danh mục giá trị thực tế",
        description: "Value Proposition (Products vs Jobs). Khớp nối sản phẩm với nhu cầu thực của khách."
      }
    ],
    performanceTask: "Danh mục sản phẩm chiến lược (Xác định các gói sản phẩm/dịch vụ sẽ hiển thị trên web)."
  },
  {
    id: 3,
    title: "Bán như thế nào?",
    session: "Buổi 3 & 4",
    outcome: "Xây dựng (Create) website vận hành được trên Google Antigravity dựa trên PRD và Sitemap đã thiết kế.",
    keyConcepts: "IA, PRD, No-code Builder",
    lessons: [
      {
        id: "3.1",
        title: "Viết PRD (Đặc tả kỹ thuật)",
        description: "Product Requirements Document. Bản vẽ kỹ thuật cho ngôi nhà số của bạn."
      },
      {
        id: "3.2",
        title: "Thiết kế Sitemap (Bản đồ đường đi)",
        description: "Information Architecture. Sắp xếp thông tin khoa học giúp khách hàng không bị lạc."
      },
      {
        id: "4.1",
        title: "Làm quen Google Antigravity",
        description: "Google Antigravity Tool. Làm chủ công nghệ AI Builder không cần chạm code."
      },
      {
        id: "4.2",
        title: "Build website thực tế",
        description: "Outcome-Driven Web Building. Hiện thực hóa website và đưa lên internet."
      }
    ],
    performanceTask: "Website chính thức Go-live (Website có đầy đủ nội dung, sản phẩm và vận hành được trên internet)."
  }
];


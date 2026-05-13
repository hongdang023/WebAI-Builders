export interface Competency {
  id: string;
  name: string;
  category: "KIẾN THỨC" | "KỸ NĂNG" | "THÁI ĐỘ";
  levels: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  };
  description: string;
}

export const CATEGORIES = ["KIẾN THỨC", "KỸ NĂNG", "THÁI ĐỘ"] as const;

export const COMPETENCY_DATA: Competency[] = [
  // KIẾN THỨC (KNOWLEDGE)
  {
    id: "k1",
    name: "Thấu hiểu Khách hàng",
    category: "KIẾN THỨC",
    description: "Khả năng phân tích chân dung và nỗi đau khách hàng.",
    levels: {
      1: "Chỉ biết khách hàng là 'người dùng chung chung'.",
      2: "Liệt kê được các nhu cầu cơ bản nhưng chưa kết nối với giải pháp.",
      3: "Phân tích sâu nỗi đau (Pain points) và hành vi của từng nhóm khách hàng mục tiêu.",
      4: "Dự báo được các nhu cầu ẩn giấu (unmet needs) dựa trên xu hướng thị trường.",
      5: "Định hình lại thị trường bằng cách tạo ra các giá trị và nhu cầu mới hoàn toàn."
    }
  },
  {
    id: "k2",
    name: "Logic Sản phẩm & MVP",
    category: "KIẾN THỨC",
    description: "Tư duy tinh gọn và thiết kế lộ trình phát triển sản phẩm.",
    levels: {
      1: "Muốn làm website có tất cả tính năng cùng lúc để 'cho chắc'.",
      2: "Biết lược bỏ bớt tính năng nhưng vẫn còn nặng tính cảm tính.",
      3: "Xác định đúng Core Value và tính năng tối giản nhất để giải quyết vấn đề.",
      4: "Thiết kế Roadmap tinh gọn, biết khi nào cần mở rộng hoặc dừng lại.",
      5: "Xây dựng hệ sinh thái sản phẩm có tính chiến lược và khả năng mở rộng cao."
    }
  },
  {
    id: "k3",
    name: "Công nghệ AI & Web",
    category: "KIẾN THỨC",
    description: "Hiểu biết về kiến trúc AI và nền tảng Web hiện đại.",
    levels: {
      1: "Chỉ biết AI là công cụ chat, Web là trang hiển thị thông tin.",
      2: "Hiểu sơ đồ hoạt động cơ bản của AI và các thành phần của một trang web.",
      3: "Biết chọn đúng loại AI/Công cụ phù hợp nhất cho từng bài toán cụ thể.",
      4: "Tối ưu hóa hiệu năng và kết hợp đa công cụ (Multi-tooling) linh hoạt.",
      5: "Sáng tạo ra những cách ứng dụng công nghệ đột phá, dẫn dắt xu hướng."
    }
  },
  // KỸ NĂNG (SKILLS)
  {
    id: "s1",
    name: "Xác định Vấn đề",
    category: "KỸ NĂNG",
    description: "Khả năng bóc tách và gọi tên chính xác vấn đề cần giải quyết.",
    levels: {
      1: "Thấy khó khăn nhưng không biết gọi tên hoặc mô tả chính xác.",
      2: "Mô tả được vấn đề đang gặp phải nhưng chưa tìm ra nguyên nhân gốc.",
      3: "Chuyển hóa vấn đề thành các yêu cầu sản phẩm (Product Requirements) rõ ràng.",
      4: "Giải quyết các vấn đề phức tạp mang tính hệ thống và đa chiều.",
      5: "Nhìn ra vấn đề từ khi còn là mầm mống và ngăn chặn chúng hiệu quả."
    }
  },
  {
    id: "s2",
    name: "Kỹ thuật Prompt",
    category: "KỸ NĂNG",
    description: "Sử dụng ngôn ngữ để điều khiển AI đạt kết quả tối ưu.",
    levels: {
      1: "Copy-paste prompt mẫu mà không hiểu cấu trúc bên dưới.",
      2: "Biết sử dụng các cấu trúc cơ bản (Role, Task, Context).",
      3: "Ứng dụng kỹ thuật nâng cao (Few-shot, CoT) để kiểm soát chính xác đầu ra.",
      4: "Tối ưu hóa prompt để giảm nhiễu, tiết kiệm token và tăng độ chính xác.",
      5: "Thiết kế hệ thống Prompt động và kiến trúc hóa luồng suy luận phức tạp."
    }
  },
  {
    id: "s3",
    name: "Quản trị Ngữ cảnh",
    category: "KỸ NĂNG",
    description: "Cấu trúc và sắp xếp dữ liệu đầu vào cho AI.",
    levels: {
      1: "Nhồi nhét mọi thứ vào cửa sổ chat một cách lộn xộn.",
      2: "Biết chia nhỏ thông tin và sắp xếp dữ liệu đầu vào theo thứ tự logic.",
      3: "Cấu trúc dữ liệu thông minh, lọc bỏ thông tin thừa để AI tập trung đúng mục tiêu.",
      4: "Thiết kế luồng dữ liệu tự động, quản lý ngữ cảnh đa tầng cho các tác vụ lớn.",
      5: "Xây dựng hệ thống 'bộ nhớ' và truy xuất thông tin tối ưu như một chuyên gia."
    }
  },
  {
    id: "s4",
    name: "Hiện thực hóa Giải pháp",
    category: "KỸ NĂNG",
    description: "Biến ý tưởng thành sản phẩm vận hành thực tế.",
    levels: {
      1: "Chỉ biết dùng các công cụ cơ bản với chức năng mặc định.",
      2: "Biết kết nối các công cụ đơn giản để tạo ra luồng công việc (workflow).",
      3: "Xây dựng được sản phẩm hoàn chỉnh, vận hành ổn định và có tính thẩm mỹ.",
      4: "Tích hợp AI sâu vào quy trình nghiệp vụ, tối ưu hóa trải nghiệm người dùng.",
      5: "Tạo ra các giải pháp tự động hóa toàn diện với hiệu suất vượt trội."
    }
  },
  {
    id: "s5",
    name: "Cải tiến & Nâng cấp",
    category: "KỸ NĂNG",
    description: "Lặp lại và tối ưu hóa dựa trên phản hồi dữ liệu.",
    levels: {
      1: "Làm xong một bản rồi để đó, ngại thay đổi hoặc sửa lỗi.",
      2: "Chấp nhận sửa lỗi khi có phản hồi nhưng còn lúng túng trong cách làm.",
      3: "Chủ động đo lường và cải tiến sản phẩm dựa trên dữ liệu người dùng thực tế.",
      4: "Xây dựng quy trình lặp lại (Iterative) nhanh chóng và có hệ thống.",
      5: "Thiết lập văn hóa 'Ship fast, Learn fast' trong mọi dự án mình tham gia."
    }
  },
  // THÁI ĐỘ (ATTITUDES)
  {
    id: "a1",
    name: "Tư duy Thử và Sai",
    category: "THÁI ĐỘ",
    description: "Cách tiếp cận với thất bại và tốc độ học hỏi.",
    levels: {
      1: "Sợ sai, muốn mọi thứ phải hoàn hảo 100% mới dám ra mắt.",
      2: "Làm nhưng còn lo lắng, cần có sự hướng dẫn và khích lệ liên tục.",
      3: "Xem sai lầm là dữ liệu quý giá để học hỏi và tiến bộ nhanh hơn.",
      4: "Thúc đẩy việc thử nghiệm liên tục (Experimentation) để tìm ra giải pháp tối ưu.",
      5: "Biến tốc độ học hỏi từ thất bại thành lợi thế cạnh tranh cốt lõi."
    }
  },
  {
    id: "a2",
    name: "Thấu cảm & Giá trị",
    category: "THÁI ĐỘ",
    description: "Tư duy lấy người dùng làm trung tâm.",
    levels: {
      1: "Làm web vì thấy công nghệ hay, không quan tâm người dùng nghĩ gì.",
      2: "Bắt đầu đặt câu hỏi 'Khách hàng cần gì?' nhưng chưa thực sự thấu cảm.",
      3: "Đặt lợi ích của khách hàng làm trọng tâm trong mọi quyết định tính năng.",
      4: "Tối ưu trải nghiệm để tạo ra sự gắn kết cảm xúc mạnh mẽ với thương hiệu.",
      5: "Tạo ra những tác động tích cực và giá trị bền vững cho cộng đồng/xã hội."
    }
  },
  {
    id: "a3",
    name: "Chủ động & Tự học",
    category: "THÁI ĐỘ",
    description: "Khả năng tự vận động và cập nhật kiến thức mới.",
    levels: {
      1: "Đợi người khác 'cầm tay chỉ việc', gặp khó khăn là dừng lại ngay.",
      2: "Biết tìm kiếm sự giúp đỡ khi bế tắc nhưng vẫn còn phụ thuộc nhiều.",
      3: "Tự tìm tòi giải pháp, chủ động học hỏi công cụ mới để đạt mục tiêu.",
      4: "Dẫn dắt đội ngũ và chia sẻ kiến thức, tự tạo ra các cơ hội mới.",
      5: "Trở thành người tiên phong (Thought Leader) truyền cảm hứng cho cộng đồng."
    }
  }
];

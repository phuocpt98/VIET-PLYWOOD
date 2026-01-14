
import { Product, Feature, CounterItem, CatalogPage } from './types';

export const COLORS = {
  primary: '#513C2E',
  accent: '#B1967F',
  textGray: '#666666',
  bgLight: '#F7F2EE',
};

export const API_URL = 'https://script.google.com/macros/s/AKfycbxrk4VOK1w2XNJfrRGYDyWkprMBPONZ5BNGCENr8pig99oMIQX2d9dR6UlwxB5vSp4/exec';

export const PDF_CATALOG_URL = '/assets/pdf/catalogue-2024.pdf';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Ván ép phủ phim',
    description: 'Ván ép phủ phim có bề mặt bền, chống nước tốt. Phù hợp cho cốp pha xây dựng và các ứng dụng công nghiệp.',
    imageUrl: 'https://picsum.photos/seed/plywood1/600/400',
    tags: ['12mm', '14mm', '15mm', '18mm'],
  },
  {
    id: '2',
    name: 'Ván ép mặt Bintangor',
    description: 'Ván ép mặt Bintangor có bề mặt mịn, vân gỗ đẹp, dễ gia công. Thích hợp cho nội thất và trang trí.',
    imageUrl: 'https://picsum.photos/seed/plywood2/600/400',
    tags: ['3mm', '8mm', '11mm', '13mm', '15mm', '20mm'],
  },
  {
    id: '3',
    name: 'Ván ép mặt trắng',
    description: 'Ván ép mặt trắng có bề mặt sáng, phẳng, dễ sơn phủ. Phù hợp cho nội thất, tủ kệ và đồ gỗ công nghiệp.',
    imageUrl: 'https://picsum.photos/seed/plywood3/600/400',
    tags: ['2mm', '3mm'],
  },
];

export const FEATURES: Feature[] = [
  {
    id: 'f1',
    title: 'Chất lượng ổn định',
    subtitle: 'Tiêu chuẩn thị trường',
    description: 'Ván ép được kiểm soát nghiêm ngặt từ nguyên liệu đến thành phẩm, quy trình chuẩn hóa, đáp ứng tiêu chuẩn kỹ thuật của thị trường.',
    iconUrl: 'https://picsum.photos/seed/icon1/64/64',
  },
  {
    id: 'f2',
    title: 'Sản xuất chủ động',
    subtitle: 'Đáp ứng mọi tiến độ',
    description: 'Nhà máy chủ động nguồn cung, đáp ứng đơn hàng container, đảm bảo tiến độ giao hàng cho doanh nghiệp và các dự án lớn.',
    iconUrl: 'https://picsum.photos/seed/icon2/64/64',
  },
  {
    id: 'f3',
    title: 'Chi phí tối ưu',
    subtitle: 'Tiết kiệm cho doanh nghiệp',
    description: 'Vị trí gần vùng nguyên liệu giúp tối ưu giá thành; đội ngũ tư vấn hỗ trợ giải pháp tiết kiệm chi phí và giảm rủi ro chuỗi cung ứng.',
    iconUrl: 'https://picsum.photos/seed/icon3/64/64',
  },
];

export const COUNTERS: CounterItem[] = [
  { id: 'c1', number: '2M+', label: 'ĐÃ ĐƯỢC CUNG ỨNG', iconUrl: 'https://picsum.photos/seed/stat1/32/32' },
  { id: 'c2', number: '10+', label: 'QUỐC GIA ĐÃ PHỤC VỤ', iconUrl: 'https://picsum.photos/seed/stat2/32/32' },
  { id: 'c3', number: '7 Yrs+', label: 'CAM KẾT CHẤT LƯỢNG', iconUrl: 'https://picsum.photos/seed/stat3/32/32' },
  { id: 'c4', number: '24 Hr', label: 'TƯ VẤN & BÁO GIÁ', iconUrl: 'https://picsum.photos/seed/stat4/32/32' },
];

// Tạo 14 trang catalogue dựa trên ảnh local
export const CATALOG_PAGES: CatalogPage[] = Array.from({ length: 14 }, (_, i) => ({
  id: i + 1,
  title: `Trang ${i + 1}`,
  imageUrl: `/assets/images/catalog/page-${i + 1}.jpg`,
}));

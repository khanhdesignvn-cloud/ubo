/* ubo.vn · chuyển ngữ Việt / Anh cho trang chính và sa bàn 3D.
   Cách dùng: <script src="/assets/i18n.js"></script>; UboI18n.set('en'|'vi'); UboI18n.lang */
(function(){
var D={
'Bạn quan tâm đến…':'What are you interested in?','Bạn quan tâm đến':'Interested in','Du lịch, trải nghiệm U Bò':'Travel and experiencing U Bò','Hợp tác quảng bá, truyền thông':'Promotion and media partnership','Đầu tư, hợp tác phát triển':'Investment and development partnership','Mua hoặc cấp phép ubo.vn':'Buy or license ubo.vn','Khác':'Other','Hệ thống gửi đang bận. Bạn bấm':'The sending system is busy. Please use','gửi qua email':'send by email','hoặc nhắn':'or message','giúp mình nhé.':'for me.',
'Lời nhắn đã được gửi. Mình sẽ liên hệ lại sớm nhất có thể.':'Your message has been sent. I will get back to you as soon as I can.','Đóng':'Close','Chưa gửi được. Bạn nhắn Zalo giúp mình nhé: zalo.me/0988886901':'Could not send. Please message me on Zalo: zalo.me/0988886901','Để lại tên, số điện thoại và lời nhắn. Mình sẽ báo tin khởi công, tiến độ cáp treo, ngày mở cửa và trả lời mọi câu hỏi về U Bò.':'Leave your name, phone number and a message. I will share groundbreaking news, cable car progress and the opening date, and answer any question about U Bò.',
'Bạn điền tên và email hoặc số Zalo giúp mình nhé.':'Please enter your name and an email or Zalo number.','Đang gửi…':'Sending…','Đã gửi đăng ký. Cảm ơn bạn, mình sẽ gửi tin khi có cập nhật!':'Sent. Thank you, I will send news as soon as there are updates!','Đã gửi. Mình sẽ liên hệ lại sớm, cảm ơn bạn!':'Sent. I will get back to you soon, thank you!','Bạn điền đủ tên, số điện thoại và nội dung giúp mình nhé.':'Please fill in your name, phone number and message.','Cảm ơn bạn!':'Thank you!','Du lịch':'Travel',
/* ---------- menu, chung ---------- */
'Sa bàn 3D':'3D model','Vị trí':'Location','Trải nghiệm':'Experience','Hành trình':'Itinerary','Dự án':'Project','Hỏi đáp':'FAQ','Nhận tin':'Updates',
'Đang dựng sa bàn…':'Building the model…','Đang dựng sa bàn':'Building the model','Cuộn xuống':'Scroll down','Đóng':'Close','Email':'Email','Zalo':'Zalo',
'U Bò – về đầu trang':'U Bò – back to top','Sa bàn 3D U Bò – Thác Chuối':'U Bò – Thác Chuối 3D model',
/* ---------- intro ---------- */
'Quảng Trị ·':'Quảng Trị ·','Phong Nha – Kẻ Bàng':'Phong Nha – Kẻ Bàng','Mây phủ. Rừng xanh.':'Clouds. Forest.','Chạm đỉnh U Bò.':'Touch the U Bò summit.',
'Nóc nhà của Vườn quốc gia Phong Nha – Kẻ Bàng, ngay trên đường Hồ Chí Minh nhánh Tây. Sa bàn phía trên dựng từ dữ liệu vệ tinh, cắt lớp mỗi 100 m, có tuyến cáp treo 6 km và 7 phân khu. Bấm Trình chiếu để xem toàn bộ dự án trong một phút.':'The roof of Phong Nha – Kẻ Bàng National Park, right on the western branch of the Hồ Chí Minh Road. The model above is built from satellite elevation data with 100 m contour layers, a 6 km cable car and 7 zones. Press Tour to see the whole project in one minute.',
'Nhận tin dự án →':'Get project updates →','Mở sa bàn toàn màn hình ↗':'Open the model full screen ↗',
'Mây phủ':'Clouds','Rừng xanh':'Forest','Chạm đỉnh':'Summit','Hồ Thác Chuối':'Thác Chuối Lake','Trường Sơn':'Trường Sơn','U Bò':'U Bò',
/* ---------- báo chí ---------- */
'Tổng hợp báo chí':'Press coverage','Báo chí viết':'What the press','về U Bò.':'says about U Bò.',
'ubo.vn tổng hợp các bài đã đăng trên báo chí chính thống. Bấm vào từng bài để đọc bản gốc tại toà soạn.':'ubo.vn collects articles published by mainstream Vietnamese media. Click an article to read the original at its source.',
'Các báo đã đưa tin':'Media outlets','Đọc bài ↗':'Read ↗','Mới':'New',
/* ---------- trải nghiệm ---------- */
'Xin chào':'Hello','Bạn muốn':'Why do you','lên U Bò để làm gì?':'want to go up U Bò?',
'Chọn một kiểu đi, chúng tôi gợi ý nên đến lúc nào và chuẩn bị gì.':'Pick a travel style and we suggest when to come and what to bring.',
'Chọn một kiểu đi.':'Pick a travel style.','Kiểu nào cũng kết thúc bằng một tầm nhìn đẹp.':'Every one of them ends with a great view.',
'Săn mây':'Cloud hunting','Phượt':'Road trip','Chụp ảnh':'Photography','Nghỉ dưỡng':'Relaxing',
'Đến thật sớm.':'Come very early.','Mây mù thường phủ U Bò vào sáng sớm và cuối chiều. Xuất phát từ Đồng Hới khi trời còn tối, mang áo ấm và áo mưa.':'Fog usually covers U Bò in the early morning and late afternoon. Leave Đồng Hới before dawn and bring a warm layer and a raincoat.',
'Cung đường nhánh Tây.':'The western branch road.','Đường Hồ Chí Minh nhánh Tây nhiều khúc cua giữa rừng. Đi ban ngày, đổ đầy xăng, có thể nối tiếp về Khe Sanh qua dốc Sa Mù.':'The western branch of the Hồ Chí Minh Road winds through the forest. Ride in daylight with a full tank; you can continue to Khe Sanh over Sa Mù Pass.',
'Chọn ngày quang.':'Pick a clear day.','Ngày trời trong, từ chòi canh rừng nhìn được về Đồng Hới. Buổi chiều ghé hồ Thác Chuối để có ảnh mặt hồ phản chiếu trời mây.':'On a clear day the ranger lookout sees all the way to Đồng Hới. Visit Thác Chuối Lake in the afternoon for reflections of the sky.',
'Chờ thêm một chút.':'Wait a little longer.','Khu nghỉ dưỡng và cáp treo đang trong giai đoạn đầu tư. Đăng ký nhận tin để biết ngay khi có mốc mở cửa.':'The resort and cable car are still in the investment phase. Sign up to hear as soon as an opening date is announced.',
/* ---------- hành trình ---------- */
'Một ngày ở U Bò':'A day at U Bò','Từ mây sớm':'From morning clouds','đến mặt hồ chiều.':'to the afternoon lake.',
'Lộ trình gợi ý xuất phát từ Đồng Hới, khoảng 70 km theo đường Hồ Chí Minh nhánh Tây.':'Suggested route from Đồng Hới, about 70 km along the western branch of the Hồ Chí Minh Road.',
'Sáng sớm':'Early morning','Sáng sớm và cuối chiều là lúc mây mù thường bao phủ đỉnh núi.':'Early morning and late afternoon are when fog usually wraps the summit.',
'Trạm kiểm lâm':'Ranger station','Dừng chân bên đường, nhờ cán bộ trạm hướng dẫn trước khi leo khoảng 30 phút lên đỉnh.':'Stop by the roadside station and ask the rangers for guidance before the 30-minute climb to the top.',
'Chòi canh rừng':'Forest lookout','Ngày quang có thể nhìn về Đồng Hới, đường Hồ Chí Minh uốn lượn bên dưới.':'On a clear day you can see Đồng Hới and the Hồ Chí Minh Road winding below.',
'Chiều':'Afternoon','Mặt hồ lặng phản chiếu trời mây, người dân vẫn đánh cá ven bờ.':'The still lake mirrors the sky while locals fish along the shore.',
'Mét · độ cao đỉnh':'Metres · summit elevation','Mét · trạm kiểm lâm':'Metres · ranger station','Leo từ trạm lên đỉnh':'Climb from station to summit','Nhiệt độ trên núi':'Temperature on the mountain',
/* ---------- dự án ---------- */
'Dự án đang đầu tư':'Project under investment','Núi U Bò –':'U Bò Mountain –','hồ Thác Chuối.':'Thác Chuối Lake.',
'Quần thể du lịch sinh thái, nghỉ dưỡng và vui chơi giải trí được kỳ vọng tạo một cực du lịch mới cho Quảng Trị. Dự án đang trong giai đoạn chuẩn bị đầu tư.':'An eco-tourism, resort and entertainment complex expected to become a new tourism hub for Quảng Trị. The project is in its investment preparation phase.',
'16.234 tỷ':'VND 16,234 bn','Tổng vốn đầu tư (đồng)':'Total investment','Quy mô tại xã Bố Trạch, Thượng Trạch, Trường Sơn':'Area across Bố Trạch, Thượng Trạch and Trường Sơn communes',
'5 tuyến':'5 lines','Cáp treo nối chân núi với đỉnh':'Cable cars linking the foot to the summit','3 triệu':'3 million','Lượt khách mỗi năm (mục tiêu)':'Visitors per year (target)',
'UBND tỉnh Quảng Trị chấp thuận chủ trương đầu tư. Phân khu đỉnh núi khoảng 81,96 ha, chân núi khoảng 76,59 ha.':'Quảng Trị Provincial People’s Committee approved the investment policy. Summit zone about 81.96 ha, foothill zone about 76.59 ha.',
'Lãnh đạo tỉnh kiểm tra thực địa, yêu cầu hoàn thiện thủ tục pháp lý để khởi công.':'Provincial leaders inspected the site and asked for legal procedures to be completed for groundbreaking.',
'Mốc khởi công dự kiến theo báo chí. Trang sẽ cập nhật khi có thông tin chính thức.':'Expected groundbreaking date according to the press. This page will be updated when official information is available.',
'Sắp tới':'Coming up','Khách sạn, biệt thự nghỉ dưỡng, căn hộ lưu trú, khu thương mại – dịch vụ và hệ thống cáp treo.':'Hotels, resort villas, serviced apartments, commercial and service areas, and the cable car system.',
'Số liệu tổng hợp từ báo chí tháng 9–10/2026 và có thể thay đổi. Đây là trang thông tin độc lập, không phải trang chính thức của chủ đầu tư hay cơ quan nhà nước.':'Figures compiled from press reports in September–October 2026 and subject to change. This is an independent information site, not an official page of the investor or any government body.',
/* ---------- vị trí ---------- */
'Vị trí chiến lược':'Strategic location','Giữa hành lang':'On the East–West','Đông – Tây.':'Economic Corridor.',
'Quảng Trị mới (sáp nhập Quảng Bình và Quảng Trị từ 1/7/2025) nắm trọn đầu phía đông của hành lang kinh tế Đông – Tây, nối Myanmar, Thái Lan, Lào với biển Việt Nam. U Bò nằm giữa di sản Phong Nha – Kẻ Bàng, sân bay Đồng Hới và các trục giao thông chính của tỉnh.':'The new Quảng Trị (Quảng Bình and Quảng Trị merged on 1 July 2025) holds the entire eastern end of the East–West Economic Corridor linking Myanmar, Thailand and Laos to Vietnam’s coast. U Bò sits between the Phong Nha – Kẻ Bàng heritage site, Đồng Hới airport and the province’s main transport axes.',
'Đông Nam Á lục địa':'Mainland Southeast Asia','Hành lang kinh tế Đông – Tây · 1.450 km · 4 quốc gia':'East–West Economic Corridor · 1,450 km · 4 countries',
'THÁI LAN':'THAILAND','LÀO':'LAOS','CAMPUCHIA':'CAMBODIA','TRUNG QUỐC':'CHINA','BIỂN ĐÔNG':'EAST SEA','Hà Nội':'Hanoi','TP. Hồ Chí Minh':'Ho Chi Minh City','Viêng Chăn':'Vientiane','Phnôm Pênh':'Phnom Penh',
'QĐ. Hoàng Sa':'Paracel Is.','(Việt Nam)':'(Vietnam)','QĐ. Trường Sa':'Spratly Is.','QUẢNG TRỊ':'QUẢNG TRỊ','Núi U Bò ★':'U Bò Mountain ★','Hành lang kinh tế Đông – Tây':'East–West Economic Corridor','Tỉnh Quảng Trị':'Quảng Trị Province',
'Bản đồ hành lang kinh tế Đông – Tây từ Myanmar đến Đà Nẵng, tỉnh Quảng Trị được tô đỏ':'Map of the East–West Economic Corridor from Myanmar to Đà Nẵng, Quảng Trị Province highlighted in red',
'Chạm vào từng điểm để xem khoảng cách tới U Bò':'Tap a point to see its distance to U Bò','Lớp bản đồ':'Map layers','Bản đồ tỉnh Quảng Trị với sân bay, cảng biển, cửa khẩu và tuyến giao thông':'Map of Quảng Trị Province with airports, seaports, border gates and transport routes',
'Tất cả':'All','Hành lang Đông – Tây':'East–West Corridor','Giao thông':'Transport','Sân bay':'Airports','Cảng biển':'Seaports','Cửa khẩu':'Border gates','Du lịch':'Tourism',
'~1 giờ lái xe':'~1 hour drive','~2 giờ lái xe':'~2 hour drive','QL1 · Cao tốc Bắc – Nam':'NH1 · North–South Expressway','QL9 · Hành lang Đông – Tây':'NH9 · East–West Corridor','Đường HCM nhánh Tây':'HCM Road, west branch',
'Núi U Bò – hồ Thác Chuối':'U Bò Mountain – Thác Chuối Lake','Sân bay Đồng Hới':'Đồng Hới Airport','Sân bay Quảng Trị':'Quảng Trị Airport','Cảng Hòn La':'Hòn La Port','Cảng Mỹ Thủy':'Mỹ Thủy Port','Cảng Cửa Việt':'Cửa Việt Port',
'Cửa khẩu Lao Bảo':'Lao Bảo Border Gate','Cửa khẩu La Lay':'La Lay Border Gate','Cửa khẩu Cha Lo':'Cha Lo Border Gate','Đảo Cồn Cỏ':'Cồn Cỏ Island',
'Quần thể du lịch 167 ha, cáp treo 6 km lên đỉnh U Bò.':'167 ha tourism complex with a 6 km cable car to the U Bò summit.','Trung tâm hành chính tỉnh Quảng Trị mới.':'Administrative centre of the new Quảng Trị Province.',
'Đô thị đầu mối của QL9 – hành lang kinh tế Đông – Tây.':'Hub city of NH9 and the East–West Economic Corridor.','Đang khai thác, đang được nâng cấp phục vụ du lịch.':'In operation, being upgraded for tourism.',
'Đang xây dựng tại Gio Linh: 5 triệu khách và 25.500 tấn hàng mỗi năm.':'Under construction in Gio Linh: 5 million passengers and 25,500 tonnes of cargo a year.','Cảng biển phía bắc, đầu trục Cha Lo – Hòn La.':'Northern seaport, end of the Cha Lo – Hòn La axis.',
'Cảng nước sâu, quy mô đón tàu 100.000 DWT.':'Deep-water port for vessels up to 100,000 DWT.','Cảng biển tại cửa sông Thạch Hãn.':'Seaport at the mouth of the Thạch Hãn River.',
'Cửa khẩu quốc tế trên QL9, cửa ngõ hành lang Đông – Tây sang Lào.':'International border gate on NH9, gateway of the East–West Corridor to Laos.','Cửa khẩu quốc tế phía nam, nối trục về cảng Mỹ Thủy.':'Southern international border gate, linked to Mỹ Thủy Port.',
'Cửa khẩu quốc tế phía bắc, đón hàng từ tỉnh Khăm Muộn (Lào).':'Northern international border gate receiving cargo from Khammouane (Laos).','Di sản thiên nhiên thế giới, kề sát vùng núi U Bò.':'World Natural Heritage site right next to the U Bò range.',
'Cao nguyên cà phê và di tích lịch sử trên QL9.':'Coffee highlands and historic sites on NH9.','Đảo tiền tiêu của Quảng Trị.':'Quảng Trị’s outpost island.',
'Hành lang Đông – Tây, từ Mawlamyine (Myanmar) đến Đà Nẵng':'East–West Corridor, from Mawlamyine (Myanmar) to Đà Nẵng','Cửa khẩu quốc tế: Cha Lo, Lao Bảo, La Lay':'International border gates: Cha Lo, Lao Bảo, La Lay',
'Sân bay: Đồng Hới đang khai thác, Quảng Trị đang xây':'Airports: Đồng Hới operating, Quảng Trị under construction','Cảng biển nước sâu, Mỹ Thủy đón tàu 100.000 DWT':'Deep-water seaports, Mỹ Thủy takes 100,000 DWT vessels',
'Từ đỉnh U Bò':'From the U Bò summit','Khoảng cách đường chim bay':'Straight-line distances',
'Bản đồ minh hoạ dựng từ Natural Earth; vị trí sân bay, cảng, cửa khẩu là gần đúng. Khoảng cách tính theo đường chim bay. Số liệu:':'Illustrative map built from Natural Earth; airport, port and border gate positions are approximate. Distances are straight-line. Sources:',
'(hành lang 1.450 km),':'(1,450 km corridor),','(cảng, cửa khẩu, sân bay),':'(ports, border gates, airports),','(sân bay Quảng Trị).':'(Quảng Trị airport).',
/* ---------- chuẩn bị ---------- */
'Trước khi lên đường':'Before you go','Năm điều nhỏ,':'Five small things,','một chuyến đi trọn.':'one complete trip.',
'U Bò vẫn còn hoang sơ và ít dịch vụ. Chuẩn bị kỹ một chút để chuyến đi an toàn hơn.':'U Bò is still wild with few services. A little preparation makes the trip safer.',
'Ghé trạm trước':'Stop at the station first','Chưa có tour chính thức trên đỉnh. Cán bộ trạm kiểm lâm hướng dẫn người có nhu cầu leo lên.':'There is no official summit tour yet. Rangers at the station guide those who want to climb.',
'Mang áo mưa':'Bring a raincoat','Độ ẩm cao, mưa và mây mù đến bất chợt. Giày chống trơn là món nên có.':'Humidity is high and rain and fog arrive without warning. Non-slip shoes are a must.',
'Đi ban ngày':'Travel by day','Đường đèo nhiều khúc cua, ít trạm xăng và quán. Đổ đầy nhiên liệu, mang theo nước.':'The pass road has many bends and few fuel stations or shops. Fill up and carry water.',
'Đi theo nhóm':'Go as a group','Rừng nguyên sinh dễ lạc. Đi cùng người quen đường và báo lịch trình cho người nhà.':'It is easy to get lost in primary forest. Go with someone who knows the way and tell family your plan.',
'Giữ rừng sạch':'Keep the forest clean','Đây là vùng thuộc Vườn quốc gia. Mang rác xuống, không bẻ cây, không đốt lửa tùy tiện.':'This is national park land. Carry your rubbish out, do not break branches and do not light fires.',
/* ---------- FAQ ---------- */
'Nên biết':'Good to know','Hỏi nhanh,':'Quick questions,','đáp gọn.':'short answers.',
'U Bò nằm ở đâu?':'Where is U Bò?','Trên đường Hồ Chí Minh nhánh Tây, trong không gian Vườn quốc gia Phong Nha – Kẻ Bàng, tỉnh Quảng Trị (trước sáp nhập thuộc Quảng Bình). Cách trung tâm Đồng Hới khoảng 70 km.':'On the western branch of the Hồ Chí Minh Road, within Phong Nha – Kẻ Bàng National Park, Quảng Trị Province (formerly Quảng Bình before the merger). About 70 km from central Đồng Hới.',
'Đã có cáp treo chưa?':'Is the cable car open yet?','Chưa. Dự án cáp treo và khu nghỉ dưỡng đang ở giai đoạn chuẩn bị đầu tư, mốc khởi công dự kiến cuối tháng 10/2026. Hiện lên đỉnh bằng cách leo bộ từ trạm kiểm lâm.':'Not yet. The cable car and resort project is in investment preparation, with groundbreaking expected in late October 2026. For now you reach the summit on foot from the ranger station.',
'Có cần đặt tour không?':'Do I need to book a tour?','Hiện chưa có tour chính thức trên đỉnh. Du khách tự đi và ghé trạm kiểm lâm U Bò để được hướng dẫn.':'There is no official summit tour yet. Visitors go on their own and check in at the U Bò ranger station for guidance.',
'Đi mùa nào đẹp?':'When is the best time to go?','Ngày nắng ráo cho tầm nhìn xa nhất. Muốn thấy mây phủ thì đến vào sáng sớm hoặc cuối chiều. Tránh ngày mưa bão vì đường đèo trơn trượt.':'Dry sunny days give the longest views. For clouds, come early morning or late afternoon. Avoid stormy days as the pass road gets slippery.',
'Có chỗ ở gần U Bò không?':'Is there accommodation near U Bò?','Trên núi gần như chưa có dịch vụ lưu trú. Nên ở Đồng Hới hoặc khu Phong Nha rồi đi trong ngày. Danh sách chỗ ở sẽ được cập nhật trên trang này.':'There is almost no lodging on the mountain. Stay in Đồng Hới or the Phong Nha area and make a day trip. A list of places to stay will be added to this page.',
/* ---------- nhận tin ---------- */
'Biết trước':'Know first','khi mây mở cửa.':'when the clouds open.',
'Đăng ký để nhận tin khởi công, tiến độ cáp treo, ngày mở cửa và ưu đãi đầu tiên từ các đơn vị quanh U Bò.':'Sign up for groundbreaking news, cable car progress, the opening date and first offers from businesses around U Bò.',
'Tiến độ dự án':'Project progress','Kinh doanh quanh U Bò':'Business around U Bò','Hợp tác quảng bá':'Promotion partnership','Gửi đăng ký →':'Sign up →',
'Cảm ơn bạn! Ứng dụng email sẽ mở để gửi đăng ký.':'Thank you! Your email app will open to send the sign-up.','Tên của bạn':'Your name','Email hoặc số Zalo':'Email or Zalo number','Bạn quan tâm':'You are interested in','Lời nhắn (không bắt buộc)':'Message (optional)',
/* ---------- đường đến ---------- */
'Đường đến':'Getting there','Lên núi':'Up the mountain','chào mây.':'to greet the clouds.','Mở Google Maps →':'Open Google Maps →',
'Từ Đồng Hới':'From Đồng Hới','Đi về phía Tây, nhập đường Hồ Chí Minh nhánh Tây, qua khu vực dãy núi Ba Rền. Khoảng 70 km.':'Head west, join the western branch of the Hồ Chí Minh Road and pass the Ba Rền range. About 70 km.',
'Điểm dừng':'Stop','Trạm bảo vệ rừng U Bò, ngay bên đường, độ cao khoảng 850 m.':'U Bò forest protection station, right by the road, at about 850 m.',
'Kết hợp':'Combine','Đi tiếp về phía Nam theo nhánh Tây có thể nối hành trình tới Khe Sanh qua dốc Sa Mù.':'Continue south on the western branch to link up with Khe Sanh over Sa Mù Pass.',
/* ---------- footer, dock ---------- */
'Trang thông tin độc lập về núi U Bò và dự án U Bò – hồ Thác Chuối, Quảng Trị.':'Independent information site about U Bò Mountain and the U Bò – Thác Chuối Lake project, Quảng Trị.',
'Khám phá':'Explore','Báo chí':'Press','Liên hệ':'Contact','Nguồn tin':'Sources','© 2026 U Bò. Trang thông tin độc lập, không đại diện cho chủ đầu tư.':'© 2026 U Bò. Independent information site, not representing the investor.',
'Ngồi giữa mây, ngắm trọn Trường Sơn.':'Sit among the clouds, take in the whole Trường Sơn.',
'Nhắn cho ubo.vn':'Message ubo.vn','Hỏi thêm về U Bò, hợp tác nội dung hay truyền thông dự án. Mình sẽ liên hệ lại sớm.':'Ask about U Bò, content partnerships or project communications. I will get back to you soon.',
'Số điện thoại':'Phone number','Nội dung':'Message','Gửi lời nhắn →':'Send message →','Gửi lời nhắn':'Send message','Nguyễn Văn A':'Your name','09xx xxx xxx':'Your phone','Bạn muốn hỏi gì về U Bò?':'What would you like to ask about U Bò?',
/* ---------- sa bàn 3D ---------- */
'Quần thể U Bò – Thác Chuối':'U Bò – Thác Chuối Complex','Trình duyệt không hỗ trợ WebGL hoặc không tải được thư viện 3D. Hãy thử Chrome hoặc Safari bản mới.':'Your browser does not support WebGL or could not load the 3D library. Please try a recent Chrome or Safari.',
'Sa bàn 3D · Núi U Bò – Hồ Thác Chuối':'3D model · U Bò Mountain – Thác Chuối Lake','Cắt lớp':'Layers','Địa hình':'Terrain','Trình chiếu':'Tour',
'tỷ':'bn VND','Tổng vốn đầu tư':'Total investment','ha':'ha','Quy mô dự án':'Project area','tuyến':'lines','Cáp treo':'Cable car','triệu':'million','Lượt khách/năm':'Visitors a year',
'Liên hệ về dự án':'Contact about the project','Phân khu & thông số':'Zones & figures','Quần thể U Bò –':'U Bò –','Thác Chuối':'Thác Chuối Complex',
'Địa hình thật từ dữ liệu vệ tinh, cắt lớp mỗi 100 m. Chạm vào phân khu để bay tới, hoặc bấm Trình chiếu để xem toàn bộ dự án.':'Real terrain from satellite data with 100 m layers. Tap a zone to fly to it, or press Tour to see the whole project.',
'Tuyến cáp treo dự kiến':'Planned cable car length','Chênh cao ga hồ → ga đỉnh':'Rise from lake station to summit station','Lượt khách đến Quảng Trị 9 tháng 2026 (+11,67%)':'Visitors to Quảng Trị, first 9 months of 2026 (+11.67%)',
'Độ cao phóng đại':'Vertical exaggeration','Khối công trình':'Buildings','Phân khu':'Zones','Dòng xe':'Traffic','Nhãn':'Labels','Tự xoay':'Auto-rotate','Góc nhìn đầu':'Reset view','Chế độ xem':'View mode','Thông số dự án':'Project figures','Thao tác nhanh':'Quick actions','Mở toàn màn hình':'Full screen','Hướng Bắc':'North',
'Mô hình minh hoạ do ubo.vn dựng từ dữ liệu độ cao SRTM (AWS Terrain Tiles) và bản đồ Google Maps. Vị trí phân khu, tuyến cáp và khối công trình phỏng theo sơ đồ dự án đã công bố, không theo tỷ lệ và không phải phương án kiến trúc. Số liệu:':'Illustrative model built by ubo.vn from SRTM elevation data (AWS Terrain Tiles) and Google Maps. Zone, cable line and building positions follow the published project diagram, are not to scale and are not an architectural design. Sources:',
'. Trang thông tin độc lập, không phải tài liệu chính thức của chủ đầu tư.':'. Independent information site, not an official document of the investor.',
'← Trước':'← Back','Đăng ký nhận tin':'Get updates','Thoát':'Exit','Tiếp →':'Next →','Kéo để xoay · Cuộn hoặc chụm để phóng to · Chạm nhãn để xem':'Drag to rotate · Scroll or pinch to zoom · Tap a label to view','Dùng 2 ngón để xoay · chụm để phóng to':'Use two fingers to rotate · pinch to zoom',
'Tổ hợp vui chơi giải trí đỉnh núi':'Summit entertainment complex','Vui chơi đỉnh núi':'Summit fun','Khu vui chơi giải trí trên đỉnh U Bò, nơi đặt ga đỉnh cáp treo. Theo quy hoạch, khu vực đỉnh núi rộng khoảng 81,96 ha.':'Entertainment area on the U Bò summit, home to the upper cable car station. The summit zone covers about 81.96 ha in the plan.',
'Tổ hợp nghỉ dưỡng trên núi':'Mountain resort complex','Nghỉ dưỡng trên núi':'Mountain resort','Khu nghỉ dưỡng trên núi, phía tây bắc đỉnh U Bò, gần đường Hồ Chí Minh nhánh Tây (QL15).':'Mountain resort north-west of the summit, near the western branch of the Hồ Chí Minh Road (NH15).',
'Tổ hợp vui chơi giải trí – du lịch':'Entertainment and tourism complex','Vui chơi – du lịch':'Fun & tourism','Khu vui chơi giải trí và du lịch phía bắc hồ Thác Chuối.':'Entertainment and tourism area north of Thác Chuối Lake.',
'Tổ hợp khám phá thiên nhiên':'Nature discovery complex','Khám phá thiên nhiên':'Nature discovery','Khu trải nghiệm, khám phá thiên nhiên ở bờ tây nhánh hồ phía bắc.':'Nature experience area on the west shore of the northern lake arm.',
'Khu thương mại dịch vụ cửa ngõ':'Gateway commercial area','TMDV cửa ngõ':'Gateway commerce','Khu thương mại, dịch vụ ở cửa ngõ phía đông hồ, gần ga dưới của tuyến cáp treo.':'Commercial and service area at the eastern gateway of the lake, near the lower cable car station.',
'Tổ hợp nghỉ dưỡng – trị liệu bên hồ':'Lakeside wellness resort','Nghỉ dưỡng bên hồ':'Lakeside resort','Khu nghỉ dưỡng, trị liệu ven hồ ở phía tây nam nhánh hồ phía nam.':'Resort and wellness area on the south-west shore of the southern lake arm.',
'Tổ hợp ở thấp tầng khu cửa ngõ':'Low-rise residential gateway','Ở thấp tầng cửa ngõ':'Low-rise housing','Khu nhà ở thấp tầng ở cửa ngõ phía đông, tiếp cận hướng thành phố Đồng Hới.':'Low-rise housing at the eastern gateway, approached from Đồng Hới city.',
'Đỉnh U Bò':'U Bò Summit','Điểm cao':'High point','Nóc nhà Vườn quốc gia Phong Nha – Kẻ Bàng, cao khoảng 1.000 m (dữ liệu SRTM ghi 992 m). Ga đỉnh của tuyến cáp treo dự kiến.':'Roof of Phong Nha – Kẻ Bàng National Park, about 1,000 m (SRTM data gives 992 m). Planned upper station of the cable car.',
'Hồ chứa':'Reservoir','Hồ thuỷ lợi xây năm 2010, rộng khoảng 3,7 km² theo đường bờ trên bản đồ. Ga dưới cáp treo dự kiến nằm ở bờ đông.':'Irrigation reservoir built in 2010, about 3.7 km² by its mapped shoreline. The lower cable car station is planned on the east shore.',
'Ga chân núi, 5 tuyến cáp treo':'Base station, 5 cable car lines','Cụm nhà ga bên hồ Thác Chuối, điểm đầu của tuyến cáp treo: hai tuyến số 1, 2 đi qua mặt hồ tới ga trung gian, rồi ba tuyến số 3, 4, 5 lên đỉnh U Bò. Tổng chiều dài khoảng 6 km, chênh cao khoảng 930 m theo sơ đồ dự án.':'Station cluster by Thác Chuối Lake, start of the cable car: lines 1 and 2 cross the lake to the mid station, then lines 3, 4 and 5 climb to the U Bò summit. Total length about 6 km, rise about 930 m per the project diagram.',
'Ga trung chuyển trên bờ tây hồ Thác Chuối, theo sơ đồ cắm mốc ranh giới dự án (khoảng 7,98 ha). Hai tuyến từ chân núi tới đây, ba tuyến từ đây lên đỉnh U Bò; hành khách đổi tuyến hoặc dừng ngắm cảnh.':'Mid station on the west shore of Thác Chuối Lake, per the project boundary-marker diagram (about 7.98 ha). Two lines run here from the base, three run from here to the U Bò summit; passengers change lines or stop for the view.',
'Đỉnh U Bò · ~1.000 m':'U Bò Summit · ~1,000 m','Ga chân núi':'Base station','↑ QL15 · Phong Nha – Kẻ Bàng':'↑ NH15 · Phong Nha – Kẻ Bàng','↓ Đường Hồ Chí Minh nhánh Tây':'↓ Hồ Chí Minh Road, west branch','↗ TP. Đồng Hới':'↗ Đồng Hới City','ĐT563 · QL9E':'PR563 · NH9E',
'16.234':'16,234','tỷ đồng':'bn VND','Dự án du lịch lớn nhất Quảng Trị':'Quảng Trị’s largest tourism project',
'Gồm khoảng 2.435 tỷ đồng vốn chủ sở hữu và 13.799 tỷ đồng vốn huy động. UBND tỉnh chấp thuận chủ trương đầu tư tháng 3/2026, nhà đầu tư là Công ty TNHH Mặt Trời Quảng Bình thuộc Sun Group. Thời hạn hoạt động 50 năm.':'About VND 2,435 bn in equity and VND 13,799 bn in raised capital. The Provincial People’s Committee approved the investment policy in March 2026; the investor is Mặt Trời Quảng Bình Co. Ltd of Sun Group. Operating term 50 years.',
'Nguồn: VietnamPlus, Báo Đầu tư, tháng 9 và 10/2026':'Sources: VietnamPlus, Báo Đầu tư, September and October 2026',
'Ba khu chức năng trên một trục cáp treo':'Three functional zones on one cable car axis',
'Khu đỉnh núi khoảng 82 ha, khu chân núi bên hồ Thác Chuối khoảng 76,6 ha, ga trung gian khoảng 8 ha và móng trụ cáp khoảng 1 ha. Thuộc các xã Bố Trạch, Thượng Trạch và Trường Sơn, kèm 51 ha nghiên cứu mở rộng.':'Summit zone about 82 ha, foothill zone by Thác Chuối Lake about 76.6 ha, mid station about 8 ha and cable tower footings about 1 ha. In Bố Trạch, Thượng Trạch and Trường Sơn communes, with a further 51 ha under study.',
'Nguồn: Tuổi Trẻ, Báo Đầu tư, quy hoạch 1/500 tháng 10/2026':'Sources: Tuổi Trẻ, Báo Đầu tư, 1:500 plan, October 2026',
'Chân núi, ga trung gian, đỉnh U Bò':'Base, mid station, U Bò summit',
'Năm tuyến cáp treo chia hai chặng qua ga trung gian bên bờ tây hồ: tuyến số 1, 2 nối ga chân núi với ga trung gian, tuyến số 3, 4, 5 nối ga trung gian lên đỉnh U Bò cao khoảng 1.000 m. Tổng chiều dài khoảng 6 km, chênh cao khoảng 930 m. Vị trí tuyến phỏng theo sơ đồ cắm mốc ranh giới dự án.':'Five cable car lines in two legs via the mid station on the lake's west shore: lines 1 and 2 link the base station to the mid station, lines 3, 4 and 5 climb from it to the roughly 1,000 m U Bò summit. Total length about 6 km, rise about 930 m. Route positions follow the project boundary-marker diagram.',
'Nguồn: Tuổi Trẻ, sơ đồ quy hoạch dự án':'Sources: Tuổi Trẻ, project planning diagram','Mục tiêu đón khách':'Visitor target','triệu lượt/năm':'million a year','Điểm đến mới của miền Trung':'A new destination for central Vietnam',
'Quy mô đón khách dự kiến khoảng 3 triệu lượt mỗi năm khi vận hành đầy đủ. Để so sánh, toàn tỉnh Quảng Trị đón khoảng 9,4 triệu lượt khách trong 9 tháng năm 2026, tăng 11,67% so với cùng kỳ.':'About 3 million visitors a year are expected at full operation. For comparison, Quảng Trị Province welcomed about 9.4 million visitors in the first 9 months of 2026, up 11.67% year on year.',
'Nguồn: Tuổi Trẻ, Cục Thống kê tỉnh Quảng Trị':'Sources: Tuổi Trẻ, Quảng Trị Statistics Office',
'Toàn cảnh':'Overview','Khoảng 167 ha trên đỉnh U Bò và quanh hồ Thác Chuối, tỉnh Quảng Trị. Địa hình thật, cắt lớp mỗi 100 m.':'About 167 ha on the U Bò summit and around Thác Chuối Lake, Quảng Trị Province. Real terrain with 100 m layers.',
'đồng tổng vốn đầu tư':'VND total investment','Điểm nhấn':'Highlight','Đỉnh U Bò ~1.000 m':'U Bò Summit ~1,000 m','Nóc nhà Vườn quốc gia Phong Nha – Kẻ Bàng. Ngày quang nhìn được về Đồng Hới; sáng sớm và cuối chiều mây phủ kín đỉnh.':'Roof of Phong Nha – Kẻ Bàng National Park. Clear days show Đồng Hới; early morning and late afternoon the summit is wrapped in cloud.',
'Cáp treo dự kiến':'Planned cable car','5 tuyến · chênh cao 930 m':'5 lines · 930 m rise','Hai tuyến cáp vượt hồ tới ga trung gian, ba tuyến tiếp tục lên đỉnh U Bò. Ngồi cabin băng qua mặt nước và rừng nguyên sinh.':'Two lines cross the lake to the mid station, three continue to the U Bò summit. Cabins glide over water and primary forest.',
'Mặt nước':'Water','Hồ rộng khoảng 3,7 km², các nhánh nước ôm quanh bán đảo và triền đồi thấp, nơi đặt các khu nghỉ dưỡng ven hồ.':'A lake of about 3.7 km² whose arms wrap around peninsulas and low hills, where the lakeside resorts are planned.',
'7 phân khu':'7 zones','Từ đỉnh núi đến cửa ngõ':'From summit to gateway','Vui chơi đỉnh núi, nghỉ dưỡng trên núi, khám phá thiên nhiên, vui chơi – du lịch, nghỉ dưỡng bên hồ, thương mại dịch vụ và khu ở thấp tầng.':'Summit fun, mountain resort, nature discovery, entertainment and tourism, lakeside resort, commerce and services, and low-rise housing.',
'Kết nối':'Access','Cửa ngõ phía đông':'Eastern gateway','Tiếp cận từ ĐT563 – QL9E hướng thành phố Đồng Hới, khoảng 25 km. Phía tây là đường Hồ Chí Minh nhánh Tây (QL15).':'Reached from PR563 – NH9E towards Đồng Hới city, about 25 km. To the west runs the western branch of the Hồ Chí Minh Road (NH15).',
'Quy mô':'Scale','3 triệu lượt khách mỗi năm':'3 million visitors a year','Mục tiêu bằng gần 30% kế hoạch 10,5 triệu lượt khách của Quảng Trị năm 2026. Đăng ký để nhận tin tiến độ dự án.':'A target equal to nearly 30% of Quảng Trị’s 10.5 million visitor plan for 2026. Sign up for project progress updates.',
'lượt khách mỗi năm (mục tiêu)':'visitors a year (target)'
};
/* mẫu có số thay đổi */
var R=[
 [/^Cách U Bò ~(\d+) km \(đường chim bay\)$/,'$1 km from U Bò (straight line)'],
 [/^Tự động cập nhật từ các toà soạn · lần quét gần nhất (.+)$/,'Updated automatically from the newsrooms · last scan $1'],
 [/^(\d[\d.,]*) tỷ$/,'VND $1 bn'],[/^(\d[\d.,]*) triệu$/,'$1 million']
];
var TITLES={'vi':document.title,'en':/3D/.test(location.pathname)?'U Bò – Thác Chuối 3D model: 5 cable car lines on real satellite terrain | ubo.vn':'U Bò Mountain, Quảng Trị: cable car, Thác Chuối Lake, 3D model of the VND 16,234 bn project | ubo.vn'};
var ATTRS=['placeholder','aria-label','title','alt'];
var lang='vi',obs=null;
function en(t){t=t.replace(/\u00a0/g,' ');if(D[t])return D[t];for(var i=0;i<R.length;i++){if(R[i][0].test(t))return t.replace(R[i][0],R[i][1]);}return null;}
function text(n){if(n.__vi===undefined)n.__vi=n.nodeValue;var raw=n.__vi,t=raw.trim();if(!t)return;
 if(lang==='vi'){if(n.nodeValue!==raw)n.nodeValue=raw;return;}
 var e=en(t);if(!e)return;var i=raw.indexOf(t);var v=raw.slice(0,i)+e+raw.slice(i+t.length);if(n.nodeValue!==v)n.nodeValue=v;}
function attrs(el){for(var i=0;i<ATTRS.length;i++){var a=ATTRS[i];if(!el.hasAttribute(a))continue;var k='__vi_'+a;if(el[k]===undefined)el[k]=el.getAttribute(a);
 var v=el[k],nv=v;if(lang==='en'){var e=en(v.trim());if(e)nv=e;}if(el.getAttribute(a)!==nv)el.setAttribute(a,nv);}}
function walk(n){if(n.nodeType===3){text(n);return;}if(n.nodeType!==1)return;if(/^(SCRIPT|STYLE|CANVAS)$/.test(n.tagName))return;attrs(n);
 for(var c=n.firstChild;c;c=c.nextSibling)walk(c);}
function apply(){document.documentElement.lang=lang;if(TITLES[lang])document.title=TITLES[lang];walk(document.body);
 document.querySelectorAll('[data-lang-btn]').forEach(function(b){b.classList.toggle('en',lang==='en');b.setAttribute('aria-checked',lang==='en');b.setAttribute('aria-label',lang==='vi'?'Switch to English':'Chuyển sang tiếng Việt');});
 document.querySelectorAll('iframe').forEach(function(f){try{f.contentWindow.postMessage({ubo:'lang',lang:lang},'*');}catch(e){}});}
function set(l){lang=l==='en'?'en':'vi';try{localStorage.setItem('ubo-lang',lang);}catch(e){}apply();
 if(!obs){obs=new MutationObserver(function(ms){if(lang!=='en')return;ms.forEach(function(m){for(var i=0;i<m.addedNodes.length;i++)walk(m.addedNodes[i]);});});
  obs.observe(document.body,{childList:true,subtree:true});}}
function init(){var l='vi';try{l=localStorage.getItem('ubo-lang')||'vi';}catch(e){}
 var q=new URLSearchParams(location.search).get('lang');if(q==='en'||q==='vi')l=q;
 if(l==='en')set('en');else lang='vi';
 window.addEventListener('message',function(e){if(e.data&&e.data.ubo==='lang')set(e.data.lang);});
 document.querySelectorAll('iframe').forEach(function(f){f.addEventListener('load',function(){if(lang==='en')try{f.contentWindow.postMessage({ubo:'lang',lang:lang},'*');}catch(e){}});});
 document.querySelectorAll('[data-lang-btn]').forEach(function(b){b.addEventListener('click',function(){set(lang==='vi'?'en':'vi');});});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
window.UboI18n={set:set,get lang(){return lang;},D:D};
})();

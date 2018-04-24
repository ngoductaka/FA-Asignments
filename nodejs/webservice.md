# What are webservice : 
## định nghĩa 
* các hệ thống hoặc chương trình riêng biệt cần 1 cách đề giao tiếp vói nhau điều đó yêu cầu cần đặt ra 1 chuẩn các quy tắc, các phương thức để trao đổi data giữa các application and system 
* tóm gọn 
    * dùng được trong internet and intranet network 
    * sử dụng chuẩn XML
    * ko phụ thuộc và 1 OS and language program 
    * tự định nghia thông qua cấu thức XML
    * cơ chế sử dụng đơn giản 
## thành phần 
* nền webservice là HTML và XML 
* thành phần: 
    * SOAP (Simple Object Access Protocol) => phương thức truy cập đơn gian 
    * UDDI (Universal Description, Discovery and Integration)=> 
    * WSDL (Web Services Description Language)
## How Does a Web Service Work? hoạt động như lào ?
*  có thể giao tiếp giữa nhiều app sủ các chuẩn như HTML XML WSDL SOAP 
    * cu pháp XML 
    * SOAP : chuyển các mesage 
    * WSDL : mô tả các dịch vụ có thể dùng
* ví dụ 
` client gửi thông tin đăng ký của 1 uer lên cho server sử lý và lưu thì quán trinh là : `
1. Client gói các thông tin user vào trong 1 SOAP message.
2. SOAP message này gửi cho web service trong body của phương thức post 
3. web service giải mã gói tin reqest cà chuyển nó thành command mà app hiểu 
4. app sử lý thông tin nhận đc và trã lai reponse vơi thông tin user cần thiết 
5. web service gói thông tin nhân đc vào 1 SOAP message khác và trã cho Client 
6. client mở gói tin nhận đc và obtain the results
# why web servive 
## Exposing nhưng chức năng hiện có của mạng 
* 1 web servive là 1 đơn vị quản lý code => nó có thể điều khiên thực thi lệnh (chức năng) từ xa sử dụng HTTP . Nó có thể kích hoạt .. sử dụng HTTP request 
có thể nói ra thế giới mạng biết đc những chức mang mà app có thể làm 
## Interoperability khả năng tương tác
web service cho phép nhiều app nói chuyện vơi nhau cũng như trao đổi data and services giữa chúng
=> API sử dụng chức năng của những thằng khác để tạo nên chức năng riêng cho mình 
## Standardized Protocol các phương thức chuẩn ( chuẩn phuyowng thức )
=> chuẩn hóa tốt 

## Low Cost Communication truyển thông chi phí thấp 

# các đặc đính ( characteristics )
## XML-Based
* sử dụng XML để đại diện , vận chuyển data . là chuẩn chung cho mọi mạng , mọi OS mọi nền tảng=> 
Các ứng dụng dựa trên web service có độ tương thích cao ở cấp độ core
## Loosely Coupled liên kết yêu (keeys hợp lỏng )

* Người dụng ko bắt buộc sử dụng web service trực tiếp 
* kiến trúc lỏng lẽo => cho phép những thay đổi giữa 2 bên ko ảnh hưởng đến dịch vụ 
+ 1 bên đổi bên kia cũng đc cập nhật 
## Coarse(thô/ tầm thường) -Grained (hạt min )

cung cấp các dịch vụ public ra ngoài mạng cần là nhưng Coarse-grained:
`Coarse-grained modeling, coarse-grained models, aim at simulating the behaviour of complex systems using their coarse-grained (simplified) representation.`
cung cấp dịch vụ phức tạp bằng nhưng dịch vụ con nhỏ và đơn gianr

## Ability to be Synchronous or Asynchronous
* Asynchronous capability is a key factor in enabling loosely coupled systems.
## Supports Remote Procedure Calls(RPCs) 
Web service tự định nghĩa ra RPC cho phép client gọi, thực thi các chức năng , phương thức từ xa, dùng XML-based protocol . thủ tục từ xa expose biến đầu vào đầu ra 
## Supports Document Exchange
* có hỗ trợ cách chung để đại diện cho các tài liệu từ phức tạp đến đơn giản
# 3 Web Services - Architecture kiến trúc web service 
## Web Service Roles

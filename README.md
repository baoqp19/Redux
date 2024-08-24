# redux

-Store --> kho chuwa state global
-Reducer --> hàm cập nhật state
-Action --> Object mô tả hành động gửi từ UI lên Reducer
-Dispath --> Hàm gửi lên action từ UI lên Reducer
-Subscribe --> Hàm lắng nghe sự thay đổi state trên store

# React Redux

sử dụng 2 thư viện

-- redux --> Cung cấp các phương thức có sẵn của redux
-- react-redux --> Cung cấp các component, hook để dẽ dàng làm việc với redux
-- redux-thunk --> thunk Middleware của redux


# redux Toolkit

Tổng hợp tất cả những thứ trên

# npm i redux react-redux


# kỹ thuật tách Reuducer
rootReducer
-- counterReducer
-- todoReducer
==> gom các reducer thành rootReducer bằng cách sử dụng hàm combineReducers();


// Action Creator --> gom các action thành 1 hàm để sử dụng


# npm i @redux-devtools/core
// optional properties
{
    // implement the following:
    function displayUserInfo(userInfo) {
        return "Name: ".concat(userInfo.name, "; Email: ").concat((userInfo === null || userInfo === void 0 ? void 0 : userInfo.email) ? userInfo.email : "N/A", "; Age: ").concat((userInfo === null || userInfo === void 0 ? void 0 : userInfo.age) ? userInfo.age : "N/A");
    }
    console.log(displayUserInfo({ name: 'James' }));
    console.log(displayUserInfo({ name: 'James', email: 'j@j.com' }));
}

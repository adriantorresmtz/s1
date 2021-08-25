(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["table-table-module"],{

/***/ "./src/app/pages/table/components/basic-tables/basic-tables.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/table/components/basic-tables/basic-tables.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <card cardTitle=\"basic table\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>FIRSTNAME</th>\r\n            <th>LASTNAME</th>\r\n            <th>USERNAME</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of default_data;let index = index\">\r\n            <td>{{index}}</td>\r\n            <td>{{item.first_name}}</td>\r\n            <td>{{item.last_name}}</td>\r\n            <td>{{item.user_name}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <card cardTitle=\"bordered table\">\r\n      <table class=\"table table-bordered\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>FIRSTNAME</th>\r\n            <th>LASTNAME</th>\r\n            <th>USERNAME</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of default_data;let index = index\">\r\n            <td>{{index}}</td>\r\n            <td>{{item.first_name}}</td>\r\n            <td>{{item.last_name}}</td>\r\n            <td>{{item.user_name}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <card cardTitle=\"hover table\">\r\n      <table class=\"table table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>FIRSTNAME</th>\r\n            <th>LASTNAME</th>\r\n            <th>USERNAME</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of default_data;let index = index\">\r\n            <td>{{index}}</td>\r\n            <td>{{item.first_name}}</td>\r\n            <td>{{item.last_name}}</td>\r\n            <td>{{item.user_name}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <card cardTitle=\"striped table\">\r\n      <table class=\"table table-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>FIRSTNAME</th>\r\n            <th>LASTNAME</th>\r\n            <th>USERNAME</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of default_data;let index = index\">\r\n            <td>{{index}}</td>\r\n            <td>{{item.first_name}}</td>\r\n            <td>{{item.last_name}}</td>\r\n            <td>{{item.user_name}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/table/components/basic-tables/basic-tables.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/table/components/basic-tables/basic-tables.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFibGUvY29tcG9uZW50cy9iYXNpYy10YWJsZXMvQzpcXGRldlxcU2l0ZTEvc3JjXFxhcHBcXHBhZ2VzXFx0YWJsZVxcY29tcG9uZW50c1xcYmFzaWMtdGFibGVzXFxiYXNpYy10YWJsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWJsZS9jb21wb25lbnRzL2Jhc2ljLXRhYmxlcy9iYXNpYy10YWJsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/table/components/basic-tables/basic-tables.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/table/components/basic-tables/basic-tables.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BasicTablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTablesComponent", function() { return BasicTablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicTablesComponent = /** @class */ (function () {
    function BasicTablesComponent() {
    }
    BasicTablesComponent.prototype.ngOnInit = function () {
        this.default_data = [
            { first_name: 'Steve', last_name: 'Jobs', user_name: '@steve' },
            { first_name: 'Simon', last_name: 'Philips', user_name: '@simon' },
            { first_name: 'Jane', last_name: 'Doe', user_name: '@jane' },
            { first_name: 'Larry', last_name: 'Thornton', user_name: '@larry' },
            { first_name: 'Hiver', last_name: 'Choe', user_name: '@hiver' },
        ];
    };
    BasicTablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-tables',
            template: __webpack_require__(/*! ./basic-tables.component.html */ "./src/app/pages/table/components/basic-tables/basic-tables.component.html"),
            styles: [__webpack_require__(/*! ./basic-tables.component.scss */ "./src/app/pages/table/components/basic-tables/basic-tables.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasicTablesComponent);
    return BasicTablesComponent;
}());



/***/ }),

/***/ "./src/app/pages/table/components/data-table/data-table.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/table/components/data-table/data-table.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <card cardTitle=\"Data Table\">\r\n      <table class=\"table table-bordered table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>FIRSTNAME</th>\r\n            <th>LASTNAME</th>\r\n            <th>USERNAME</th>\r\n            <th>EMAIL</th>\r\n            <th>AGE</th>\r\n            <th>STATE</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of tableData | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber};let index = index\">\r\n            <td>{{item.firstName}}</td>\r\n            <td>{{item.lastName}}</td>\r\n            <td>{{item.username}}</td>\r\n            <td>{{item.email}}</td>\r\n            <td>{{item.age}}</td>\r\n            <td>\r\n              <span class=\"label label-info\">info</span>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <form class=\"pagination-wrapper\">\r\n        <div class=\"form-group pages\">\r\n          <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\" directionLinks=\"true\"\r\n            autoHide=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\"\r\n            screenReaderCurrentLabel=\"You're on page\">\r\n          </pagination-controls>\r\n        </div>\r\n        <div class=\"form-group options pages\">\r\n          <div class=\"input-group input-group-sm\">\r\n            <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\" (ngModelChange)=\"loadData()\">\r\n              <option>1</option>\r\n              <option>5</option>\r\n              <option>10</option>\r\n              <option>20</option>\r\n              <option>50</option>\r\n              <option>100</option>\r\n              <option>200</option>\r\n            </select>\r\n            <span class=\"input-group-addon addon-right\">Per Page</span>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/table/components/data-table/data-table.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/table/components/data-table/data-table.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #141420; }\n\n.bg-default {\n  background: linear-gradient(to top right, #1d1e2d, #27293d);\n  background: -webkit-linear-gradient(to top right, #1d1e2d, #27293d); }\n\n.bg-primary, .pagination-wrapper .input-group .input-group-addon, .my-pagination /deep/ .ngx-pagination a:hover,\n.my-pagination /deep/ .ngx-pagination .current {\n  background: linear-gradient(to top right, #fd8f00, #ffda33);\n  background: -webkit-linear-gradient(to top right, #fd8f00, #ffda33); }\n\n.bg-success {\n  background: linear-gradient(to top right, #04ad53, #1dffc7);\n  background: -webkit-linear-gradient(to top right, #04ad53, #1dffc7); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #ff184a, #fc85a2);\n  background: -webkit-linear-gradient(to top right, #ff184a, #fc85a2); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7300, #fce16a);\n  background: -webkit-linear-gradient(to top right, #ff7300, #fce16a); }\n\n.bg-info {\n  background: linear-gradient(to top right, #1e65ff, #04f7fb);\n  background: -webkit-linear-gradient(to top right, #1e65ff, #04f7fb); }\n\n.pagination-wrapper {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between; }\n\n.pagination-wrapper .input-group {\n    width: 150px; }\n\n.pagination-wrapper .input-group .input-group-addon {\n      color: #fff;\n      border: none; }\n\n.pagination-wrapper .form-group {\n    height: auto;\n    margin: 0;\n    padding: 0; }\n\n.my-pagination /deep/ .ngx-pagination {\n  border: 1px solid #12121f;\n  border-radius: 5px;\n  overflow: hidden;\n  font-size: 12px;\n  padding: 0; }\n\n.my-pagination /deep/ .ngx-pagination a,\n  .my-pagination /deep/ .ngx-pagination .current {\n    min-width: 30px;\n    text-decoration: none;\n    height: 35px;\n    text-align: center;\n    line-height: 33px;\n    margin: 0;\n    color: #fff; }\n\n.my-pagination /deep/ .ngx-pagination a:last-child,\n    .my-pagination /deep/ .ngx-pagination .current:last-child {\n      border: none; }\n\n.my-pagination /deep/ .ngx-pagination a:hover,\n  .my-pagination /deep/ .ngx-pagination .current {\n    min-width: 30px;\n    color: #fff; }\n\n.my-pagination /deep/ .ngx-pagination .disabled {\n    color: rgba(255, 255, 255, 0.4);\n    cursor: not-allowed; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFibGUvY29tcG9uZW50cy9kYXRhLXRhYmxlL0M6XFxkZXZcXFNpdGUxL3NyY1xcYXBwXFxzaGFyZWRcXHRoZW1lXFxjb2xvci1zY2hlbWVzXFxfZGFyay5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWJsZS9jb21wb25lbnRzL2RhdGEtdGFibGUvQzpcXGRldlxcU2l0ZTEvc3JjXFxhcHBcXHNoYXJlZFxcdGhlbWVcXG1peGluLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhYmxlL2NvbXBvbmVudHMvZGF0YS10YWJsZS9DOlxcZGV2XFxTaXRlMS9zcmNcXGFwcFxccGFnZXNcXHRhYmxlXFxjb21wb25lbnRzXFxkYXRhLXRhYmxlXFxkYXRhLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CQTtFQUNJLG1CQWhCWSxFQUFBOztBQW1CaEI7RUNNSSwyREFBbUM7RUFHbkMsbUVBQTJDLEVBQUE7O0FETC9DOztFQ0VJLDJEQUFtQztFQUduQyxtRUFBMkMsRUFBQTs7QUREL0M7RUNGSSwyREFBbUM7RUFHbkMsbUVBQTJDLEVBQUE7O0FERy9DO0VDTkksMkRBQW1DO0VBR25DLG1FQUEyQyxFQUFBOztBRE8vQztFQ1ZJLDJEQUFtQztFQUduQyxtRUFBMkMsRUFBQTs7QURXL0M7RUNkSSwyREFBbUM7RUFHbkMsbUVBQTJDLEVBQUE7O0FDL0IvQztFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDhCQUE4QixFQUFBOztBQUpsQztJQU1RLFlBQVksRUFBQTs7QUFOcEI7TUFTWSxXRkREO01FRUMsWUFBWSxFQUFBOztBQVZ4QjtJQWNRLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVSxFQUFBOztBQUlsQjtFQUNJLHlCRlhpQjtFRVlqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVGdkJTO0VFd0JULFVBQVUsRUFBQTs7QUFMZDs7SUFRUSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxXRnRCUyxFQUFBOztBRVFqQjs7TUFnQlksWUFBWSxFQUFBOztBQWhCeEI7O0lBcUJRLGVBQWU7SUFFZixXRm5DRyxFQUFBOztBRVlYO0lBMEJRLCtCRmxDUztJRW1DVCxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYmxlL2NvbXBvbmVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vbWl4aW4nO1xyXG4kZGVmYXVsdC10ZXh0OjE0cHg7XHJcbiRzbS10ZXh0OjEycHg7XHJcbiRsZy10ZXh0OjE2cHg7XHJcbiRib2R5LWJnOiMxNDE0MjA7XHJcbiRzaWRlYmFyLWJnOiMxNzE4MjQ7XHJcbiRzaWRlYmFyLWZvbnRzLWNvbG9yOiNmZmY7XHJcbiRjYXJkLWJnOiMxNzE4MjQ7XHJcbiRjYXJkLWJvcmRlcjp0cmFuc3BhcmVudDtcclxuJHdoaXRlOiNmZmY7XHJcbiRibGFjazojMDAwO1xyXG4kYm9yZGVyLWNvbG9yOiMxMjEyMWY7XHJcbiR0YWJsZS1ib3JkZXItY29sb3I6IzEyMTIxZjtcclxuJGZvbnRzLWNvbG9yOiNmZmY7XHJcbiRwcmltYXJ5OiNmZDhmMDA7XHJcbiRzdWNjZXNzOiMwNGFkNTM7XHJcbiRkYW5nZXI6I2ZmMTg0YTtcclxuJHdhcm5pbmc6I2ZmNzMwMDtcclxuJGluZm86IzFlNjVmZjtcclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYm9keS1iZztcclxufVxyXG5cclxuLmJnLWRlZmF1bHQge1xyXG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgbGlnaHRlbigkY2FyZC1iZywgMyUpLCBsaWdodGVuKCRjYXJkLWJnLCA4JSkpO1xyXG59XHJcblxyXG4uYmctcHJpbWFyeSB7XHJcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkcHJpbWFyeSwgI2ZmZGEzMyk7XHJcbn1cclxuXHJcbi5iZy1zdWNjZXNzIHtcclxuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRzdWNjZXNzLCAjMWRmZmM3KTtcclxufVxyXG5cclxuLmJnLWRhbmdlciB7XHJcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkZGFuZ2VyLCAjZmM4NWEyKTtcclxufVxyXG5cclxuLmJnLXdhcm5pbmcge1xyXG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHdhcm5pbmcsICNmY2UxNmEpO1xyXG59XHJcblxyXG4uYmctaW5mbyB7XHJcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkaW5mbywgIzA0ZjdmYik7XHJcbn1cclxuIiwiQG1peGluIGJveC1zaGFkb3coJHNoYWRvdy4uLikge1xyXG4gICAgYm94LXNoYWRvdzogJHNoYWRvdztcclxuICAgIC1vLWJveC1zaGFkb3c6ICRzaGFkb3c7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6ICRzaGFkb3c7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICRzaGFkb3c7XHJcbn1cclxuXHJcbkBtaXhpbiB0ZXh0LXNoYWRvdygkc2hhZG93Li4uKSB7XHJcbiAgICB0ZXh0LXNoYWRvdzogJHNoYWRvdztcclxuICAgIC1vLXRleHQtc2hhZG93OiAkc2hhZG93O1xyXG4gICAgLW1vei10ZXh0LXNoYWRvdzogJHNoYWRvdztcclxuICAgIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRzaGFkb3c7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybS4uLikge1xyXG4gICAgdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xyXG4gICAgLW8tdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24uLi4pIHtcclxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxufVxyXG5cclxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkY29sb3IuLi4pIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcclxufVxyXG5cclxuQG1peGluIGJvcmRlci1ncmFkaWVudCgkY29sb3IuLi4pIHtcclxuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IpIDIgMztcclxuICAgIGJvcmRlci1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvcikgMyAzO1xyXG4gICAgYm9yZGVyLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAzIDM7XHJcbn1cclxuXHJcbkBtaXhpbiBjZW50ZXIoJHdpZHRoLCAkaGVpZ2h0KSB7XHJcbiAgICB3aWR0aDogJHdpZHRoO1xyXG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc2hhcmVkL3RoZW1lL2NvbmZcIjtcclxuLnBhZ2luYXRpb24td3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLmlucHV0LWdyb3VwIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgLmlucHV0LWdyb3VwLWFkZG9uIHtcclxuICAgICAgICAgICAgQGV4dGVuZCAuYmctcHJpbWFyeTtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5teS1wYWdpbmF0aW9uIC9kZWVwLyAubmd4LXBhZ2luYXRpb24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmb250LXNpemU6ICRzbS10ZXh0O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGEsXHJcbiAgICAuY3VycmVudCB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjb2xvcjogJGZvbnRzLWNvbG9yO1xyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhOmhvdmVyLFxyXG4gICAgLmN1cnJlbnQge1xyXG4gICAgICAgIG1pbi13aWR0aDogMzBweDtcclxuICAgICAgICBAZXh0ZW5kIC5iZy1wcmltYXJ5O1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuZGlzYWJsZWQge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKCRmb250cy1jb2xvciwgLjQpO1xyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/table/components/data-table/data-table.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/table/components/data-table/data-table.component.ts ***!
  \***************************************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tablesData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tablesData.service */ "./src/app/pages/table/components/data-table/tablesData.service.ts");



var DataTableComponent = /** @class */ (function () {
    function DataTableComponent(_tablesDataService) {
        this._tablesDataService = _tablesDataService;
        /* pagination Info */
        this.pageSize = 10;
        this.pageNumber = 1;
    }
    DataTableComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    DataTableComponent.prototype.loadData = function () {
        this.tableData = this._tablesDataService.DATA;
    };
    DataTableComponent.prototype.pageChanged = function (pN) {
        this.pageNumber = pN;
    };
    DataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-table',
            template: __webpack_require__(/*! ./data-table.component.html */ "./src/app/pages/table/components/data-table/data-table.component.html"),
            providers: [_tablesData_service__WEBPACK_IMPORTED_MODULE_2__["TablesDataService"]],
            styles: [__webpack_require__(/*! ./data-table.component.scss */ "./src/app/pages/table/components/data-table/data-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tablesData_service__WEBPACK_IMPORTED_MODULE_2__["TablesDataService"]])
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/pages/table/components/data-table/tablesData.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/table/components/data-table/tablesData.service.ts ***!
  \*************************************************************************/
/*! exports provided: TablesDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesDataService", function() { return TablesDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TablesDataService = /** @class */ (function () {
    function TablesDataService() {
        this.DATA = [
            {
                id: 1,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28'
            },
            {
                id: 2,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45'
            },
            {
                id: 3,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18'
            },
            {
                id: 4,
                firstName: 'John',
                lastName: 'Snow',
                username: '@snow',
                email: 'snow@gmail.com',
                age: '20'
            },
            {
                id: 5,
                firstName: 'Jack',
                lastName: 'Sparrow',
                username: '@jack',
                email: 'jack@yandex.ru',
                age: '30'
            },
            {
                id: 6,
                firstName: 'Ann',
                lastName: 'Smith',
                username: '@ann',
                email: 'ann@gmail.com',
                age: '21'
            },
            {
                id: 7,
                firstName: 'Barbara',
                lastName: 'Black',
                username: '@barbara',
                email: 'barbara@yandex.ru',
                age: '43'
            },
            {
                id: 8,
                firstName: 'Sevan',
                lastName: 'Bagrat',
                username: '@sevan',
                email: 'sevan@outlook.com',
                age: '13'
            },
            {
                id: 9,
                firstName: 'Ruben',
                lastName: 'Vardan',
                username: '@ruben',
                email: 'ruben@gmail.com',
                age: '22'
            },
            {
                id: 10,
                firstName: 'Karen',
                lastName: 'Sevan',
                username: '@karen',
                email: 'karen@yandex.ru',
                age: '33'
            },
            {
                id: 11,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mark',
                email: 'mark@gmail.com',
                age: '38'
            },
            {
                id: 12,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@jacob',
                email: 'jacob@yandex.ru',
                age: '48'
            },
            {
                id: 13,
                firstName: 'Haik',
                lastName: 'Hakob',
                username: '@haik',
                email: 'haik@outlook.com',
                age: '48'
            },
            {
                id: 14,
                firstName: 'Garegin',
                lastName: 'Jirair',
                username: '@garegin',
                email: 'garegin@gmail.com',
                age: '40'
            },
            {
                id: 15,
                firstName: 'Krikor',
                lastName: 'Bedros',
                username: '@krikor',
                email: 'krikor@yandex.ru',
                age: '32'
            }
        ];
    }
    TablesDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TablesDataService);
    return TablesDataService;
}());



/***/ }),

/***/ "./src/app/pages/table/table.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/table/table.component.ts ***!
  \************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TableComponent = /** @class */ (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: "<router-outlet></router-outlet>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/pages/table/table.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/table/table.module.ts ***!
  \*********************************************/
/*! exports provided: TableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return TableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _table_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table.routing */ "./src/app/pages/table/table.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table.component */ "./src/app/pages/table/table.component.ts");
/* harmony import */ var _components_basic_tables_basic_tables_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/basic-tables/basic-tables.component */ "./src/app/pages/table/components/basic-tables/basic-tables.component.ts");
/* harmony import */ var _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/data-table/data-table.component */ "./src/app/pages/table/components/data-table/data-table.component.ts");







/* components */



var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _table_routing__WEBPACK_IMPORTED_MODULE_3__["routing"]
            ],
            declarations: [
                _table_component__WEBPACK_IMPORTED_MODULE_7__["TableComponent"],
                _components_basic_tables_basic_tables_component__WEBPACK_IMPORTED_MODULE_8__["BasicTablesComponent"],
                _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_9__["DataTableComponent"]
            ]
        })
    ], TableModule);
    return TableModule;
}());



/***/ }),

/***/ "./src/app/pages/table/table.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/table/table.routing.ts ***!
  \**********************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.component */ "./src/app/pages/table/table.component.ts");
/* harmony import */ var _components_basic_tables_basic_tables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/basic-tables/basic-tables.component */ "./src/app/pages/table/components/basic-tables/basic-tables.component.ts");
/* harmony import */ var _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/data-table/data-table.component */ "./src/app/pages/table/components/data-table/data-table.component.ts");




var childRoutes = [
    {
        path: '',
        component: _table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"],
        children: [
            { path: '', redirectTo: 'default-tables', pathMatch: 'full' },
            { path: 'basic-tables', component: _components_basic_tables_basic_tables_component__WEBPACK_IMPORTED_MODULE_2__["BasicTablesComponent"] },
            { path: 'data-table', component: _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_3__["DataTableComponent"] },
        ]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(childRoutes);


/***/ })

}]);
//# sourceMappingURL=table-table-module.js.map
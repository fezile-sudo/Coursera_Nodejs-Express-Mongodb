"use strict";

module.exports = function (x, y, callback) {
  if (x <= 0 || y <= 0) setTimeout(function () {
    return callback(new Error("Rectangle dimensions should be greater than zero: l = " + x + ", and b = " + y), null);
  }, 2000);else setTimeout(function () {
    return callback(null, {
      perimeter: function perimeter() {
        return 2 * (x + y);
      },
      area: function area() {
        return x * y;
      }
    });
  }, 2000);
};
//# sourceMappingURL=rectangle.dev.js.map

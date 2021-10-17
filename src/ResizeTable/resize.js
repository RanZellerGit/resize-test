const tabSize = (id) => {
  var i,
    self,
    table = document.getElementById(id),
    header = table.rows[0],
    tableX = header.clientWidth,
    length = header.cells.length;

  for (i = 0; i < length; i++) {
    header.cells[i].onmousedown = function (event) {
      self = this;
      if (
        self.className === 'ant-table-cell ant-table-column-has-sorters' ||
        this.className ===
          'ant-table-cell ant-table-column-sort ant-table-column-has-sorters'
      ) {
        self.className = 'ant-table-cell 1';
      }
      let addOffset = self.className === 'ant-table-cell' ? 0 : 20;
      console.log(self);
      if (event.offsetX + addOffset > self.offsetWidth - 10) {
        self.mouseDown = true;
        self.oldX = event.x;
        self.oldWidth = self.offsetWidth;
      }
    };
    header.cells[i].onmousemove = function (event) {
      console.log(this.className);
      let addOffset =
        this.className === 'ant-table-cell ant-table-column-has-sorters' ||
        this.className ===
          'ant-table-cell ant-table-column-sort ant-table-column-has-sorters'
          ? 20
          : 0;
      if (event.offsetX + addOffset > this.offsetWidth - 10) {
        this.style.cursor = 'col-resize';
      } else {
        this.style.cursor = 'default';
      }
      if (self === undefined) {
        self = this;
      }
      if (self.mouseDown !== null && self.mouseDown === true) {
        self.style.cursor = 'default';
        if (self.oldWidth + (event.x - self.oldX) > 0) {
          self.width = self.oldWidth + (event.x - self.oldX);
        }
        self.style.width = self.width;
        table.style.width = tableX + (event.x - self.oldX) + 'px';
        self.style.cursor = 'col-resize';
      }
    };
    table.onmouseup = function () {
      if (self == undefined) {
        self = this;
      }
      self.mouseDown = false;
      self.style.cursor = 'default';
      tableX = header.clientWidth;
    };
  }
};

export default tabSize;

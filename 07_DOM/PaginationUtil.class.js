class PaginationUtil {
  constructor(arrayOfValues, countOnPage) {
    this.arrayOfValues = arrayOfValues;
    this.countOnPage = countOnPage;
  }

  pageCount() {
    return Math.round(this.arrayOfValues.length / this.countOnPage);
  }

  itemCount() {
    return this.arrayOfValues.length;
  }

  pageItemCount(numberOfPage) {
    if (this.pageCount() <= numberOfPage || numberOfPage < 0) return -1;
    return this.countOnPage * (numberOfPage + 1) > this.itemCount() ? this.itemCount() % this.countOnPage : this.countOnPage;
  }

  pageIndex(numberOfIndex) {
    if (numberOfIndex >= this.itemCount() || numberOfIndex < 0) return -1;
    return Math.floor(numberOfIndex / this.countOnPage);
  }
}

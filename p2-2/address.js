class Geo {
  constructor(lat, lng) {
    this.lat = lat;
    this.lng = lng;
  }
}

class Address {
  constructor(street, suite, city, zipcode, geo) {
    this.street = street;
    this.suite = suite;
    this.city = city;
    this.zipcode = zipcode;
    this.geo = new Geo(geo.lat, geo.lng);
  }
}
